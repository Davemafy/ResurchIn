"use client";

import { useCallback, useEffect, useRef, useState, type CSSProperties, type KeyboardEvent } from "react";
import { useReveal } from "@/components/site/useReveal";
import { useHomeExperience } from "./HomeExperience";

const views = [
  {
    image: "/assets/images/pexels-5940711-w1800.avif",
    alt: "Students reviewing research material together",
    caption: "QUESTION MEMO / VERSION 01",
    credit: "FRAMING THE PROBLEM",
    title: "The question was too broad to fail.",
    body: "“How does social media affect students?” became one population, one behavior and one outcome that could actually be observed.",
    mark: "Who, where, and over what period?",
    document: "Question memo / v01 → v03",
  },
  {
    image: "/assets/images/pexels-9243385-w1800.avif",
    alt: "A researcher working carefully with laboratory equipment",
    caption: "METHOD PLAN / REVIEW 02",
    credit: "TESTING THE QUESTION",
    title: "The method was impressive. It was also wrong.",
    body: "The first plan collected more data than the question needed. Review cut the noise, named the trade-off and left a method the participant could explain.",
    mark: "Why this method for this question?",
    document: "Study plan / v02 → reviewed",
  },
  {
    image: "/assets/images/pexels-5940715-w1800.avif",
    alt: "A small group examining and discussing a research draft",
    caption: "RESEARCH DRAFT / VERSION 06",
    credit: "DEFENDING THE CLAIM",
    title: "The finding stayed. The certainty did not.",
    body: "“Proved” became “was associated with.” The sample moved into the claim. The limitation arrived before the conclusion, not after it.",
    mark: "Is every word inside the evidence?",
    document: "Research draft / v03 → v06",
  },
];

const labels = ["Frame", "Test", "Defend"];
type ReelStyle = CSSProperties & { "--reel-progress"?: string };

export function FieldReel() {
  const { registerSection, showCursor, hideCursor } = useHomeExperience();
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState(0);
  const headerReveal = useReveal<HTMLElement>();
  const stageReveal = useReveal<HTMLDivElement>();
  const reducedMotion = useRef(false);
  const lockUntil = useRef(0);
  const frame = useRef(0);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    reducedMotion.current = media.matches;

    const update = () => {
      frame.current = 0;
      const section = sectionRef.current;
      if (!section || window.innerWidth <= 900 || performance.now() < lockUntil.current) return;

      const rect = section.getBoundingClientRect();
      const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
      const progress = Math.max(0, Math.min(0.999999, -rect.top / travel));
      section.style.setProperty("--reel-progress", progress.toFixed(4));
      const next = Math.min(views.length - 1, Math.floor(progress * views.length));
      setActive((current) => current === next ? current : next);
    };

    const schedule = () => {
      if (!frame.current) frame.current = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame.current) window.cancelAnimationFrame(frame.current);
      sectionRef.current?.style.removeProperty("--reel-progress");
    };
  }, []);

  const setRef = useCallback((node: HTMLElement | null) => {
    sectionRef.current = node;
    registerSection(2, node);
  }, [registerSection]);

  const choose = (index: number) => {
    setActive(index);
    const section = sectionRef.current;
    if (window.innerWidth <= 900 || !section) return;

    lockUntil.current = performance.now() + (reducedMotion.current ? 0 : 650);
    const sectionTop = window.scrollY + section.getBoundingClientRect().top;
    const travel = Math.max(section.offsetHeight - window.innerHeight, 1);
    const progress = (index + 0.5) / views.length;
    window.scrollTo({
      top: sectionTop + travel * progress,
      behavior: reducedMotion.current ? "auto" : "smooth",
    });
  };

  const onKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (event.key === "ArrowRight") next = (index + 1) % views.length;
    else if (event.key === "ArrowLeft") next = (index - 1 + views.length) % views.length;
    else return;
    event.preventDefault();
    const parent = event.currentTarget.parentElement;
    (parent?.children[next] as HTMLButtonElement | undefined)?.focus();
    choose(next);
  };

  const reelStyle: ReelStyle = { "--reel-progress": "0" };

  return (
    <section ref={setRef} className="field-reel field-reel-cinematic" aria-labelledby="field-reel-title" style={reelStyle}>
      <div className="field-reel-pin">
        <header ref={headerReveal.ref} className={`quiet-reveal${headerReveal.seen ? " seen" : ""}`}>
          <p className="kicker">ONE PROJECT / THREE VERSIONS</p>
          <h2 id="field-reel-title">The first draft says what you hoped to find.<br /><em>The sixth says what the evidence allows.</em></h2>
          <span className="reel-folio" aria-hidden="true">0{active + 1} / 03</span>
        </header>

        <div ref={stageReveal.ref} className={`field-reel-stage quiet-reveal${stageReveal.seen ? " seen" : ""}`} data-ready="true" data-active={active}>
          <div className="field-reel-visuals" aria-live="polite">
            {views.map((view, index) => (
              <figure key={view.caption} className={active === index ? "active" : undefined} aria-hidden={active !== index}>
                <img src={view.image} alt={active === index ? view.alt : ""} />
                <div className="field-scan" />
                <figcaption><span>{view.caption}</span><span>{view.credit}</span></figcaption>
              </figure>
            ))}
          </div>

          <div className="field-reel-copy-stack">
            {views.map((view, index) => (
              <article key={view.title} className={active === index ? "active" : undefined} aria-hidden={active !== index}>
                <span>{String(index + 1).padStart(2, "0")} / 03</span>
                <h3>{view.title}</h3>
                <p>{view.body}</p>
                <dl>
                  <div><dt>MENTOR MARK</dt><dd>{view.mark}</dd></div>
                  <div><dt>DOCUMENT</dt><dd>{view.document}</dd></div>
                </dl>
              </article>
            ))}
          </div>

          <nav aria-label="Project revision views">
            {labels.map((label, index) => (
              <button
                key={label}
                className={active === index ? "active" : undefined}
                aria-pressed={active === index}
                onClick={() => choose(index)}
                onKeyDown={(event) => onKeyDown(event, index)}
                onPointerEnter={() => showCursor("VIEW REVISION")}
                onPointerLeave={hideCursor}
              >
                <b>{String(index + 1).padStart(2, "0")}</b><span>{label}</span>
              </button>
            ))}
          </nav>

          <div className="reel-progress" aria-hidden="true"><i /></div>
        </div>
      </div>
    </section>
  );
}
