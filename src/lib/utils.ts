import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Our type scale (globals.css) adds font sizes like `text-label-m`. Without this,
// tailwind-merge reads them as text *colours* and drops them (or the real colour)
// whenever both appear, e.g. cn("text-label-m", "text-ink").
const fontSizes = [
  "heading-l",
  "heading-m",
  "heading-s",
  "heading-xs",
  "display-s",
  "display-xs",
  "body-l",
  "body-m",
  "body-s",
  "body-xs",
  "label-xl",
  "label-l",
  "label-m",
  "label-s",
  "label-xs",
];

const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: fontSizes }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
