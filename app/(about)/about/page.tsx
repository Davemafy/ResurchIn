import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="instrument-inner about-page-new">
        <section className="about-opening">
          <p className="micro">ABOUT / THE REASON FOR THE ROOM</p>
          <h1>Research should not be<br /><em>inherited through access.</em></h1>
          <div className="about-bridge"><span>NO INSIDER?</span><i /><span>STILL START.</span></div>
        </section>

        <section className="founder-block-new">
          <div className="founder-letter" aria-hidden="true">H</div>
          <article><p className="micro">FOUNDER / WORKING RESEARCHER</p><h2>Happiness Eric Aigbogun</h2><p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. She created ResurchIn to make the invisible parts of research practice easier to access: how questions are framed, why methods are chosen, how drafts are reviewed and how uncertainty is communicated.</p><blockquote>“Learn the work by doing the work.”</blockquote></article>
          <figure><img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher working at a microscope" /><figcaption>ACTIVE RESEARCH PRACTICE / FIELD REFERENCE</figcaption></figure>
        </section>

        <section className="principles-new">
          <div><p className="micro">WHAT THE PROGRAM PROTECTS</p><h2>Three things we refuse to trade away.</h2></div>
          <ol>
            <li><b>01</b><h3>Practice before polish.</h3><p>Participants keep the drafts that show how their decisions changed.</p></li>
            <li><b>02</b><h3>Guidance that is usable.</h3><p>Feedback should tell you what to inspect, question or revise next.</p></li>
            <li><b>03</b><h3>Access without tuition.</h3><p>The program remains free and volunteer-led for emerging researchers worldwide.</p></li>
          </ol>
        </section>

        <section className="proof-strip-new">
          <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><span>PUBLIC RECORD / 01</span><strong>SRA International / Catalyst Quarterly</strong><em>Open ↗</em></a>
          <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><span>PUBLIC RECORD / 02</span><strong>Google Scholar profile</strong><em>Open ↗</em></a>
          <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer"><span>OPEN CHANNEL / 03</span><strong>ResurchIn field notes</strong><em>Open ↗</em></a>
        </section>

        <section className="inner-cta acid"><p className="micro">ADMISSIONS / NEXT COHORT</p><h2>Curiosity is enough<br />to begin.</h2><Link className="signal-button dark" href="/apply/">Submit an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
