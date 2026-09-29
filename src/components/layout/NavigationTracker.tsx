"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { recordPathname } from "@/lib/navigationHistory";

export function NavigationTracker() {
  const pathname = usePathname();

  useEffect(() => {
    recordPathname(pathname);
  }, [pathname]);

  return null;
}
