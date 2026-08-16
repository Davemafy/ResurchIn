import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main id="main-content" className="pf-inner pf-resources">
        <section className="pf-resources-hero">
          <div className="pf-inner-meta"><span>FIELD NOTES / 05</span><span>OPEN ACCESS</span><span>ISSUE 01</span></div>
          <div className="pf-resource-issue" aria-hidden="true">R/01</div>
          <div><p className="pf-kicker">TOOLS FOR THE STUCK BIT</p><h1>Read when the work<br /><em>stops moving.</em></h1></div>
          <p>Short field guides for the moment a paper becomes confusing, a question refuses to narrow or a draft keeps making the same mistake.</p>
        </section>

        <section className="pf-feature-note">
          <Link className="pf-feature-cover" href="/resources/how-to-read-a-research-paper-without-getting-lost/" aria-label="Read How to read a research paper without getting lost">
            <span>FIELD GUIDE / 01</span><b>READ<br />THE<br />PAPER.</b><small>WITHOUT GETTING LOST</small><i>↗</i>
          </Link>
          <article><p className="pf-kicker">FEATURED / 8 MIN READ</p><h2>How to read a research paper without getting lost.</h2><p>A six-pass method for finding the question, following the evidence and deciding what the paper can actually claim.</p><Link className="pf-link" href="/resources/how-to-read-a-research-paper-without-getting-lost/">Open field guide <span>→</span></Link></article>
          <figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research material together" /><figcaption>READING DESK / SOURCE AUDIT</figcaption></figure>
        </section>

        <section className="pf-resource-ledger">
          <header><span>ARCHIVE / ISSUE 01</span><span>TYPE / STATUS</span></header>
          <Link href="/resources/how-to-read-a-research-paper-without-getting-lost/"><b>01</b><span>FIELD GUIDE</span><h2>How to read a research paper without getting lost.</h2><small>AVAILABLE ↗</small></Link>
          <div className="muted"><b>02</b><span>WORKSHEET</span><h2>Turn an interest into a researchable question.</h2><small>IN EDIT</small></div>
          <div className="muted"><b>03</b><span>FIELD NOTE</span><h2>Write a limitation that improves your argument.</h2><small>IN EDIT</small></div>
          <div className="muted"><b>04</b><span>CHECKLIST</span><h2>Prepare a draft for useful feedback.</h2><small>IN EDIT</small></div>
        </section>

        <section className="pf-inner-closing pf-blue"><p className="pf-kicker">FIELD NOTES / OPEN</p><h2>Start with the guide.<br />Stay for the work.</h2><Link className="pf-cta pf-cta-light" href="/apply/">Apply for the cohort <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
