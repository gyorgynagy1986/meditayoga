import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Reveal from "@/components/Reveal";
import { site, studioSpaces, studioValues } from "@/lib/data";

export const metadata: Metadata = {
  title: "A stúdió",
  description:
    "A MEDITA Jóga stúdió: meleg bézs falak, tölgy, len és kerámia – letisztult, modern tér a nyugalom, az egyensúly és az energia jegyében.",
};

export default function StudioPage() {
  return (
    <>
      {/* Fejléc */}
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">A stúdió</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Nyugalom · Egyensúly · Energia
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-700">
            Letisztult, meleg, modern tér természetes anyagokkal – ahol minden
            részlet a lelassulást és az elmélyült gyakorlást szolgálja.
          </p>
        </div>
      </section>

      {/* Design koncepció */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {studioValues.map((v, i) => (
            <Reveal key={v.name} delay={i * 120}>
              <div className="text-center md:text-left">
                <p className="font-serif text-5xl text-sand-300">0{i + 1}</p>
                <h2 className="mt-3 font-serif text-2xl text-ink-900">{v.name}</h2>
                <p className="mt-3 text-sm leading-6 text-ink-700">{v.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </section>

      {/* Terek */}
      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6 md:pb-24">
        <div className="space-y-20 md:space-y-28">
          {studioSpaces.map((s, i) => (
            <div
              key={s.name}
              className={`grid items-center gap-10 md:grid-cols-2 md:gap-16 ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <Reveal>
                <div className="relative mx-auto aspect-[4/3] w-full overflow-hidden rounded-[2rem]">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sand-50/80 to-transparent" />
                </div>
              </Reveal>
              <Reveal delay={150}>
                <div className={i % 2 === 1 ? "md:text-right" : ""}>
                  <p className="font-serif text-5xl text-sand-300">0{i + 1}</p>
                  <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl">{s.name}</h2>
                  <p className="mt-4 max-w-md leading-7 text-ink-700 md:inline-block">{s.desc}</p>
                </div>
              </Reveal>
            </div>
          ))}
        </div>
        <p className="mt-16 text-center text-xs tracking-wide text-taupe-400">
          A képek látványtervek – a kész stúdió fotói a nyitás után kerülnek fel.
        </p>
      </section>

      {/* CTA */}
      <section className="bg-mint-100 py-20 md:py-24">
        <div className="mx-auto max-w-2xl px-4 text-center sm:px-6">
          <h2 className="font-serif text-3xl leading-tight text-ink-900 sm:text-5xl">
            Gyere el, és tapasztald meg élőben
          </h2>
          <p className="mt-4 leading-7 text-ink-700">{site.openingNote}</p>
          <Link
            href={site.bookingUrl}
            className="mt-8 inline-block rounded-full bg-mint-700 px-10 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-mint-800"
          >
            Órafoglalás
          </Link>
        </div>
      </section>
    </>
  );
}
