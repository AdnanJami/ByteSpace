import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { CategoryTabs } from "./CategoryTabs";

const tabs = [
  { id: "featured", label: "Featured" },
  { id: "music", label: "Music" },
  { id: "crafts", label: "Crafts" },
];

describe("CategoryTabs", () => {
  it("marks the active tab as selected", () => {
    render(<CategoryTabs tabs={tabs} value="music" onChange={() => {}} />);
    expect(screen.getByRole("tab", { name: "Music" })).toHaveAttribute(
      "aria-selected",
      "true",
    );
    expect(screen.getByRole("tab", { name: "Featured" })).toHaveAttribute(
      "aria-selected",
      "false",
    );
  });

  it("calls onChange when a tab is clicked", async () => {
    const onChange = vi.fn();
    render(<CategoryTabs tabs={tabs} value="featured" onChange={onChange} />);
    await userEvent.click(screen.getByRole("tab", { name: "Crafts" }));
    expect(onChange).toHaveBeenCalledWith("crafts");
  });

  it("moves selection with arrow keys", async () => {
    const onChange = vi.fn();
    render(<CategoryTabs tabs={tabs} value="featured" onChange={onChange} />);
    screen.getByRole("tab", { name: "Featured" }).focus();
    await userEvent.keyboard("{ArrowRight}");
    expect(onChange).toHaveBeenCalledWith("music");
  });
});
