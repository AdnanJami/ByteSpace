import type { SVGProps } from "react";

export function LevelIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" {...props}>
      <path
        d="M13.75 3.33333H16.25V16.6667H13.75V3.33333ZM3.75 11.6667H6.25V16.6667H3.75V11.6667ZM8.75 7.5H11.25V16.6667H8.75V7.5Z"
        fill="currentColor"
      />
    </svg>
  );
}
