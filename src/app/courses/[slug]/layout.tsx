import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseIntro } from "@/components/course-detail/CourseIntro";
import { CoursePreview } from "@/components/course-detail/CoursePreview";
import { CourseSidebar } from "@/components/course-detail/CourseSidebar";
import { CourseTabs } from "@/components/course-detail/CourseTabs";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { getCourseDetail } from "@/data/courseDetails";
import { gridBackgroundStyle } from "@/lib/gridBackground";

export async function generateMetadata({
  params,
}: LayoutProps<"/courses/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  return detail
    ? { title: `${detail.heading} — ByteSpace`, description: detail.subtitle }
    : { title: "Course not found — ByteSpace" };
}

// Shared by the About / Lessons / Reviews tabs. On wide screens the blue band
// covers the intro and preview rows, and the sidebar card spans from the
// preview row down into the white content row, overlapping the band's edge.
export default async function CourseLayout({ children, params }: LayoutProps<"/courses/[slug]">) {
  const { slug } = await params;
  const detail = getCourseDetail(slug);
  if (!detail) notFound();

  return (
    <>
      <Header />
      <main className="grid grid-cols-[20px_minmax(0,1fr)_20px] sm:grid-cols-[40px_minmax(0,1fr)_40px] xl:grid-cols-[minmax(0,1fr)_725px_63px_412px_minmax(0,1fr)]">
        <div
          aria-hidden="true"
          className="relative col-[1/-1] row-[1/3] bg-primary"
        >
          <div className="absolute inset-0" style={gridBackgroundStyle} />
        </div>

        <div className="relative col-[2] row-[1] xl:col-[2/5]">
          <CourseIntro detail={detail} />
        </div>

        <div className="relative col-[2] row-[2] pb-12 xl:pb-[62px]">
          <CoursePreview src={detail.preview.src} alt={detail.preview.alt} />
        </div>

        <div className="relative col-[2] row-[3] mt-12 self-start xl:col-[4] xl:row-[2/4] xl:mt-0">
          <CourseSidebar detail={detail} />
        </div>

        <div className="col-[2] row-[4] pt-12 xl:row-[3] xl:pt-[79px]">
          <CourseTabs slug={slug} />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
}
