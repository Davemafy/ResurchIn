"use client";

import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
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
    body: "“Proved” became “was associated with.” The sample moved into the claim. The limitation arrived before the conclusion—not after it.",
    mark: "Is every word inside the evidence?",
    document: "Research draft / v03 → v06",
  },
];

const labels = ["Frame", "Test", "Defend"];

export function FieldReel() {
  const { registerSection, showCursor, hideCursor } = useHomeExperience();
  const [active, setActive] = useState(0);
  const headerReveal = useReveal<HTMLElement>();
  const stageReveal = useReveal<HTMLDivElement>();
  const [changing, setChanging] = useState(false);
  const timer = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    return () => {
      if (timer.current) window.clearTimeout(timer.current);
    };
  }, []);

  const setRef = useCallback((node: HTMLElement | null) => registerSection(2, node), [registerSection]);

  const choose = (index: number) => {
    if (index === active && !changing) return;
    setChanging(true);
    if (timer.current) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setActive(index);
      setChanging(false);
    }, reducedMotion.current ? 0 : 220);
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

  const view = views[active];

  return (
    <section ref={setRef} className="field-reel" aria-labelledby="field-reel-title">
      <header ref={headerReveal.ref} className={`quiet-reveal${headerReveal.seen ? " seen" : ""}`}>
        <p className="kicker">ONE PROJECT / THREE VERSIONS</p>
        <h2 id="field-reel-title">The first draft says what you hoped to find.<br /><em>The sixth says what the evidence allows.</em></h2>
      </header>
      <div ref={stageReveal.ref} className={`field-reel-stage quiet-reveal${stageReveal.seen ? " seen" : ""}${changing ? " is-changing" : ""}`} data-ready="true">
        <figure>
          <img src={view.image} alt={view.alt} />
          <div className="field-scan" />
          <figcaption><span>{view.caption}</span><span>{view.credit}</span></figcaption>
        </figure>
        <article aria-live="polite">
          <span>{String(active + 1).padStart(2, "0")} / 03</span>
          <h3>{view.title}</h3>
          <p>{view.body}</p>
          <dl>
            <div><dt>MENTOR MARK</dt><dd>{view.mark}</dd></div>
            <div><dt>DOCUMENT</dt><dd>{view.document}</dd></div>
          </dl>
        </article>
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
      </div>
    </section>
  );
}
