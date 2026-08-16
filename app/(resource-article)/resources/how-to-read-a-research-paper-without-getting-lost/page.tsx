import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const passes = [
  ["01", "START WITH THE CLAIM", "Read the title, abstract and conclusion. Write one sentence: ‘The authors argue that…’", "What is the paper asking me to believe?"],
  ["02", "FIND THE QUESTION", "Look near the end of the introduction. Name the exact problem the authors are resolving.", "Could the evidence answer this question?"],
  ["03", "TRACE THE EVIDENCE", "Scan figures, tables and results. Ask what each item shows before reading the authors’ interpretation.", "Which result supports which sentence?"],
  ["04", "INTERROGATE THE METHOD", "Who or what was studied? How was it measured? Method is where the limits begin.", "What can this design not establish?"],
  ["05", "LOOK FOR RESTRAINT", "Strong papers say what they cannot conclude. Find the limitations and compare them with the headline claim.", "Where does the paper stop?"],
  ["06", "WRITE YOUR OWN NOTE", "Record the question, evidence, claim, limitation and one new question in your own words.", "What changed in my understanding?"],
];

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader active="resources" />
      <main className="rv-reading">
        <header data-rv-reveal><Link href="/resources/">← All field notes</Link><p className="rv-eyebrow">FIELD GUIDE 01 / 8 MIN READ</p><h1>How to read a research paper <em>without getting lost.</em></h1><p className="rv-lead">Do not read from line one to the references. Read the paper in passes, with a different question each time.</p></header>
        <div className="rv-reading-grid">
          <aside><span>SIX-PASS METHOD</span><b>01 → 06</b><p>Each pass has one job. Stop trying to understand everything at once.</p></aside>
          <div>
            {passes.map(([n,title,copy,question]) => <section key={n} data-rv-reveal><b>{n}</b><div><h2>{title}</h2><p>{copy}</p><blockquote>{question}</blockquote></div></section>)}
          </div>
        </div>
        <section className="rv-reading-end"><p>Keep the note that changed your mind.</p><Link className="rv-button rv-button-ink" href="/resources/">Back to field notes <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
