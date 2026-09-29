import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { SocialLogin } from "./SocialLogin";

describe("SocialLogin", () => {
  it("renders disabled, labeled Facebook and Google buttons", () => {
    render(<SocialLogin />);
    expect(screen.getByRole("button", { name: /facebook/i })).toBeDisabled();
    expect(screen.getByRole("button", { name: /google/i })).toBeDisabled();
  });
});
