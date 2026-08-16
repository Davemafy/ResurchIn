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

export function HomeExperience({ children }: { children: ReactNode }) {
  const [dossierOpen, setDossierOpen] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");
  const [cursorVisible, setCursorVisible] = useState(false);
  const [cursorPoint, setCursorPoint] = useState({ x: 0, y: 0 });
  const sectionNodes = useRef<Array<HTMLElement | null>>([]);
  const returnFocus = useRef<HTMLElement | null>(null);
  const reducedMotion = useRef(false);

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
