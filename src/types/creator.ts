export interface Creator {
  slug: string;
  name: string;
  badge: string;
  tagline: string;
  avatar: string;
  bio: string[];
  productCount: number;
  followerCount: number;
  /** Slugs of the courses shown on the profile. */
  courseSlugs: string[];
}
