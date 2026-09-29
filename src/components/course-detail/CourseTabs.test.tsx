import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { StarRow } from "@/components/ui/StarRow";
import { CourseTabs } from "./CourseTabs";
import { ReviewFilterChips } from "./ReviewFilterChips";

let pathname = "/courses/build-digital-asset";
vi.mock("next/navigation", () => ({ usePathname: () => pathname }));

describe("CourseTabs", () => {
  beforeEach(() => {
    pathname = "/courses/build-digital-asset";
  });

  it("links each tab to its own page", () => {
    render(<CourseTabs slug="build-digital-asset" />);
    expect(screen.getByRole("link", { name: "About" })).toHaveAttribute("href", "/courses/build-digital-asset");
    expect(screen.getByRole("link", { name: "Lessons" })).toHaveAttribute(
      "href",
      "/courses/build-digital-asset/lessons",
    );
    expect(screen.getByRole("link", { name: "Reviews" })).toHaveAttribute(
      "href",
      "/courses/build-digital-asset/reviews",
    );
  });

  it("marks the tab for the current page", () => {
    pathname = "/courses/build-digital-asset/reviews";
    render(<CourseTabs slug="build-digital-asset" />);
    expect(screen.getByRole("link", { name: "Reviews" })).toHaveAttribute("aria-current", "page");
    expect(screen.getByRole("link", { name: "About" })).not.toHaveAttribute("aria-current");
  });
});

describe("ReviewFilterChips", () => {
  it("starts on All rating and moves the highlight when a chip is picked", async () => {
    render(<ReviewFilterChips />);
    expect(screen.getByRole("button", { name: "All rating" })).toHaveAttribute("aria-pressed", "true");

    await userEvent.click(screen.getByRole("button", { name: "4 stars" }));

    expect(screen.getByRole("button", { name: "4 stars" })).toHaveAttribute("aria-pressed", "true");
    expect(screen.getByRole("button", { name: "All rating" })).toHaveAttribute("aria-pressed", "false");
  });
});

describe("StarRow", () => {
  it("draws the requested number of stars behind one accessible label", () => {
    const { container } = render(<StarRow label="Rated 3 out of 5" count={3} />);
    expect(screen.getByRole("img", { name: "Rated 3 out of 5" })).toBeInTheDocument();
    expect(container.querySelectorAll("svg")).toHaveLength(3);
  });
});
