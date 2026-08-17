"use client";

import { useEffect, useState } from "react";
import { useHomeExperience } from "./HomeExperience";

const labels = ["Opening", "Process", "Revisions", "Review", "Apply"];

export function ExperienceRail() {
  const { scrollToSection, sectionNodes } = useHomeExperience();
  const [active, setActive] = useState(0);

  useEffect(() => {
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
  }, [sectionNodes]);

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
