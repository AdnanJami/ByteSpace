import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Pagination } from "./Pagination";

const hrefForPage = (page: number) => `/courses?page=${page}`;

describe("Pagination", () => {
  it("links every page and marks the current one", () => {
    render(<Pagination currentPage={2} pageCount={5} hrefForPage={hrefForPage} />);
    for (let page = 1; page <= 5; page++) {
      expect(screen.getByRole("link", { name: `Page ${page}` })).toHaveAttribute(
        "href",
        `/courses?page=${page}`,
      );
    }
    expect(screen.getByRole("link", { name: "Page 2" })).toHaveAttribute("aria-current", "page");
  });

  it("links previous and next pages", () => {
    render(<Pagination currentPage={3} pageCount={5} hrefForPage={hrefForPage} />);
    expect(screen.getByRole("link", { name: /previous page/i })).toHaveAttribute("href", "/courses?page=2");
    expect(screen.getByRole("link", { name: /next page/i })).toHaveAttribute("href", "/courses?page=4");
  });

  it("disables previous on the first page and next on the last", () => {
    const { rerender } = render(
      <Pagination currentPage={1} pageCount={5} hrefForPage={hrefForPage} />,
    );
    expect(screen.getByRole("link", { name: /previous page/i })).toHaveAttribute("aria-disabled", "true");

    rerender(<Pagination currentPage={5} pageCount={5} hrefForPage={hrefForPage} />);
    expect(screen.getByRole("link", { name: /next page/i })).toHaveAttribute("aria-disabled", "true");
  });
});
