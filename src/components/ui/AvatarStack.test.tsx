import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { AvatarStack } from "./AvatarStack";

const avatars = [
  { src: "/images/a.png", alt: "" },
  { src: "/images/b.png", alt: "" },
  { src: "/images/c.png", alt: "" },
];

describe("AvatarStack", () => {
  it("renders one image per avatar", () => {
    const { container } = render(
      <AvatarStack avatars={avatars} groupLabel="3 enrolled students" />,
    );
    expect(container.querySelectorAll("img")).toHaveLength(3);
  });

  it("exposes a single accessible group label instead of per-avatar noise", () => {
    render(<AvatarStack avatars={avatars} groupLabel="3 enrolled students" />);
    expect(screen.getByRole("img", { name: "3 enrolled students" })).toBeInTheDocument();
  });

  it("shows the overflow bubble when moreLabel is provided", () => {
    render(
      <AvatarStack avatars={avatars} moreLabel="2K+" groupLabel="2,000+ happy students" />,
    );
    expect(screen.getByText("2K+")).toBeInTheDocument();
  });

  it("omits the overflow bubble when moreLabel is not provided", () => {
    render(<AvatarStack avatars={avatars} groupLabel="3 enrolled students" />);
    expect(screen.queryByText(/\+$/)).not.toBeInTheDocument();
  });
});
