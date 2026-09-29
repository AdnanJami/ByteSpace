"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { logout } from "@/lib/api/auth";
import type { SessionUser } from "@/lib/auth/sessionCookie";
import { UserAvatar } from "./UserAvatar";

export interface UserMenuProps {
  user: SessionUser;
}

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [signingOut, setSigningOut] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onPointerDown(event: PointerEvent) {
      if (!rootRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("pointerdown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  async function handleSignOut() {
    setSigningOut(true);
    try {
      await logout();
    } finally {
      setOpen(false);
      setSigningOut(false);
      router.refresh();
    }
  }

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
        className="flex items-center gap-3 rounded-full text-body-m text-gray-50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
      >
        <UserAvatar name={user.name} />
        <span>{user.name.split(" ")[0]}</span>
      </button>

      {open && (
        <div
          role="menu"
          className="absolute right-0 top-full z-10 mt-3 flex w-56 flex-col rounded-2xl bg-white p-2 shadow-elevated"
        >
          <div className="px-3 py-2">
            <p className="text-label-m text-ink">{user.name}</p>
            <p className="truncate text-body-s text-gray-700">{user.email}</p>
          </div>
          <button
            type="button"
            role="menuitem"
            onClick={handleSignOut}
            disabled={signingOut}
            className="rounded-xl px-3 py-2 text-left text-body-m text-ink hover:bg-gray-50 disabled:opacity-50"
          >
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
