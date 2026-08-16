"use client";

import { useState } from "react";

const phases = [
  {n:"01", label:"FRAME", title:"Give the question a boundary.", output:"QUESTION MEMO / V03", mentor:"Could evidence actually answer this?", copy:"Move from a topic to a population, behaviour, outcome and timeframe that can be investigated."},
  {n:"02", label:"READ", title:"Arrange the field by disagreement.", output:"EVIDENCE MATRIX / 18 SOURCES", mentor:"Where do these authors disagree?", copy:"Compare claims, methods and limits instead of collecting disconnected summaries."},
  {n:"03", label:"DESIGN", title:"Choose the evidence before collecting it.", output:"METHOD + DATA PLAN", mentor:"Why this method for this question?", copy:"Match method to question, then name the strength, cost and limit of the choice."},
  {n:"04", label:"ANALYSE", title:"Keep the result smaller than the ambition.", output:"ANALYSIS LOG / V04", mentor:"Is that claim inside the data?", copy:"Separate the pattern you observed from the explanation you want to believe."},
  {n:"05", label:"REVISE", title:"Make every claim earn its confidence.", output:"RESEARCH DRAFT / V06", mentor:"Has this sentence earned its certainty?", copy:"Connect question, evidence, limitation and conclusion in one traceable argument."},
  {n:"06", label:"DEFEND", title:"Defend the decision, not the performance.", output:"DEFENCE / PORTFOLIO", mentor:"What would you change next?", copy:"Explain what the work found, where it stops and what another person should inspect."},
];

export function CurriculumVersions() {
  const [active, setActive] = useState(0);
  const phase = phases[active];
  return (
    <section className="rv-curriculum-board" aria-labelledby="curriculum-board-title">
      <div className="rv-curriculum-nav">
        <p className="rv-eyebrow">CURRICULUM / VERSION BOARD</p>
        <h1 id="curriculum-board-title">Six decisions.<br />One piece of work.</h1>
        <p>Choose a phase. The output changes, but the project does not disappear between lessons.</p>
        <nav aria-label="Curriculum phases">
          {phases.map((item,index)=><button key={item.n} type="button" className={active===index?"is-active":undefined} onClick={()=>setActive(index)} aria-pressed={active===index}><small>V{item.n}</small><span>{item.label}</span><i /></button>)}
        </nav>
      </div>
      <article className="rv-curriculum-sheet" aria-live="polite">
        <header><span>PHASE {phase.n} / {phase.label}</span><span>WORKING RECORD</span></header>
        <div className="rv-curriculum-number">{phase.n}</div>
        <p className="rv-artifact-label">DECISION</p><h2>{phase.title}</h2><p>{phase.copy}</p>
        <dl><div><dt>YOU LEAVE WITH</dt><dd>{phase.output}</dd></div><div><dt>MENTOR ASKS</dt><dd>{phase.mentor}</dd></div></dl>
        <footer><span>QUESTION</span><i/><span>EVIDENCE</span><i/><span>LIMIT</span></footer>
      </article>
    </section>
  );
}
