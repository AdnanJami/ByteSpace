import Image from "next/image";
import { AvatarStack } from "@/components/ui/AvatarStack";
import { StarIcon } from "@/components/ui/icons/StarIcon";
import { gridBackgroundStyle } from "@/lib/gridBackground";
import { HeroSearchForm } from "./HeroSearchForm";

const heroAvatars = Array.from({ length: 7 }, (_, i) => ({
  src: `/images/hero/hero-avatar-${i + 1}.png`,
  alt: "",
}));

interface OrnamentProps {
  baseSrc: string;
  maskSrc: string;
  color: string;
  style: React.CSSProperties;
  flip?: boolean;
}

function Ornament({ baseSrc, maskSrc, color, style, flip }: OrnamentProps) {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute overflow-hidden rounded-[32px]"
      style={{ ...style, transform: flip ? "scaleX(-1)" : undefined }}
    >
      <Image src={baseSrc} alt="" fill className="object-cover" sizes="400px" />
      <div
        className="absolute inset-0 mix-blend-hard-light"
        style={{
          backgroundColor: color,
          WebkitMaskImage: `url(${maskSrc})`,
          maskImage: `url(${maskSrc})`,
          WebkitMaskSize: "100% 100%",
          maskSize: "100% 100%",
          WebkitMaskRepeat: "no-repeat",
          maskRepeat: "no-repeat",
        }}
      />
    </div>
  );
}

