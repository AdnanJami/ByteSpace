"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { useState } from "react";
import { CategoryTabs } from "@/components/course/CategoryTabs";
import { CourseCardSkeleton } from "@/components/course/CourseCardSkeleton";
import { categoryTabs, defaultCategoryTabId } from "@/data/categoryTabs";

// Keeps @tanstack/react-query out of the critical hydration bundle.
const CourseGrid = dynamic(
  () => import("@/components/course/CourseGrid").then((mod) => mod.CourseGrid),
  {
    loading: () => (
      <div className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }, (_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    ),
  },
);

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState(defaultCategoryTabId);

  return (
    <section id="courses" className="scroll-mt-20 bg-white py-16 lg:scroll-mt-[120px] lg:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 sm:px-10 lg:px-0">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-heading-s text-vulcan-950 sm:text-display-xs lg:text-heading-m">
            Discover Your Passion, Build Your Skills
          </h2>
          <p className="max-w-[917px] text-body-m text-gray-700 lg:text-body-l">
            At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a
            variety of courses across different fields, from technology to the arts, and make a
            difference in your career and life.
          </p>
        </div>

        <div className="flex w-full flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <CategoryTabs
            tabs={categoryTabs}
            value={activeCategory}
            onChange={setActiveCategory}
            panelId="course-grid-panel"
          />
          <Link
            href="/courses"
            className="shrink-0 self-start text-label-m text-primary hover:underline"
          >
            + More
          </Link>
        </div>

        <CourseGrid categoryId={activeCategory} id="course-grid-panel" />
      </div>
    </section>
  );
}
