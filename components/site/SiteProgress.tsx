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

  return (
    <div className="site-progress" aria-hidden="true">
      <i ref={lineRef} />
    </div>
  );
}
