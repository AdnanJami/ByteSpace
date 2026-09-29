"use client";

import { useState, type FormEvent } from "react";
import { SearchIcon } from "@/components/ui/icons/SearchIcon";
import { Button } from "@/components/ui/Button";

export function HeroSearchForm() {
  const [query, setQuery] = useState("");
  const [submitted, setSubmitted] = useState<string | null>(null);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(query.trim());
  }

  return (
    <form
      onSubmit={handleSubmit}
      role="search"
      aria-label="Search courses"
      className="flex w-full max-w-[461px] flex-col items-stretch gap-3 sm:w-auto sm:flex-row sm:items-start sm:gap-4"
    >
      <label htmlFor="hero-search" className="sr-only">
        Course, topic, creator
      </label>
      <div className="flex h-[52px] flex-1 items-center gap-2 rounded-3xl bg-white px-6 py-3 sm:w-[461px] sm:flex-none">
        <SearchIcon className="size-6 shrink-0 text-gray-400" />
        <input
          id="hero-search"
          type="search"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Course, topic, creator"
          className="w-full bg-transparent text-body-l text-ink placeholder:text-gray-400 focus:outline-none"
        />
      </div>
      <Button type="submit" size="md" className="h-[52px] shrink-0">
        Search
      </Button>
      <p aria-live="polite" className="sr-only">
        {submitted !== null &&
          (submitted
            ? `Searching for "${submitted}". Course search isn't available yet.`
            : "Enter a search term first.")}
      </p>
    </form>
  );
}
