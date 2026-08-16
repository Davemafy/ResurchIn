"use client";

import { useState } from "react";

const stages = [
  {
    n: "01",
    label: "FRAME",
    question: "How does social media affect students?",
    note: "Too broad to fail. No population, behavior or outcome.",
    output: "Among first-year students, does late-night social media use predict next-day lecture attendance?",
    artifact: "QUESTION MEMO / V03",
  },
  {
    n: "02",
    label: "READ",
    question: "What has already been claimed?",
    note: "Separate what a source observed from what it inferred.",
    output: "Evidence matrix: 18 sources, 5 comparable measures, 3 unresolved contradictions.",
    artifact: "EVIDENCE MATRIX / V02",
  },
  {
    n: "03",
    label: "DESIGN",
    question: "What would count as an answer?",
    note: "Choose a method that can actually meet the question.",
    output: "Twelve-week observational study with a defined attendance outcome and pre-registered exclusions.",
    artifact: "METHOD NOTE / V04",
  },
  {
    n: "04",
    label: "ANALYSE",
    question: "What changed in the data?",
    note: "Pattern first. Interpretation second.",
    output: "The strongest association appears above a two-hour late-night use threshold.",
    artifact: "ANALYSIS LOG / V05",
  },
  {
    n: "05",
    label: "REVISE",
    question: "What did you overstate?",
    note: "A good draft gets smaller where the evidence gets weaker.",
    output: "Replace ‘causes lower attendance’ with ‘is associated with lower next-day attendance in this sample.’",
    artifact: "DRAFT / V06",
  },
  {
    n: "06",
    label: "DEFEND",
    question: "Where does the claim stop?",
    note: "Credibility lives at the boundary of what you refuse to claim.",
    output: "Defend the result, the uncertainty and the next question with equal clarity.",
    artifact: "DEFENCE DECK / FINAL",
  },
];

export function QuestionEngine({ compact = false }: { compact?: boolean }) {
  const [active, setActive] = useState(0);
  const stage = stages[active];

  return (
    <section className={`question-engine${compact ? " compact" : ""}`} aria-label="Six-stage research process">
      <div className="qe-intro">
        <p className="micro">ONE QUESTION / SIX ACTS OF JUDGMENT</p>
        <h2>A research project should look different after every decision.</h2>
        <p>Tap a stage. The same project changes as the question gets narrower, the evidence gets harder to ignore and the claim gets more defensible.</p>
      </div>

      <div className="qe-workbench">
        <nav className="qe-tabs" aria-label="Research stages">
          {stages.map((item, index) => (
            <button
              key={item.n}
              className={index === active ? "active" : undefined}
              type="button"
              onClick={() => setActive(index)}
              aria-pressed={index === active}
            >
              <b>{item.n}</b>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        <article className="qe-sheet" key={stage.n}>
          <header>
            <span>RESURCHIN / WORKING PROJECT</span>
            <span>{stage.artifact}</span>
          </header>
          <div className="qe-index">R—{stage.n}</div>
          <p className="micro">DECISION UNDER REVIEW</p>
          <h3>{stage.question}</h3>
          <div className="qe-rule" />
          <p className="qe-note">{stage.note}</p>
          <div className="qe-output">
            <span>AFTER REVIEW</span>
            <p>{stage.output}</p>
          </div>
          <footer>
            <span>QUESTION</span><i />
            <span>EVIDENCE</span><i />
            <span>LIMIT</span>
          </footer>
        </article>

        <aside className="qe-meter" aria-hidden="true">
          <span>{String(active + 1).padStart(2, "0")}</span>
          <div><i style={{ height: `${((active + 1) / stages.length) * 100}%` }} /></div>
          <small>DEFENSIBILITY</small>
        </aside>
      </div>
    </section>
  );
}
