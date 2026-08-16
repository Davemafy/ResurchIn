"use client";

import { useRef, useState, type CSSProperties } from "react";

const curriculum = [
  ["01 / FRAME", "Give the question a boundary.", "Turn a broad interest into something evidence could actually answer.", "Question memo / V3", "Could evidence answer this?"],
  ["02 / READ", "Arrange the field by disagreement.", "Compare claims, methods and limits instead of collecting disconnected summaries.", "Evidence matrix / 18 sources", "Where do these authors disagree?"],
  ["03 / DESIGN", "Choose the evidence before collecting it.", "Match the method to the question, then name the strength, cost and limit.", "Method + data plan", "Why this method for this question?"],
  ["04 / ANALYSE", "Keep the result smaller than the ambition.", "Separate the pattern in the data from the explanation you want to believe.", "Analysis log / V4", "Is that claim inside the data?"],
  ["05 / WRITE", "Make every claim earn its confidence.", "Connect question, evidence, limitation and conclusion in one traceable argument.", "Research draft / V6", "Has this sentence earned its certainty?"],
  ["06 / PRESENT", "Defend the decision, not the performance.", "Explain what the work found, where it stops and what you would change next.", "Defence / portfolio", "What would you do differently next?"],
] as const;

const rows = [
  ["Frame", "Make the question specific enough to investigate.", "QUESTION MEMO / REVIEWED"],
  ["Read", "Compare the field by claims, methods and disagreement.", "EVIDENCE MATRIX / 18 SOURCES"],
  ["Design", "Choose evidence that fits the question and name the trade-off.", "METHOD + DATA PLAN"],
  ["Analyse", "Separate the result from what you hope it means.", "ANALYSIS LOG / V4"],
  ["Write", "Build an argument in which every claim earns its confidence.", "RESEARCH DRAFT / V6"],
  ["Present", "Defend the work, the limit and the next question.", "DEFENCE / PORTFOLIO READY"],
] as const;

export function CurriculumExperience() {
  const [active, setActive] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const data = curriculum[active];

  const choose = (index: number, scroll = false) => {
    setActive(index);
    if (scroll) {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      heroRef.current?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    }
  };

  return (
    <>
      <section ref={heroRef} className="curriculum-hero">
        <div className="curriculum-hero-copy">
          <p className="kicker">SIX PHASES / ONE CONTINUOUS PIECE OF WORK</p>
          <h1>You will not study research in chapters. <em>You will move one question.</em></h1>
          <p>Every phase leaves behind a document, a mentor correction and a decision you should be able to defend.</p>
        </div>
        <div className="curriculum-console">
          <div className="curriculum-tabs" aria-label="Curriculum phases">
            {curriculum.map((_, index) => (
              <button key={index} className={active === index ? "active" : undefined} aria-pressed={active === index} onClick={() => choose(index)}>
                {String(index + 1).padStart(2, "0")}
              </button>
            ))}
          </div>
          <div className="curriculum-sheet" style={{ "--curriculum-progress": `${((active + 1) / curriculum.length) * 100}%` } as CSSProperties}>
            <div><small>{data[0]}</small><h2>{data[1]}</h2><p>{data[2]}</p></div>
            <dl><div><dt>YOU LEAVE WITH</dt><dd>{data[3]}</dd></div><div><dt>MENTOR ASKS</dt><dd>{data[4]}</dd></div></dl>
            <span className="curriculum-progress" aria-hidden="true"><i /></span>
          </div>
        </div>
      </section>
      <section className="curriculum-list">
        {rows.map(([title, body, output], index) => (
          <article
            key={title}
            className={active === index ? "is-active" : undefined}
            role="button"
            tabIndex={0}
            onClick={() => choose(index, true)}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                choose(index, true);
              }
            }}
          >
            <b>{String(index + 1).padStart(2, "0")}</b><h2>{title}</h2><p>{body}</p><small>{output}</small>
          </article>
        ))}
      </section>
    </>
  );
}
