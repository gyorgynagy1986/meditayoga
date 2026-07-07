import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArchPlaceholder from "@/components/ArchPlaceholder";
import { instructors, site } from "@/lib/data";

export function generateStaticParams() {
  return instructors.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const instructor = instructors.find((i) => i.slug === slug);
  if (!instructor) return { title: "Oktató" };
  return {
    title: `${instructor.name} – oktató`,
    description: instructor.bio,
  };
}

export default async function InstructorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const idx = instructors.findIndex((i) => i.slug === slug);
  if (idx === -1) notFound();

  const instructor = instructors[idx];
  const prev = instructors[(idx - 1 + instructors.length) % instructors.length];
  const next = instructors[(idx + 1) % instructors.length];

  return (
    <>
      <section className="mx-auto max-w-6xl px-4 pt-12 sm:px-6 md:pt-20">
        <Link
          href="/oktatok"
          className="text-xs font-semibold uppercase tracking-[0.2em] text-taupe-500 transition-colors hover:text-mint-700"
        >
          ← Oktatóink
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-[2fr_3fr] md:gap-20">
          <div>
            <div className="sticky top-28">
              <ArchPlaceholder
                initial={instructor.name.charAt(0)}
                className="aspect-[3/4] w-full max-w-sm"
              />
            </div>
          </div>

          <div className="pb-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-mint-700">
              {instructor.role}
            </p>
            <h1 className="mt-3 font-serif text-5xl leading-tight text-ink-900 sm:text-6xl">
              {instructor.name}
            </h1>

            <ul className="mt-6 flex flex-wrap gap-2">
              {instructor.classes.map((c) => (
                <li
                  key={c}
                  className="rounded-full bg-mint-100 px-3.5 py-1.5 text-xs font-medium text-mint-800"
                >
                  {c}
                </li>
              ))}
            </ul>

            <div className="mt-10 space-y-6 leading-8 text-ink-700">
              {instructor.story.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              <Link
                href={site.bookingUrl}
                className="rounded-full bg-mint-700 px-9 py-4 text-center text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
              >
                Foglalás {instructor.name} órájára
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lapozás oktatók között */}
      <section className="mx-auto max-w-6xl px-4 pb-20 pt-16 sm:px-6 md:pb-28">
        <div className="flex items-center justify-between border-t border-sand-200 pt-8">
          <Link
            href={`/oktatok/${prev.slug}`}
            className="group text-left"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-taupe-400">
              ← Előző
            </p>
            <p className="mt-1 font-serif text-2xl text-ink-900 transition-colors group-hover:text-mint-700">
              {prev.name}
            </p>
          </Link>
          <Link
            href={`/oktatok/${next.slug}`}
            className="group text-right"
          >
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.25em] text-taupe-400">
              Következő →
            </p>
            <p className="mt-1 font-serif text-2xl text-ink-900 transition-colors group-hover:text-mint-700">
              {next.name}
            </p>
          </Link>
        </div>
      </section>
    </>
  );
}
