"use client";

import Link from "next/link";
import { useState } from "react";

const items = [
  { n:"01", type:"FIELD GUIDE", title:"How to read a research paper without getting lost.", status:"AVAILABLE", read:"8 MIN", href:"/resources/how-to-read-a-research-paper-without-getting-lost/", image:"/assets/images/pexels-5940711-w1600.avif", note:"Find the question. Trace one claim. Mark the limit." },
  { n:"02", type:"WORKSHEET", title:"Turn an interest into a researchable question.", status:"IN EDIT", read:"—", image:"/assets/images/pexels-5940715-w1600.avif", note:"A framing sheet for population, behaviour, outcome and boundary." },
  { n:"03", type:"FIELD NOTE", title:"Write a limitation that improves your argument.", status:"IN EDIT", read:"—", image:"/assets/images/pexels-9243385-w1600.avif", note:"Use uncertainty to make the result more precise, not less useful." },
  { n:"04", type:"CHECKLIST", title:"Prepare a draft for useful feedback.", status:"IN EDIT", read:"—", image:"/assets/images/pexels-5940839-w1600.avif", note:"Show the decision you want reviewed, not just the finished document." },
];

export function ResourceIndex() {
  const [active, setActive] = useState(0);
  const item = items[active];

  return (
    <section className="pf2-resource-index" aria-labelledby="resource-index-title">
      <header><span id="resource-index-title">ARCHIVE / ISSUE 01</span><span>TYPE</span><span>STATUS</span></header>
      <div className="pf2-resource-rows">
        {items.map((resource, index) => {
          const content = <><b>{resource.n}</b><span>{resource.type}</span><h2>{resource.title}</h2><small>{resource.status}{resource.href ? " ↗" : ""}</small></>;
          return resource.href ? (
            <Link key={resource.n} href={resource.href} className={active === index ? "active" : undefined} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} data-cursor="READ">{content}</Link>
          ) : (
            <button type="button" key={resource.n} className={active === index ? "active" : undefined} onMouseEnter={() => setActive(index)} onFocus={() => setActive(index)} onClick={() => setActive(index)}>{content}</button>
          );
        })}
      </div>
      <aside className="pf2-resource-preview" key={item.n} aria-live="polite">
        <figure><img src={item.image} alt="" /><figcaption>FIELD NOTE / {item.n} / PREVIEW</figcaption></figure>
        <div><span>{item.type} / {item.read}</span><p>{item.note}</p><b>{item.n}</b></div>
      </aside>
    </section>
  );
}
