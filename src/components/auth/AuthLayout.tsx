import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { CourseCard } from "@/components/course/CourseCard";
import { courses } from "@/data/courses";
import { gridBackgroundStyle } from "@/lib/gridBackground";

export interface AuthLayoutProps {
  promoTitle: string;
  promoDescription: string;
  children: ReactNode;
}

export function AuthLayout({ promoTitle, promoDescription, children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-primary">
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={gridBackgroundStyle}
      />

      <header className="relative flex h-20 items-center px-5 sm:px-10 lg:h-[120px] lg:px-[120px]">
        <Logo />
      </header>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-5 pb-16 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-0 lg:pb-24">
        <div className="flex w-full max-w-[475px] flex-col gap-6 text-center lg:text-left">
          <div className="flex flex-col gap-3">
            <h1 className="text-heading-xs text-gray-50">{promoTitle}</h1>
            <p className="text-body-l text-gray-100">{promoDescription}</p>
          </div>

          <div className="relative hidden h-[460px] lg:block">
            <div className="absolute left-0 top-[90px] w-[373px]">
              <CourseCard course={courses[1]} />
            </div>
            <div className="absolute left-[111px] top-0 w-[373px]">
              <CourseCard course={courses[2]} />
            </div>
          </div>
        </div>

        <div className="w-full max-w-[579px] rounded-[32px] bg-white p-8 shadow-elevated sm:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
