"use client";

import { useQuery } from "@tanstack/react-query";
import { getCourses } from "@/lib/api/courses";
import { EmptyState } from "@/components/ui/EmptyState";
import { ErrorState } from "@/components/ui/ErrorState";
import { CourseCard } from "./CourseCard";
import { CourseCardSkeleton } from "./CourseCardSkeleton";

export interface CourseGridProps {
  categoryId: string;
  id?: string;
}

export function CourseGrid({ categoryId, id }: CourseGridProps) {
  const { data, isPending, isError, refetch } = useQuery({
    queryKey: ["courses"],
    queryFn: getCourses,
  });

  if (isPending) {
    return (
      <div
        id={id}
        role="tabpanel"
        aria-label="Courses"
        className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {Array.from({ length: 6 }, (_, i) => (
          <CourseCardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (isError) {
    return (
      <div id={id} role="tabpanel" aria-label="Courses">
        <ErrorState
          message="We couldn't load courses right now."
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  const courses = data.filter(
    (course) => categoryId === "featured" || course.category === categoryId,
  );

  if (courses.length === 0) {
    return (
      <div id={id} role="tabpanel" aria-label="Courses">
        <EmptyState
          title="No courses in this category yet"
          description="Try a different category, or check back soon."
        />
      </div>
    );
  }

  return (
    <div
      id={id}
      role="tabpanel"
      aria-label="Courses"
      className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3"
    >
      {courses.map((course) => (
        <CourseCard key={course.id} course={course} />
      ))}
    </div>
  );
}