function FloatingCard({
  className,
  style,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`flex flex-col items-start gap-2 rounded-2xl bg-white/95 p-4 shadow-elevated backdrop-blur-sm ${className ?? ""}`}
      style={style}
    >
      {children}
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary scroll-mt-20">
      {/* background grid — decorative */}
      <div aria-hidden="true" className="absolute inset-0" style={gridBackgroundStyle} />

      {/* ===== Mobile / tablet layout (< lg): simple stacked flow ===== */}
      <div className="relative flex flex-col items-center gap-10 px-5 pb-12 pt-12 text-center sm:px-10 lg:hidden">
        <div className="flex flex-col items-center gap-5">
          <h1 className="max-w-[600px] text-display-xs text-white">
            Get Access to Hundreds Courses Available
          </h1>
          <p className="max-w-[520px] text-body-m text-gray-100">
            Unlock your creativity, gain valuable knowledge, and grow your business with our
            wide range of courses.
          </p>
        </div>

        <HeroSearchForm />

        <div className="relative mt-2 w-full max-w-[420px]">
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 size-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
          />
          <div className="relative aspect-[578/541] w-full overflow-hidden rounded-[32px]">
            <Image
              src="/images/hero/hero-person.png"
              alt="A ByteSpace learner wearing headphones, holding a laptop"
              fill
              priority
              sizes="90vw"
              className="object-cover"
            />
          </div>

          <FloatingCard className="absolute left-0 top-[8%] max-w-[65%]">
            <p className="text-label-s text-ink">UI/UX Design</p>
            <p className="flex items-center gap-2 text-body-xs text-gray-700">
              <span>200 Courses</span>
              <span aria-hidden="true">•</span>
              <span>1000+ Students</span>
            </p>
          </FloatingCard>

          <FloatingCard className="absolute right-0 top-[32%]">
            <p className="text-label-s text-ink">Learning Progress</p>
            <p className="text-heading-xs text-ink">55%</p>
            <div className="h-2 w-[140px] overflow-hidden rounded-full bg-gray-50">
              <div className="h-full w-[56%] rounded-full bg-accent" />
            </div>
          </FloatingCard>

          <FloatingCard className="absolute -bottom-6 left-0 w-[70%]">
            <p className="text-label-m text-ink">Happy Students</p>
            <div className="flex items-center gap-1">
              <span className="text-body-xs text-ink">4.5</span>
              <span className="text-body-xs text-gray-700">(240)</span>
              <StarIcon className="size-4 text-accent" />
            </div>
            <AvatarStack
              avatars={heroAvatars}
              moreLabel="2K+"
              groupLabel="2,000+ happy students enrolled"
              size={28}
            />
          </FloatingCard>
        </div>
      </div>

      {/* ===== Desktop layout (lg+): absolute, matching the 1440x1024 Figma frame ===== */}
      <div className="relative hidden lg:block lg:h-[1024px]">
        <Ornament
          baseSrc="/images/hero/ornament-donut-base.png"
          maskSrc="/images/hero/ornament-mask-1.png"
          color="#F5F5F6"
          style={{ left: 1127, bottom: 22, width: 330, height: 330 }}
        />
        <Ornament
          baseSrc="/images/hero/ornament-cone-base.png"
          maskSrc="/images/hero/ornament-mask-2.png"
          color="#D4FB20"
          style={{ left: -118, top: 221, width: 385, height: 385 }}
        />
        <Ornament
          baseSrc="/images/hero/ornament-cone-base.png"
          maskSrc="/images/hero/ornament-mask-3.png"
          color="#F5F5F6"
          style={{ left: 183, top: 477, width: 175, height: 175 }}
          flip
        />
        <Ornament
          baseSrc="/images/hero/cone-1.png"
          maskSrc="/images/hero/cone-mask-1.png"
          color="#F5F5F6"
          style={{ left: 18, bottom: 0, width: 342, height: 342 }}
        />
        <Ornament
          baseSrc="/images/hero/cone-2.png"
          maskSrc="/images/hero/cone-mask-2.png"
          color="#D4FB20"
          style={{ left: 1231, top: 221, width: 370, height: 370 }}
        />
        <Ornament
          baseSrc="/images/hero/cone-3.png"
          maskSrc="/images/hero/cone-mask-3.png"
          color="#F5F5F6"
          style={{ left: 1106, top: 464, width: 188, height: 188 }}
        />

        <div
          aria-hidden="true"
          className="absolute left-1/2 size-[1149px] -translate-x-1/2 rounded-full bg-accent"
          style={{ top: 582 }}
        />

        <div className="absolute left-1/2 top-[169px] flex w-[1200px] -translate-x-1/2 flex-col items-center gap-[60px]">
          <div className="flex flex-col items-center gap-8 text-center">
            <h1 className="w-[935px] text-heading-l text-white">
              Get Access to Hundreds Courses Available
            </h1>
            <p className="text-body-l text-gray-100">
              Unlock your creativity, gain valuable knowledge, and grow your business with our
              wide range of courses.
            </p>
          </div>
          <HeroSearchForm />
        </div>

        <div
          className="absolute left-1/2 -translate-x-1/2 overflow-hidden rounded-[32px] shadow-elevated"
          style={{ top: 512, width: 578, height: 541 }}
        >
          <Image
            src="/images/hero/hero-person.png"
            alt="A ByteSpace learner wearing headphones, holding a laptop"
            fill
            priority
            sizes="578px"
            className="object-cover"
          />
        </div>

        <FloatingCard style={{ left: 404, top: 639 }} className="absolute">
          <p className="text-label-s text-ink">UI/UX Design</p>
          <p className="flex items-center gap-2 text-body-xs text-gray-700">
            <span>200 Courses</span>
            <span aria-hidden="true">•</span>
            <span>1000+ Students</span>
          </p>
        </FloatingCard>

        <FloatingCard style={{ left: 842, top: 651 }} className="absolute">
          <p className="text-label-s text-ink">Learning Progress</p>
          <p className="text-[48px] leading-[1.2] tracking-[-0.48px] text-ink font-poppins font-semibold">
            55%
          </p>
          <div className="h-2 w-[200px] overflow-hidden rounded-full bg-gray-50">
            <div className="h-full w-[56%] rounded-full bg-accent" />
          </div>
        </FloatingCard>

        <FloatingCard style={{ left: 328, top: 837, width: 258 }} className="absolute">
          <p className="text-label-m text-ink">Happy Students</p>
          <div className="flex items-center gap-1">
            <span className="text-body-xs text-ink">4.5</span>
            <span className="text-body-xs text-gray-700">(240)</span>
            <StarIcon className="size-4 text-accent" />
          </div>
          <AvatarStack
            avatars={heroAvatars}
            moreLabel="2K+"
            groupLabel="2,000+ happy students enrolled"
            size={32}
          />
        </FloatingCard>
      </div>
    </section>
  );
}
