import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { CheckCircleIcon } from "@/components/ui/icons/CheckCircleIcon";
import { StarIcon } from "@/components/ui/icons/StarIcon";
import { creatorBenefits } from "@/data/growth";

const avatars = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/hero/hero-avatar-${i + 1}.png`,
  alt: "",
}));

export function CreatorTools() {
  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row-reverse lg:items-center lg:gap-20">
      <div className="flex flex-col items-start gap-10 lg:w-[580px] lg:shrink-0">
        <div className="flex flex-col items-start gap-4 text-left">
          <h2 className="text-heading-s text-ink lg:w-[391px]">Create &amp; Manage Courses Easily.</h2>
          <p className="max-w-[574px] text-body-m text-gray-700 lg:text-body-l">
            <span className="font-bold text-ink">ByteSpace</span> supports individuals or
            entities in the creation, publication, and administration of educational courses.
          </p>
        </div>

        <ul className="flex flex-col items-start gap-4">
          {creatorBenefits.map((benefit) => (
            <li key={benefit} className="flex items-center gap-2">
              <CheckCircleIcon className="size-6 text-primary" />
              <span className="text-label-l text-ink">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-[420px] w-full max-w-[440px] shrink-0 sm:h-[500px] lg:h-[596px] lg:w-[541px] lg:max-w-none">
        <div className="absolute left-1/2 top-0 h-[85%] w-[70%] -translate-x-1/2 overflow-hidden rounded-[32px] shadow-elevated sm:left-0 sm:translate-x-0">
          <Image
            src="/images/growth/creator-tools-person.png"
            alt="A ByteSpace creator managing her course dashboard"
            fill
            sizes="(min-width: 1024px) 435px, 60vw"
            className="object-cover"
          />
        </div>

        <div className="absolute left-2 top-8 flex w-[150px] flex-col gap-2 rounded-2xl bg-primary p-4 text-gray-50 shadow-elevated">
          <div>
            <p className="text-label-m">Total Revenue</p>
            <p className="text-body-xs opacity-80">July 1-28</p>
          </div>
          <div className="flex items-center justify-between gap-2">
            <p className="text-heading-xs">$120.29</p>
            <span className="rounded-full bg-accent-600 px-2 py-0.5 text-label-xs text-ink">
              +12$
            </span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-[56%] rounded-full bg-accent" />
          </div>
        </div>

        <div className="absolute left-2 top-[230px] flex w-[130px] flex-col gap-2 rounded-2xl bg-primary p-4 text-gray-50 shadow-elevated">
          <div>
            <p className="text-label-m">Year to Date</p>
            <p className="text-body-xs opacity-80">2023</p>
          </div>
          <p className="text-heading-xs">$1,200.38</p>
          <span className="w-fit rounded-full bg-accent-600 px-2 py-0.5 text-label-xs text-ink">
            +12$
          </span>
        </div>

        <div className="absolute bottom-0 left-1/2 flex w-[240px] -translate-x-1/2 flex-col gap-2 rounded-2xl bg-white p-4 shadow-elevated sm:left-auto sm:right-6 sm:translate-x-0">
          <div>
            <p className="text-label-m text-ink">Happy Students</p>
            <div className="flex items-center gap-1">
              <span className="text-body-xs font-bold text-ink">4.5</span>
              <span className="text-body-xs text-gray-700">(240)</span>
              <StarIcon className="size-3 text-accent" />
            </div>
          </div>
          <AvatarStack
            avatars={avatars}
            moreLabel="2K+"
            groupLabel="2,000+ happy students enrolled"
            size={28}
          />
        </div>

        <div
          aria-hidden="true"
          className="absolute right-2 top-4 hidden size-[110px] overflow-hidden rounded-full lg:block"
        >
          <Image
            src="/images/growth/creator-tools-mask.png"
            alt=""
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-accent mix-blend-hard-light" />
        </div>
      </div>
    </div>
  );
}
