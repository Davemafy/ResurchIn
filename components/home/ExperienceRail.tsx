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

  const goNext = () => {
    if (active < labels.length - 1) {
      scrollToSection(active + 1);
      return;
    }
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
    });
  };

  return (
    <aside className="experience-rail" aria-label="Homepage sections">
      <span>{String(active + 1).padStart(2, "0")}</span>
      <i />
      {labels.map((label, index) => (
        <button key={label} className={active === index ? "active" : undefined} onClick={() => scrollToSection(index)}>
          {label}
        </button>
      ))}
      <button
        className="experience-next"
        type="button"
        onClick={goNext}
        aria-label={active < labels.length - 1 ? `Next chapter: ${labels[active + 1]}` : "Continue to the footer"}
      >
        <span>{active < labels.length - 1 ? labels[active + 1] : "Finish"}</span><b aria-hidden="true">↓</b>
      </button>
    </aside>
  );
}
