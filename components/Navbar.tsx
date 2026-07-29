"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { site } from "@/lib/data";

type NavItem = {
  label: string;
  href?: string;
  children?: { href: string; label: string }[];
};

const links: NavItem[] = [
  { href: "/", label: "Főoldal" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/studio", label: "Stúdió" },
  {
    label: "Jógaórák",
    children: [
      { href: "/oratipusok", label: "Óratípusok" },
      { href: "/foglalas", label: "Órarend" },
    ],
  },
  { href: "/oktatok", label: "Oktatók" },
  { href: "/arak", label: "Áraink" },
  { href: "/hazirend", label: "Házirend" },
  { href: "/kapcsolat", label: "Kapcsolat" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkClass = (href?: string, extra = "") =>
    `text-sm tracking-wide transition-colors hover:text-mint-700 ${
      href && pathname === href ? "font-semibold text-mint-700" : "text-ink-700"
    } ${extra}`;

  return (
    <header className="sticky top-0 z-50 border-b border-sand-200 bg-sand-50/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-2.5 sm:px-6">
        <Logo />

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Fő navigáció">
          {links.map((l) =>
            l.children ? (
              <div key={l.label} className="group relative">
                <button
                  className={`flex items-center gap-1 ${linkClass(
                    undefined,
                    l.children.some((c) => c.href === pathname)
                      ? "font-semibold text-mint-700"
                      : ""
                  )}`}
                  aria-haspopup="true"
                >
                  {l.label}
                  <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6" /></svg>
                </button>
                {/* Lenyíló panel */}
                <div className="invisible absolute left-1/2 top-full -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
                  <div className="min-w-44 rounded-2xl border border-sand-200 bg-sand-50 p-2 shadow-lg shadow-ink-900/5">
                    {l.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        className={`block rounded-xl px-4 py-2.5 text-sm transition-colors hover:bg-sand-100 ${
                          pathname === c.href
                            ? "font-semibold text-mint-700"
                            : "text-ink-700"
                        }`}
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={l.href} href={l.href!} className={linkClass(l.href)}>
                {l.label}
              </Link>
            )
          )}
          <Link
            href={site.bookingUrl}
            className="rounded-full bg-mint-700 px-6 py-3 text-xs font-semibold uppercase tracking-[0.15em] text-sand-50 transition-colors hover:bg-mint-800"
          >
            Foglalás
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-md text-ink-800 lg:hidden"
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
        <nav className="border-t border-sand-200 bg-sand-50 px-4 pb-6 pt-2 lg:hidden" aria-label="Mobil navigáció">
          {links.map((l) =>
            l.children ? (
              <div key={l.label} className="py-1">
                <p className="py-2 text-xs font-semibold uppercase tracking-[0.2em] text-taupe-400">
                  {l.label}
                </p>
                {l.children.map((c) => (
                  <Link
                    key={c.href}
                    href={c.href}
                    onClick={() => setOpen(false)}
                    className={`block py-2.5 pl-4 text-base ${
                      pathname === c.href ? "font-semibold text-mint-700" : "text-ink-700"
                    }`}
                  >
                    {c.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link
                key={l.href}
                href={l.href!}
                onClick={() => setOpen(false)}
                className={`block py-3 text-base ${
                  pathname === l.href ? "font-semibold text-mint-700" : "text-ink-700"
                }`}
              >
                {l.label}
              </Link>
            )
          )}
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
