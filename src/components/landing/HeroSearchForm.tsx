import Form from "next/form";
import { SearchIcon } from "@/components/ui/icons/SearchIcon";
import { Button } from "@/components/ui/Button";

export function HeroSearchForm() {
  return (
    <Form
      action="/courses"
      role="search"
      aria-label="Search courses"
      className="flex w-full max-w-[461px] flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4"
    >
      <label htmlFor="hero-search" className="sr-only">
        Course, topic, creator
      </label>
      <div className="flex h-[52px] items-center gap-2 rounded-3xl bg-white px-6 py-3 sm:w-[461px]">
        <SearchIcon className="size-6 shrink-0 text-gray-400" />
        <input
          id="hero-search"
          name="q"
          type="search"
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-body-l text-ink placeholder:text-gray-400 focus:outline-none"
        />
      </div>
      <Button type="submit" size="md" className="h-[52px] shrink-0">
        Search
      </Button>
    </Form>
  );
}
