"use client";

import { useEffect, useState } from "react";
import { useHomeExperience } from "./HomeExperience";

const labels = ["Opening", "Process", "Revisions", "Review", "Apply"];

export function ExperienceRail() {
  const { scrollToSection, sectionNodes } = useHomeExperience();
  const [active, setActive] = useState(0);
  const [isCompactViewport, setIsCompactViewport] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 820px)");
    const update = () => setIsCompactViewport(media.matches);
    update();
    media.addEventListener?.("change", update);
    return () => media.removeEventListener?.("change", update);
  }, []);

  useEffect(() => {
    if (isCompactViewport) return;

    const nodes = sectionNodes.current.filter(Boolean) as HTMLElement[];
    if (!nodes.length || !("IntersectionObserver" in window)) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = sectionNodes.current.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { threshold: [0.12, 0.35, 0.6], rootMargin: "-18% 0px -35% 0px" },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [isCompactViewport, sectionNodes]);

  if (isCompactViewport) return null;

  return (
    <aside className="experience-rail" aria-label="Homepage sections">
      <span>{String(active + 1).padStart(2, "0")}</span>
      <i />
      {labels.map((label, index) => (
        <button key={label} className={active === index ? "active" : undefined} onClick={() => scrollToSection(index)}>
          {label}
        </button>
      ))}
    </aside>
  );
}
