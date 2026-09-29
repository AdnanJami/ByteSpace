import Link from "next/link";
import { CartIcon } from "@/components/ui/icons/CartIcon";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-primary">
      <div className="mx-auto flex h-20 w-full max-w-[1440px] items-center justify-between px-5 sm:px-10 lg:h-[120px] lg:px-[120px]">
        <Logo />

        <nav
          aria-label="Primary"
          className="hidden items-center gap-6 text-body-m text-gray-50 lg:flex"
        >
          <Link href="#top" className="font-medium transition-colors hover:text-white">
            Home
          </Link>
          <Link href="#courses" className="transition-colors hover:text-white">
            Courses
          </Link>
          <Link href="#creators" className="transition-colors hover:text-white">
            Creators
          </Link>
        </nav>

        <div className="hidden items-center gap-6 lg:flex">
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
          <button type="button" aria-label="Cart" className="text-gray-50 hover:text-white">
            <CartIcon className="size-6" />
          </button>
        </div>

        <MobileMenu />
      </div>
    </header>
  );
}
