// components/BookingWidget.tsx
// Timeify óralista widget beágyazása. Next/React alatt nem a script-loadert
// használjuk, hanem közvetlenül az iframe-et rendereljük — a magasságát a
// widget postMessage-dzsel jelenti (type: "timeify:embed:height"), így a
// lista mindig scrollbar nélkül, teljes magasságban jelenik meg.
"use client";

import { useEffect, useMemo, useRef, useState } from "react";

export default function BookingWidget({
  origin,
  slug,
  lang = "hu",
  days = 28,
}: {
  origin: string;
  slug: string;
  lang?: string;
  days?: number;
}) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [height, setHeight] = useState(520);

  // Normalizált origin: elviseli a záró perjelet és az útvonalat is
  // ("http://localhost:3000/" → "http://localhost:3000"), különben a
  // postMessage origin-egyeztetés csendben elhasal, és marad a belső scroll.
  const target = useMemo(() => {
    try {
      return new URL(origin).origin;
    } catch {
      return origin;
    }
  }, [origin]);

  useEffect(() => {
    const onMessage = (ev: MessageEvent) => {
      if (ev.origin !== target) return;
      const d = ev.data as { type?: string; slug?: string; height?: number };
      if (d?.type !== "timeify:embed:height" || d.slug !== slug) return;
      const h = Number(d.height);
      if (h > 0 && h < 50000) setHeight(h);
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, [target, slug]);

  const src = `${target}/${encodeURIComponent(lang)}/embed/${encodeURIComponent(slug)}?days=${days}`;

  return (
    <iframe
      ref={iframeRef}
      src={src}
      title="Órarend és foglalás"
      loading="lazy"
      scrolling="no"
      className="block w-full border-0"
      style={{ height, minHeight: 320, background: "transparent", overflow: "hidden" }}
      allowTransparency
    />
  );
}
