import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="about" />
      <main className="studio-about">
        <section className="about-hero">
          <div className="studio-page-meta"><span>ABOUT / PROVENANCE FILE</span><span>WHY RESURCHIN EXISTS</span></div>
          <div className="about-hero-copy">
            <p className="studio-eyebrow"><span>01</span> THE PREMISE</p>
            <h1>Research should not be inherited through access.</h1>
            <p>ResurchIn exists for people with the curiosity to investigate, but without an insider teaching them how research decisions are actually made.</p>
          </div>
          <figure className="about-hero-photo"><img src="/assets/images/pexels-5940830-w1800.avif" alt="A group learning together in a classroom" /><figcaption>THE OPEN ROOM / LEARN + SHARE</figcaption></figure>
          <div className="about-hero-word" aria-hidden="true">ACCESS</div>
        </section>

        <section className="about-founder-file">
          <aside><span>02 / FOUNDER</span><b>WORKING RESEARCHER</b></aside>
          <div className="about-founder-statement"><blockquote>Learn the work<br /><em>by doing the work.</em></blockquote></div>
          <article>
            <div className="founder-mark">HEA</div>
            <p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. ResurchIn extends that working-researcher perspective into a free, volunteer-led training community.</p>
            <strong>HAPPINESS ERIC AIGBOGUN / CREATOR + LEAD</strong>
          </article>
        </section>

        <section className="about-principles">
          <header><span>03 / WHAT THE PROGRAM PROTECTS</span><h2>Three things stay non-negotiable.</h2></header>
          <div>
            <article><b>01</b><h3>Practice before polish.</h3><p>Real data, real drafts and visible changes—not exercises that disappear after grading.</p></article>
            <article><b>02</b><h3>Guidance that is usable.</h3><p>Feedback should tell you what to inspect, question or revise next.</p></article>
            <article><b>03</b><h3>Access without tuition.</h3><p>The programme remains free and volunteer-driven for emerging researchers worldwide.</p></article>
          </div>
        </section>

        <section className="about-field-wall">
          <figure className="about-field-a"><img src="/assets/images/pexels-9243385-w1600.avif" alt="A researcher working at a microscope" /><figcaption>RESEARCH PRACTICE / LAB</figcaption></figure>
          <div className="about-field-copy"><span>04 / IN PRACTICE</span><h2>Access changes when the room opens.</h2><p>People read, test, ask, revise and explain together. The room is the infrastructure.</p></div>
          <figure className="about-field-b"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students working through research material" /><figcaption>READ / MARK / COMPARE</figcaption></figure>
          <figure className="about-field-c"><img src="/assets/images/pexels-5940715-w1600.avif" alt="A mentor and students revising together" /><figcaption>REVIEW / REVISE</figcaption></figure>
        </section>

        <section className="studio-cta-band">
          <span>ADMISSIONS / NEXT COHORT</span>
          <h2>Learn research<br />by doing it.</h2>
          <Link className="studio-primary studio-primary--dark" href="/apply/">Submit an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
