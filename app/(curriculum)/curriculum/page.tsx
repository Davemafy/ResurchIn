import Link from "next/link";
import { ResearchNotebook } from "@/components/experience/ResearchNotebook";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="curriculum" />
      <main id="main-content" className="pf-inner pf-curriculum">
        <section className="pf-curriculum-hero">
          <div className="pf-inner-meta"><span>CURRICULUM / 02</span><span>ONE PROJECT / SIX STATES</span><span>ARTIFACT-LED</span></div>
          <div className="pf-curriculum-count" aria-hidden="true">06</div>
          <div><p className="pf-kicker">THE LEARNING MODEL</p><h1>You do not learn research<br />in chapters.<br /><em>You learn it in decisions.</em></h1></div>
          <p>The curriculum follows the same question from its vague first sentence to a claim you can defend. Every stage leaves behind a working artifact and a reason for the next revision.</p>
        </section>
        <ResearchNotebook />
        <section className="pf-artifact-wall">
          <header><p className="pf-kicker">WHAT YOU LEAVE WITH</p><h2>Not six certificates.<br /><em>Six pieces of evidence.</em></h2></header>
          <ol>
            <li><b>01</b><span>QUESTION MEMO</span><small>The boundary of the problem.</small></li>
            <li><b>02</b><span>EVIDENCE MATRIX</span><small>What each source actually supports.</small></li>
            <li><b>03</b><span>METHOD NOTE</span><small>Why this design fits this question.</small></li>
            <li><b>04</b><span>ANALYSIS LOG</span><small>The choices behind the result.</small></li>
            <li><b>05</b><span>REVISED DRAFT</span><small>Claims cut down to the evidence.</small></li>
            <li><b>06</b><span>DEFENCE DECK</span><small>Result, uncertainty and next question.</small></li>
          </ol>
        </section>
        <section className="pf-inner-closing pf-black"><p className="pf-kicker">READINESS / NEXT COHORT</p><h2>The work gets stronger<br />when the claim gets smaller.</h2><Link className="pf-cta" href="/apply/">Apply to practice it <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
