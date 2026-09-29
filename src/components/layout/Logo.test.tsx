import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("links to the homepage", () => {
    render(<Logo />);
    expect(screen.getByRole("link", { name: /bytespace/i })).toHaveAttribute("href", "/");
  });

  it("renders the ByteSpace wordmark", () => {
    render(<Logo />);
    expect(screen.getByText("ByteSpace")).toBeInTheDocument();
  });
});
