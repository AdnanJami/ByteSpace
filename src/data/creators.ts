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
];

export function getCreator(slug: string): Creator | null {
  return creators.find((creator) => creator.slug === slug) ?? null;
}

export function getCreatorCourses(creator: Creator): Course[] {
  return creator.courseSlugs
    .map((slug) => courses.find((course) => course.slug === slug))
    .filter((course): course is Course => course !== undefined);
}
