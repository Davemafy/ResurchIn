import Link from "next/link";
import { QuestionEngine } from "@/components/direction/QuestionEngine";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="curriculum" />
      <main className="instrument-inner curriculum-page-new">
        <section className="curriculum-opening">
          <div className="curriculum-count" aria-hidden="true">06</div>
          <div><p className="micro">CURRICULUM / ONE PROJECT IN SIX STATES</p><h1>You do not learn research in chapters.<br /><em>You learn it in decisions.</em></h1></div>
          <p className="curriculum-lead">The curriculum follows the same question from its vague first sentence to a claim you can defend. Every stage produces a working artifact and a reason for the next revision.</p>
        </section>

        <QuestionEngine compact />

        <section className="artifact-index">
          <div className="artifact-title"><p className="micro">WHAT YOU LEAVE WITH</p><h2>Not six certificates.<br /><em>Six pieces of evidence.</em></h2></div>
          <ol>
            <li><b>01</b><span>QUESTION MEMO</span><small>The boundary of the problem.</small></li>
            <li><b>02</b><span>EVIDENCE MATRIX</span><small>What each source actually supports.</small></li>
            <li><b>03</b><span>METHOD NOTE</span><small>Why this design fits this question.</small></li>
            <li><b>04</b><span>ANALYSIS LOG</span><small>The choices behind the result.</small></li>
            <li><b>05</b><span>REVISED DRAFT</span><small>Claims cut down to the evidence.</small></li>
            <li><b>06</b><span>DEFENCE DECK</span><small>Result, uncertainty and next question.</small></li>
          </ol>
        </section>

        <section className="inner-cta black"><p className="micro">READINESS / NEXT COHORT</p><h2>The work gets stronger<br />when the claim gets smaller.</h2><Link className="signal-button" href="/apply/">Apply to practice it <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
