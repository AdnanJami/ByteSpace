import Image from "next/image";
import { gridBackgroundStyle } from "@/lib/gridBackground";
import type { Creator } from "@/types/creator";

export interface CreatorHeroProps {
  creator: Creator;
}

export function CreatorHero({ creator }: CreatorHeroProps) {
  return (
    <section className="relative overflow-hidden bg-primary">
      <div aria-hidden="true" className="absolute inset-0" style={gridBackgroundStyle} />

      <div className="relative mx-auto flex max-w-[1200px] flex-col px-5 pb-12 pt-10 sm:px-10 lg:px-0 lg:pb-[82px] lg:pt-[52px]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:gap-6">
          <Image
            src={creator.avatar}
            alt={creator.name}
            width={96}
            height={96}
            priority
            className="size-24 shrink-0 rounded-2xl object-cover"
          />
          <div className="flex flex-col gap-2 sm:pt-1">
            <div className="flex flex-wrap items-center gap-x-[9px] gap-y-2">
              <h1 className="text-heading-s text-white sm:text-display-xs sm:font-semibold">
                {creator.name}
              </h1>
              <span className="flex h-[35px] items-center rounded-full bg-accent px-6 text-body-l text-ink">
                {creator.badge}
              </span>
            </div>
            <p className="text-body-l text-white">{creator.tagline}</p>
          </div>
        </div>

        <div className="mt-8 text-body-l text-white lg:mt-10">
          {creator.bio.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 lg:mt-10">
          <ul className="flex flex-wrap gap-4" aria-label="Creator stats">
            <li className="flex h-[46px] items-center gap-1 rounded-full bg-white px-6 text-[20px] leading-[1.2] text-ink">
              <span className="text-primary">{creator.productCount}</span> Products
            </li>
            <li className="flex h-[46px] items-center gap-1 rounded-full bg-white px-6 text-[20px] leading-[1.2] text-ink">
              <span className="text-primary">{creator.followerCount}</span> Followers
            </li>
          </ul>
          {/* Static: following isn't wired to a backend yet. */}
          <button
            type="button"
            className="flex h-[46px] items-center rounded-full bg-accent px-6 text-body-l text-ink transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Follow
          </button>
        </div>
      </div>
    </section>
  );
}
