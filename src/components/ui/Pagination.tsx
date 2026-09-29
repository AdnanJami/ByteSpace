import Link from "next/link";
import { ChevronLeftIcon } from "@/components/ui/icons/ChevronLeftIcon";
import { ChevronRightIcon } from "@/components/ui/icons/ChevronRightIcon";
import { cn } from "@/lib/utils";

export interface PaginationProps {
  currentPage: number;
  pageCount: number;
  /** Builds the link for a page number. */
  hrefForPage: (page: number) => string;
  className?: string;
}

const arrowClass =
  "flex h-12 w-14 items-center justify-center rounded-full border border-gray-200 text-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2";

export function Pagination({ currentPage, pageCount, hrefForPage, className }: PaginationProps) {
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);
  const hasPrev = currentPage > 1;
  const hasNext = currentPage < pageCount;

  return (
    <nav aria-label="Pagination" className={cn("flex items-center justify-center gap-6", className)}>
      {hasPrev ? (
        <Link href={hrefForPage(currentPage - 1)} aria-label="Previous page" className={cn(arrowClass, "hover:bg-gray-50")}>
          <ChevronLeftIcon className="size-6" />
        </Link>
      ) : (
        <span aria-disabled="true" aria-label="Previous page" role="link" className={arrowClass}>
          <ChevronLeftIcon className="size-6" />
        </span>
      )}

      <ol className="flex items-center gap-6">
        {pages.map((page) => {
          const current = page === currentPage;
          return (
            <li key={page}>
              <Link
                href={hrefForPage(page)}
                aria-current={current ? "page" : undefined}
                aria-label={`Page ${page}`}
                className={cn(
                  "text-heading-xs transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                  current ? "text-gray-300" : "text-ink",
                )}
              >
                {page}
              </Link>
            </li>
          );
        })}
      </ol>

      {hasNext ? (
        <Link href={hrefForPage(currentPage + 1)} aria-label="Next page" className={cn(arrowClass, "hover:bg-gray-50")}>
          <ChevronRightIcon className="size-6" />
        </Link>
      ) : (
        <span aria-disabled="true" aria-label="Next page" role="link" className={arrowClass}>
          <ChevronRightIcon className="size-6" />
        </span>
      )}
    </nav>
  );
}
