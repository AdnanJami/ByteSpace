import type { ComponentType, SVGProps } from "react";
import Link from "next/link";
import { categoryIcons } from "@/data/categoryIcons";
import {
  BusinessIcon,
  DesignIcon,
  DevelopmentIcon,
  ItSoftwareIcon,
  MarketingIcon,
  PhotographyIcon,
} from "@/components/ui/icons/CategoryIcons";

const iconMap: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
  design: DesignIcon,
  development: DevelopmentIcon,
  "it-software": ItSoftwareIcon,
  business: BusinessIcon,
  marketing: MarketingIcon,
  photography: PhotographyIcon,
};

export function CategoriesGrid() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center gap-10 px-5 sm:px-10 lg:px-0">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2 className="text-heading-s text-vulcan-950">
            Explore Diverse Learning Paths at Bytespace
          </h2>
          <p className="max-w-[917px] text-body-m text-gray-700 lg:text-body-l">
            At Bytespace, we believe in empowering individuals through knowledge. Our diverse
            range of courses spans various fields, ensuring there&apos;s something for everyone.
            Unleash your potential and explore our carefully curated categories.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:flex lg:flex-wrap lg:justify-center lg:gap-10">
          {categoryIcons.map((category) => {
            const Icon = iconMap[category.icon];
            return (
              <Link
                key={category.id}
                href={`/courses?category=${category.icon}`}
                className="flex aspect-square w-full flex-col items-center justify-center gap-3 rounded-3xl border border-gray-200 transition-colors hover:border-primary lg:w-[167px]"
              >
                <span className="flex items-center justify-center rounded-full bg-accent p-3">
                  <Icon className="size-9 text-ink" />
                </span>
                <span className="text-label-xl text-ink">{category.label}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
