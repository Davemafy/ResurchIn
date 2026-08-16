"use client";

import { useEffect, useRef, useState, type PointerEvent } from "react";

type Props = {
  className: string;
  src: string;
  alt: string;
  caption: string;
  credit?: string;
};

export function TiltPhoto({ className, src, alt, caption, credit = "Editorial photograph / Pexels" }: Props) {
  const frameRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const [motion, setMotion] = useState(true);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotion(!media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    if (!motion) return;
    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 10;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    if (imageRef.current) imageRef.current.style.transform = `scale(1.035) translate(${x}px,${y}px)`;
  };

  const reset = () => {
    if (imageRef.current) imageRef.current.style.transform = "";
  };

  return (
    <figure ref={frameRef} className={className} onPointerMove={onPointerMove} onPointerLeave={reset}>
      <div><img ref={imageRef} src={src} alt={alt} loading="lazy" /></div>
      <figcaption>{caption}<span>{credit}</span></figcaption>
    </figure>
  );
}
