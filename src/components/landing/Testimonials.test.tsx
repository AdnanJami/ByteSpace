import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { testimonials } from "@/data/testimonials";
import { Testimonials } from "./Testimonials";

describe("Testimonials", () => {
  it("renders every testimonial's name, role and quote", () => {
    render(<Testimonials />);
    for (const testimonial of testimonials) {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(screen.getByText(testimonial.role)).toBeInTheDocument();
      expect(screen.getByText(new RegExp(testimonial.quote.slice(0, 30)))).toBeInTheDocument();
    }
  });
});
