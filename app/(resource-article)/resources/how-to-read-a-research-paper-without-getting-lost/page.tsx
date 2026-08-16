import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const passes = [
  ["01", "START WITH THE CLAIM", "Read the title, abstract and conclusion. Write one sentence: ‘The authors argue that…’", "What is the paper asking me to believe?"],
  ["02", "FIND THE QUESTION", "Look near the end of the introduction. What exact problem are the authors resolving?", "What would count as an answer?"],
  ["03", "TRACE THE EVIDENCE", "Scan figures, tables and results. Ask what each one shows and supports.", "Which result carries the claim?"],
  ["04", "INTERROGATE THE METHOD", "Who or what was studied? How was it measured? Method is where limits begin.", "What can this design not tell me?"],
  ["05", "LOOK FOR RESTRAINT", "Strong papers say what they cannot conclude. Find the limitations.", "Where does the certainty stop?"],
  ["06", "WRITE YOUR OWN NOTE", "Record the question, evidence, claim, limitation and one new question.", "What changed in my understanding?"],
] as const;

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main className="studio-article">
        <article>
          <header className="article-cover">
            <div className="studio-page-meta"><span>FIELD GUIDE / 01</span><span>8 MIN READ / OPEN RESOURCE</span></div>
            <Link href="/resources/" className="article-back">← FIELD LIBRARY</Link>
            <p className="studio-eyebrow"><span>01</span> READING METHOD</p>
            <h1>How to read a research paper<br /><em>without getting lost.</em></h1>
            <p>Read it in layers, with a different question each time.</p>
            <div className="article-cover-sheet" aria-hidden="true">
              <span>CLAIM</span><span>QUESTION</span><span>EVIDENCE</span><span>METHOD</span><span>LIMIT</span><span>NOTE</span>
            </div>
          </header>

          <div className="article-reading-grid">
            <aside className="article-rail"><span>THE SIX-PASS METHOD</span><b>01 → 06</b><i /></aside>
            <div className="article-passes">
              {passes.map(([index, title, body, prompt]) => (
                <section key={index}>
                  <b>{index}</b>
                  <div><span>PASS {index}</span><h2>{title}</h2><p>{body}</p></div>
                  <aside><small>ASK YOURSELF</small><p>{prompt}</p></aside>
                </section>
              ))}
            </div>
          </div>

          <footer className="article-endnote">
            <span>END NOTE / KEEP THIS</span>
            <blockquote>A paper is easier to read when you stop asking it to explain everything at once.</blockquote>
            <Link href="/resources/">Back to the field library ↗</Link>
          </footer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
