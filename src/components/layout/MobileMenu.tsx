"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M3 6h18M3 12h18M3 18h18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

function CloseIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <path
        d="M6 6l12 12M18 6L6 18"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

const links = [
  { label: "Home", href: "#top" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export function MobileMenu() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        className="text-gray-50 lg:hidden"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-nav"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? <CloseIcon className="size-7" /> : <MenuIcon className="size-7" />}
      </button>

      {open && (
        <div
          id="mobile-nav"
          className="flex flex-col gap-1 border-t border-white/10 bg-primary px-5 pb-6 pt-2 lg:hidden"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-3 text-body-m text-gray-50 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-2 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/login"
              className="rounded-lg px-3 py-3 text-body-m text-gray-50 hover:bg-white/10"
              onClick={() => setOpen(false)}
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-accent px-6 py-3 text-center text-label-m text-ink"
              onClick={() => setOpen(false)}
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
