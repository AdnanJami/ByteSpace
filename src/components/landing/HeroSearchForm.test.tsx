import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { HeroSearchForm } from "./HeroSearchForm";

describe("HeroSearchForm", () => {
  it("lets the user type a query", async () => {
    render(<HeroSearchForm />);
    const input = screen.getByLabelText(/course, topic, creator/i);
    await userEvent.type(input, "figma");
    expect(input).toHaveValue("figma");
  });

  it("does not navigate on submit and announces the result", async () => {
    render(<HeroSearchForm />);
    await userEvent.type(screen.getByLabelText(/course, topic, creator/i), "figma");
    await userEvent.click(screen.getByRole("button", { name: /search/i }));

    expect(await screen.findByText(/searching for "figma"/i)).toBeInTheDocument();
  });

  it("prompts for a term when submitted empty", async () => {
    render(<HeroSearchForm />);
    await userEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(await screen.findByText(/enter a search term first/i)).toBeInTheDocument();
  });
});
