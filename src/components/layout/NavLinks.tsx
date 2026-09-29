"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { isActiveNavLink, primaryNavLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

export function NavLinks() {
  const pathname = usePathname();

  return (
    <nav aria-label="Primary" className="hidden items-center gap-6 text-body-m lg:flex">
      {primaryNavLinks.map((link) => {
        const active = isActiveNavLink(link.href, pathname);
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-current={active ? "page" : undefined}
            className={cn(
              "transition-colors hover:text-white",
              active ? "font-medium text-white" : "text-gray-50",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}
