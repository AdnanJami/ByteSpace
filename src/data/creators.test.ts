import { describe, expect, it } from "vitest";
import { getCourseDetail } from "./courseDetails";
import { courses } from "./courses";
import { getCreator, getCreatorCourses } from "./creators";

describe("creators", () => {
  it("finds PurePearl Studio and lists their courses", () => {
    const creator = getCreator("purepearl-studio");
    expect(creator?.name).toBe("PurePearl Studio");
    expect(creator && getCreatorCourses(creator)).toHaveLength(courses.length);
  });

  it("returns null for an unknown creator", () => {
    expect(getCreator("nobody")).toBeNull();
  });

  it("is the creator every course page links to", () => {
    const slug = getCourseDetail("build-digital-asset")?.creator.slug;
    expect(slug && getCreator(slug)).not.toBeNull();
  });
});
