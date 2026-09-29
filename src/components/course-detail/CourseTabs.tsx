"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export interface CourseTabsProps {
  slug: string;
}

export function CourseTabs({ slug }: CourseTabsProps) {
  const pathname = usePathname();
  const base = `/courses/${slug}`;
  const tabs = [
    { label: "About", href: base },
    { label: "Lessons", href: `${base}/lessons` },
    { label: "Reviews", href: `${base}/reviews` },
  ];

  return (
    <nav aria-label="Course sections" className="flex gap-4">
      {tabs.map((tab) => {
        const active = pathname === tab.href;
        return (
          <Link
            key={tab.href}
            href={tab.href}
            // Switching tabs replaces the history entry, so Back returns to
            // the page the course was opened from rather than the last tab.
            replace
            scroll={false}
            aria-current={active ? "page" : undefined}
            className={cn(
              "rounded-3xl px-4 py-3 text-label-m transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
              active ? "bg-accent text-ink" : "bg-gray-50 text-gray-700 hover:bg-gray-100",
            )}
          >
            {tab.label}
          </Link>
        );
      })}
    </nav>
  );
}
