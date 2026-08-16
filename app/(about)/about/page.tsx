import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="about" />
      <main id="main-content" className="pf-inner pf-about">
        <section className="pf-about-hero">
          <div className="pf-inner-meta"><span>ABOUT / 06</span><span>WHY THE ROOM EXISTS</span><span>FREE / VOLUNTEER-LED</span></div>
          <p className="pf-kicker">ACCESS SHOULD NOT BE THE PREREQUISITE</p>
          <h1>NO INSIDER?<br /><em>STILL START.</em></h1>
          <p>Research can feel like a language everyone else learned in a room you were not invited into. ResurchIn exists to make the invisible parts visible.</p>
          <div className="pf-about-bridge" aria-hidden="true"><span>INTEREST</span><i/><span>QUESTION</span><i/><span>EVIDENCE</span><i/><span>CLAIM</span></div>
        </section>

        <section className="pf-founder-story">
          <div className="pf-founder-letter" aria-hidden="true">H</div>
          <article><p className="pf-kicker">FOUNDER / WORKING RESEARCHER</p><h2>Happiness Eric Aigbogun</h2><p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. She created ResurchIn to make the invisible parts of research practice easier to access: how questions are framed, why methods are chosen, how drafts are reviewed and how uncertainty is communicated.</p><blockquote>“Learn the work by doing the work.”</blockquote></article>
          <figure><img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher working at a microscope" /><figcaption>ACTIVE RESEARCH PRACTICE / FIELD REFERENCE</figcaption></figure>
        </section>

        <section className="pf-principles">
          <header><p className="pf-kicker">WHAT THE PROGRAM PROTECTS</p><h2>Three things we refuse<br /><em>to trade away.</em></h2></header>
          <ol>
            <li><b>01</b><span>PRACTICE</span><h3>Practice before polish.</h3><p>Participants keep the drafts that show how their decisions changed.</p></li>
            <li><b>02</b><span>GUIDANCE</span><h3>Feedback that is usable.</h3><p>Critique should tell you what to inspect, question or revise next.</p></li>
            <li><b>03</b><span>ACCESS</span><h3>Access without tuition.</h3><p>The program remains free and volunteer-led for emerging researchers worldwide.</p></li>
          </ol>
        </section>

        <section className="pf-public-record">
          <header><p className="pf-kicker">PUBLIC RECORD / VERIFIED</p><h2>The work exists<br />beyond this website.</h2></header>
          <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><b>01</b><span><small>SRA INTERNATIONAL / JULY 2026</small>Contributor, Catalyst Quarterly</span><em>↗</em></a>
          <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><b>02</b><span><small>GOOGLE SCHOLAR</small>Research publications and citations</span><em>↗</em></a>
          <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer"><b>03</b><span><small>OPEN FIELD NOTES</small>Programme updates and research guidance</span><em>↗</em></a>
        </section>

        <section className="pf-inner-closing pf-acid"><p className="pf-kicker">ADMISSIONS / NEXT COHORT</p><h2>Curiosity is enough<br />to begin.</h2><Link className="pf-cta pf-cta-dark" href="/apply/">Submit an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
