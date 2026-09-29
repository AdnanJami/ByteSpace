import type { ComponentType, SVGProps } from "react";
import { FilterIcon } from "@/components/ui/icons/FilterIcon";
import { LevelIcon } from "@/components/ui/icons/LevelIcon";
import { ShapesIcon } from "@/components/ui/icons/ShapesIcon";
import { SortIcon } from "@/components/ui/icons/SortIcon";

interface ToolbarButtonProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  label: string;
}

function ToolbarButton({ icon: Icon, label }: ToolbarButtonProps) {
  return (
    <button
      type="button"
      className="flex h-12 shrink-0 items-center gap-1 rounded-full border border-gray-200 bg-white px-[15px] text-body-m text-ink transition-colors hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
    >
      <Icon className="size-6" />
      {label}
    </button>
  );
}

// Filter / level / category / sort controls. Static in this version of the site.
export function SearchToolbar() {
  return (
    <div className="flex flex-wrap items-center justify-between gap-4">
      <div className="flex flex-wrap items-center gap-4">
        <ToolbarButton icon={FilterIcon} label="Filter" />
        <ToolbarButton icon={LevelIcon} label="Level" />
        <ToolbarButton icon={ShapesIcon} label="Category" />
      </div>
      <ToolbarButton icon={SortIcon} label="Most relevant" />
    </div>
  );
}
