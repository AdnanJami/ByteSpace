import { Skeleton } from "@/components/ui/Skeleton";

export function CourseCardSkeleton() {
  return (
    <div className="flex w-full max-w-[373px] flex-col gap-4 rounded-3xl border border-gray-200 p-[15px]">
      <Skeleton className="h-[195px] w-full rounded-xl" />
      <Skeleton className="h-5 w-3/4" />
      <Skeleton className="h-3 w-1/2" />
      <Skeleton className="h-8 w-2/3 rounded-full" />
      <Skeleton className="h-5 w-1/3" />
    </div>
  );
}
