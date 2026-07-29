import Image from "next/image";
import Link from "next/link";
import InstructorSlider from "@/components/InstructorSlider";
import StudioShowcase from "@/components/StudioShowcase";
import ClassesAccordion from "@/components/ClassesAccordion";
import BookingBand from "@/components/BookingBand";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/data";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=2000&auto=format&fit=crop"
          alt="Meditáló nő napfelkeltében"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[1.12]"
        />
        <div className="absolute inset-0 bg-ink-900/30" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-sand-50">
          <h1 className="sr-only">MEDITA Jóga</h1>
          <Image
            src="/logo/logo-portrait-white.png"
            alt=""
            aria-hidden
            width={636}
            height={810}
            priority
            className="mx-auto h-56 w-auto drop-shadow-sm sm:h-72"
          />
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-sand-100/90">
            {site.tagline}. Letisztult, modern tér – személyes figyelemmel,
            minden szintre.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={site.bookingUrl}
              className="rounded-full bg-sand-50 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 transition-colors hover:bg-sand-200"
            >
              Órafoglalás
            </Link>
            <Link
              href="/studio"
              className="rounded-full border border-sand-50/60 px-9 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-sand-50/10"
            >
              A stúdió
            </Link>
          </div>
          <p className="mt-8 inline-block rounded-full bg-sand-50/15 px-5 py-2 text-xs font-semibold tracking-widest uppercase backdrop-blur">
            {site.openingNote}
          </p>
        </div>
      </section>

      {/* Bemutatkozás teaser */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-2 md:gap-16 md:py-28">
        <Reveal>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
            <Image
              src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
              alt="Jógagyakorlás nyugodt környezetben"
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover"
            />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sand-50/70 to-transparent" />
          </div>
        </Reveal>
        <Reveal delay={150}>
          <p className="text-xs font-semibold tracking-widest uppercase text-mint-700">Rólunk</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
            A jóga nem a hajlékonyságról szól, hanem egy belső útról
          </h2>
          <p className="mt-5 leading-7 text-ink-700">
            A MEDITA Jóga egy jógás közösségi tér, ahol mindenki
            megtapasztalhatja a jóga jótékony hatásait – függetlenül attól,
            hogy milyen szinten áll, vagy milyen kihívásokkal érkezik.
            Küldetésünk, hogy a jóga mindenki számára elérhető legyen, és
            mindenki megtalálhassa benne a saját útját.
          </p>
          <Link
            href="/rolunk"
            className="mt-8 inline-block rounded-full bg-ink-900 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-sand-50 transition-colors hover:bg-ink-700"
          >
            Edit története
          </Link>
        </Reveal>
      </section>

      {/* Óratípusok */}
      <section className="bg-sand-100 py-20 md:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-widest uppercase text-mint-700">Óráink</p>
              <h2 className="mt-3 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
                Mozgás, elcsendesedés, erő
              </h2>
              <p className="mt-4 leading-7 text-ink-700">
                A nyugtató yin jógától a dinamikus erősítő órákig mindenki
                megtalálja a hozzá illő gyakorlást.
              </p>
            </div>
          </Reveal>
          <Reveal delay={150}>
            <div className="mt-12">
              <ClassesAccordion />
            </div>
            <div className="mt-8 text-right">
              <Link
                href="/oratipusok"
                className="text-xs font-semibold uppercase tracking-[0.2em] text-mint-700 hover:text-mint-800"
              >
                Összes óratípus részletesen →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* A stúdió – interaktív bemutató */}
      <StudioShowcase />

      {/* Oktatók slider */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
        <Reveal>
          <p className="text-xs font-semibold tracking-widest uppercase text-mint-700">Oktatóink</p>
          <h2 className="mt-3 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
            Ismerd meg a csapatot
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <div className="mt-10">
            <InstructorSlider />
          </div>
        </Reveal>
      </section>

      {/* Órafoglalás sáv */}
      <BookingBand />
    </>
  );
}
