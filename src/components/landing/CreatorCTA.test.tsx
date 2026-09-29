import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CreatorCTA } from "./CreatorCTA";

describe("CreatorCTA", () => {
  it("renders the heading and a link to sign up", () => {
    render(<CreatorCTA />);
    expect(
      screen.getByRole("heading", { name: /unlock your potential as a creator/i }),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /join as creator/i })).toHaveAttribute(
      "href",
      "/signup",
    );
  });
});
