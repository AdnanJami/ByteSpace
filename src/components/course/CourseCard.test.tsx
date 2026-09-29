import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import type { Course } from "@/types/course";
import { CourseCard } from "./CourseCard";

const course: Course = {
  id: "c1",
  slug: "learn-figma-from-basic",
  title: "Learn Figma from Basic",
  thumbnail: "/images/courses/course-thumb-1.png",
  category: "ui-ux-design",
  level: "Beginner",
  durationLabel: "2 hours 16 mins",
  lessonCount: 17,
  commentCount: 59,
  creator: { name: "purepearl studio", avatar: "" },
  enrolledAvatars: [
    "/images/courses/course-avatar-1.png",
    "/images/courses/course-avatar-2.png",
  ],
  enrolledCountLabel: "26+",
  price: 25,
  currency: "$",
  priceUnit: "/lifetime",
  rating: 4.5,
};

describe("CourseCard", () => {
  it("renders the course title, creator, price and level", () => {
    render(<CourseCard course={course} />);
    expect(screen.getByRole("heading", { name: course.title })).toBeInTheDocument();
    expect(screen.getByText("purepearl studio")).toBeInTheDocument();
    expect(screen.getByText("$25")).toBeInTheDocument();
    expect(screen.getByText("/lifetime")).toBeInTheDocument();
    expect(screen.getByText("Beginner")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
  });

  it("links to the course detail page", () => {
    render(<CourseCard course={course} />);
    expect(screen.getByRole("link")).toHaveAttribute(
      "href",
      "/courses/learn-figma-from-basic",
    );
  });

  it("shows the enrolled-students overflow badge", () => {
    render(<CourseCard course={course} />);
    expect(screen.getByText("26+")).toBeInTheDocument();
  });
});
