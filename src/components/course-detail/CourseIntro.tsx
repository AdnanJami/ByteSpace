import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { LevelIcon } from "@/components/ui/icons/LevelIcon";
import { PeopleIcon } from "@/components/ui/icons/PeopleIcon";
import { ShareIcon } from "@/components/ui/icons/ShareIcon";
import { StarFilledIcon } from "@/components/ui/icons/StarFilledIcon";
import type { CourseDetail } from "@/types/courseDetail";

interface BadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  children: React.ReactNode;
}

function Badge({ icon: Icon, children }: BadgeProps) {
  return (
    <li className="flex h-10 items-center gap-2 rounded-full bg-white px-6 text-body-m text-ink">
      <Icon className="size-6 text-primary" />
      {children}
    </li>
  );
}

export interface CourseIntroProps {
  detail: CourseDetail;
}

export function CourseIntro({ detail }: CourseIntroProps) {
  return (
    <div className="relative flex flex-col pb-10 pt-10 xl:pb-[58px] xl:pt-[51px]">
      <h1 className="text-heading-s text-white sm:text-display-xs sm:font-semibold xl:pr-[120px]">{detail.heading}</h1>
      <p className="mt-2 text-heading-xs text-white xl:mt-1.5">{detail.subtitle}</p>
      <p className="mt-5 text-body-l text-white">
        by{" "}
        <Link href={`/creators/${detail.creator.slug}`} className="text-accent hover:underline">
          {detail.course.creator.name}
        </Link>
      </p>

      <ul className="mt-5 flex flex-wrap gap-4" aria-label="Course facts">
        <Badge icon={LevelIcon}>{detail.level}</Badge>
        <Badge icon={StarFilledIcon}>
          {detail.rating} ({detail.reviewCount} reviews)
        </Badge>
        <Badge icon={PeopleIcon}>{detail.studentCount} Students</Badge>
      </ul>

      {/* Static for now. The design hangs it past the content edge on wide screens. */}
      <button
        type="button"
        className="mt-5 flex h-10 w-fit items-center gap-2 rounded-full bg-accent px-6 text-label-l text-ink transition-colors hover:bg-accent-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:absolute xl:-right-[84px] xl:top-[52px] xl:mt-0"
      >
        <ShareIcon className="size-6" />
        Share
      </button>
    </div>
  );
}
