import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { LoginForm } from "./LoginForm";

const push = vi.fn();
const refresh = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push, refresh }),
}));

describe("LoginForm", () => {
  it("shows validation errors for empty fields", async () => {
    render(<LoginForm />);
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(await screen.findByText(/email is required/i)).toBeInTheDocument();
    expect(screen.getByText(/password is required/i)).toBeInTheDocument();
    expect(push).not.toHaveBeenCalled();
  });

  it("shows a server error for wrong credentials and does not redirect", async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/email/i), "wrong@example.com");
    await userEvent.type(screen.getByLabelText(/password/i), "wrongpass");
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(
      /incorrect email or password/i,
    );
    expect(push).not.toHaveBeenCalled();
  });

  it("redirects on success with the demo credentials", async () => {
    render(<LoginForm />);
    await userEvent.type(screen.getByLabelText(/email/i), "demo@bytespace.com");
    await userEvent.type(screen.getByLabelText(/password/i), "password123");
    await userEvent.click(screen.getByRole("button", { name: /sign in/i }));

    await vi.waitFor(() => expect(push).toHaveBeenCalledWith("/"));
  });
});
