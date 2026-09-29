import Link from "next/link";
import { cn } from "@/lib/utils";

export interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      className={cn(
        "inline-flex items-center gap-2 font-clash-display text-2xl text-gray-50",
        className,
      )}
    >
      <svg
        width="20"
        height="22"
        viewBox="0 0 28.875 31.5"
        fill="none"
        aria-hidden="true"
        className="text-accent"
      >
        <path
          d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z"
          fill="currentColor"
        />
        <path
          d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z"
          fill="currentColor"
        />
        <path
          d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z"
          fill="currentColor"
        />
      </svg>
      <span>ByteSpace</span>
    </Link>
  );
}
