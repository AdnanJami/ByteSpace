import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { categoryIcons } from "@/data/categoryIcons";
import { CategoriesGrid } from "./CategoriesGrid";

describe("CategoriesGrid", () => {
  it("renders a link for every category", () => {
    render(<CategoriesGrid />);
    for (const category of categoryIcons) {
      const link = screen.getByRole("link", { name: category.label });
      expect(link).toHaveAttribute("href", `/courses?category=${category.icon}`);
    }
  });
});
