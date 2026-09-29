import { StarSharpIcon } from "@/components/ui/icons/StarSharpIcon";
import { cn } from "@/lib/utils";

export interface StarRowProps {
  /** Accessible description, e.g. "Rated 5 out of 5". */
  label: string;
  count?: number;
  className?: string;
  starClassName?: string;
}

// The design draws every star row as five solid dark stars.
export function StarRow({ label, count = 5, className, starClassName = "size-6" }: StarRowProps) {
  return (
    <span role="img" aria-label={label} className={cn("flex gap-1 text-gray-700", className)}>
      {Array.from({ length: count }, (_, i) => (
        <StarSharpIcon key={i} className={starClassName} />
      ))}
    </span>
  );
}
