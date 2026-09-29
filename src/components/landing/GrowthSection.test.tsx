import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { GrowthSection } from "./GrowthSection";

describe("GrowthSection", () => {
  it("renders the growth stats heading and numbers", () => {
    render(<GrowthSection />);
    expect(
      screen.getByRole("heading", { name: /your path to professional growth/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("12K")).toBeInTheDocument();
    expect(screen.getByText("70+")).toBeInTheDocument();
    expect(screen.getByText("16")).toBeInTheDocument();
  });

  it("renders the creator tools heading and benefit checklist", () => {
    render(<GrowthSection />);
    expect(
      screen.getByRole("heading", { name: /create & manage courses easily/i }),
    ).toBeInTheDocument();
    expect(screen.getByText("Share Your Expertise")).toBeInTheDocument();
    expect(screen.getByText("Monetize Your Passion")).toBeInTheDocument();
    expect(screen.getByText("Flexibility and Autonomy")).toBeInTheDocument();
    expect(screen.getByText("Build a Community")).toBeInTheDocument();
  });
});
