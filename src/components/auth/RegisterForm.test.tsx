import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { describe, expect, it, vi } from "vitest";
import { server } from "@/test/mocks/server";
import { RegisterForm } from "./RegisterForm";

const push = vi.fn();
const refresh = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, refresh }),
}));

describe("RegisterForm", () => {
  it("shows validation errors for invalid input", async () => {
    render(<RegisterForm />);
    await userEvent.type(screen.getByLabelText(/full name/i), "J");
    await userEvent.type(screen.getByLabelText(/email/i), "not-an-email");
    await userEvent.type(screen.getByLabelText(/password/i), "short");
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByText(/enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/valid email/i)).toBeInTheDocument();
    expect(screen.getByText(/at least 8 characters/i)).toBeInTheDocument();
    expect(push).not.toHaveBeenCalled();
  });

  it("redirects home on successful registration", async () => {
    render(<RegisterForm />);
    await userEvent.type(screen.getByLabelText(/full name/i), "Jamie Davis");
    await userEvent.type(screen.getByLabelText(/email/i), "jamie@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "supersecret");
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    await vi.waitFor(() => expect(push).toHaveBeenCalledWith("/"));
  });

  it("shows a server error and stays on the page when registration fails", async () => {
    server.use(
      http.post("*/api/auth/register", () =>
        HttpResponse.json({ message: "Email already in use" }, { status: 409 }),
      ),
    );
    render(<RegisterForm />);
    await userEvent.type(screen.getByLabelText(/full name/i), "Jamie Davis");
    await userEvent.type(screen.getByLabelText(/email/i), "jamie@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "supersecret");
    await userEvent.click(screen.getByRole("button", { name: /continue/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/email already in use/i);
    expect(push).not.toHaveBeenCalled();
  });
});
