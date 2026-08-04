import type { Metadata } from "next";
import Image from "next/image";
import BookingBand from "@/components/BookingBand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Kapcsolat",
  description: "Vedd fel velünk a kapcsolatot – MEDITA Jóga jógastúdió.",
};

export default function KapcsolatPage() {
  return (
    <>
      <section className="bg-sand-100 py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">Kapcsolat</p>
          <h1 className="mt-4 font-serif text-4xl leading-tight text-ink-900 sm:text-6xl">
            Írj nekünk bátran
          </h1>
          <p className="mx-auto mt-5 max-w-xl leading-7 text-ink-700">
            Kérdésed van az órákkal, bérletekkel vagy a nyitással kapcsolatban?
            Örömmel válaszolunk.
          </p>
        </div>
      </section>

      {/* Kép + elérhetőségek egymás mellett */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <Reveal>
            <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem]">
              <Image
                src="/studio/original/recepcio.webp"
                alt="A MEDITA Jóga recepciója"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sand-50/80 to-transparent" />
              <p className="absolute bottom-5 left-7 font-serif text-xl text-ink-900">
                Recepció és közösségi tér
              </p>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <p className="text-xs font-semibold tracking-[0.3em] uppercase text-mint-700">
              Elérhetőségeink
            </p>
            <h2 className="mt-3 font-serif text-3xl text-ink-900 sm:text-4xl">
              Találkozzunk a stúdióban
            </h2>
            <ul className="mt-9 space-y-6">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="M3 7l9 6 9-6" /></svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">E-mail</p>
                  <a href={`mailto:${site.email}`} className="text-ink-700 hover:text-mint-700">{site.email}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8.1 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2z" /></svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Telefon</p>
                  <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="text-ink-700 hover:text-mint-700">{site.phone}</a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-mint-100 text-mint-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink-900">Stúdió</p>
                  <p className="text-ink-700">{site.address}</p>
                  <p className="mt-1 text-sm text-taupe-500">{site.openingNote}</p>
                </div>
              </li>
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Órafoglalás – teljes szélességű sáv */}
      <BookingBand />
    </>
  );
}
