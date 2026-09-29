import { describe, expect, it } from "vitest";
import { safeRedirectPath } from "./safeRedirectPath";
import { decodeSession, encodeSession } from "./sessionCookie";

describe("session cookie", () => {
  it("round-trips the signed-in user", () => {
    const user = { name: "Jamie Davis", email: "jamie@example.com" };
    expect(decodeSession(encodeSession(user))).toEqual(user);
  });

  it("treats a missing or tampered cookie as signed out", () => {
    expect(decodeSession(undefined)).toBeNull();
    expect(decodeSession("demo-session")).toBeNull();
    expect(decodeSession(Buffer.from('{"name":"x"}').toString("base64url"))).toBeNull();
  });
});

describe("safeRedirectPath", () => {
  it("keeps same-site paths", () => {
    expect(safeRedirectPath("/courses?page=2")).toBe("/courses?page=2");
  });

  it("falls back for missing or off-site targets", () => {
    expect(safeRedirectPath(undefined)).toBe("/");
    expect(safeRedirectPath("https://evil.example")).toBe("/");
    expect(safeRedirectPath("//evil.example")).toBe("/");
    expect(safeRedirectPath("/\\evil.example")).toBe("/");
  });
});
