import type { Metadata } from "next";
import Link from "next/link";
import { CourseCard } from "@/components/course/CourseCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SearchCategoryTabs } from "@/components/search/SearchCategoryTabs";
import { SearchHero } from "@/components/search/SearchHero";
import { SearchToolbar } from "@/components/search/SearchToolbar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Pagination } from "@/components/ui/Pagination";
import { SEARCH_PAGE_COUNT, searchCourses } from "@/lib/courses/searchCourses";

export const metadata: Metadata = {
  title: "Find Your Next Course — ByteSpace",
  description: "Search ByteSpace courses by topic, title or creator.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  return Array.isArray(value) ? value[0] : value;
}

export default async function CoursesPage({ searchParams }: PageProps<"/courses">) {
  const params = await searchParams;
  const query = firstParam(params.q)?.trim() ?? "";
  const requestedPage = Number(firstParam(params.page));
  const currentPage =
    Number.isInteger(requestedPage) && requestedPage >= 1 && requestedPage <= SEARCH_PAGE_COUNT
      ? requestedPage
      : 1;

  const results = searchCourses(query);
  const panelId = "course-results";

  return (
    <>
      <Header />
      <main>
        <SearchHero defaultQuery={query} />

        <div className="mx-auto flex max-w-[1200px] flex-col px-5 pb-16 pt-12 sm:px-10 lg:px-0 lg:pb-[72px] lg:pt-[72px]">
          <SearchToolbar />

          <div className="mt-8">
            <SearchCategoryTabs panelId={panelId} />
          </div>

          <section id={panelId} aria-label="Courses" className="mt-12 lg:mt-[77px]">
            {query && (
              <p aria-live="polite" className="mb-6 text-body-m text-gray-700">
                {results.length === 0
                  ? `No courses match “${query}”.`
                  : `${results.length} ${results.length === 1 ? "course matches" : "courses match"} “${query}”.`}
              </p>
            )}

            {results.length === 0 ? (
              <EmptyState
                title="No courses found"
                description="Try a different title or creator name."
                action={
                  <Link href="/courses" className="text-label-m text-primary hover:underline">
                    Clear search
                  </Link>
                }
              />
            ) : (
              <ul className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
                {results.map(({ key, course }) => (
                  <li key={key} className="flex w-full justify-center">
                    <CourseCard course={course} />
                  </li>
                ))}
              </ul>
            )}
          </section>

          {!query && (
            <Pagination
              // the design places the pager 24.5px right of centre on desktop
              className="mt-12 lg:mt-[72px] lg:pl-[49px]"
              currentPage={currentPage}
              pageCount={SEARCH_PAGE_COUNT}
              hrefForPage={(page) => (page === 1 ? "/courses" : `/courses?page=${page}`)}
            />
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
