"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { site } from "@/lib/data";

const links = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/studio", label: "Stúdió" },
  { href: "/oktatok", label: "Oktatók" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex" aria-label="Fő navigáció">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`text-sm tracking-wide transition-colors hover:text-mint-700 ${
                pathname === l.href ? "font-semibold text-mint-700" : "text-ink-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={site.bookingUrl}
            className="rounded-full bg-mint-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-sand-50 transition-colors hover:bg-mint-800"
          >
            Foglalás
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-800 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Menü bezárása" : "Menü megnyitása"}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-sand-200 bg-sand-50 px-4 pb-6 pt-2 md:hidden" aria-label="Mobil navigáció">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className={`block py-3 text-base ${
                pathname === l.href ? "font-semibold text-mint-700" : "text-ink-700"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href={site.bookingUrl}
            onClick={() => setOpen(false)}
            className="mt-3 block rounded-full bg-mint-700 px-5 py-3 text-center text-sm font-semibold text-sand-50"
          >
            Foglalás
          </Link>
        </nav>
      )}
    </header>
  );
}
