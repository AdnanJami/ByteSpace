import { cn } from "@/lib/utils";

export function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      role="presentation"
      className={cn("animate-pulse rounded-xl bg-gray-100", className)}
      {...props}
    />
  );
}
