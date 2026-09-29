import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { http, HttpResponse } from "msw";
import { describe, expect, it } from "vitest";
import { server } from "@/test/mocks/server";
import { courses } from "@/data/courses";
import { CourseGrid } from "./CourseGrid";

function renderWithClient(ui: React.ReactElement) {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
}

describe("CourseGrid", () => {
  it("shows a loading skeleton, then renders course cards", async () => {
    renderWithClient(<CourseGrid categoryId="featured" />);

    expect(screen.getAllByRole("presentation").length).toBeGreaterThan(0);

    expect(
      await screen.findByRole("heading", { name: courses[0].title }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("link")).toHaveLength(courses.length);
  });

  it("shows an error state with retry on failure", async () => {
    server.use(
      http.get("*/api/courses", () =>
        HttpResponse.json({ message: "Server error" }, { status: 500 }),
      ),
    );
    renderWithClient(<CourseGrid categoryId="featured" />);

    expect(await screen.findByRole("alert")).toHaveTextContent(
      /couldn't load courses/i,
    );
    expect(screen.getByRole("button", { name: /try again/i })).toBeInTheDocument();
  });

  it("retries the request when Try again is clicked", async () => {
    let calls = 0;
    server.use(
      http.get("*/api/courses", () => {
        calls += 1;
        if (calls === 1) {
          return HttpResponse.json({ message: "Server error" }, { status: 500 });
        }
        return HttpResponse.json(courses);
      }),
    );
    renderWithClient(<CourseGrid categoryId="featured" />);

    await screen.findByRole("alert");
    await userEvent.click(screen.getByRole("button", { name: /try again/i }));

    expect(
      await screen.findByRole("heading", { name: courses[0].title }),
    ).toBeInTheDocument();
  });

  it("shows an empty state when no course matches the category", async () => {
    renderWithClient(<CourseGrid categoryId="music" />);
    expect(await screen.findByText(/no courses in this category/i)).toBeInTheDocument();
  });
});
