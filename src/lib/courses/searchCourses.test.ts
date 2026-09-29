import { describe, expect, it } from "vitest";
import { SEARCH_PAGE_SIZE, searchCourses } from "./searchCourses";

describe("searchCourses", () => {
  it("returns a full page of results for an empty query", () => {
    const results = searchCourses("  ");
    expect(results).toHaveLength(SEARCH_PAGE_SIZE);
    expect(new Set(results.map((r) => r.key)).size).toBe(SEARCH_PAGE_SIZE);
  });

  it("matches titles case-insensitively, once per course", () => {
    const results = searchCourses("FIGMA");
    expect(results.map((r) => r.course.title)).toEqual(["Learn Figma from Basic"]);
  });

  it("matches creator names", () => {
    expect(searchCourses("purepearl").length).toBeGreaterThan(0);
  });

  it("returns nothing when no course matches", () => {
    expect(searchCourses("underwater basket weaving")).toEqual([]);
  });
});
