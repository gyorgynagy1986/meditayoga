import Link from "next/link";

/* Két "lefelé néző kutya" (Adho Mukha Svanasana) sziluett, amelyek együtt
   M betűt formálnak – az arculati terv alapján */
export function BrandIcon({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 56" fill="none" className={className} aria-hidden="true">
      <g stroke="currentColor" strokeWidth="5" strokeLinecap="round">
        {/* 1. figura: kéz → csípő → láb */}
        <path d="M8 48 L33 12" />
        <path d="M33 12 L58 48" />
        {/* 2. figura */}
        <path d="M62 48 L87 12" />
        <path d="M87 12 L112 48" />
      </g>
      {/* fejek (kis kontyal) */}
      <circle cx="23" cy="36" r="4.5" fill="currentColor" />
      <circle cx="19.5" cy="31.5" r="2" fill="currentColor" />
      <circle cx="77" cy="36" r="4.5" fill="currentColor" />
      <circle cx="73.5" cy="31.5" r="2" fill="currentColor" />
    </svg>
  );
}

export function Wordmark({ light = false }: { light?: boolean }) {
  return (
    <span className="flex flex-col items-center leading-none">
      <span
        className={`font-serif text-xl font-semibold tracking-[0.3em] ${
          light ? "text-sand-50" : "text-ink-900"
        }`}
      >
        M<span className={light ? "text-mint-300" : "text-mint-700"}>EDIT</span>A
      </span>
      <span
        className={`mt-1.5 flex items-center gap-2 text-[0.6rem] font-semibold tracking-[0.35em] ${
          light ? "text-sand-300" : "text-taupe-500"
        }`}
      >
        <span className="h-px w-5 bg-current" />
        JÓGA
        <span className="h-px w-5 bg-current" />
      </span>
    </span>
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-3" aria-label="MEDITA Jóga – főoldal">
      <BrandIcon className={`h-8 w-auto ${light ? "text-mint-300" : "text-mint-700"}`} />
      <Wordmark light={light} />
    </Link>
  );
}
