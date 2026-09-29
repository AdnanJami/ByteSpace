"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import {
  consumePopNavigation,
  isSameCourseTabSwitch,
  recordPathname,
} from "@/lib/navigationHistory";

export function NavigationTracker() {
  const pathname = usePathname();
  const previousPathname = useRef<string | null>(null);

  useEffect(() => {
    recordPathname(pathname);
    const from = previousPathname.current;
    previousPathname.current = pathname;
    const wasPopNavigation = consumePopNavigation();

    if (from === null || from === pathname) return;
    if (wasPopNavigation || window.location.hash) return;
    if (isSameCourseTabSwitch(from, pathname)) return;

    // Next.js scrolls to the first part of the page that changed, which on
    // course pages is the tab content below the fold. New pages should open
    // at the top instead. This runs after Next.js's own scroll handling.
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
