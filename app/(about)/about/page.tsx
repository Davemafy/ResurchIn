import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="about" />
      <main id="main-content" className="pf-inner pf2-about">
        <section className="pf2-about-hero">
          <div className="pf2-grid" aria-hidden="true" />
          <div className="pf-inner-meta"><span>ABOUT / 06</span><span>WHY THE ROOM EXISTS</span><span>FREE / VOLUNTEER-LED</span></div>
          <div className="pf2-about-title" data-reveal><p className="pf-kicker">ACCESS SHOULD NOT BE THE PREREQUISITE</p><h1>NO<br />INSIDER?<br /><em>STILL START.</em></h1></div>
          <p>Research can feel like a language everyone else learned in a room you were not invited into. ResurchIn exists to make the invisible decisions visible.</p>
          <div className="pf2-about-axis" aria-hidden="true"><span>INTEREST</span><i/><span>QUESTION</span><i/><span>EVIDENCE</span><i/><span>CLAIM</span></div>
        </section>

        <section className="pf2-about-origin">
          <figure data-parallax="0.035"><img src="/assets/images/pexels-9243385-w1800.avif" srcSet="/assets/images/pexels-9243385-w1200.avif 1200w, /assets/images/pexels-9243385-w1600.avif 1600w, /assets/images/pexels-9243385-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Researcher working with a microscope" /><figcaption>ACTIVE RESEARCH PRACTICE / FIELD REFERENCE</figcaption></figure>
          <article data-reveal><p className="pf-kicker">FOUNDER / WORKING RESEARCHER</p><h2>Happiness Eric<br /><em>Aigbogun.</em></h2><p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. She created ResurchIn to make the invisible parts of research practice easier to access: how questions are framed, why methods are chosen, how drafts are reviewed and how uncertainty is communicated.</p></article>
          <blockquote>“Learn the work<br />by doing <em>the work.</em>”</blockquote>
          <div className="pf2-about-H" aria-hidden="true">H</div>
        </section>

        <section className="pf2-about-invisible">
          <header><p className="pf-kicker">THE INVISIBLE CURRICULUM</p><h2 data-reveal>What experienced researchers<br /><em>stop explaining out loud.</em></h2></header>
          <div className="pf2-about-ledger">
            <article><b>01</b><span>FRAMING</span><h3>How to make a question smaller without making it trivial.</h3></article>
            <article><b>02</b><span>JUDGMENT</span><h3>How to know when a source is relevant but does not support your claim.</h3></article>
            <article><b>03</b><span>METHOD</span><h3>How the study design quietly sets the ceiling for every conclusion later.</h3></article>
            <article><b>04</b><span>REVISION</span><h3>How to let evidence make your sentence less certain—and more credible.</h3></article>
          </div>
        </section>

        <section className="pf2-about-principles">
          <div className="pf2-about-principle-title"><p className="pf-kicker">WHAT THE PROGRAM PROTECTS</p><h2>Three things we refuse<br /><em>to trade away.</em></h2></div>
          <ol><li><b>01</b><span>PRACTICE</span><h3>Practice before polish.</h3><p>Participants keep the drafts that show how their decisions changed.</p></li><li><b>02</b><span>GUIDANCE</span><h3>Feedback that is usable.</h3><p>Critique should tell you what to inspect, question or revise next.</p></li><li><b>03</b><span>ACCESS</span><h3>Access without tuition.</h3><p>The program remains free and volunteer-led for emerging researchers worldwide.</p></li></ol>
        </section>

        <section className="pf2-public-record">
          <header><p className="pf-kicker">PUBLIC RECORD / VERIFIED</p><h2>The work exists<br /><em>beyond this website.</em></h2></header>
          <div>
            <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer" data-cursor="OPEN"><b>01</b><span><small>SRA INTERNATIONAL / JULY 2026</small>Contributor, Catalyst Quarterly</span><em>↗</em></a>
            <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer" data-cursor="OPEN"><b>02</b><span><small>GOOGLE SCHOLAR</small>Research publications and citations</span><em>↗</em></a>
            <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer" data-cursor="OPEN"><b>03</b><span><small>OPEN FIELD NOTES</small>Programme updates and research guidance</span><em>↗</em></a>
          </div>
          <aside><span>INDEPENDENT DESCRIPTION</span><blockquote>“Creator and lead of ResurchIn, a free mentorship initiative for early-career scientists.”</blockquote><small>SRA INTERNATIONAL / CATALYST QUARTERLY / JULY 2026</small></aside>
        </section>

        <section className="pf2-closing pf2-closing-acid"><p className="pf-kicker">ADMISSIONS / NEXT COHORT</p><h2 data-reveal>CURIOSITY IS<br />ENOUGH TO <em>BEGIN.</em></h2><Link className="pf-cta pf-cta-dark" data-cursor="APPLY" href="/apply/">Submit an application <span>↗</span></Link><small>NO INSIDER REQUIRED / NO TUITION / OPEN WORLDWIDE</small></section>
      </main>
      <SiteFooter />
    </>
  );
}
