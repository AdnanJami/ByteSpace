import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { LevelIcon } from "@/components/ui/icons/LevelIcon";
import { StarRatingIcon } from "@/components/ui/icons/StarRatingIcon";
import { cn } from "@/lib/utils";
import type { Course } from "@/types/course";

export interface CourseCardProps {
  course: Course;
  /** "highlight" is the look used on the sign-in / sign-up promo: lime star, dark enrolment bubble. */
  variant?: "default" | "highlight";
  className?: string;
}

export function CourseCard({ course, variant = "default", className }: CourseCardProps) {
  const highlight = variant === "highlight";

  return (
    <Link
      href={`/courses/${course.slug}`}
      className={cn(
        "flex w-full max-w-[373px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-shadow hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2",
        className,
      )}
    >
      <div className="relative m-[15px] mb-0 h-[196px] shrink-0 overflow-hidden rounded-xl bg-gray-100">
        <Image
          src={course.thumbnail}
          alt=""
          fill
          sizes="(min-width: 1024px) 373px, 90vw"
          className="object-cover"
        />
        <div className="absolute bottom-[15px] left-[13px] flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-50/60 px-3 py-1.5 text-label-xs text-black-700 backdrop-blur-sm">
            {course.lessonCount} Lessons
          </span>
          <span className="rounded-full bg-gray-50/60 px-3 py-1.5 text-label-xs text-black-700 backdrop-blur-sm">
            {course.durationLabel}
          </span>
          <span className="rounded-full bg-gray-50/60 px-3 py-1.5 text-label-xs text-black-700 backdrop-blur-sm">
            {course.commentCount} Comments
          </span>
        </div>
      </div>

      {/* The search and auth frames space the card body slightly differently. */}
      <div
        className={cn(
          "flex flex-1 flex-col px-[15px]",
          highlight ? "gap-4 pb-[15px] pt-5" : "gap-3 pb-[17px] pt-[18px]",
        )}
      >
        <div className="flex items-start justify-between gap-2">
          <div className="flex min-w-0 flex-col gap-0.5">
            <h3 className="truncate text-heading-xs text-black-950" title={course.title}>
              {course.title}
            </h3>
            <p className="text-body-xs text-black-700">
              by <span className="text-primary">{course.creator.name}</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 pt-1">
            <span className="text-body-l text-black-700">{course.rating}</span>
            <StarRatingIcon className={cn("size-6", highlight ? "text-accent" : "text-gray-200")} />
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 rounded-full bg-gray-50 px-3 py-1.5 text-label-xs text-gray-700">
            <LevelIcon className="size-5 text-gray-700" />
            {course.level}
          </span>
          <AvatarStack
            avatars={course.enrolledAvatars.map((src) => ({ src, alt: "" }))}
            moreLabel={course.enrolledCountLabel}
            groupLabel={`${course.enrolledCountLabel} students enrolled`}
            size={32}
            moreClassName={highlight ? "bg-black-950 text-white" : undefined}
          />
        </div>

        <p className={cn("flex items-baseline gap-1", highlight ? "-mt-1.5" : "mt-[3px]")}>
          <span className="text-heading-xs text-primary">
            {course.currency}
            {course.price}
          </span>
          <span className="text-body-xs text-black-700">{course.priceUnit}</span>
        </p>
      </div>
    </Link>
  );
}
