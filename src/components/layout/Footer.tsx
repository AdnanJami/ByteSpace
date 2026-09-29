import Link from "next/link";
import dynamic from "next/dynamic";
import { footerLinkColumns, legalLinks } from "@/data/footer";
import { Logo } from "./Logo";

// Keeps react-hook-form + zod out of the critical hydration bundle — the
// footer newsletter form is always below the fold at first paint.
const NewsletterForm = dynamic(
  () => import("./NewsletterForm").then((mod) => mod.NewsletterForm),
  {
    loading: () => (
      <div
        className="h-[52px] w-full animate-pulse rounded-full bg-gray-100 sm:max-w-[376px]"
        aria-hidden="true"
      />
    ),
  },
);

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="mx-auto max-w-[1200px] px-5 pb-12 pt-16 sm:px-10 lg:px-0 lg:pb-[45px] lg:pt-[70px]">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between lg:gap-8">
          <div className="flex max-w-[560px] flex-col">
            <Logo className="self-start text-ink" />
            <p className="mt-5 text-body-s text-gray-700">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>
            <div className="mt-8 lg:mt-[43px]">
              <NewsletterForm />
            </div>
            <p className="mt-6 max-w-[480px] text-body-xs text-gray-700 lg:mt-[26px]">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from
              our company.
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="grid grid-cols-2 gap-x-10 gap-y-3.5 sm:grid-cols-3 lg:grid-cols-[166px_166px_166px] lg:gap-x-[41px] lg:pt-[46px]"
          >
            {footerLinkColumns.map((column, index) => (
              <ul key={index} className="flex flex-col gap-4">
                {column.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="block text-body-s text-gray-700 hover:text-primary">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between lg:mt-[127px] lg:pt-[22px]">
          <p className="text-body-xs text-gray-700">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-body-xs text-gray-700 hover:text-primary">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
