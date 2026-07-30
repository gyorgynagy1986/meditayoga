import Image from "next/image";
import ArchPlaceholder from "./ArchPlaceholder";

/* Oktatói portré. Ha van fotó a data.ts-ben, azt mutatja az ArchPlaceholderrel
   megegyező formában (lekerekítés + alsó gradiens elmosás); ha nincs, a
   monogramos helykitöltő jelenik meg. */
export default function InstructorPortrait({
  name,
  photo,
  className = "",
  sizes = "(min-width: 768px) 33vw, 100vw",
  priority = false,
}: {
  name: string;
  photo?: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  if (!photo) {
    return <ArchPlaceholder initial={name.charAt(0)} className={className} />;
  }

  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-sand-200 ${className}`}>
      <Image
        src={photo}
        alt={`${name} – MEDITA Jóga`}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
      {/* alsó gradiens elmosódás – ugyanaz a nyelv, mint a stúdióképeknél */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sand-50/70 to-transparent" />
    </div>
  );
}
