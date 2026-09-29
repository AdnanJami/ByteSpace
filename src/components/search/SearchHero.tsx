import Form from "next/form";
import { ChevronDownIcon } from "@/components/ui/icons/ChevronDownIcon";
import { SearchIcon } from "@/components/ui/icons/SearchIcon";
import { gridBackgroundStyle } from "@/lib/gridBackground";

export interface SearchHeroProps {
  defaultQuery?: string;
}

export function SearchHero({ defaultQuery = "" }: SearchHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div aria-hidden="true" className="absolute inset-0" style={gridBackgroundStyle} />

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-8 px-5 py-12 sm:px-10 lg:h-[240px] lg:gap-9 lg:px-0 lg:pb-0 lg:pt-[39px]">
        <h1 className="text-center text-heading-s text-white sm:text-display-xs sm:font-semibold">
          Find Your Next Course
        </h1>

        <Form
          action="/courses"
          role="search"
          aria-label="Search courses"
          className="flex w-full max-w-[624px] flex-col items-stretch gap-3 sm:flex-row sm:items-start sm:gap-4"
        >
          <label htmlFor="course-search" className="sr-only">
            Search courses
          </label>
          <div className="flex h-[52px] items-center gap-2 rounded-full bg-white px-6 sm:flex-1">
            <SearchIcon className="size-6 shrink-0 text-gray-400" />
            <input
              id="course-search"
              name="q"
              type="search"
              defaultValue={defaultQuery}
              placeholder="Search"
              className="w-full bg-transparent text-body-l text-ink placeholder:text-gray-400 focus:outline-none"
            />
          </div>
          {/* Static for now: picks what to search (courses / creators) once that exists. */}
          <button
            type="button"
            className="flex h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-accent pl-6 pr-6 text-label-l text-ink transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Courses
            <ChevronDownIcon className="size-6" />
          </button>
        </Form>
      </div>
    </section>
  );
}
