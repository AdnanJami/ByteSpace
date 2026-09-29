import { courses } from "@/data/courses";
import type { Course } from "@/types/course";
import type { Creator } from "@/types/creator";

export const creators: Creator[] = [
  {
    slug: "purepearl-studio",
    name: "PurePearl Studio",
    badge: "Creator",
    tagline: "Passionate UI/UX, Web designer",
    avatar: "/images/creators/purepearl-studio.png",
    bio: [
      "Welcome to the creative world of PurePearl Studio. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together!",
      "Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.",
    ],
    productCount: 3,
    followerCount: 12,
    courseSlugs: courses.map((course) => course.slug),
  },
  // Sample creators for the directory. They haven't published courses yet.
  ...[
    {
      slug: "brightline-studio",
      name: "Brightline Studio",
      tagline: "Brand identity & illustration",
      avatar: "/images/hero/hero-avatar-1.png",
      followerCount: 48,
    },
    {
      slug: "motion-muse",
      name: "Motion Muse",
      tagline: "Animation and motion graphics",
      avatar: "/images/hero/hero-avatar-6.png",
      followerCount: 31,
    },
    {
      slug: "canvas-and-code",
      name: "Canvas & Code",
      tagline: "Creative coding for designers",
      avatar: "/images/hero/hero-avatar-3.png",
      followerCount: 27,
    },
    {
      slug: "northwind-media",
      name: "Northwind Media",
      tagline: "Social media & content marketing",
      avatar: "/images/hero/hero-avatar-4.png",
      followerCount: 19,
    },
    {
      slug: "byte-kitchen",
      name: "Byte Kitchen",
      tagline: "Cooking classes, step by step",
      avatar: "/images/hero/hero-avatar-5.png",
      followerCount: 12,
    },
  ].map(
    (creator): Creator => ({
      ...creator,
      badge: "Creator",
      bio: [
        `Welcome to ${creator.name}. New courses are on the way — follow along to hear when they launch.`,
      ],
      productCount: 0,
      courseSlugs: [],
    }),
  ),
];

export function getCreator(slug: string): Creator | null {
  return creators.find((creator) => creator.slug === slug) ?? null;
}

export function getCreatorCourses(creator: Creator): Course[] {
  return creator.courseSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is Course => course !== undefined);
}

export function searchCreators(query: string): Creator[] {
  const term = query.trim().toLowerCase();
  if (!term) return creators;
  return creators.filter(
    (creator) =>
      creator.name.toLowerCase().includes(term) || creator.tagline.toLowerCase().includes(term),
  );
}
