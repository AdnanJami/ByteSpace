import Image from "next/image";
import { PlayCircleIcon } from "@/components/ui/icons/PlayCircleIcon";

export interface CoursePreviewProps {
  src: string;
  alt: string;
}

export function CoursePreview({ src, alt }: CoursePreviewProps) {
  return (
    <div className="relative aspect-[720/479] w-full overflow-hidden rounded-3xl bg-gray-100 xl:ml-[5px] xl:w-[720px]">
      <Image src={src} alt={alt} fill priority sizes="(min-width: 1280px) 720px, 100vw" className="object-cover" />
      {/* Static: there is no video to play yet. */}
      <button
        type="button"
        aria-label="Play course preview"
        className="absolute left-1/2 top-1/2 flex size-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-3xl bg-white/15 backdrop-blur-md transition-colors hover:bg-white/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white xl:left-[324px] xl:top-[204px] xl:translate-x-0 xl:translate-y-0"
      >
        <PlayCircleIcon className="size-[72px] text-violet-50" />
      </button>
    </div>
  );
}
