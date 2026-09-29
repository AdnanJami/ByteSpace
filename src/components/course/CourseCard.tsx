import Image from "next/image";
import Link from "next/link";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { LevelIcon } from "@/components/ui/icons/LevelIcon";
import { StarRatingIcon } from "@/components/ui/icons/StarRatingIcon";
import type { Course } from "@/types/course";

export interface CourseCardProps {
  course: Course;
}

export function CourseCard({ course }: CourseCardProps) {
  return (
    <Link
      href={`/courses/${course.slug}`}
      className="flex w-full max-w-[373px] flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white transition-shadow hover:shadow-elevated focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <div className="relative m-[15px] mb-0 h-[195px] shrink-0 overflow-hidden rounded-xl bg-gray-100">
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

      <div className="flex flex-1 flex-col gap-4 p-[15px]">
        <div className="flex items-start justify-between gap-2">
          <div className="flex flex-col gap-0.5">
            <h3 className="text-heading-xs text-black-950">{course.title}</h3>
            <p className="text-body-xs text-black-700">
              by <span className="text-primary">{course.creator.name}</span>
            </p>
          </div>
          <div className="flex shrink-0 items-center gap-1 pt-1">
            <span className="text-body-l text-black-700">{course.rating}</span>
            <StarRatingIcon className="size-6 text-gray-200" />
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
          />
        </div>

        <p className="flex items-end gap-1">
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
