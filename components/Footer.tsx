import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-sand-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-sm text-sm leading-6 text-sand-300/80">
            Letisztult, modern jógastúdió, ahol mindenki megtalálhatja a saját
            útját – szinttől és előképzettségtől függetlenül.
          </p>
          <p className="mt-4 inline-block rounded-full bg-mint-800/60 px-4 py-1.5 text-xs font-semibold tracking-wide text-mint-200">
            {site.openingNote}
          </p>
        </div>

        <div>
          <h3 className="font-serif text-lg text-sand-50">Menü</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link href="/" className="hover:text-mint-300">Főoldal</Link></li>
            <li><Link href="/rolunk" className="hover:text-mint-300">Rólunk</Link></li>
            <li><Link href="/studio" className="hover:text-mint-300">Stúdió</Link></li>
            <li><Link href="/oktatok" className="hover:text-mint-300">Oktatók</Link></li>
            <li><Link href="/kapcsolat" className="hover:text-mint-300">Kapcsolat</Link></li>
            <li><Link href={site.bookingUrl} className="hover:text-mint-300">Foglalás</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-serif text-lg text-sand-50">Kapcsolat</h3>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-mint-300">{site.email}</a>
            </li>
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="hover:text-mint-300">{site.phone}</a>
            </li>
            <li className="text-sand-300/80">{site.address}</li>
          </ul>
          <div className="mt-5 flex gap-4">
            <a href="#" aria-label="Facebook" className="text-sand-300 hover:text-mint-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.6V3.9c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V10H7.5v3h2.8v8h3.2z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="text-sand-300 hover:text-mint-300">
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sand-50/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-4 py-5 text-xs text-sand-300/60 sm:flex-row sm:px-6">
          <p>© {new Date().getFullYear()} {site.name}. Minden jog fenntartva.</p>
          <p>Jóga mindenkié.</p>
        </div>
      </div>
    </footer>
  );
}
