import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { partners } from "@/data/partners";
import { PartnerLogos } from "./PartnerLogos";

describe("PartnerLogos", () => {
  it("renders every partner logo", () => {
    render(<PartnerLogos />);
    expect(screen.getAllByRole("img", { name: "Logoipsum" })).toHaveLength(partners.length);
  });
});
