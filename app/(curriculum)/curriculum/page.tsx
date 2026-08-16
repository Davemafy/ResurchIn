import Link from "next/link";
import { ResearchNotebook } from "@/components/experience/ResearchNotebook";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="curriculum" />
      <main id="main-content" className="pf-inner pf-curriculum pf2-curriculum">
        <section className="pf2-curriculum-hero">
          <div className="pf2-grid dark" aria-hidden="true" />
          <div className="pf-inner-meta"><span>CURRICULUM / 02</span><span>ONE PROJECT / SIX STATES</span><span>ARTIFACT-LED</span></div>
          <div className="pf2-curriculum-count" aria-hidden="true">06</div>
          <div className="pf2-curriculum-title" data-reveal><p className="pf-kicker">THE LEARNING MODEL</p><h1>You do not learn research<br />in chapters.<br /><em>You learn it in decisions.</em></h1></div>
          <p data-reveal>The curriculum follows the same question from its vague first sentence to a claim you can defend. Every stage leaves behind a working artifact and a reason for the next revision.</p>
          <div className="pf2-curriculum-axis" aria-hidden="true"><span>FRAME</span><i/><span>READ</span><i/><span>DESIGN</span><i/><span>ANALYSE</span><i/><span>REVISE</span><i/><span>DEFEND</span></div>
        </section>

        <section className="pf2-curriculum-intro" data-reveal><p className="pf-kicker">THE WORKBENCH</p><h2>Six acts of judgment.<br /><em>One document that keeps changing.</em></h2><p>Use the chapter rail. Compare the old sentence with the one that survives review.</p></section>

        <ResearchNotebook />

        <section className="pf2-artifact-field">
          <header data-reveal><p className="pf-kicker">WHAT YOU LEAVE WITH</p><h2>Not six certificates.<br /><em>Six pieces of evidence.</em></h2></header>
          <ol>
            <li data-reveal><b>01</b><span>QUESTION MEMO</span><small>The boundary of the problem.</small><i>Q</i></li>
            <li data-reveal><b>02</b><span>EVIDENCE MATRIX</span><small>What each source actually supports.</small><i>E</i></li>
            <li data-reveal><b>03</b><span>METHOD NOTE</span><small>Why this design fits this question.</small><i>M</i></li>
            <li data-reveal><b>04</b><span>ANALYSIS LOG</span><small>The choices behind the result.</small><i>A</i></li>
            <li data-reveal><b>05</b><span>REVISED DRAFT</span><small>Claims cut down to the evidence.</small><i>R</i></li>
            <li data-reveal><b>06</b><span>DEFENCE DECK</span><small>Result, uncertainty and next question.</small><i>D</i></li>
          </ol>
        </section>

        <section className="pf2-curriculum-photo">
          <div aria-hidden="true">REVISION</div>
          <figure data-parallax=".07"><img src="/assets/images/pexels-5940839-w1800.avif" srcSet="/assets/images/pexels-5940839-w1200.avif 1200w, /assets/images/pexels-5940839-w1600.avif 1600w, /assets/images/pexels-5940839-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Research group discussing work" loading="lazy"/><figcaption>QUESTION CLINIC / WORK IN PROGRESS</figcaption></figure>
          <blockquote data-reveal>“If the sentence did not change, <em>what did the review do?</em>”</blockquote>
        </section>

        <section className="pf2-closing"><div className="pf2-grid dark" aria-hidden="true"/><p className="pf-kicker">READINESS / NEXT COHORT</p><h2 data-reveal>THE CLAIM GETS<br /><em>SMALLER.</em><br />THE WORK GETS<br /><em>STRONGER.</em></h2><Link className="pf-cta pf-cta-light" href="/apply/">Apply to practice it <span>↗</span></Link><div className="pf2-closing-orbit" aria-hidden="true">06</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
