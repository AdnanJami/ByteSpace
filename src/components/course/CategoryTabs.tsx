"use client";

import { useRef, type KeyboardEvent } from "react";
import { cn } from "@/lib/utils";
import type { CategoryTab } from "@/types/category";

export interface CategoryTabsProps {
  tabs: CategoryTab[];
  value: string;
  onChange: (id: string) => void;
  /** id of the tabpanel this tablist controls, for aria-controls */
  panelId?: string;
}

export function CategoryTabs({ tabs, value, onChange, panelId }: CategoryTabsProps) {
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);

  function handleKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number | null = null;
    if (event.key === "ArrowRight") nextIndex = (index + 1) % tabs.length;
    if (event.key === "ArrowLeft") nextIndex = (index - 1 + tabs.length) % tabs.length;
    if (event.key === "Home") nextIndex = 0;
    if (event.key === "End") nextIndex = tabs.length - 1;

    if (nextIndex !== null) {
      event.preventDefault();
      onChange(tabs[nextIndex].id);
      tabRefs.current[nextIndex]?.focus();
    }
  }

  return (
    <div
      role="tablist"
      aria-label="Course categories"
      className="flex gap-4 overflow-x-auto pb-2 [scrollbar-width:none] lg:flex-wrap lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden"
    >
      {tabs.map((tab, index) => {
        const selected = tab.id === value;
        return (
          <button
            key={tab.id}
            ref={(el) => {
              tabRefs.current[index] = el;
            }}
            type="button"
            role="tab"
            id={`category-tab-${tab.id}`}
            aria-selected={selected}
            aria-controls={panelId}
            tabIndex={selected ? 0 : -1}
            onClick={() => onChange(tab.id)}
            onKeyDown={(event) => handleKeyDown(event, index)}
            className={cn(
              "shrink-0 rounded-3xl px-4 py-3 text-label-m transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              selected
                ? "bg-accent text-ink"
                : "bg-gray-50 text-gray-700 hover:bg-gray-100",
            )}
          >
            {tab.label}
          </button>
        );
      })}
    </div>
  );
}
