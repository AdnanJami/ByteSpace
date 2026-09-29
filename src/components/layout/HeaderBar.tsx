import Link from "next/link";
import { CartIcon } from "@/components/ui/icons/CartIcon";
import type { SessionUser } from "@/lib/auth/sessionCookie";
import { gridBackgroundStyle } from "@/lib/gridBackground";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";
import { NavLinks } from "./NavLinks";
import { UserMenu } from "./UserMenu";

export interface HeaderBarProps {
  user: SessionUser | null;
}

export function HeaderBar({ user }: HeaderBarProps) {
  return (
    <header className="sticky top-0 z-50 bg-primary">
      {/* the page grid runs through the header on desktop, where it is one 120px row */}
      <div
        aria-hidden="true"
        className="absolute inset-0 hidden lg:block"
        style={gridBackgroundStyle}
      />
      <div className="relative mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:h-[120px] lg:px-[120px]">
        {/* the design sits the logo above the nav's centre line */}
        <Logo className="lg:-mt-[18px]" />

        <NavLinks />

        <div className="hidden items-center gap-6 lg:flex">
          {user ? (
            <UserMenu user={user} />
          ) : (
            <>
              <Link
                href="/login"
                className="text-body-m text-gray-50 transition-colors hover:text-white"
              >
                Sign In
              </Link>
              <Link
                href="/signup"
                className="text-body-m text-gray-50 transition-colors hover:text-white"
              >
                Join Us
              </Link>
            </>
          )}
          <button type="button" aria-label="Cart" className="text-gray-50 hover:text-white">
            <CartIcon className="size-6" />
          </button>
        </div>

        <MobileMenu user={user} />
      </div>
    </header>
  );
}
