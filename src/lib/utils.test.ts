import { describe, expect, it } from "vitest";
import { cn } from "./utils";

describe("cn", () => {
  it("keeps a custom font size alongside a text colour", () => {
    expect(cn("text-label-m", "text-ink")).toBe("text-label-m text-ink");
  });

  it("lets a later font size override an earlier one", () => {
    expect(cn("text-label-m text-ink", "text-label-l")).toBe("text-ink text-label-l");
  });

  it("still merges conflicting colours", () => {
    expect(cn("text-ink", "text-primary")).toBe("text-primary");
  });
});
