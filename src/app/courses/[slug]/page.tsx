import Image from "next/image";
import { notFound } from "next/navigation";
import { CheckBadgeIcon } from "@/components/ui/icons/CheckBadgeIcon";
import { getCourseDetail } from "@/data/courseDetails";

export default async function CourseAboutPage({ params }: PageProps<"/courses/[slug]">) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();
  const { about } = detail;

  return (
    <div className="mt-[38px] flex flex-col gap-[22px] pb-16 xl:pb-[67px]">
      <h2 className="text-heading-xs text-ink">Description</h2>
      <div className="flex flex-col gap-[26px]">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className="text-body-m leading-[26px] text-gray-700">
            {paragraph}
          </p>
        ))}
      </div>

      <h2 className="text-heading-xs text-ink">Sneak Peak</h2>
      <ul className="grid grid-cols-2 gap-[19px] sm:grid-cols-4">
        {about.sneakPeek.map((image) => (
          <li key={image.src} className="relative aspect-[167/125] overflow-hidden rounded-xl">
            <Image src={image.src} alt={image.alt} fill sizes="(min-width: 640px) 167px, 45vw" className="object-cover" />
          </li>
        ))}
      </ul>

      <h2 className="text-heading-xs text-ink">Key Points</h2>
      <ul className="flex flex-col gap-3.5">
        {about.keyPoints.map((point) => (
          <li key={point} className="flex items-center gap-2 text-body-m text-gray-700">
            <CheckBadgeIcon className="size-6 shrink-0 text-primary" />
            {point}
          </li>
        ))}
      </ul>
    </div>
  );
}
