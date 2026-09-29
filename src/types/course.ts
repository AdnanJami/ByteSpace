export interface CourseCreator {
  name: string;
  avatar: string;
}

export interface Course {
  id: string;
  slug: string;
  title: string;
  thumbnail: string;
  category: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  durationLabel: string;
  lessonCount: number;
  commentCount: number;
  creator: CourseCreator;
  enrolledAvatars: string[];
  enrolledCountLabel: string;
  price: number;
  currency: string;
  priceUnit: string;
  rating: number;
}
