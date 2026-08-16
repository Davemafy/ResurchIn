"use client";

import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useSwipeCycle } from "./useSwipeCycle";

const phases = [
  { n:"01", label:"FRAME", weeks:"01–04", title:"Make the question small enough to answer.", artifact:"QUESTION MEMO / V03", pressure:"BOUNDARY", prompt:"Who, where, which behaviour, over what period?", output:"A question that could genuinely be wrong." },
  { n:"02", label:"READ", weeks:"05–08", title:"Map what is known, argued and still uncertain.", artifact:"EVIDENCE MATRIX / V02", pressure:"SUPPORT", prompt:"Which source supports which exact sentence?", output:"An evidence map that records disagreement instead of hiding it." },
  { n:"03", label:"DESIGN", weeks:"09–12", title:"Choose a method that can meet the question.", artifact:"METHOD NOTE / V04", pressure:"FIT", prompt:"What can this design establish—and what can it never establish?", output:"A method whose limits are visible before results arrive." },
  { n:"04", label:"ANALYSE", weeks:"13–16", title:"Separate pattern from interpretation.", artifact:"ANALYSIS LOG / V05", pressure:"PATTERN", prompt:"What changed in the data before you explain why?", output:"A transparent record of analysis choices and observed patterns." },
  { n:"05", label:"REVISE", weeks:"17–20", title:"Cut every claim the evidence cannot carry.", artifact:"DRAFT / V06", pressure:"CLAIM", prompt:"Which word is doing more work than the evidence?", output:"A draft that is smaller, clearer and more defensible." },
  { n:"06", label:"DEFEND", weeks:"21–24", title:"Present the result and the limit with equal clarity.", artifact:"DEFENCE DECK / FINAL", pressure:"LIMIT", prompt:"Where does your claim stop?", output:"A result you can explain without pretending uncertainty disappeared." },
];

export function ProgramTimeline() {
  const [active, setActive] = useState(0);
  const markers = useRef<Array<HTMLDivElement | null>>([]);
  const item = phases[active];
  const swipe = useSwipeCycle(phases.length, active, setActive);

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setActive((value) => event.key === "ArrowRight" ? (value + 1) % phases.length : (value - 1 + phases.length) % phases.length);
  };

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(max-width:820px)").matches) return;
    const observer = new IntersectionObserver((entries) => {
      const best = entries.filter((entry) => entry.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (best) setActive(Number((best.target as HTMLElement).dataset.phase || 0));
    }, { threshold:[.48,.62,.75] });
    markers.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pf2-program-runway" aria-label="Twenty-four week program map. Use phase buttons, arrow keys, or swipe horizontally." tabIndex={0} onKeyDown={onKeyDown} {...swipe}>
      <div className="pf2-program-sticky">
        <aside className="pf2-program-rail">
          <span>WEEK</span>
          <b>{item.weeks}</b>
          <div className="pf2-program-rail-line"><i style={{ height:`${((active+1)/phases.length)*100}%` }} /></div>
          <small>24</small>
        </aside>
        <article className="pf2-program-sheet" key={item.n} aria-live="polite">
          <header><span>RESURCHIN / PROGRAM MAP</span><span>{item.artifact}</span></header>
          <div className="pf2-program-phase" aria-hidden="true">{item.label}</div>
          <p className="pf-kicker">PHASE {item.n} / WEEKS {item.weeks}</p>
          <h2>{item.title}</h2>
          <dl>
            <div><dt>MENTOR PRESSURE</dt><dd>{item.prompt}</dd></div>
            <div><dt>WORKING ARTIFACT</dt><dd>{item.artifact}</dd></div>
            <div><dt>WHAT CHANGES</dt><dd>{item.output}</dd></div>
          </dl>
          <aside><span>PRESSURE POINT</span><b>{item.pressure}</b></aside>
          <footer><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
        </article>
        <nav className="pf2-program-nav" aria-label="Choose program phase">
          {phases.map((phase,index)=><button type="button" key={phase.n} className={active===index?"active":undefined} onClick={()=>setActive(index)} aria-pressed={active===index}><span>{phase.n}</span><b>{phase.label}</b><small>{phase.weeks}</small></button>)}
        </nav>
      </div>
      <div className="pf2-program-markers" aria-hidden="true">
        {phases.map((phase,index)=><div key={phase.n} data-phase={index} ref={(node)=>{markers.current[index]=node;}} />)}
      </div>
    </section>
  );
}
