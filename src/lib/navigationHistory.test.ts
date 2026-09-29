import { describe, expect, it, vi } from "vitest";

async function freshHistory() {
  vi.resetModules();
  return import("./navigationHistory");
}

describe("navigationHistory", () => {
  it("treats tab switches within one course as the same page", async () => {
    const { isSameCourseTabSwitch } = await freshHistory();
    expect(isSameCourseTabSwitch("/courses/build-digital-asset", "/courses/build-digital-asset/reviews")).toBe(true);
    expect(isSameCourseTabSwitch("/courses/build-digital-asset/lessons", "/courses/learn-figma-from-basic")).toBe(false);
    expect(isSameCourseTabSwitch("/courses", "/courses/build-digital-asset")).toBe(false);
    expect(isSameCourseTabSwitch("/creators/purepearl-studio", "/courses/build-digital-asset")).toBe(false);
  });

  it("reports a Back/Forward navigation exactly once", async () => {
    const { consumePopNavigation } = await freshHistory();
    expect(consumePopNavigation()).toBe(false);
    window.dispatchEvent(new PopStateEvent("popstate"));
    expect(consumePopNavigation()).toBe(true);
    expect(consumePopNavigation()).toBe(false);
  });
});
