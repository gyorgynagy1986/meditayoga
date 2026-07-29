import Link from "next/link";
import Image from "next/image";

/* A végleges MEDITA Jóga logó (lótuszban meditáló alak).
   Fájlok: public/logo/ — fekvő (navbar/footer) és álló (hero) változat,
   színes és fehér verzióban. */

export function BrandIcon({ className = "h-16 w-auto" }: { className?: string }) {
  return (
    <Image
      src="/logo/logo-icon.png"
      alt="MEDITA Jóga"
      width={380}
      height={456}
      className={className}
    />
  );
}

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-center" aria-label="MEDITA Jóga – főoldal">
      <Image
        src={light ? "/logo/logo-landscape-white.png" : "/logo/logo-landscape.png"}
        alt="MEDITA Jóga"
        width={1081}
        height={364}
        priority
        className="h-11 w-auto sm:h-12"
      />
    </Link>
  );
}
