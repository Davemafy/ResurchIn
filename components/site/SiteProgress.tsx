"use client";

import { useEffect, useRef } from "react";

export function SiteProgress() {
  const lineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      frame = 0;
      const root = document.scrollingElement ?? document.documentElement;
      const max = Math.max(root.scrollHeight - window.innerHeight, 1);
      const y = root.scrollTop || window.scrollY || 0;
      const progress = Math.max(0, Math.min(y / max, 1));
      if (lineRef.current) lineRef.current.style.transform = `scaleX(${progress})`;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.addEventListener("orientationchange", schedule, { passive: true });
    window.visualViewport?.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.removeEventListener("orientationchange", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let timer = 0;

    const clearLeaving = () => root.classList.remove("route-leaving");
    const onPageShow = () => clearLeaving();

    const onDocumentClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin) return;
      if (url.pathname === window.location.pathname && url.search === window.location.search && !url.hash) return;

      event.preventDefault();
      root.classList.add("route-leaving");
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        window.location.assign(url.href);
      }, reduceMotion.matches ? 20 : 145);
    };

    document.addEventListener("click", onDocumentClick, true);
    window.addEventListener("pageshow", onPageShow);

    return () => {
      document.removeEventListener("click", onDocumentClick, true);
      window.removeEventListener("pageshow", onPageShow);
      window.clearTimeout(timer);
      clearLeaving();
    };
  }, []);

  return (
    <>
      <div className="site-progress" aria-hidden="true">
        <i ref={lineRef} />
      </div>
      <div className="route-transition" aria-hidden="true">
        <div className="route-transition-inner">
          <span className="route-transition-mark">R</span>
          <span className="route-transition-label">OPENING RESEARCH RECORD</span>
          <i />
        </div>
      </div>
    </>
  );
}
