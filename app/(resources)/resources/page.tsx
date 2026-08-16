import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const archive = [
  ["02", "WORKSHEET / SOON", "Turn an interest into a researchable question."],
  ["03", "FIELD NOTE / SOON", "Write a limitation that improves your argument."],
  ["04", "CHECKLIST / SOON", "Prepare a draft for useful feedback."],
] as const;

export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
      <main className="studio-resources">
        <section className="resources-hero">
          <div className="studio-page-meta"><span>OPEN RESOURCES / FIELD LIBRARY</span><span>ISSUE 01 / 2026</span></div>
          <div className="resources-hero-copy">
            <p className="studio-eyebrow"><span>01</span> START HERE</p>
            <h1>Use these when<br /><em>the work stops moving.</em></h1>
            <p>Field guides for the exact moments a paper becomes confusing, a question stays vague or a draft stops improving.</p>
          </div>
          <figure className="resources-hero-photo"><img src="/assets/images/pexels-5940711-w1800.avif" alt="Students studying with laptops and research papers" /><figcaption>READING DESK / FIELD GUIDE 01</figcaption></figure>
          <div className="resources-issue" aria-hidden="true">01</div>
        </section>

        <section className="resources-feature">
          <div className="resources-feature-meta"><span>FIELD GUIDE / 01</span><b>8 MIN READ</b></div>
          <div className="resources-feature-copy">
            <h2>How to read a research paper <em>without getting lost.</em></h2>
            <p>A six-pass method for finding the question, following the evidence and deciding what the paper can claim.</p>
            <Link href="/resources/how-to-read-a-research-paper-without-getting-lost/">Read the guide <span>↗</span></Link>
          </div>
          <div className="resources-feature-sheet" aria-hidden="true">
            <span>01 / CLAIM</span><span>02 / QUESTION</span><span>03 / EVIDENCE</span><span>04 / METHOD</span><span>05 / LIMIT</span><span>06 / NOTE</span>
          </div>
        </section>

        <section className="resources-archive">
          <header><span>ARCHIVE / OPEN NOTES</span><h2>The library grows around recurring research problems.</h2></header>
          <div>
            {archive.map(([index, meta, title]) => (
              <article key={index}><b>{index}</b><span>{meta}</span><h3>{title}</h3><em>COMING SOON</em></article>
            ))}
          </div>
        </section>

        <section className="resources-field-grid">
          <figure className="resources-field-a"><img src="/assets/images/pexels-8197503-w1600.avif" alt="Students working through research material in class" /><figcaption>WORKING SESSION / NOTES OPEN</figcaption></figure>
          <div className="resources-field-copy"><span>FIELD NOTES / OPEN</span><h2>Read the paper. Mark the claim. Keep the note that changed your mind.</h2></div>
          <figure className="resources-field-b"><img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher observing through a microscope" /><figcaption>OBSERVATION / METHOD</figcaption></figure>
        </section>

        <section className="studio-cta-band">
          <span>ADMISSIONS / NEXT COHORT</span>
          <h2>Start with the guide.<br />Stay for the work.</h2>
          <Link className="studio-primary studio-primary--dark" href="/apply/">Submit an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
