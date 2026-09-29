import type { CSSProperties } from "react";

// The design's grid decoration is drawn as one CSS gradient instead of dozens of
// line elements. Tiling the source SVG was also slow to rasterize on tall mobile
// layouts (mobile LCP went from 4.7s to under 2s after switching).
export const gridBackgroundStyle: CSSProperties = {
  backgroundImage:
    "repeating-linear-gradient(to right, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 120px), repeating-linear-gradient(to bottom, rgba(255,255,255,0.12) 0, rgba(255,255,255,0.12) 2px, transparent 2px, transparent 120px)",
};
