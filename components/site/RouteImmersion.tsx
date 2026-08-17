"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";

type Chapter = {
  node: HTMLElement;
  label: string;
};

const routeLabels: Record<string, string[]> = {
  "program-page": ["Opening", "Brief", "Field record", "Practice", "Rhythm", "Fit", "Apply"],
  "curriculum-page": ["Question", "Six phases", "Field record", "Versions", "Evidence", "Apply"],
  "mentors-page": ["Opening", "Review", "Review room", "Mentor work", "Apply"],
  "about-page": ["Opening", "Founder", "Practice", "Principles", "Apply"],
  "community-page": ["Opening", "Inside the room", "Practice", "Belief", "Apply"],
  "resources-page": ["Opening", "Field guides", "Field notes", "Apply"],
  "article-page": ["Claim", "Question", "Evidence", "Method", "Restraint", "Your note"],
  "apply-route": ["Brief", "Application"],
  "success-page": ["Received"],
};

function clamp(value: number, min = 0, max = 1) {
  return Math.max(min, Math.min(max, value));
}

function bodyRouteClass() {
  return Object.keys(routeLabels).find((name) => document.body.classList.contains(name)) ?? "";
}

export function RouteImmersion() {
  const [chapters, setChapters] = useState<Array<{ label: string; index: number }>>([]);
  const [active, setActive] = useState(0);
  const chapterNodes = useRef<Chapter[]>([]);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const routeClass = bodyRouteClass();
    const labels = routeLabels[routeClass] ?? [];

    let nodes: HTMLElement[] = [];
    if (routeClass === "article-page") {
      nodes = Array.from(document.querySelectorAll<HTMLElement>(".reading-body > div > section"));
    } else if (routeClass === "apply-route") {
      nodes = Array.from(document.querySelectorAll<HTMLElement>(".apply-side, .application"));
    } else {
      nodes = Array.from(document.querySelectorAll<HTMLElement>("main > section"));
    }

    if (!nodes.length) return;

    chapterNodes.current = nodes.map((node, index) => {
      const label = labels[index] ?? `Chapter ${String(index + 1).padStart(2, "0")}`;
      node.dataset.routeIndex = String(index + 1).padStart(2, "0");
      node.dataset.routeLabel = label;
      if (index < nodes.length - 1) node.dataset.routeNext = labels[index + 1] ?? `Chapter ${index + 2}`;
      return { node, label };
    });
    setChapters(chapterNodes.current.map((chapter, index) => ({ label: chapter.label, index })));
    document.body.classList.add("route-immersive-ready");

    let frame = 0;
    const update = () => {
      frame = 0;
      const viewport = Math.max(window.innerHeight, 1);
      const page = document.scrollingElement ?? document.documentElement;
      const scrollable = Math.max(page.scrollHeight - viewport, 1);
      const pageProgress = clamp((page.scrollTop || window.scrollY || 0) / scrollable);
      document.documentElement.style.setProperty("--route-page-progress", pageProgress.toFixed(4));

      let nextActive = 0;
      let bestDistance = Number.POSITIVE_INFINITY;
      chapterNodes.current.forEach(({ node }, index) => {
        const rect = node.getBoundingClientRect();
        const progress = clamp((viewport - rect.top) / Math.max(viewport + rect.height, 1));
        const center = rect.top + rect.height * 0.5;
        const distance = Math.abs(center - viewport * 0.48);
        const visible = rect.bottom > viewport * 0.08 && rect.top < viewport * 0.92;

        node.style.setProperty("--route-progress", progress.toFixed(4));
        node.style.setProperty("--route-depth", (progress - 0.5).toFixed(4));
        node.classList.toggle("route-scene-visible", visible);
        node.classList.toggle("route-scene-past", rect.bottom < viewport * 0.34);

        if (visible && distance < bestDistance) {
          bestDistance = distance;
          nextActive = index;
        }
      });
      setActive((current) => current === nextActive ? current : nextActive);
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.visualViewport?.addEventListener("resize", schedule, { passive: true });

    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      chapterNodes.current.forEach(({ node }) => {
        node.style.removeProperty("--route-progress");
        node.style.removeProperty("--route-depth");
        node.classList.remove("route-scene-visible", "route-scene-past");
        delete node.dataset.routeIndex;
        delete node.dataset.routeLabel;
        delete node.dataset.routeNext;
      });
      chapterNodes.current = [];
      document.body.classList.remove("route-immersive-ready");
      document.documentElement.style.removeProperty("--route-page-progress");
    };
  }, []);

  const progress = useMemo(() => chapters.length ? (active + 1) / chapters.length : 0, [active, chapters.length]);

  if (chapters.length < 2) return null;

  const go = (index: number) => {
    chapterNodes.current[index]?.node.scrollIntoView({
      behavior: reducedMotion.current ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <aside className="route-rail" aria-label="Page chapters">
      <span className="route-rail-count">{String(active + 1).padStart(2, "0")} / {String(chapters.length).padStart(2, "0")}</span>
      <i className="route-rail-track" aria-hidden="true" style={{ "--rail-progress": progress } as CSSProperties}><b /></i>
      <div className="route-rail-labels">
        {chapters.map((chapter) => (
          <button
            key={`${chapter.index}-${chapter.label}`}
            className={chapter.index === active ? "active" : undefined}
            type="button"
            aria-current={chapter.index === active ? "step" : undefined}
            onClick={() => go(chapter.index)}
          >
            <b>{String(chapter.index + 1).padStart(2, "0")}</b>
            <span>{chapter.label}</span>
          </button>
        ))}
      </div>
    </aside>
  );
}
