import type { ReactNode } from "react";
import { Logo } from "@/components/layout/Logo";
import { gridBackgroundStyle } from "@/lib/gridBackground";
import { AuthIllustration } from "./AuthIllustration";

export interface AuthLayoutProps {
  promoTitle: string;
  promoDescription: string;
  children: ReactNode;
}

export function AuthLayout({ promoTitle, promoDescription, children }: AuthLayoutProps) {
  return (
    <div className="relative min-h-dvh overflow-hidden bg-primary">
      <div aria-hidden="true" className="absolute inset-0" style={gridBackgroundStyle} />

      <header className="relative flex h-20 items-center px-5 sm:px-10 lg:h-[120px] lg:items-start lg:px-[120px] lg:pt-[35px]">
        <Logo markOnly />
      </header>

      <div className="relative mx-auto flex max-w-[1200px] flex-col items-center gap-12 px-5 pb-16 sm:px-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8 lg:px-0 lg:pb-[120px]">
        <div className="relative flex w-full max-w-[486px] flex-col gap-3 text-center lg:h-[771px] lg:text-left">
          <h1 className="text-heading-xs text-gray-50">{promoTitle}</h1>
          <p className="text-body-l text-gray-100">{promoDescription}</p>
          <AuthIllustration className="absolute left-0 top-[185px] hidden lg:block" />
        </div>

        <div className="flex w-full max-w-[579px] flex-col rounded-[32px] bg-white p-8 sm:px-[63px] sm:pb-[41px] sm:pt-[62px] lg:h-[784px]">
          {children}
        </div>
      </div>
    </div>
  );
}
