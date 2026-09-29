import Link from "next/link";
import { buttonVariants } from "@/components/ui/Button";
import { gridBackgroundStyle } from "@/lib/gridBackground";

export function CreatorCTA() {
  return (
    <section id="creators" className="relative overflow-hidden bg-primary py-16 scroll-mt-20 lg:scroll-mt-[120px] lg:py-24">
      <div aria-hidden="true" className="absolute inset-0" style={gridBackgroundStyle} />
      <div className="relative mx-auto flex max-w-[964px] flex-col items-center gap-10 px-5 text-center sm:px-10">
        <div className="flex flex-col items-center gap-4">
          <h2 className="text-heading-s text-gray-50 sm:text-display-xs lg:w-[710px] lg:text-heading-m">
            Unlock Your Potential as a Creator with ByteSpace
          </h2>
          <p className="text-body-m text-gray-50 lg:text-body-l">
            Experience the collaboration of numerous creators and an expanding selection of
            courses. Register now and become a part of a community comprising over 10,000 local
            and international creators. Utilize our Course Editor, and showcase your expertise
            by publishing your finest course on the ByteSpace Course Library.
          </p>
        </div>
        <Link href="/signup" className={buttonVariants({ size: "lg" })}>
          Join as Creator
        </Link>
      </div>
    </section>
  );
}
