import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarStackProps {
  avatars: { src: string; alt: string }[];
  /** Trailing bubble showing an overflow count, e.g. "2K+" */
  moreLabel?: string;
  /** Accessible label for the whole group, e.g. "2,000+ enrolled students" */
  groupLabel: string;
  size?: number;
  className?: string;
}

export function AvatarStack({
  avatars,
  moreLabel,
  groupLabel,
  size = 32,
  className,
}: AvatarStackProps) {
  return (
    <div
      role="img"
      aria-label={groupLabel}
      className={cn("flex items-center", className)}
      style={{ paddingRight: moreLabel ? 8 : 0 }}
    >
      {avatars.map((avatar, index) => (
        <div
          key={avatar.src + index}
          className="-mr-2 shrink-0 overflow-hidden rounded-full ring-2 ring-white"
          style={{ width: size, height: size }}
        >
          <Image
            src={avatar.src}
            alt=""
            width={size}
            height={size}
            className="size-full object-cover"
          />
        </div>
      ))}
      {moreLabel && (
        <div
          className="-mr-2 flex shrink-0 items-center justify-center rounded-full bg-accent text-label-xs text-ink ring-2 ring-white"
          style={{ width: size, height: size }}
          aria-hidden="true"
        >
          {moreLabel}
        </div>
      )}
    </div>
  );
}
