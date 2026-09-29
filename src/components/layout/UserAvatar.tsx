import { cn } from "@/lib/utils";

export interface UserAvatarProps {
  name: string;
  className?: string;
}

function initials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export function UserAvatar({ name, className }: UserAvatarProps) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        "flex size-10 shrink-0 items-center justify-center rounded-full bg-accent text-label-s text-ink",
        className,
      )}
    >
      {initials(name)}
    </span>
  );
}
