import type { Metadata } from "next";
import Link from "next/link";
import { CreatorCard } from "@/components/creator/CreatorCard";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SearchHero } from "@/components/search/SearchHero";
import { EmptyState } from "@/components/ui/EmptyState";
import { searchCreators } from "@/data/creators";

export const metadata: Metadata = {
  title: "Find Your Next Creator — ByteSpace",
  description: "Browse ByteSpace creators and their courses.",
};

export default async function CreatorsPage({ searchParams }: PageProps<"/creators">) {
  const { q } = await searchParams;
  const query = (Array.isArray(q) ? q[0] : q)?.trim() ?? "";
  const results = searchCreators(query);

  return (
    <>
      <Header />
      <main>
        <SearchHero
          defaultQuery={query}
          title="Find Your Next Creator"
          action="/creators"
          scopeLabel="Creators"
        />

        <section
          aria-label="Creators"
          className="mx-auto max-w-[1200px] px-5 pb-16 pt-12 sm:px-10 lg:px-0 lg:pb-[72px] lg:pt-[72px]"
        >
          {query && (
            <p aria-live="polite" className="mb-6 text-body-m text-gray-700">
              {results.length === 0
                ? `No creators match “${query}”.`
                : `${results.length} ${results.length === 1 ? "creator matches" : "creators match"} “${query}”.`}
            </p>
          )}

          {results.length === 0 ? (
            <EmptyState
              title="No creators found"
              description="Try a different name or topic."
              action={
                <Link href="/creators" className="text-label-m text-primary hover:underline">
                  Clear search
                </Link>
              }
            />
          ) : (
            <ul className="grid grid-cols-1 justify-items-center gap-10 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((creator) => (
                <li key={creator.slug} className="flex w-full justify-center">
                  <CreatorCard creator={creator} />
                </li>
              ))}
            </ul>
          )}
        </section>
      </main>
      <Footer />
    </>
  );
}
