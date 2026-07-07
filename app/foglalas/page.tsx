import type { Metadata } from "next";
import Link from "next/link";
import { BrandIcon } from "@/components/Logo";
import { site } from "@/lib/data";

export const metadata: Metadata = {
  title: "Foglalás",
  description: "Órafoglalás a mEDITa YOGA stúdióban – hamarosan.",
};

export default function FoglalasPage() {
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
