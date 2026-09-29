import Image from "next/image";
import { CourseCard } from "@/components/course/CourseCard";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { StarIcon } from "@/components/ui/icons/StarIcon";
import { courses } from "@/data/courses";
import { cn } from "@/lib/utils";

const studentAvatars = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/hero/hero-avatar-${i + 1}.png`,
  alt: "",
}));

export interface AuthIllustrationProps {
  className?: string;
}

// Positions are measured from the design's 1440px auth frames, relative to the
// top-left of the first (back) course card's column.
export function AuthIllustration({ className }: AuthIllustrationProps) {
  const backCourse = courses[1];
  const frontCourse = courses[2];

  return (
    <div aria-hidden="true" className={cn("h-[586px] w-[486px]", className)}>
      <CourseCard
        course={backCourse}
        variant="highlight"
        className="pointer-events-none absolute left-[2px] top-[90px]"
      />
      <CourseCard
        course={frontCourse}
        variant="highlight"
        className="pointer-events-none absolute left-[113px] top-0"
      />

      <Image
        src="/images/auth/donut.png"
        alt=""
        width={148}
        height={147}
        className="absolute left-[29px] top-[15px]"
      />
      <div className="absolute left-[228px] top-[435px] flex h-[123px] w-[258px] flex-col rounded-2xl bg-accent px-4 pt-[19px]">
        <p className="text-label-m text-ink">Happy Students</p>
        <div className="flex items-center gap-1">
          <span className="text-label-xs text-ink">4.5</span>
          <span className="text-body-xs text-gray-700">(240)</span>
          <StarIcon className="size-4 text-primary" />
        </div>
        <AvatarStack
          avatars={studentAvatars}
          moreLabel="2K+"
          groupLabel="2,000+ happy students"
          size={40}
          overlap={13}
          ringClassName="ring-accent"
          moreClassName="bg-ink text-white"
          className="mt-[7px]"
        />
      </div>

      <Image
        src="/images/auth/swirl.png"
        alt=""
        width={177}
        height={176}
        className="absolute left-[350px] top-[321px]"
      />

      <Image
        src="/images/auth/cone.png"
        alt=""
        width={190}
        height={189}
        className="absolute left-[-25px] top-[397px]"
      />
    </div>
  );
}
