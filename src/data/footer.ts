import type { FooterLinkGroup } from "@/types/nav";

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Browse",
    links: [
      { label: "Featured Courses", href: "/courses" },
      { label: "Featured Categories", href: "/courses" },
      { label: "Business", href: "/courses?category=business" },
      { label: "IT", href: "/courses?category=it-software" },
      { label: "Design", href: "/courses?category=design" },
      { label: "Development", href: "/courses?category=development" },
      { label: "Marketing", href: "/courses?category=marketing" },
      { label: "Photography", href: "/courses?category=photography" },
      { label: "Finance", href: "/courses?category=finance" },
      { label: "Sport", href: "/courses?category=sport" },
    ],
  },
  {
    title: "Platform",
    links: [
      { label: "Become a Creator", href: "/signup" },
      { label: "Affiliate Program", href: "/affiliate" },
      { label: "Contact", href: "/contact" },
      { label: "Help", href: "/help" },
      { label: "About", href: "/about" },
    ],
  },
];

export const legalLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookies Settings", href: "/cookies" },
];
