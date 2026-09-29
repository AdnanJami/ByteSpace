import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { http, HttpResponse } from "msw";
import { describe, expect, it } from "vitest";
import { server } from "@/test/mocks/server";
import { NewsletterForm } from "./NewsletterForm";

describe("NewsletterForm", () => {
  it("shows a validation error for an empty email", async () => {
    render(<NewsletterForm />);
    await userEvent.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent(/email is required/i);
  });

  it("shows a validation error for a malformed email", async () => {
    render(<NewsletterForm />);
    await userEvent.type(screen.getByLabelText(/email address/i), "not-an-email");
    await userEvent.click(screen.getByRole("button", { name: /subscribe/i }));
    expect(await screen.findByRole("alert")).toHaveTextContent(/valid email/i);
  });

  it("shows a success message after subscribing", async () => {
    render(<NewsletterForm />);
    await userEvent.type(screen.getByLabelText(/email address/i), "reader@example.com");
    await userEvent.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(await screen.findByRole("status")).toHaveTextContent(/thanks for subscribing/i);
    expect(screen.queryByRole("button", { name: /subscribe/i })).not.toBeInTheDocument();
  });

  it("shows a server error and keeps the form when the request fails", async () => {
    server.use(
      http.post("*/api/newsletter", () =>
        HttpResponse.json({ message: "Server error" }, { status: 500 }),
      ),
    );
    render(<NewsletterForm />);
    await userEvent.type(screen.getByLabelText(/email address/i), "reader@example.com");
    await userEvent.click(screen.getByRole("button", { name: /subscribe/i }));

    expect(await screen.findByRole("alert")).toHaveTextContent(/server error/i);
    expect(screen.getByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });
});
