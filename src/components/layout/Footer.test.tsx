import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { footerLinkColumns, legalLinks } from "@/data/footer";
import { Footer } from "./Footer";

describe("Footer", () => {
  it("renders every footer and legal link", () => {
    render(<Footer />);
    for (const link of [...footerLinkColumns.flat(), ...legalLinks]) {
      expect(screen.getByRole("link", { name: link.label })).toHaveAttribute("href", link.href);
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
