"use client";

import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "@/components/ui/icons/ChevronLeftIcon";
import { canGoBackInApp } from "@/lib/navigationHistory";
import { cn } from "@/lib/utils";

export interface BackButtonProps {
  /** Where to go when there's no earlier page from this site to return to. */
  fallbackHref: string;
  className?: string;
}

export function BackButton({ fallbackHref, className }: BackButtonProps) {
  const router = useRouter();

  function handleClick() {
    // History back lets Next.js restore the previous page's scroll position.
    if (canGoBackInApp()) router.back();
    else router.push(fallbackHref);
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "flex h-10 w-fit items-center gap-1 rounded-full border border-white/40 pl-2 pr-4 text-label-m text-white transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white",
        className,
      )}
    >
      <ChevronLeftIcon className="size-6" />
      Back
    </button>
  );
}
