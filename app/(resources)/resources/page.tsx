import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main className="instrument-inner resources-page-new">
        <section className="resources-opening">
          <div><p className="micro">FIELD NOTES / OPEN ACCESS</p><h1>Read when the work<br /><em>stops moving.</em></h1></div>
          <p>Not generic research advice. Short field guides for the moment a paper becomes confusing, a question refuses to narrow or a draft keeps making the same mistake.</p>
          <div className="issue-mark" aria-hidden="true">R/<br />01</div>
        </section>

        <section className="featured-note">
          <div className="note-cover"><span>FIELD GUIDE / 01</span><b>READ<br />THE<br />PAPER.</b><small>WITHOUT GETTING LOST</small></div>
          <article><p className="micro">FEATURED / 8 MIN READ</p><h2>How to read a research paper without getting lost.</h2><p>A six-pass method for finding the question, following the evidence and deciding what the paper can actually claim.</p><Link className="text-arrow" href="/resources/how-to-read-a-research-paper-without-getting-lost/">Open the field guide →</Link></article>
          <figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research material together" /><figcaption>READING DESK / SOURCE AUDIT</figcaption></figure>
        </section>

        <section className="resource-ledger-new">
          <header><span>ARCHIVE / ISSUE 01</span><span>FILTER: ALL MATERIAL</span></header>
          <article><b>01</b><span>FIELD GUIDE</span><h2>How to read a research paper without getting lost.</h2><small>AVAILABLE</small></article>
          <article className="muted"><b>02</b><span>WORKSHEET</span><h2>Turn an interest into a researchable question.</h2><small>IN EDIT</small></article>
          <article className="muted"><b>03</b><span>FIELD NOTE</span><h2>Write a limitation that improves your argument.</h2><small>IN EDIT</small></article>
          <article className="muted"><b>04</b><span>CHECKLIST</span><h2>Prepare a draft for useful feedback.</h2><small>IN EDIT</small></article>
        </section>

        <section className="inner-cta black"><p className="micro">FIELD NOTES / OPEN</p><h2>Start with the guide.<br />Stay for the work.</h2><Link className="signal-button" href="/apply/">Apply for the cohort <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
