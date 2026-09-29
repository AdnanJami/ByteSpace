import Image from "next/image";
import Link from "next/link";
import type { Creator } from "@/types/creator";

export interface CreatorCardProps {
  creator: Creator;
}

// No design exists for this card; it borrows the course card's frame and the
// profile hero's avatar, badge and stat pills.
export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <Link
      href={`/creators/${creator.slug}`}
      className="flex w-full max-w-[373px] flex-col items-center gap-4 rounded-3xl border border-gray-200 bg-white px-6 pb-6 pt-8 text-center transition-shadow hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Image
        src={creator.avatar}
        alt=""
        width={96}
        height={96}
        className="size-24 rounded-2xl object-cover"
      />
      <div className="flex flex-col items-center gap-1">
        <div className="flex items-center gap-2">
          <h2 className="text-heading-xs text-black-950">{creator.name}</h2>
          <span className="rounded-full bg-accent px-3 py-0.5 text-label-xs text-ink">
            {creator.badge}
          </span>
        </div>
        <p className="text-body-m text-gray-700">{creator.tagline}</p>
      </div>
      <div className="flex gap-2">
        <span className="rounded-full bg-gray-50 px-3 py-1.5 text-label-xs text-gray-700">
          <span className="text-primary">{creator.productCount}</span> Products
        </span>
        <span className="rounded-full bg-gray-50 px-3 py-1.5 text-label-xs text-gray-700">
          <span className="text-primary">{creator.followerCount}</span> Followers
        </span>
      </div>
    </Link>
  );
}
