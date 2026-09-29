import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CourseCard } from "@/components/course/CourseCard";
import { CreatorHero } from "@/components/creator/CreatorHero";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SearchToolbar } from "@/components/search/SearchToolbar";
import { getCreator, getCreatorCourses } from "@/data/creators";

export async function generateMetadata({
  params,
}: PageProps<"/creators/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const creator = getCreator(slug);
  return creator
    ? { title: `${creator.name} — ByteSpace`, description: creator.tagline }
    : { title: "Creator not found — ByteSpace" };
}

export default async function CreatorPage({ params }: PageProps<"/creators/[slug]">) {
  const { slug } = await params;
  const creator = getCreator(slug);
  if (!creator) notFound();
  const creatorCourses = getCreatorCourses(creator);

  return (
    <>
      <Header />
      <main>
        <CreatorHero creator={creator} />

        <div className="mx-auto flex max-w-[1200px] flex-col px-5 pb-16 pt-12 sm:px-10 lg:px-0 lg:pb-[61px] lg:pt-[62px]">
          <SearchToolbar />
          <section aria-label={`Courses by ${creator.name}`} className="mt-10">
            <ul className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {creatorCourses.map((course) => (
                <li key={course.id} className="flex w-full justify-center">
                  <CourseCard course={course} />
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
