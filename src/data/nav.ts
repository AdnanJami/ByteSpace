import type { NavLink } from "@/types/nav";

export const primaryNavLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Creators", href: "/#creators" },
];

/** Whether a nav link points at the page currently being viewed. */
export function isActiveNavLink(href: string, pathname: string): boolean {
  if (href === "/") return pathname === "/";
  if (href.includes("#")) return false;
  return pathname === href || pathname.startsWith(`${href}/`);
}
