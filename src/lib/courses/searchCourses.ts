import { courses } from "@/data/courses";
import type { Course } from "@/types/course";

/** Cards per results page: 6 rows of 3, as in the design. */
export const SEARCH_PAGE_SIZE = 18;
/** The design shows five result pages; the mock catalogue repeats to fill them. */
export const SEARCH_PAGE_COUNT = 5;

export interface SearchResult {
  key: string;
  course: Course;
}

// Static mock catalogue: the six sample courses repeated to fill a results page.
const catalogue: SearchResult[] = Array.from({ length: SEARCH_PAGE_SIZE }, (_, index) => {
  const course = courses[index % courses.length];
  return { key: `${course.id}-${index}`, course };
});

export function searchCourses(query: string): SearchResult[] {
  const term = query.trim().toLowerCase();
  if (!term) return catalogue;

  // One entry per course when searching, so a match isn't listed three times.
  return courses
    .filter(
      (course) =>
        course.title.toLowerCase().includes(term) ||
        course.creator.name.toLowerCase().includes(term),
    )
    .map((course) => ({ key: course.id, course }));
}
