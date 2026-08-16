import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const passes = [
  ["01", "Find the question", "Before you chase details, write down the problem the paper is trying to answer. If you cannot say it in one sentence, you are not ready for the methods section."],
  ["02", "Read the result before the machinery", "Look at the headline finding, figures and conclusion. You are building a map, not proving you understand every line yet."],
  ["03", "Interrogate the method", "Ask who was studied, what was measured, what was compared and which choices could change the result."],
  ["04", "Follow one claim to its evidence", "Pick a sentence that sounds important. Trace it back to the table, figure or analysis that is supposed to support it."],
  ["05", "Mark the limit", "What does this study not establish? Population, duration, measurement and design usually tell you where the claim has to stop."],
  ["06", "Write your own two-line record", "One line for what the paper supports. One line for what remains uncertain. That is the note you will actually use later."],
];

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main className="instrument-inner article-page-new">
        <article className="field-article">
          <header className="article-cover-new">
            <div className="article-meta"><span>FIELD GUIDE / 01</span><span>8 MIN READ</span><span>OPEN ACCESS</span></div>
            <h1>How to read a research paper<br /><em>without getting lost.</em></h1>
            <p>A six-pass method for finding the question, following the evidence and deciding what the paper can actually claim.</p>
            <div className="article-cover-mark" aria-hidden="true">01</div>
          </header>

          <figure className="article-lead-image"><img src="/assets/images/pexels-5940711-w1800.avif" alt="Students reading and comparing research material" /><figcaption>READING DESK / SOURCE AUDIT / FIELD GUIDE 01</figcaption></figure>

          <section className="article-intro-new"><span className="micro">BEFORE YOU START</span><blockquote>You do not need to understand every sentence on the first pass. You need a map of the argument.</blockquote><p>The most common reading mistake is treating a paper like a novel: first line to last line, equal attention everywhere. Research papers are built to be interrogated. Read them in passes.</p></section>

          <section className="passes-new">
            {passes.map(([n, title, copy]) => <section key={n}><b>{n}</b><h2>{title}</h2><p>{copy}</p></section>)}
          </section>

          <aside className="article-note-new"><span>KEEP THIS / TWO-LINE NOTE</span><p><strong>SUPPORTS:</strong> What does the evidence justify saying?</p><p><strong>UNCERTAIN:</strong> What would require more data, a different design or a narrower claim?</p></aside>

          <footer className="article-end-new"><span>END / FIELD GUIDE 01</span><h2>Now read one paper<br />with a pencil.</h2><Link className="text-arrow" href="/resources/">Return to field notes →</Link></footer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
