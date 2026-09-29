import type { SVGProps } from "react";

export interface FacebookIconProps extends SVGProps<SVGSVGElement> {
  /** Single-colour version that follows `currentColor`. */
  mono?: boolean;
}

export function FacebookIcon({ mono = false, ...props }: FacebookIconProps) {
  return (
    <svg viewBox="0 0 40 40" aria-hidden="true" {...props}>
      <circle cx="20" cy="20" r="20" fill={mono ? "currentColor" : "#1877F2"} />
      <path
        fill="#fff"
        d="M25.67 25.78l.9-5.78h-5.4v-3.76c0-1.58.62-3.13 3.1-3.13h2.4V8.15S24.5 7.6 22.4 7.6c-4.36 0-7.2 2.64-7.2 7.42v4h-4.85v5.78h4.84V38a19.4 19.4 0 0 0 5.97 0V25.78h4.5z"
      />
    </svg>
  );
}
