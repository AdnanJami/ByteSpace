import { GrowthStats } from "./GrowthStats";
import { CreatorTools } from "./CreatorTools";

export function GrowthSection() {
  return (
    <section
      className="relative overflow-hidden py-16 lg:py-24"
      style={{
        background:
          "radial-gradient(60% 60% at 15% 20%, #F1F4FE 0%, transparent 60%), radial-gradient(50% 50% at 90% 80%, #F5F2FF 0%, transparent 60%), #FAFBFF",
      }}
    >
      <div className="mx-auto flex max-w-[1200px] flex-col gap-20 px-5 sm:px-10 lg:gap-24 lg:px-0">
        <GrowthStats />
        <CreatorTools />
      </div>
    </section>
  );
}
