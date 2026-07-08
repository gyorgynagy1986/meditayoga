// components/BookingWidget.tsx
// Timeify óralista widget beágyazása. Next/React alatt nem a script-loadert
// használjuk, hanem közvetlenül az iframe-et rendereljük.
//  - Magasság: a widget postMessage-dzsel jelenti (timeify:embed:height).
//  - Látható sáv: mi üzenjük meg az iframe-nek (timeify:embed:viewport),
//    hogy a foglalás modál a képernyőn lévő részbe centírozzon.
//  - Modál-sötétítés: modál nyitásakor (timeify:embed:modal) a teljes oldalt
//    mi sötétítjük el, az iframe-et fölé emelve — így az overlay egybefüggő.
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
  const [modalOpen, setModalOpen] = useState(false);

  // Normalizált origin: elviseli a záró perjelet és az útvonalat is.
  const target = useMemo(() => {
    try {
      return new URL(origin).origin;
    } catch {
      return origin;
    }
  }, [origin]);

  useEffect(() => {
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
      const d = ev.data as { type?: string; slug?: string; height?: number; open?: boolean };
      if (d?.slug !== slug) return;
      if (d.type === "timeify:embed:height") {
        const h = Number(d.height);
        if (h > 0 && h < 50000) setHeight(h);
        sendViewport();
      } else if (d.type === "timeify:embed:modal") {
        setModalOpen(!!d.open);
        sendViewport();
      }
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

  const closeModal = () => {
    iframeRef.current?.contentWindow?.postMessage(
      { type: "timeify:embed:close", slug },
      target,
    );
  };

  const src = `${target}/${encodeURIComponent(lang)}/embed/${encodeURIComponent(slug)}?days=${days}`;

  return (
    <>
      {/* gazdaoldali sötétítés — az iframe saját overlay-ével egybefüggő */}
      {modalOpen && (
        <div
          onClick={closeModal}
          aria-hidden
          className="fixed inset-0 z-[90] bg-black/45"
        />
      )}
      <iframe
        ref={iframeRef}
        src={src}
        title="Órarend és foglalás"
        loading="lazy"
        scrolling="no"
        className="relative block w-full border-0"
        style={{
          height,
          minHeight: 320,
          background: "transparent",
          overflow: "hidden",
          zIndex: modalOpen ? 100 : "auto",
        }}
        allowTransparency
      />
    </>
  );
}
