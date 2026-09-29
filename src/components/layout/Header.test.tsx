import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("Header", () => {
  it("renders the primary nav links", () => {
    render(<Header />);
    const nav = screen.getByRole("navigation", { name: /primary/i });
    expect(nav).toHaveTextContent("Home");
    expect(nav).toHaveTextContent("Courses");
    expect(nav).toHaveTextContent("Creators");
  });

  it("renders auth links", () => {
    render(<Header />);
    expect(screen.getByRole("link", { name: /sign in/i })).toHaveAttribute("href", "/login");
    expect(screen.getByRole("link", { name: /join us/i })).toHaveAttribute("href", "/signup");
  });

  it("mobile menu is closed by default and opens on click", async () => {
    const { container } = render(<Header />);
    expect(container.querySelector("#mobile-nav")).not.toBeInTheDocument();

    const toggle = screen.getByRole("button", { name: /open menu/i });
    expect(toggle).toHaveAttribute("aria-expanded", "false");

    await userEvent.click(toggle);

    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByRole("button", { name: /close menu/i })).toBeInTheDocument();
    expect(container.querySelector("#mobile-nav")).toBeInTheDocument();
  });

  it("closes the mobile menu on Escape", async () => {
    const { container } = render(<Header />);
    await userEvent.click(screen.getByRole("button", { name: /open menu/i }));
    expect(container.querySelector("#mobile-nav")).toBeInTheDocument();

    await userEvent.keyboard("{Escape}");

    expect(container.querySelector("#mobile-nav")).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: /open menu/i })).toBeInTheDocument();
  });
});
