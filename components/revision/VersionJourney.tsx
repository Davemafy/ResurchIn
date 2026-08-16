"use client";

import { useState } from "react";

const versions = [
  {
    number: "01", label: "FRAME", title: "Name the thing you can actually investigate.",
    artifact: "How does social media affect students?",
    note: "Population? Behaviour? Outcome? The question has no boundary yet.",
    status: "QUESTION / V01",
  },
  {
    number: "02", label: "READ", title: "Find the argument you are entering.",
    artifact: "Late-night use is linked to sleep disruption, but attendance is less studied.",
    note: "Relevant is not the same as supporting. Keep the source trail visible.",
    status: "SOURCE MATRIX / V02",
  },
  {
    number: "03", label: "DESIGN", title: "Choose evidence that can answer the question.",
    artifact: "First-year students · 12 weeks · self-reported use · lecture attendance.",
    note: "The method narrows what the final sentence will be allowed to say.",
    status: "METHOD NOTE / V03",
  },
  {
    number: "04", label: "ANALYSE", title: "Separate the result from the story you hoped for.",
    artifact: "Higher late-night use is associated with lower next-day attendance.",
    note: "Association is the result. Cause is a different claim.",
    status: "FINDINGS / V04",
  },
  {
    number: "05", label: "REVISE", title: "Cut the certainty the evidence did not earn.",
    artifact: "In this sample, higher late-night use was associated with lower attendance.",
    note: "Name the sample. State the limit before the conclusion.",
    status: "CLAIM / V05",
  },
  {
    number: "06", label: "DEFEND", title: "Make the reasoning easy for another person to follow.",
    artifact: "Among first-year students observed for twelve weeks, late-night social media use predicted lower next-day lecture attendance; the design does not establish causation.",
    note: "A defensible claim includes the boundary that keeps it honest.",
    status: "DEFENCE / V06",
  },
];

export function VersionJourney() {
  const [active, setActive] = useState(0);
  const item = versions[active];

  return (
    <section className="rv-journey" aria-labelledby="rv-journey-title">
      <header className="rv-section-intro" data-rv-reveal>
        <p className="rv-eyebrow">ONE PROJECT / SIX VERSIONS</p>
        <h2 id="rv-journey-title">Research competence<br />leaves a version history.</h2>
        <p>ResurchIn keeps the earlier draft visible. Growth is easier to trust when you can point to the exact decision that changed.</p>
      </header>

      <div className="rv-journey-grid">
        <nav aria-label="Choose a research version">
          {versions.map((version, index) => (
            <button
              key={version.number}
              type="button"
              className={index === active ? "is-active" : undefined}
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <small>V{version.number}</small><span>{version.label}</span><i />
            </button>
          ))}
        </nav>
        <article className="rv-journey-artifact" aria-live="polite">
          <header><span>{item.status}</span><span>RESURCHIN / WORKING RECORD</span></header>
          <div className="rv-artifact-index">V{item.number}</div>
          <p className="rv-artifact-label">DECISION UNDER REVIEW</p>
          <h3>{item.title}</h3>
          <blockquote>{item.artifact}</blockquote>
          <aside><span>MENTOR NOTE</span><p>{item.note}</p></aside>
          <footer><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
        </article>
      </div>
    </section>
  );
}
