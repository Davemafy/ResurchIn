"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type MutableRefObject,
  type ReactNode,
} from "react";

type HomeExperienceValue = {
  openDossier: (trigger?: HTMLElement | null) => void;
  closeDossier: () => void;
  dossierOpen: boolean;
  registerSection: (index: number, node: HTMLElement | null) => void;
  scrollToSection: (index: number) => void;
  sectionNodes: MutableRefObject<Array<HTMLElement | null>>;
  showCursor: (label: string) => void;
  hideCursor: () => void;
};

const HomeExperienceContext = createContext<HomeExperienceValue | null>(null);

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

export function HomeExperience({ children }: { children: ReactNode }) {
  const [dossierOpen, setDossierOpen] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPoint, setCursorPoint] = useState({ x: 0, y: 0 });
  const sectionNodes = useRef<Array<HTMLElement | null>>([]);
  const returnFocus = useRef<HTMLElement | null>(null);
  const reducedMotion = useRef(false);

  /*
    Native scrolling stays completely untouched. We only ease the visual
    variables that react to it. This removes the stutter of raw scroll-linked
    transforms without introducing a smooth-scroll library or scroll-jacking.
  */
  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = media.matches;
    if (media.matches) return;

    const root = document.documentElement;
    const selectors = [
      ".v14-hero",
      ".origin-ledger",
      ".public-record",
      ".living-research",
      ".field-reel",
      ".critique-lab",
      ".v14-closing",
    ];

    const entries = selectors
      .map((selector) => document.querySelector<HTMLElement>(selector))
      .filter((node): node is HTMLElement => Boolean(node))
      .map((node) => ({ node, current: 0, target: 0 }));

    let pageCurrent = 0;
    let pageTarget = 0;
    let frame = 0;
    let running = true;

    const measure = () => {
      const viewport = Math.max(window.innerHeight, 1);
      const scrollable = Math.max(document.documentElement.scrollHeight - viewport, 1);
      pageTarget = clamp01(window.scrollY / scrollable);

      entries.forEach((entry) => {
        const rect = entry.node.getBoundingClientRect();
        const travel = Math.max(viewport + rect.height, 1);
        entry.target = clamp01((viewport - rect.top) / travel);
        entry.node.classList.toggle(
          "is-inview",
          rect.bottom > viewport * 0.08 && rect.top < viewport * 0.92,
        );
      });
    };

    const animate = () => {
      if (!running) return;
      const smoothing = window.innerWidth > 920 ? 0.115 : 0.18;
      let unsettled = false;

      pageCurrent += (pageTarget - pageCurrent) * smoothing;
      if (Math.abs(pageTarget - pageCurrent) > 0.0006) unsettled = true;
      else pageCurrent = pageTarget;
      root.style.setProperty("--page-progress", pageCurrent.toFixed(4));

      entries.forEach((entry) => {
        entry.current += (entry.target - entry.current) * smoothing;
        if (Math.abs(entry.target - entry.current) > 0.0007) unsettled = true;
        else entry.current = entry.target;
        entry.node.style.setProperty("--section-progress", entry.current.toFixed(4));
      });

      frame = unsettled ? window.requestAnimationFrame(animate) : 0;
    };

    const schedule = () => {
      measure();
      if (!frame) frame = window.requestAnimationFrame(animate);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });

    return () => {
      running = false;
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty("--page-progress");
      entries.forEach(({ node }) => {
        node.style.removeProperty("--section-progress");
        node.classList.remove("is-inview");
      });
    };
  }, []);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    if (!finePointer || reducedMotion.current) return;

    let frame = 0;
    let x = 0;
    let y = 0;
    const paint = () => {
      setCursorPoint({ x, y });
      frame = 0;
    };
    const onPointerMove = (event: PointerEvent) => {
      x = event.clientX;
      y = event.clientY;
      if (!frame) frame = requestAnimationFrame(paint);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("dossier-open", dossierOpen);
    return () => document.body.classList.remove("dossier-open");
  }, [dossierOpen]);

  useEffect(() => () => {
    document.body.classList.remove("dossier-open", "menu-open");
  }, []);

  const openDossier = useCallback((trigger?: HTMLElement | null) => {
    returnFocus.current = trigger ?? null;
    setDossierOpen(true);
  }, []);

  const closeDossier = useCallback(() => {
    setDossierOpen(false);
    requestAnimationFrame(() => returnFocus.current?.focus());
  }, []);

  const registerSection = useCallback((index: number, node: HTMLElement | null) => {
    sectionNodes.current[index] = node;
  }, []);

  const scrollToSection = useCallback((index: number) => {
    sectionNodes.current[index]?.scrollIntoView({
      behavior: reducedMotion.current ? "auto" : "smooth",
      block: "start",
    });
  }, []);

  const value = useMemo<HomeExperienceValue>(
    () => ({
      openDossier,
      closeDossier,
      dossierOpen,
      registerSection,
      scrollToSection,
      sectionNodes,
      showCursor: (label: string) => {
        setCursorLabel(label);
        setCursorVisible(true);
      },
      hideCursor: () => setCursorVisible(false),
    }),
    [closeDossier, dossierOpen, openDossier, registerSection, scrollToSection],
  );

  return (
    <HomeExperienceContext.Provider value={value}>
      {children}
      <span
        className={`cursor-caption${cursorVisible ? " visible" : ""}`}
        aria-hidden="true"
        style={{ left: cursorPoint.x, top: cursorPoint.y }}
      >
        {cursorLabel}
      </span>
    </HomeExperienceContext.Provider>
  );
}

export function useHomeExperience() {
  const context = useContext(HomeExperienceContext);
  if (!context) throw new Error("Home experience components must be rendered inside HomeExperience.");
  return context;
}
