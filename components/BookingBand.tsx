import Image from "next/image";
import Link from "next/link";
import Reveal from "./Reveal";
import { site } from "@/lib/data";

/* Teljes szélességű órafoglalás sáv – alapból a LÓTUSZ terem fotója,
   a kép propon keresztül bármikor cserélhető. */
export default function BookingBand({
  image = "/studio/nagyterem.webp",
  imageAlt = "A MEDITA Jóga LÓTUSZ jógaterme",
}: {
  image?: string;
  imageAlt?: string;
}) {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden">
      <Image src={image} alt={imageAlt} fill sizes="100vw" className="object-cover" />
      <div className="absolute inset-0 bg-ink-900/55" />
      <div className="relative z-10 mx-auto max-w-2xl px-4 py-24 text-center text-sand-50">
        <Reveal>
          <p className="text-xs font-semibold tracking-[0.35em] uppercase text-mint-300">
            Órafoglalás
          </p>
          <h2 className="mt-4 font-serif text-4xl leading-tight sm:text-6xl">
            Foglald le a helyed
          </h2>
          <p className="mx-auto mt-5 max-w-md leading-7 text-sand-100/90">
            {site.openingNote} – az online foglalás hamarosan elérhető.
          </p>
          <Link
            href={site.bookingUrl}
            className="mt-9 inline-block rounded-full bg-sand-50 px-12 py-4 text-xs font-semibold uppercase tracking-[0.2em] text-ink-900 transition-colors hover:bg-sand-200"
          >
            Foglalás
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
