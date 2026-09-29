"use client";

import { useState } from "react";
import { CategoryTabs } from "@/components/course/CategoryTabs";
import { searchCategoryTabs } from "@/data/searchCategoryTabs";

export interface SearchCategoryTabsProps {
  panelId: string;
}

// Highlights the chosen chip only; results aren't filtered by category yet.
export function SearchCategoryTabs({ panelId }: SearchCategoryTabsProps) {
  const [active, setActive] = useState(searchCategoryTabs[0].id);

  return (
    <CategoryTabs
      tabs={searchCategoryTabs}
      value={active}
      onChange={setActive}
      panelId={panelId}
      className="lg:flex-nowrap lg:justify-between"
    />
  );
}
