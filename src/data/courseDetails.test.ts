import { describe, expect, it } from "vitest";
import { courses } from "./courses";
import { courseSlugs, getCourseDetail } from "./courseDetails";

describe("getCourseDetail", () => {
  it("returns the design's copy for Build Digital Asset", () => {
    const detail = getCourseDetail("build-digital-asset");
    expect(detail?.heading).toBe("Build Digital Asset: A Comprehensive Guide");
    expect(detail?.level).toBe("Intermediate");
    expect(detail?.reviews.items).toHaveLength(4);
  });

  it("gives every catalogue course a detail page, headed by its own title", () => {
    expect(courseSlugs).toHaveLength(courses.length);
    const figma = getCourseDetail("learn-figma-from-basic");
    expect(figma?.heading).toBe("Learn Figma from Basic");
    expect(figma?.course.slug).toBe("learn-figma-from-basic");
  });

  it("returns null for an unknown course", () => {
    expect(getCourseDetail("no-such-course")).toBeNull();
  });
});
