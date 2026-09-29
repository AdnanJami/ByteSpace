import { courses } from "@/data/courses";
import type { CourseDetail } from "@/types/courseDetail";

type DetailContent = Omit<CourseDetail, "course" | "heading" | "level">;

// Copy from the "Build Digital Asset" course pages in the design. It is the only
// course with full detail content, so the other sample courses reuse it for now.
const buildDigitalAssetContent: DetailContent = {
  subtitle: "Unlock the Power of Digital Creation with Expert Guidance",
  rating: 4.8,
  reviewCount: 172,
  studentCount: 199,
  preview: {
    src: "/images/course/preview.png",
    alt: "Course preview video: the instructor introduces the course",
  },
  lessonsSummary: "112 Lessons (24 hours)",
  previewLessons: [
    { number: "01", title: "Introduction to Digital Assets", durationLabel: "12 mins" },
    { number: "02", title: "Design Principles for Impacts", durationLabel: "21 mins" },
    { number: "03", title: "Advanced Techniques in Digital Creation", durationLabel: "16 mins" },
  ],
  moreLessonsLabel: "99 more videos",
  enrollPitch: "Ready to Dive In? Enroll Now and Start Building Your Digital Future!",
  includes: [
    { icon: "resources", label: "Learning Resources" },
    { icon: "videos", label: "Quality Lesson Videos" },
    { icon: "certificate", label: "Certificate of Completion" },
    { icon: "consultation", label: "Private Consultation" },
  ],
  creator: {
    name: "PurePearl Studio",
    slug: "purepearl-studio",
    role: "Professional Creator",
    avatar: "/images/course/creator-purepearl.png",
  },
  about: {
    paragraphs: [
      "Embark on an enlightening exploration into the world of digital creation with our comprehensive course, \"Build Digital Assets: A Comprehensive Guide.\" This transformative learning experience invites you to delve deep into the intricacies of crafting impactful digital content. From laying the groundwork with foundational concepts to mastering advanced techniques, this guide is meticulously curated to empower you with the skills essential for navigating the dynamic landscape of digital asset creation.",
      "In the initial modules, you'll establish a solid foundation by immersing yourself in the foundational concepts that form the backbone of digital asset creation. Understand the fundamental elements that constitute compelling digital content and gain proficiency in leveraging these elements to communicate effectively in the digital realm.",
      "As you progress through the course, you'll ascend to higher levels of expertise, delving into the nuances of design principles that drive impactful creations. Uncover the secrets behind effective visual communication, exploring color theory, typography, and layout strategies that elevate your digital assets to new heights. Engage in hands-on exercises that reinforce your understanding, allowing you to apply these principles in practical scenarios.",
    ],
    sneakPeek: [
      { src: "/images/course/sneak-peek-1.png", alt: "Sketching wireframes on paper" },
      { src: "/images/course/sneak-peek-2.png", alt: "Design components on a laptop screen" },
      { src: "/images/course/sneak-peek-3.png", alt: "A design system shown on a desktop monitor" },
      { src: "/images/course/sneak-peek-4.png", alt: "Colourful mobile app screens on two phones" },
    ],
    keyPoints: [
      "Foundational Concepts",
      "Design Principles Mastery",
      "Advanced Techniques in Digital Creation",
      "Project Showcase and Critique",
      "Optimizing for Various Platforms",
      "Digital Asset Management Best Practices",
      "Monetization Strategies",
      "Capstone Project: Building Your Portfolio",
    ],
  },
  lessons: {
    intro:
      "Immerse yourself in the course content as we break down each module into comprehensive lessons, providing practical insights and hands-on experiences.",
    modules: [
      {
        title: "Module 1: Introduction to Digital Assets",
        description:
          "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
      },
      {
        title: "Module 2: Design Principles for Impact",
        description:
          "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
      },
      {
        title: "Module 4: User-Centric Design Strategies",
        description:
          "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
      },
      {
        title: "Module 5: Interactive Media and Engagement",
        description:
          "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
      },
      {
        title: "Module 6: Project Showcase and Critique",
        description:
          "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
      },
      {
        title: "Module 7: Optimizing Digital Assets for Various Platforms",
        description:
          "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
      },
    ],
    content:
      "Engage with each lesson through captivating video content, detailed textual explanations, and interactive elements. Download resources, complete assignments, and test your understanding with quizzes.",
    progressIntro:
      "Witness your growth as you complete lessons, with an intuitive progress tracking feature guiding you through your learning journey.",
    progressPercent: 55,
  },
  reviews: {
    intro:
      "Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.",
    average: 4.7,
    bars: [
      { stars: 5, count: 720, percent: 92 },
      { stars: 4, count: 120, percent: 36.5 },
      { stars: 3, count: 21, percent: 9.6 },
      { stars: 2, count: 12, percent: 3.5 },
      { stars: 1, count: 16, percent: 5.3 },
    ],
    items: [
      {
        id: "r1",
        name: "PurePearl Studio",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/reviewer-1.png",
        postedLabel: "a year ago",
        rating: 5,
        quote:
          "\"The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!\"",
      },
      {
        id: "r2",
        name: "Albert Flores",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/reviewer-2.png",
        postedLabel: "a year ago",
        rating: 5,
        quote:
          "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
      },
      {
        id: "r3",
        name: "Cody Fisher",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/reviewer-3.png",
        postedLabel: "a year ago",
        rating: 5,
        quote:
          "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
      },
      {
        id: "r4",
        name: "Brooklyn Simmons",
        role: "UI/UX Designer",
        avatar: "/images/reviewers/reviewer-4.png",
        postedLabel: "a year ago",
        rating: 5,
        quote:
          "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
      },
    ],
  },
};

const headings: Record<string, string> = {
  "build-digital-asset": "Build Digital Asset: A Comprehensive Guide",
};

const levels: Record<string, CourseDetail["level"]> = {
  "build-digital-asset": "Intermediate",
};

export function getCourseDetail(slug: string): CourseDetail | null {
  const course = courses.find((item) => item.slug === slug);
  if (!course) return null;
  return {
    ...buildDigitalAssetContent,
    course,
    heading: headings[slug] ?? course.title,
    level: levels[slug] ?? course.level,
  };
}

export const courseSlugs = courses.map((course) => course.slug);
