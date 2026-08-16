import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const notes = [
  ["01", "FIELD GUIDE", "How to read a research paper without getting lost.", "8 min", "/resources/how-to-read-a-research-paper-without-getting-lost/"],
  ["02", "WORKSHEET", "Turn an interest into a researchable question.", "SOON", "#"],
  ["03", "FIELD NOTE", "Write a limitation that improves the argument.", "SOON", "#"],
  ["04", "CHECKLIST", "Prepare a draft for useful feedback.", "SOON", "#"],
];

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader active="resources" />
      <main className="rv-inner rv-resources">
        <section className="rv-resource-hero">
          <div data-rv-reveal><p className="rv-eyebrow">OPEN FIELD NOTES / VERSION 01</p><h1>Resources for the moment the work stops moving.</h1><p className="rv-lead">Not a giant library. Short guides for reading, framing, revising and asking for better feedback.</p></div>
          <figure data-rv-reveal><img src="/assets/images/pexels-5940711-w1800.avif" alt="Students reading and comparing research papers"/><figcaption><span>FIELD NOTE / READING DESK</span><b>Mark the claim before you mark the paper.</b></figcaption></figure>
        </section>
        <section className="rv-resource-list" aria-label="Research resources">
          {notes.map(([number,type,title,time,href]) => (
            <article key={number} data-rv-reveal className={number === "01" ? "is-featured" : undefined}>
              <span>V{number}</span><small>{type}</small><h2>{title}</h2><b>{time}</b>
              {href !== "#" ? <Link href={href}>Open note <i>↗</i></Link> : <em>IN PROGRESS</em>}
            </article>
          ))}
        </section>
        <section className="rv-resource-method">
          <header data-rv-reveal><p className="rv-eyebrow">HOW TO USE THE LIBRARY</p><h2>Use the smallest guide that gets the project moving again.</h2></header>
          <div data-rv-reveal><span>01 / FIND THE STALL</span><span>02 / USE THE GUIDE</span><span>03 / CHANGE THE WORK</span><span>04 / KEEP THE NOTE</span></div>
        </section>
        <section className="rv-final rv-final-compact"><p className="rv-eyebrow">NEXT COHORT</p><h2>Ready for sustained review?</h2><Link className="rv-button rv-button-ink" href="/apply/">Bring V01 <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
