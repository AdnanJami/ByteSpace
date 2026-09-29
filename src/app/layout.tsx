import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import { Providers } from "./providers";

const poppins = Poppins({
  variable: "--font-poppins-nf",
  subsets: ["latin"],
  weight: ["500", "600"],
});

const satoshi = localFont({
  variable: "--font-satoshi-nf",
  src: [
    {
      path: "../../public/fonts/satoshi/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../public/fonts/satoshi/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  display: "swap",
});

// Logotype only ("ByteSpace" wordmark in the header/footer) — not a body/heading font.
const clashDisplay = localFont({
  variable: "--font-clash-display-nf",
  src: "../../public/fonts/clash-display/ClashDisplay-Bold.woff2",
  weight: "700",
  style: "normal",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ByteSpace — Get Access to Hundreds of Courses",
  description:
    "Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${satoshi.variable} ${clashDisplay.variable} h-full scroll-smooth antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
