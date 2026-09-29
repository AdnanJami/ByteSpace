import Image from "next/image";
import { cn } from "@/lib/utils";

export interface AvatarStackProps {
  avatars: { src: string; alt: string }[];
  /** Trailing bubble showing an overflow count, e.g. "2K+" */
  moreLabel?: string;
  /** Accessible label for the whole group, e.g. "2,000+ enrolled students" */
  groupLabel: string;
  size?: number;
  /** How far each avatar tucks under the next, in px. */
  overlap?: number;
  /** Ring colour separating overlapping avatars; match it to the background. */
  ringClassName?: string;
  /** Colours of the overflow bubble. */
  moreClassName?: string;
  className?: string;
}

export function AvatarStack({
  avatars,
  moreLabel,
  groupLabel,
  size = 32,
  overlap = 8,
  ringClassName = "ring-white",
  moreClassName = "bg-accent text-ink",
  className,
}: AvatarStackProps) {
  return (
    <div
      role="img"
      aria-label={groupLabel}
      className={cn("flex items-center", className)}
      style={{ paddingRight: overlap }}
    >
      {avatars.map((avatar, index) => (
        <div
          key={avatar.src + index}
          className={cn("shrink-0 overflow-hidden rounded-full ring-2", ringClassName)}
          style={{ width: size, height: size, marginRight: -overlap }}
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
          className={cn(
            "flex shrink-0 items-center justify-center rounded-full text-label-xs ring-2",
            ringClassName,
            moreClassName,
          )}
          style={{ width: size, height: size, marginRight: -overlap }}
          aria-hidden="true"
        >
          {moreLabel}
        </div>
      )}
    </div>
  );
}
