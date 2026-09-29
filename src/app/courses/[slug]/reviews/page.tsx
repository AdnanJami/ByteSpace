import Image from "next/image";
import { notFound } from "next/navigation";
import { ReviewFilterChips } from "@/components/course-detail/ReviewFilterChips";
import { StarRow } from "@/components/ui/StarRow";
import { getCourseDetail } from "@/data/courseDetails";

export default async function CourseReviewsPage({ params }: PageProps<"/courses/[slug]/reviews">) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();
  const { reviews } = detail;

  return (
    <div className="mt-[38px] flex flex-col gap-[22px] pb-16 xl:pb-[91px]">
      <h2 className="text-heading-xs text-ink">What Learners Are Saying</h2>
      <p className="text-body-m leading-[26px] text-gray-700">{reviews.intro}</p>

      <section
        aria-label="Rating summary"
        className="mt-0.5 flex flex-col gap-6 rounded-3xl border border-gray-200 p-6 sm:flex-row sm:items-center sm:px-10 sm:py-10"
      >
        <div className="flex h-[140px] w-[129px] shrink-0 flex-col items-center justify-center rounded-lg bg-accent">
          <p className="text-body-s text-ink">Ratings</p>
          <p className="font-poppins text-[40px] font-semibold leading-none tracking-[-0.4px] text-ink">
            {reviews.average}
          </p>
        </div>
        <ul className="flex flex-1 flex-col gap-1.5">
          {reviews.bars.map((bar) => (
            <li key={bar.stars} className="flex items-center gap-3 sm:gap-[22px]">
              <div className="h-2 flex-1 overflow-hidden rounded-full bg-gray-100">
                <div className="h-full rounded-full bg-accent" style={{ width: `${bar.percent}%` }} />
              </div>
              <StarRow
                label={`${bar.stars} star reviews`}
                className="shrink-0 gap-0.5 sm:gap-1"
                starClassName="size-4 sm:size-6"
              />
              <span className="w-8 shrink-0 text-right text-body-m text-gray-700 sm:w-10">{bar.count}</span>
            </li>
          ))}
        </ul>
      </section>

      <h2 className="text-heading-xs text-ink">Individual Reviews:</h2>
      <ReviewFilterChips />

      <ul className="mt-[7px] flex flex-col gap-[25px]">
        {reviews.items.map((review) => (
          <li key={review.id} className="flex flex-col gap-6 rounded-3xl border border-gray-200 p-6 sm:p-10">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <Image
                  src={review.avatar}
                  alt=""
                  width={52}
                  height={52}
                  className="size-[52px] rounded-full object-cover"
                />
                <div>
                  <p className="text-label-l text-ink">{review.name}</p>
                  <p className="text-body-m text-gray-700">{review.role}</p>
                </div>
              </div>
              <p className="text-body-m text-gray-700">{review.postedLabel}</p>
            </div>
            <StarRow label={`Rated ${review.rating} out of 5`} count={review.rating} />
            <p className="text-body-m leading-[26px] text-gray-700">{review.quote}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
