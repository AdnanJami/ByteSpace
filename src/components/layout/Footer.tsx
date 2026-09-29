import Link from "next/link";
import dynamic from "next/dynamic";
import { footerLinkGroups, legalLinks } from "@/data/footer";
import { Logo } from "./Logo";

// Keeps react-hook-form + zod out of the critical hydration bundle — the
// footer newsletter form is always below the fold at first paint.
const NewsletterForm = dynamic(
  () => import("./NewsletterForm").then((mod) => mod.NewsletterForm),
  {
    loading: () => (
      <div
        className="h-[52px] w-full animate-pulse rounded-2xl bg-gray-100 sm:max-w-[376px]"
        aria-hidden="true"
      />
    ),
  },
);

export function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white py-16">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-16 px-5 sm:px-10 lg:px-0">
        <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
          <div className="flex max-w-[528px] flex-col gap-6">
            <Logo className="text-ink" />
            <p className="text-body-m text-gray-700">
              Stay up to date with our latest features and releases by joining our newsletter.
            </p>
            <div>
              <NewsletterForm />
              <p className="mt-3 max-w-[504px] text-body-xs text-gray-700">
                By subscribing, you agree to our Privacy Policy and consent to receive updates
                from our company.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-2 sm:gap-16">
            {footerLinkGroups.map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <p className="text-label-l text-ink">{group.title}</p>
                <ul className="flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-body-m text-gray-700 hover:text-primary"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-body-s text-gray-700">
            © {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-6">
            {legalLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="text-body-s text-gray-700 hover:text-primary">
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
