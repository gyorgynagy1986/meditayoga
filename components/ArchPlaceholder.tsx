/* Lágyan lekerekített kép-helykitöltő, alsó gradiens átmenettel.
   Ide kerülnek majd az oktatók valódi fotói. */
export default function ArchPlaceholder({
  initial,
  label = "Fotó hamarosan",
  className = "",
}: {
  initial: string;
  label?: string;
  className?: string;
}) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center overflow-hidden rounded-[2rem] bg-gradient-to-b from-sand-100 via-sand-200 to-sand-300/60 ring-1 ring-sand-300/50 ${className}`}
    >
      {/* halvány belső keretvonal */}
      <div className="absolute inset-3 rounded-[1.4rem] border border-sand-50/80" />
      {/* alsó gradiens elmosódás */}
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-sand-50/70 to-transparent" />
      <span className="relative font-serif text-7xl text-taupe-400/60">{initial}</span>
      <span className="relative mt-3 text-[0.6rem] font-semibold uppercase tracking-[0.3em] text-taupe-400">
        {label}
      </span>
    </div>
  );
}
