import type { Metadata } from "next";
import Link from "next/link";
import { BrandIcon } from "@/components/Logo";
import BookingWidget from "@/components/BookingWidget";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Foglalás",
  description:
    "Órarend és online foglalás a MEDITA Jóga stúdióban – válassz órát, és foglalj pár kattintással.",
};

// Amíg a Timeify tenant slug nincs beállítva a lib/data.ts-ben, a régi
// „hamarosan" nézet jelenik meg — beállítás után automatikusan él a widget.
const configured =
  !!site.booking?.slug && !site.booking.slug.includes("IDE-A-TENANT");

export default function FoglalasPage() {
  if (!configured) {
    return (
      <section className="mx-auto flex max-w-2xl flex-col items-center px-4 py-24 text-center sm:px-6 md:py-36">
        <BrandIcon className="h-14 w-auto text-mint-500" />
        <h1 className="mt-6 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
          A foglalási rendszer hamarosan elérhető
        </h1>
        <p className="mt-5 max-w-md leading-7 text-ink-700">
          Az online órarend és foglalás a nyitásra készül el. Addig is írj nekünk
          e-mailben, és értesítünk, amint elindul a foglalás.
        </p>
        <p className="mt-6 inline-block rounded-full bg-mint-100 px-5 py-2 text-xs font-semibold tracking-widest uppercase text-mint-800">
          {site.openingNote}
        </p>
        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href={`mailto:${site.email}?subject=Foglalás – értesítést kérek`}
            className="rounded-full bg-mint-700 px-8 py-3.5 text-sm font-semibold text-sand-50 transition-colors hover:bg-mint-800"
          >
            Értesítést kérek
          </a>
          <Link
            href="/"
            className="rounded-full border border-sand-300 px-8 py-3.5 text-sm font-semibold text-ink-800 transition-colors hover:bg-sand-100"
          >
            Vissza a főoldalra
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 md:py-24">
      <div className="mb-10 text-center">
        <BrandIcon className="mx-auto h-12 w-auto text-mint-500" />
        <h1 className="mt-5 font-serif text-4xl leading-tight text-ink-900 sm:text-5xl">
          Órarend és foglalás
        </h1>
        <p className="mx-auto mt-4 max-w-md leading-7 text-ink-700">
          Válassz órát a következő hetekből — a foglaláshoz csak a neved és az
          e-mail címed kell.
        </p>
      </div>

      <BookingWidget
        origin={site.booking.origin}
        slug={site.booking.slug}
        days={site.booking.days}
      />

      <p className="mt-8 text-center text-sm text-ink-700">
        Kérdésed van a foglalással kapcsolatban?{" "}
        <a
          href={`mailto:${site.email}`}
          className="font-semibold text-mint-800 underline underline-offset-2 hover:text-mint-700"
        >
          Írj nekünk
        </a>
        .
      </p>
    </section>
  );
}
