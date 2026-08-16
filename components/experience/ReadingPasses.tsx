"use client";

import { useState, type KeyboardEvent } from "react";
import { useSwipeCycle } from "./useSwipeCycle";

const passes = [
  { n:"01", label:"QUESTION", title:"Find the question before the machinery.", copy:"Before you chase details, write down the problem the paper is trying to answer. If you cannot say it in one sentence, you are not ready for the methods section.", mark:"WHAT IS THIS PAPER TRYING TO FIND OUT?", action:"Write one sentence in the margin." },
  { n:"02", label:"RESULT", title:"Read the result before the route taken to reach it.", copy:"Look at the headline finding, figures and conclusion. You are building a map, not proving you understand every line yet.", mark:"WHAT CHANGED?", action:"Circle the result you think matters most." },
  { n:"03", label:"METHOD", title:"Interrogate who, what and how.", copy:"Ask who was studied, what was measured, what was compared and which design choices could change the result.", mark:"COULD THIS METHOD ANSWER THE QUESTION?", action:"Underline the population, measure and comparison." },
  { n:"04", label:"EVIDENCE", title:"Follow one important sentence back to its evidence.", copy:"Pick a claim that sounds important. Trace it to the table, figure or analysis that is supposed to support it.", mark:"SHOW ME WHERE THE SENTENCE COMES FROM.", action:"Draw an arrow from claim to figure or table." },
  { n:"05", label:"LIMIT", title:"Find where the claim has to stop.", copy:"Population, duration, measurement and design usually tell you what this study does not establish. Limitations are part of the result, not an apology after it.", mark:"WHAT DOES THIS NOT ESTABLISH?", action:"Box the strongest boundary you can find." },
  { n:"06", label:"RECORD", title:"Leave with two lines you can actually use later.", copy:"One line for what the paper supports. One line for what remains uncertain. That is more useful than three pages of copied notes.", mark:"SUPPORTS / UNCERTAIN", action:"Close the paper and write both from memory." },
];

export function ReadingPasses() {
  const [active, setActive] = useState(0);
  const item = passes[active];
  const swipe = useSwipeCycle(passes.length, active, setActive);
  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    event.preventDefault();
    setActive((value) => event.key === "ArrowRight" ? (value + 1) % passes.length : (value - 1 + passes.length) % passes.length);
  };
  return (
    <section className="pf2-reading-instrument" aria-labelledby="reading-pass-title" tabIndex={0} onKeyDown={onKeyDown} {...swipe}>
      <nav aria-label="Six reading passes">
        {passes.map((pass,index)=><button type="button" key={pass.n} className={active===index?"active":undefined} onClick={()=>setActive(index)} aria-pressed={active===index}><b>{pass.n}</b><span>{pass.label}</span><i /></button>)}
      </nav>
      <article key={item.n} aria-live="polite">
        <header><span>FIELD GUIDE / 01</span><span>PASS {item.n} / 06</span></header>
        <div className="pf2-reading-index" aria-hidden="true">{item.n}</div>
        <p className="pf-kicker">{item.label}</p>
        <h2 id="reading-pass-title">{item.title}</h2>
        <p>{item.copy}</p>
        <aside><span>PENCIL MARK</span><strong>{item.mark}</strong></aside>
        <footer><span>DO THIS NOW</span><p>{item.action}</p></footer>
      </article>
    </section>
  );
}
