"use client";

import { useState } from "react";

const chapters = [
  { n:"01", label:"FRAME", title:"What, exactly, are you trying to find out?", prompt:"Could evidence actually answer this?", artifact:"QUESTION MEMO / V03", copy:"A broad interest becomes useful only when it has a boundary, a population and evidence that could answer it.", mark:"MAKE THE BOUNDARY VISIBLE." },
  { n:"02", label:"READ", title:"What has already been claimed—and by whom?", prompt:"Does the source support this sentence?", artifact:"EVIDENCE MATRIX / V02", copy:"Compare sources by question, design, measure, result and limitation instead of collecting quotes that sound useful.", mark:"SOURCE ≠ SUPPORT." },
  { n:"03", label:"DESIGN", title:"What would count as an answer?", prompt:"Can this method meet the question?", artifact:"METHOD NOTE / V04", copy:"Choose the population, measures, comparison and exclusions before the result tempts you to rewrite the rules.", mark:"METHOD SETS THE CLAIM CEILING." },
  { n:"04", label:"ANALYSE", title:"What changed in the data?", prompt:"Pattern or interpretation?", artifact:"ANALYSIS LOG / V05", copy:"Record the choices behind the result. Separate what you observed from the story you want the observation to tell.", mark:"PATTERN FIRST." },
  { n:"05", label:"REVISE", title:"Where did the draft overreach?", prompt:"What word is carrying too much confidence?", artifact:"DRAFT / V06", copy:"Keep the earlier sentence visible. Revision should show exactly where the evidence forced the argument to change.", mark:"CUT THE CLAIM." },
  { n:"06", label:"DEFEND", title:"Where does the claim stop?", prompt:"What remains uncertain?", artifact:"DEFENCE DECK / FINAL", copy:"Explain the result, the design, the uncertainty and the next question with equal clarity.", mark:"NAME THE LIMIT." },
];

export function ResearchNotebook() {
  const [active, setActive] = useState(0);
  const item = chapters[active];
  return (
    <section className="pf-notebook">
      <nav aria-label="Curriculum chapters">
        {chapters.map((chapter, index) => <button key={chapter.n} className={active === index ? "active" : undefined} onClick={() => setActive(index)} aria-pressed={active === index}><b>{chapter.n}</b><span>{chapter.label}</span></button>)}
      </nav>
      <article className="pf-notebook-sheet" key={item.n}>
        <header><span>RESURCHIN / CURRICULUM NOTEBOOK</span><span>{item.artifact}</span></header>
        <div className="pf-notebook-index" aria-hidden="true">{item.n}</div>
        <p className="pf-kicker">CORE DECISION</p>
        <h2>{item.title}</h2>
        <p className="pf-notebook-copy">{item.copy}</p>
        <dl><div><dt>MENTOR ASKS</dt><dd>{item.prompt}</dd></div><div><dt>ARTIFACT</dt><dd>{item.artifact}</dd></div></dl>
        <aside>{item.mark}</aside>
        <footer><span>QUESTION</span><i/><span>EVIDENCE</span><i/><span>LIMIT</span></footer>
      </article>
      <div className="pf-notebook-progress" aria-hidden="true"><span>{String(active+1).padStart(2,"0")}</span><div><i style={{width:`${((active+1)/chapters.length)*100}%`}}/></div><small>06</small></div>
    </section>
  );
}
