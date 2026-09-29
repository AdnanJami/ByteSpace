import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";
import { Button } from "@/components/ui/Button";
import { CertificateIcon } from "@/components/ui/icons/CertificateIcon";
import { ConsultationIcon } from "@/components/ui/icons/ConsultationIcon";
import { FolderIcon } from "@/components/ui/icons/FolderIcon";
import { VideoIcon } from "@/components/ui/icons/VideoIcon";
import type { CourseDetail, CourseInclude } from "@/types/courseDetail";

const includeIcons: Record<CourseInclude["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  resources: FolderIcon,
  videos: VideoIcon,
  certificate: CertificateIcon,
  consultation: ConsultationIcon,
};

export interface CourseSidebarProps {
  detail: CourseDetail;
}

export function CourseSidebar({ detail }: CourseSidebarProps) {
  const { course, creator } = detail;

  return (
    <aside
      aria-label="Enrol in this course"
      className="flex flex-col rounded-[32px] border border-gray-200 bg-white px-6 pb-[38px] pt-9 sm:px-10"
    >
      <h2 className="text-heading-xs text-ink">{detail.lessonsSummary}</h2>

      <ol className="mt-6 flex flex-col gap-3">
        {detail.previewLessons.map((lesson) => (
          <li key={lesson.number} className="grid grid-cols-[32px_minmax(0,1fr)_auto] items-start xl:grid-cols-[32px_180px_1fr]">
            <span className="text-body-m leading-[1.2] text-ink">{lesson.number}</span>
            <span className="text-body-m leading-[1.2] text-ink">{lesson.title}</span>
            <span className="pl-4 text-body-m text-primary xl:pl-[59px]">{lesson.durationLabel}</span>
          </li>
        ))}
      </ol>
      <p className="mt-3 text-body-m text-gray-700">{detail.moreLessonsLabel}</p>

      <p className="mt-[26px] text-body-m leading-[1.6] text-gray-700">{detail.enrollPitch}</p>
      <p className="mt-[22px] flex items-baseline gap-1">
        <span className="text-display-xs font-semibold text-primary">
          {course.currency}
          {course.price}
        </span>
        <span className="text-body-m text-gray-700">{course.priceUnit}</span>
      </p>
      {/* Static: enrolment isn't wired to a backend yet. */}
      <Button type="button" className="mt-5 w-full text-label-l">
        Enroll Now
      </Button>

      <h2 className="mt-[22px] text-heading-xs text-ink">This course include</h2>
      <ul className="mt-[22px] flex flex-col gap-3.5">
        {detail.includes.map((item) => {
          const Icon = includeIcons[item.icon];
          return (
            <li key={item.icon} className="flex items-center gap-2 text-body-m text-gray-700">
              <Icon className="size-6 text-primary" />
              {item.label}
            </li>
          );
        })}
      </ul>

      <div className="mt-[25px] flex flex-col border-t border-gray-200 pt-6">
        <div className="flex items-center gap-3">
          <Image src={creator.avatar} alt="" width={52} height={52} className="size-[52px] rounded-full object-cover" />
          <div>
            <p className="text-label-l text-ink">{creator.name}</p>
            <p className="text-body-m text-gray-700">{creator.role}</p>
          </div>
        </div>
        <p className="mt-[25px] text-body-m leading-[1.6] text-gray-700">{detail.enrollPitch}</p>
        <Link
          href={`/creators/${creator.slug}`}
          className="mt-6 flex h-[35px] w-fit items-center rounded-full border border-gray-200 px-4 text-body-m text-ink transition-colors hover:bg-gray-50"
        >
          See Full Profile
        </Link>
      </div>
    </aside>
  );
}
