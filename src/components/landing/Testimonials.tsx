import Image from "next/image";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-vulcan-50 py-16 lg:py-24">
      <div className="relative mx-auto flex max-w-[1200px] flex-col gap-16 px-5 sm:px-10 lg:px-0">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <h2 className="max-w-[577px] text-heading-s text-ink lg:text-heading-m">
            Discover What Our Community Is Saying
          </h2>
          <p className="max-w-[580px] text-body-m text-gray-700 lg:text-body-l">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what
            we do. Hear directly from those who have experienced the transformative journey of
            learning and creating on our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.id}
              className="flex flex-col gap-6 rounded-3xl border border-gray-200 bg-white p-6"
            >
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.avatar}
                  alt=""
                  width={80}
                  height={80}
                  className="size-20 shrink-0 rounded-full object-cover"
                />
                <figcaption className="flex flex-col">
                  <span className="text-label-l text-ink">{testimonial.name}</span>
                  <span className="text-body-s text-gray-700">{testimonial.role}</span>
                </figcaption>
              </div>
              <blockquote className="text-body-m text-gray-700">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
