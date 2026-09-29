import { describe, expect, it } from "vitest";
import { getCourseDetail } from "./courseDetails";
import { courses } from "./courses";
import { creators, getCreator, getCreatorCourses, searchCreators } from "./creators";

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

describe("searchCreators", () => {
  it("lists every creator for an empty query", () => {
    expect(searchCreators("")).toHaveLength(creators.length);
  });

  it("matches names and taglines case-insensitively", () => {
    expect(searchCreators("MOTION").map((c) => c.slug)).toEqual(["motion-muse"]);
    expect(searchCreators("cooking").map((c) => c.slug)).toEqual(["byte-kitchen"]);
  });

  it("returns nothing when no creator matches", () => {
    expect(searchCreators("zzz")).toEqual([]);
  });
});
