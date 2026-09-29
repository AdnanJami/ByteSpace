"use client";

import { useState } from "react";
import { StarSharpIcon } from "@/components/ui/icons/StarSharpIcon";
import { cn } from "@/lib/utils";

const filters = [
  { id: "all", label: "All rating" },
  ...[5, 4, 3, 2, 1].map((stars) => ({ id: String(stars), label: String(stars) })),
];

// Highlights the chosen rating only; the list isn't filtered yet.
export function ReviewFilterChips() {
  const [active, setActive] = useState("all");

  return (
    <div role="group" aria-label="Filter reviews by rating" className="flex flex-wrap gap-4">
      {filters.map((filter) => {
        const selected = filter.id === active;
        return (
          <button
            key={filter.id}
            type="button"
            aria-pressed={selected}
            aria-label={filter.id === "all" ? undefined : `${filter.label} stars`}
            onClick={() => setActive(filter.id)}
            className={cn(
              "flex items-center gap-1 rounded-3xl px-4 py-3 text-body-l leading-[1.05] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              selected ? "bg-accent text-ink" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
            )}
          >
            {filter.id !== "all" && <StarSharpIcon className="-my-1 size-6" />}
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
