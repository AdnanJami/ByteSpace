import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { describe, expect, it } from "vitest";
import { CoursesSection } from "./CoursesSection";

function renderSection() {
  const queryClient = new QueryClient({ defaultOptions: { queries: { retry: false } } });
  return render(
    <QueryClientProvider client={queryClient}>
      <CoursesSection />
    </QueryClientProvider>,
  );
}

describe("CoursesSection", () => {
  it("shows all courses under Featured by default", async () => {
    renderSection();
    expect(await screen.findByText("Learn Figma from Basic")).toBeInTheDocument();
    expect(screen.getByText("From Idea to Startup Success")).toBeInTheDocument();
  });

  it("filters the grid when a different category tab is selected", async () => {
    renderSection();
    await screen.findByText("Learn Figma from Basic");

    await userEvent.click(screen.getByRole("tab", { name: "Music" }));

    expect(await screen.findByText(/no courses in this category/i)).toBeInTheDocument();
    expect(screen.queryByText("Learn Figma from Basic")).not.toBeInTheDocument();
  });
});
