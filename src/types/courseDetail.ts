import type { Course } from "./course";

export interface LessonPreview {
  number: string;
  title: string;
  durationLabel: string;
}

export interface CourseInclude {
  icon: "resources" | "videos" | "certificate" | "consultation";
  label: string;
}

export interface CourseModule {
  title: string;
  description: string;
}

export interface RatingBar {
  stars: 1 | 2 | 3 | 4 | 5;
  count: number;
  /** Bar fill, 0-100. */
  percent: number;
}

export interface CourseReview {
  id: string;
  name: string;
  role: string;
  avatar: string;
  postedLabel: string;
  rating: number;
  quote: string;
}

export interface CourseCreatorProfile {
  name: string;
  slug: string;
  role: string;
  avatar: string;
}

export interface CourseDetail {
  course: Course;
  heading: string;
  subtitle: string;
  level: Course["level"];
  rating: number;
  reviewCount: number;
  studentCount: number;
  preview: { src: string; alt: string };
  lessonsSummary: string;
  previewLessons: LessonPreview[];
  moreLessonsLabel: string;
  enrollPitch: string;
  includes: CourseInclude[];
  creator: CourseCreatorProfile;
  about: {
    paragraphs: string[];
    sneakPeek: { src: string; alt: string }[];
    keyPoints: string[];
  };
  lessons: {
    intro: string;
    modules: CourseModule[];
    content: string;
    progressIntro: string;
    progressPercent: number;
  };
  reviews: {
    intro: string;
    average: number;
    bars: RatingBar[];
    items: CourseReview[];
  };
}
