"use client";

import { useEffect, useRef } from "react";

export function SiteProgress() {
  const lineRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      const progress = Math.min(window.scrollY / max, 1);
      if (lineRef.current) lineRef.current.style.transform = `scaleX(${progress})`;
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="site-progress" aria-hidden="true">
      <i ref={lineRef} />
    </div>
  );
}
