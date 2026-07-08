// components/BookingWidget.tsx
// Timeify óralista widget beágyazása. Next/React alatt nem a script-loadert
// használjuk, hanem közvetlenül az iframe-et rendereljük.
//  - Magasság: a widget postMessage-dzsel jelenti (timeify:embed:height),
//    így a lista scrollbar nélkül, teljes magasságban jelenik meg.
//  - Látható sáv: mi üzenjük meg az iframe-nek (timeify:embed:viewport),
//    hogy a foglalás modál mindig a képernyőn lévő részbe centírozzon.
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
  // postMessage origin-egyeztetés csendben elhasal.
  const target = useMemo(() => {
    try {
      return new URL(origin).origin;
    } catch {
      return origin;
    }
  }, [origin]);

  useEffect(() => {
    // A látható sáv kiszámítása az iframe koordinátáiban, és megüzenése.
    let raf: number | null = null;
    const sendViewport = () => {
      if (raf !== null) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const el = iframeRef.current;
        if (!el?.contentWindow) return;
        const rect = el.getBoundingClientRect();
        const winH = window.innerHeight || document.documentElement.clientHeight;
        const top = Math.max(0, -rect.top);
        const visible = Math.min(rect.bottom, winH) - Math.max(rect.top, 0);
        if (visible <= 0) return;
        el.contentWindow.postMessage(
          { type: "timeify:embed:viewport", slug, top, height: visible },
          target,
        );
      });
    };

    const onMessage = (ev: MessageEvent) => {
      if (ev.origin !== target) return;
      const d = ev.data as { type?: string; slug?: string; height?: number };
      if (d?.type !== "timeify:embed:height" || d.slug !== slug) return;
      const h = Number(d.height);
      if (h > 0 && h < 50000) setHeight(h);
      sendViewport();
    };

    window.addEventListener("message", onMessage);
    window.addEventListener("scroll", sendViewport, { passive: true });
    window.addEventListener("resize", sendViewport);
    const t = setTimeout(sendViewport, 1000);
    return () => {
      window.removeEventListener("message", onMessage);
      window.removeEventListener("scroll", sendViewport);
      window.removeEventListener("resize", sendViewport);
      clearTimeout(t);
      if (raf !== null) cancelAnimationFrame(raf);
    };
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
