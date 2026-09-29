import type { Metadata } from "next";
import Link from "next/link";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { gridBackgroundStyle } from "@/lib/gridBackground";

export const metadata: Metadata = {
  title: "Page not found — ByteSpace",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="relative overflow-hidden bg-primary">
        <div aria-hidden="true" className="absolute inset-0" style={gridBackgroundStyle} />

        <div className="relative mx-auto flex max-w-[1200px] flex-col items-center px-5 pb-20 pt-16 text-center sm:px-10 lg:h-[837px] lg:px-0 lg:pb-0 lg:pt-0">
          {/* Decorative: lime fading into the page blue, sitting behind the heading. */}
          <p
            aria-hidden="true"
            className="select-none bg-[linear-gradient(to_bottom,var(--color-accent)_14%,rgb(198_238_44)_28%,rgb(172_215_69)_48%,rgb(119_165_130)_68%,transparent_100%)] bg-clip-text font-poppins text-[160px] font-semibold leading-none tracking-[-0.028em] text-transparent sm:text-[300px] lg:absolute lg:left-[calc(50%-8px)] lg:top-[45px] lg:-translate-x-1/2 lg:text-[484px]"
          >
            404
          </p>

          <div className="relative -mt-10 flex flex-col items-center sm:-mt-16 lg:mt-[401px]">
            <h1 className="max-w-[960px] text-heading-s text-white sm:text-heading-m lg:text-heading-l">
              The page you are looking for doesn’t exist
            </h1>
            <p className="mt-6 text-body-l text-gray-50 lg:mt-[34px]">
              Try to use a correct url or go back to homepage to start again
            </p>
            <Link
              href="/"
              className="mt-8 flex h-[46px] items-center rounded-full bg-accent px-6 text-label-l text-ink transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white lg:mt-[29px]"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
