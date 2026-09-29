import { notFound } from "next/navigation";
import { VideoCameraIcon } from "@/components/ui/icons/VideoCameraIcon";
import { getCourseDetail } from "@/data/courseDetails";

export default async function CourseLessonsPage({ params }: PageProps<"/courses/[slug]/lessons">) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();
  const { lessons } = detail;

  return (
    <div className="mt-[38px] flex flex-col gap-[22px] pb-16 xl:pb-[83px]">
      <h2 className="text-heading-xs text-ink">Explore the Modules</h2>
      <p className="text-body-m leading-[26px] text-gray-700">{lessons.intro}</p>

      <h2 className="text-heading-xs text-ink">Lesson List</h2>
      <ol className="flex flex-col gap-[27px]">
        {lessons.modules.map((module) => (
          <li key={module.title} className="flex items-start gap-[13px]">
            <span className="flex size-[72px] shrink-0 items-center justify-center rounded-2xl bg-accent">
              <VideoCameraIcon className="size-10 text-ink" />
            </span>
            <div className="flex flex-col gap-px">
              <h3 className="text-label-m text-ink">{module.title}</h3>
              <p className="text-body-m leading-[26px] text-gray-700">{module.description}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="text-heading-xs text-ink">Lesson Content</h2>
      <p className="text-body-m leading-[26px] text-gray-700">{lessons.content}</p>

      <h2 className="text-heading-xs text-ink">Lesson Progress Tracking</h2>
      <p className="text-body-m leading-[26px] text-gray-700">{lessons.progressIntro}</p>

      <div className="mt-0.5 flex flex-col gap-1 rounded-2xl border border-gray-200 px-4 pb-[17px] pt-4">
        <p className="text-label-s text-ink">Learning Progress</p>
        <p className="font-poppins text-[40px] font-semibold leading-none tracking-[-0.4px] text-ink">
          {lessons.progressPercent}%
        </p>
        <div
          role="progressbar"
          aria-label="Learning progress"
          aria-valuenow={lessons.progressPercent}
          aria-valuemin={0}
          aria-valuemax={100}
          className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100"
        >
          <div className="h-full rounded-full bg-accent" style={{ width: `${lessons.progressPercent}%` }} />
        </div>
      </div>
    </div>
  );
}
