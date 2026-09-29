import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { footerLinkGroups } from "@/data/footer";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders every link group heading", () => {
    render(<Footer />);
    for (const group of footerLinkGroups) {
      expect(screen.getByText(group.title)).toBeInTheDocument();
    }
  });

  it("renders the current year in the copyright line", () => {
    render(<Footer />);
    expect(
      screen.getByText(new RegExp(`${new Date().getFullYear()} ByteSpace`)),
    ).toBeInTheDocument();
  });

  it("includes the newsletter form", async () => {
    render(<Footer />);
    // NewsletterForm is next/dynamic (kept out of the critical bundle), so it
    // resolves asynchronously even here.
    expect(await screen.findByRole("button", { name: /subscribe/i })).toBeInTheDocument();
  });
});
