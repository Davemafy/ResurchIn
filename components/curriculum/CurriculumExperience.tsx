"use client";

import { useRef, useState, type CSSProperties } from "react";

const curriculum = [
  ["01 / FRAME", "Give the question a boundary.", "Turn a broad interest into something evidence could actually answer.", "Question memo / V3", "Could evidence answer this?", "INTEREST → QUESTION"],
  ["02 / READ", "Arrange the field by disagreement.", "Compare claims, methods and limits instead of collecting disconnected summaries.", "Evidence matrix / 18 sources", "Where do these authors disagree?", "QUESTION → FIELD"],
  ["03 / DESIGN", "Choose the evidence before collecting it.", "Match the method to the question, then name the strength, cost and limit.", "Method + data plan", "Why this method for this question?", "FIELD → METHOD"],
  ["04 / ANALYSE", "Keep the result smaller than the ambition.", "Separate the pattern in the data from the explanation you want to believe.", "Analysis log / V4", "Is that claim inside the data?", "DATA → PATTERN"],
  ["05 / WRITE", "Make every claim earn its confidence.", "Connect question, evidence, limitation and conclusion in one traceable argument.", "Research draft / V6", "Has this sentence earned its certainty?", "PATTERN → CLAIM"],
  ["06 / PRESENT", "Defend the decision, not the performance.", "Explain what the work found, where it stops and what you would change next.", "Defence / portfolio", "What would you do differently next?", "CLAIM → CONTRIBUTION"],
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
    <section ref={heroRef} className="curriculum-studio" aria-labelledby="curriculum-title">
      <div className="curriculum-studio-intro">
        <div className="studio-page-meta"><span>CURRICULUM / WORKING NOTEBOOK</span><span>06 PHASES / 24 WEEKS</span></div>
        <p className="studio-eyebrow"><span>01</span> ONE CONTINUOUS PIECE OF WORK</p>
        <h1 id="curriculum-title">You do not study research in chapters.<br /><em>You move one question.</em></h1>
        <p>Every phase leaves behind a document, a mentor correction and a decision you should be able to defend.</p>
      </div>

      <div className="curriculum-workbench">
        <nav className="curriculum-chapters" aria-label="Curriculum phases">
          {curriculum.map((item, index) => (
            <button key={item[0]} className={active === index ? "active" : undefined} aria-pressed={active === index} onClick={() => choose(index)}>
              <b>{String(index + 1).padStart(2, "0")}</b>
              <span>{item[0].split(" / ")[1]}</span>
              <i aria-hidden="true" />
            </button>
          ))}
        </nav>

        <div className="curriculum-desk">
          <div className="curriculum-grid" aria-hidden="true" />
          <article className="curriculum-document" style={{ "--curriculum-progress": `${((active + 1) / curriculum.length) * 100}%` } as CSSProperties}>
            <header><span>{data[0]}</span><span>RESURCHIN / COHORT 01</span></header>
            <div className="curriculum-document-rule" />
            <small>THE DECISION</small>
            <h2>{data[1]}</h2>
            <p>{data[2]}</p>
            <dl>
              <div><dt>YOU LEAVE WITH</dt><dd>{data[3]}</dd></div>
              <div><dt>MENTOR ASKS</dt><dd>{data[4]}</dd></div>
            </dl>
            <footer><span>{data[5]}</span><b>{String(active + 1).padStart(2, "0")} / 06</b></footer>
          </article>
          <aside className="curriculum-margin-note">KEEP THE<br /><strong>VERSION.</strong></aside>
          <div className="curriculum-progress-line" aria-hidden="true"><i style={{ height: `${((active + 1) / curriculum.length) * 100}%` }} /></div>
        </div>
      </div>

      <div className="curriculum-output-index">
        {curriculum.map((item, index) => (
          <button key={item[3]} className={active === index ? "active" : undefined} onClick={() => choose(index, true)}>
            <b>{String(index + 1).padStart(2, "0")}</b>
            <span>{item[3]}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
