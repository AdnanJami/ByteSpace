import Image from "next/image";
import { growthStats } from "@/data/growth";

export function GrowthStats() {
  return (
    <div className="flex flex-col items-center gap-12 lg:flex-row lg:items-center lg:gap-16">
      <div className="flex flex-col items-start gap-10 lg:w-[574px] lg:shrink-0">
        <div className="flex flex-col items-start gap-4 text-left">
          <h2 className="text-heading-s text-ink lg:w-[577px] lg:text-heading-m">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="max-w-[477px] text-body-m text-gray-700 lg:text-body-l">
            Explore our curated selection of courses tailored to enhance your capabilities and
            accelerate your career journey. Whether you are looking to sharpen specific skills,
            gain industry expertise, or embark on a new career path entirely, we have the
            resources you need.
          </p>
        </div>

        <dl className="flex gap-8 sm:gap-14">
          {growthStats.map((stat) => (
            <div key={stat.id} className="flex flex-col items-start">
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-poppins text-display-xs text-primary">{stat.value}</dd>
              <dd className="text-body-l text-gray-700">{stat.label}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="relative h-[380px] w-full max-w-[440px] shrink-0 sm:h-[460px] lg:h-[552px] lg:w-[621px] lg:max-w-none">
        <div className="absolute left-1/2 top-0 h-[85%] w-[75%] -translate-x-1/2 overflow-hidden rounded-[32px] shadow-elevated sm:left-auto sm:right-0 sm:translate-x-0">
          <Image
            src="/images/hero/hero-person.png"
            alt="A ByteSpace creator recording a course"
            fill
            sizes="(min-width: 1024px) 578px, 60vw"
            className="object-cover"
          />
        </div>

        <div className="absolute right-2 top-[38%] flex flex-col items-start gap-2 rounded-2xl bg-white p-4 shadow-elevated sm:right-6">
          <p className="text-label-s text-ink">Learning Progress</p>
          <p className="text-[48px] font-semibold leading-[1.2] tracking-[-0.48px] text-ink">
            55%
          </p>
          <div className="h-2 w-[160px] overflow-hidden rounded-full bg-gray-50">
            <div className="h-full w-[56%] rounded-full bg-accent" />
          </div>
        </div>

        <div
          aria-hidden="true"
          className="absolute left-0 top-1/2 hidden size-[130px] -translate-y-1/2 overflow-hidden rounded-full lg:block"
        >
          <Image src="/images/growth/growth-stats-mask.png" alt="" fill className="object-cover" />
          <div className="absolute inset-0 bg-accent mix-blend-hard-light" />
        </div>
      </div>
    </div>
  );
}
