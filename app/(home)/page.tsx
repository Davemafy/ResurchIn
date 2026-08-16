import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { RevisionCompare } from "@/components/revision/RevisionCompare";
import { VersionJourney } from "@/components/revision/VersionJourney";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const phases = [
  ["W01–04", "FRAME", "Turn an interest into a question that can fail."],
  ["W05–08", "READ", "Find the argument, not just the topic."],
  ["W09–12", "DESIGN", "Choose evidence that can answer the question."],
  ["W13–16", "ANALYSE", "Separate the result from the story you hoped for."],
  ["W17–20", "REVISE", "Cut the certainty the evidence did not earn."],
  ["W21–24", "DEFEND", "Make the reasoning easy to follow and challenge."],
];

export default function HomePage() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main className="rv-home">
        <section className="rv-hero">
          <div className="rv-hero-copy" data-rv-reveal>
            <p className="rv-eyebrow">RESURCHIN / RESEARCH APPRENTICESHIP</p>
            <h1 className="rv-hero-heading-desktop">Research is what changes between <em>V01</em> and <em>V06.</em></h1>
            <h1 className="rv-hero-heading-mobile" aria-label="Research is what changes from version one to version six."><span>Research is what changes.</span><b><em>V01</em><i>→</i><em>V06.</em></b></h1>
            <p className="rv-lead">One project. Six months. Close review. ResurchIn helps emerging researchers frame a question, work with evidence, revise the claim and defend what the evidence can actually hold.</p>
            <div className="rv-actions">
              <Link className="rv-button rv-button-ink" href="/apply/">Bring V01 <span>↗</span></Link>
              <Link className="rv-text-link" href="/program/">See the 24-week system <span>→</span></Link>
            </div>
            <div className="rv-hero-facts"><span>FREE</span><span>SIX MONTHS</span><span>OPEN WORLDWIDE</span></div>
          </div>
          <div className="rv-hero-compare" data-rv-reveal><RevisionCompare /></div>
        </section>

        <section className="rv-proof-strip" aria-label="What the program is">
          <p>NOT A COURSE LIBRARY</p><strong>One question stays under review long enough for the thinking to change.</strong><span>MENTORSHIP · REAL PROJECTS · VISIBLE REVISION</span>
        </section>

        <VersionJourney />

        <section className="rv-contact" aria-labelledby="contact-title">
          <header className="rv-section-intro" data-rv-reveal>
            <p className="rv-eyebrow">THE WORK / IN THE ROOM</p>
            <h2 id="contact-title">Research is social<br />before it is polished.</h2>
            <p>Read together. Mark the draft. Explain the decision. Show the correction. Photography is used here as a record of activity, not decoration.</p>
          </header>
          <div className="rv-contact-sheet">
            <figure data-rv-reveal><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing research material together" loading="lazy" /><figcaption><b>01</b><span>READ / SOURCE AUDIT</span></figcaption></figure>
            <figure data-rv-reveal><img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing a research draft" loading="lazy" /><figcaption><b>02</b><span>REVIEW / DRAFT 04</span></figcaption></figure>
            <figure data-rv-reveal><img src="/assets/images/pexels-5940839-w1600.avif" alt="Research group discussing findings" loading="lazy" /><figcaption><b>03</b><span>DISCUSS / LIMIT</span></figcaption></figure>
          </div>
        </section>

        <section className="rv-review" aria-labelledby="review-title">
          <div className="rv-review-copy" data-rv-reveal>
            <p className="rv-eyebrow">MENTOR REVIEW / INLINE</p>
            <h2 id="review-title">Feedback should land on the sentence.</h2>
            <p>A useful review does not say “make it better.” It names the exact place where the reasoning outran the evidence.</p>
            <Link className="rv-button rv-button-ink" href="/mentors/">See how review works <span>↗</span></Link>
          </div>
          <article className="rv-review-sheet" data-rv-reveal>
            <header><span>FINDINGS / DRAFT 03</span><span>COMMENT 04 / OPEN</span></header>
            <p className="rv-review-line">The intervention <mark>proved</mark> that students performed better.</p>
            <aside><b>04</b><div><span>MENTOR</span><p>Proved, or suggested? Name the sample before you name the effect.</p></div></aside>
            <p className="rv-review-revision"><span>V04</span>In this twelve-week sample, students receiving the intervention recorded a higher mean test score.</p>
            <footer>REVISE → RESUBMIT → DISCUSS</footer>
          </article>
        </section>

        <section className="rv-runway" aria-labelledby="runway-title">
          <header data-rv-reveal>
            <p className="rv-eyebrow">24 WEEKS / ONE PROJECT</p>
            <h2 id="runway-title">Long enough to change your mind more than once.</h2>
            <p>The curriculum is a sequence of decisions, not a stack of disconnected lessons.</p>
          </header>
          <ol className="rv-runway-line">
            {phases.map(([weeks, label, copy], index) => (
              <li key={label} data-rv-reveal>
                <i>0{index + 1}</i><small>{weeks}</small><b>{label}</b><p>{copy}</p>
              </li>
            ))}
          </ol>
          <Link className="rv-button rv-button-paper" href="/curriculum/">Open the curriculum <span>↗</span></Link>
        </section>

        <section className="rv-provenance" aria-labelledby="provenance-title">
          <div data-rv-reveal>
            <p className="rv-eyebrow">WHY RESURCHIN EXISTS</p>
            <h2 id="provenance-title">Research guidance should not be inherited through access.</h2>
          </div>
          <article data-rv-reveal>
            <span>FOUNDER / WORKING RESEARCHER</span>
            <h3>Happiness Eric Aigbogun</h3>
            <p>ResurchIn was created to make practical research guidance easier to enter, practice and repeat. The program is free, volunteer-led and built around visible work rather than vague advice.</p>
            <Link className="rv-text-link" href="/about/">Read the provenance <span>→</span></Link>
          </article>
          <div className="rv-records" data-rv-reveal>
            <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><b>01</b><span><small>SRA INTERNATIONAL / JULY 2026</small><strong>Contributor, Catalyst Quarterly</strong></span><i>↗</i></a>
            <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><b>02</b><span><small>GOOGLE SCHOLAR / PUBLIC PROFILE</small><strong>Research publications and citations</strong></span><i>↗</i></a>
          </div>
        </section>

        <section className="rv-final">
          <p className="rv-eyebrow">ADMISSIONS / NEXT COHORT</p>
          <h2 data-rv-reveal>You do not need a polished proposal.<br /><em>Bring V01.</em></h2>
          <p data-rv-reveal>Bring the question you keep returning to. The program is built for the versions that come after.</p>
          <Link className="rv-button rv-button-ink" href="/apply/">Start an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
