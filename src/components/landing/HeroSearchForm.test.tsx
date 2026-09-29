import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import type { ComponentProps } from "react";
import { describe, expect, it, vi } from "vitest";
import { HeroSearchForm } from "./HeroSearchForm";

vi.mock("next/form", () => ({
  default: ({ action, ...props }: ComponentProps<"form"> & { action: string }) => (
    <form action={action} {...props} />
  ),
}));

describe("HeroSearchForm", () => {
  it("lets the user type a query", async () => {
    render(<HeroSearchForm />);
    const input = screen.getByLabelText(/course, topic, creator/i);
    await userEvent.type(input, "figma");
    expect(input).toHaveValue("figma");
  });

  it("submits the query to the course search page as ?q=", () => {
    render(<HeroSearchForm />);
    const form = screen.getByRole("search", { name: /search courses/i });
    expect(form).toHaveAttribute("action", "/courses");
    expect(screen.getByLabelText(/course, topic, creator/i)).toHaveAttribute("name", "q");
  });
});
