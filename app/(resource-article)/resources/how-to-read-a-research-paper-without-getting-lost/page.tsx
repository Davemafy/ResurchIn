import Link from "next/link";
import { ReadingPasses } from "@/components/experience/ReadingPasses";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main id="main-content" className="pf-inner pf2-article">
        <article>
          <header className="pf2-article-cover">
            <div className="pf2-grid" aria-hidden="true" />
            <div className="pf-inner-meta"><span>FIELD GUIDE / 01</span><span>8 MIN READ</span><span>OPEN ACCESS</span></div>
            <div className="pf2-article-num" aria-hidden="true">01</div>
            <p className="pf-kicker">READING PROTOCOL / SIX PASSES</p>
            <h1 data-reveal>READ THE<br />PAPER.<br /><em>NOT THE AURA.</em></h1>
            <p>A six-pass method for finding the question, following the evidence and deciding what the paper can actually claim.</p>
          </header>

          <figure className="pf2-article-image" data-parallax="0.025"><img src="/assets/images/pexels-5940711-w1800.avif" srcSet="/assets/images/pexels-5940711-w1200.avif 1200w, /assets/images/pexels-5940711-w1600.avif 1600w, /assets/images/pexels-5940711-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students reading and comparing research material" /><figcaption>READING DESK / SOURCE AUDIT / FIELD GUIDE 01</figcaption></figure>

          <section className="pf2-article-intro"><span className="pf-kicker">BEFORE YOU START</span><blockquote data-reveal>You do not need to understand every sentence on the first pass. <em>You need a map of the argument.</em></blockquote><p>The most common reading mistake is treating a paper like a novel: first line to last line, equal attention everywhere. Research papers are built to be interrogated. Read them in passes.</p></section>

          <ReadingPasses />

          <section className="pf2-claim-trace">
            <header><p className="pf-kicker">ONE CLAIM / TRACE IT</p><h2>Do not save a sentence<br /><em>without its evidence.</em></h2></header>
            <div className="pf2-claim-trace-board">
              <article><span>CLAIM</span><p>“The intervention improved student outcomes.”</p></article><i aria-hidden="true">→</i><article><span>EVIDENCE</span><p>Higher mean test scores at week twelve in the intervention group.</p></article><i aria-hidden="true">→</i><article><span>LIMIT</span><p>One sample. Twelve weeks. The design does not establish causation.</p></article>
            </div>
          </section>

          <aside className="pf2-article-note"><span>KEEP THIS / TWO-LINE NOTE</span><p><strong>SUPPORTS:</strong> What does the evidence justify saying?</p><p><strong>UNCERTAIN:</strong> What would require more data, a different design or a narrower claim?</p></aside>

          <footer className="pf2-article-end"><span>END / FIELD GUIDE 01</span><h2 data-reveal>NOW READ ONE<br />PAPER <em>WITH A PENCIL.</em></h2><Link className="pf-link" href="/resources/">Return to field notes <span>→</span></Link></footer>
        </article>
      </main>
      <SiteFooter />
    </>
  );
}
