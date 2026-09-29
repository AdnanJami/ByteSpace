import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders its children", () => {
    render(<Button>Search</Button>);
    expect(screen.getByRole("button", { name: "Search" })).toBeInTheDocument();
  });

  it("calls onClick when clicked", async () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Search</Button>);
    await userEvent.click(screen.getByRole("button", { name: "Search" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("is disabled and does not fire onClick while loading", async () => {
    const onClick = vi.fn();
    render(
      <Button loading onClick={onClick}>
        Search
      </Button>,
    );
    const button = screen.getByRole("button", { name: "Search" });
    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("aria-busy", "true");
    await userEvent.click(button);
    expect(onClick).not.toHaveBeenCalled();
  });

  it("respects an explicit disabled prop", () => {
    render(<Button disabled>Search</Button>);
    expect(screen.getByRole("button", { name: "Search" })).toBeDisabled();
  });
});
