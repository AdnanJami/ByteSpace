import Image from "next/image";
import { partners } from "@/data/partners";

export function PartnerLogos() {
  return (
    <section aria-label="Trusted by" className="bg-gray-50 py-10">
      <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-x-[72px] gap-y-6 px-5">
        {partners.map((partner) => (
          <Image
            key={partner.id}
            src={partner.logo}
            alt={partner.name}
            width={partner.width}
            height={partner.height}
            className="h-auto w-[120px] sm:w-[150px]"
          />
        ))}
      </div>
    </section>
  );
}
