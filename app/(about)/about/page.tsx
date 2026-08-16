import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader active="about" />
      <main className="rv-inner rv-about">
        <section className="rv-about-hero">
          <div data-rv-reveal><p className="rv-eyebrow">ABOUT / WHY THIS EXISTS</p><h1>Research guidance should not be inherited through access.</h1></div>
          <p className="rv-lead" data-rv-reveal>ResurchIn exists for people with the curiosity to investigate but without an insider teaching them how research decisions are actually made.</p>
        </section>
        <section className="rv-about-founder">
          <figure data-rv-reveal><img src="/assets/images/pexels-5940830-w1800.avif" alt="A research learning group in a classroom"/><figcaption>THE OPEN ROOM / RESEARCH PRACTICE</figcaption></figure>
          <article data-rv-reveal><span>FOUNDER / WORKING RESEARCHER</span><h2>Happiness Eric Aigbogun</h2><blockquote>“Access should not determine potential.”</blockquote><p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. ResurchIn extends that working-researcher perspective into a free, volunteer-led training community.</p></article>
        </section>
        <section className="rv-about-principles">
          <p className="rv-eyebrow">WHAT THE PROGRAM PROTECTS</p>
          <div><article data-rv-reveal><b>01</b><h3>Practice before polish.</h3><p>Participants work with real material and keep the drafts that show how their decisions changed.</p></article><article data-rv-reveal><b>02</b><h3>Guidance that is usable.</h3><p>Feedback should tell you what to inspect, question or revise next.</p></article><article data-rv-reveal><b>03</b><h3>Access without tuition.</h3><p>The program remains free and volunteer-driven for emerging researchers worldwide.</p></article></div>
        </section>
        <section className="rv-record-section">
          <header data-rv-reveal><p className="rv-eyebrow">PUBLIC RECORD</p><h2>The work exists beyond this website.</h2></header>
          <div className="rv-records" data-rv-reveal><a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><b>01</b><span><small>SRA INTERNATIONAL / JULY 2026</small><strong>Contributor, Catalyst Quarterly</strong></span><i>↗</i></a><a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><b>02</b><span><small>GOOGLE SCHOLAR</small><strong>Research publications and citations</strong></span><i>↗</i></a><a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer"><b>03</b><span><small>RESURCHIN / OPEN FIELD NOTES</small><strong>Programme updates and research guidance</strong></span><i>↗</i></a></div>
        </section>
        <section className="rv-final rv-final-compact"><p className="rv-eyebrow">ADMISSIONS</p><h2>Learn the work by revising the work.</h2><Link className="rv-button rv-button-ink" href="/apply/">Start an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
