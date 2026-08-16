import Link from "next/link";
import { ResourceIndex } from "@/components/experience/ResourceIndex";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main id="main-content" className="pf-inner pf2-resources">
        <section className="pf2-resources-hero">
          <div className="pf2-grid" aria-hidden="true" />
          <div className="pf-inner-meta"><span>FIELD NOTES / 05</span><span>OPEN ACCESS</span><span>ISSUE 01</span></div>
          <div className="pf2-resources-title" data-reveal><p className="pf-kicker">TOOLS FOR THE STUCK BIT</p><h1>READ<br />WITH A<br /><em>PENCIL.</em></h1></div>
          <p>These are not motivational articles. They are field guides for the moment a paper becomes confusing, a question refuses to narrow or a draft keeps making the same mistake.</p>
          <div className="pf2-resource-issue" aria-hidden="true">R/01</div>
          <figure data-parallax="0.025"><img src="/assets/images/pexels-5940711-w1800.avif" srcSet="/assets/images/pexels-5940711-w1200.avif 1200w, /assets/images/pexels-5940711-w1600.avif 1600w, /assets/images/pexels-5940711-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students reading research material together" /><figcaption>READING DESK / SOURCE AUDIT / ISSUE 01</figcaption></figure>
        </section>

        <section className="pf2-feature-note">
          <Link className="pf2-feature-cover" href="/resources/how-to-read-a-research-paper-without-getting-lost/" data-cursor="READ" aria-label="Read How to read a research paper without getting lost">
            <span>FIELD GUIDE / 01</span><b>READ<br />THE<br />PAPER.</b><small>WITHOUT GETTING LOST</small><i>↗</i>
          </Link>
          <article data-reveal><p className="pf-kicker">FEATURED / 8 MIN READ</p><h2>How to read a research paper without getting lost.</h2><p>A six-pass method for finding the question, following the evidence and deciding what the paper can actually claim.</p><Link className="pf-link" href="/resources/how-to-read-a-research-paper-without-getting-lost/">Open field guide <span>→</span></Link></article>
          <aside><span>READING RULE / 01</span><blockquote>Do not read every sentence with equal attention. <em>Interrogate the argument.</em></blockquote></aside>
        </section>

        <ResourceIndex />

        <section className="pf2-resource-break">
          <div aria-hidden="true">?</div>
          <p className="pf-kicker">WHEN THE WORK STOPS MOVING</p>
          <h2 data-reveal>Find the decision<br />you are actually<br /><em>stuck on.</em></h2>
          <p>Then choose the smallest tool that helps you make the next move.</p>
        </section>

        <section className="pf2-closing pf2-closing-blue">
          <p className="pf-kicker">FIELD NOTES / OPEN</p><h2 data-reveal>START WITH<br />THE GUIDE.<br /><em>STAY FOR THE WORK.</em></h2><Link className="pf-cta pf-cta-light" data-cursor="APPLY" href="/apply/">Apply for the cohort <span>↗</span></Link><small>OPEN ACCESS / ISSUE 01 / RESURCHIN 2026</small>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
