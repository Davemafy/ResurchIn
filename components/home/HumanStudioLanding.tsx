"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";

const stages = [
  {
    label: "Frame",
    weeks: "W01–04",
    verb: "Make it answerable.",
    copy: "Turn the thing you keep thinking about into one question with a population, a boundary and evidence that could actually answer it.",
    artifact: "Question memo",
  },
  {
    label: "Read",
    weeks: "W05–08",
    verb: "Find the disagreement.",
    copy: "Read for what is already known, where authors disagree and which gap is worth spending six months on.",
    artifact: "Evidence matrix",
  },
  {
    label: "Design",
    weeks: "W09–12",
    verb: "Choose what counts.",
    copy: "Name the evidence, method and trade-off before collecting more information than the question needs.",
    artifact: "Method note",
  },
  {
    label: "Analyse",
    weeks: "W13–16",
    verb: "Separate result from hope.",
    copy: "Work out what happened, what did not, and which explanation your design can support without pretending it can do more.",
    artifact: "Analysis log",
  },
  {
    label: "Revise",
    weeks: "W17–20",
    verb: "Cut the claim down.",
    copy: "Mentor review lands on the sentence. Keep the earlier version, change the reasoning, and make the correction visible.",
    artifact: "Research draft",
  },
  {
    label: "Defend",
    weeks: "W21–24",
    verb: "Show your trail.",
    copy: "Explain the result, the limit and the next question so another person can follow how your thinking changed.",
    artifact: "Portfolio + defence",
  },
];

export function HumanStudioLanding() {
  const [stage, setStage] = useState(4);
  const [revision, setRevision] = useState<"v01" | "v06">("v01");
  const [menuOpen, setMenuOpen] = useState(false);
  const currentStage = useMemo(() => stages[stage], [stage]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", close);
    };
  }, [menuOpen]);

  return (
    <div className="hs-shell">
      <header className="hs-header">
        <Link className="hs-brand" href="/" aria-label="ResurchIn home">
          <img src="/favicon-human.svg" alt="" aria-hidden="true" />
          <span className="hs-brand-word">resurchIn</span>
          <small>RESEARCH APPRENTICESHIP</small>
        </Link>

        <nav className="hs-desktop-nav" aria-label="Primary navigation">
          <Link href="/program/">Program</Link>
          <Link href="/curriculum/">Curriculum</Link>
          <Link href="/mentors/">Mentors</Link>
          <Link href="/resources/">Research notes</Link>
          <Link href="/about/">About</Link>
        </nav>

        <Link className="hs-apply-link" href="/apply/">Apply <span aria-hidden="true">↗</span></Link>
        <button className="hs-menu-button" type="button" aria-expanded={menuOpen} aria-controls="hs-mobile-menu" onClick={() => setMenuOpen((value) => !value)}>
          <span>Menu</span><i /><i />
        </button>
      </header>

      <div id="hs-mobile-menu" className={`hs-mobile-menu${menuOpen ? " is-open" : ""}`} aria-hidden={!menuOpen}>
        <nav aria-label="Mobile navigation">
          {[
            ["Program", "/program/"], ["Curriculum", "/curriculum/"], ["Mentors", "/mentors/"],
            ["Research notes", "/resources/"], ["About", "/about/"], ["Apply", "/apply/"],
          ].map(([label, href], index) => (
            <Link key={href} href={href} onClick={() => setMenuOpen(false)} tabIndex={menuOpen ? 0 : -1}>
              <span>0{index + 1}</span>{label}
            </Link>
          ))}
        </nav>
        <p>Six months · guided practice · open worldwide</p>
      </div>

      <main>
        <section className="hs-hero" aria-labelledby="hs-hero-title">
          <div className="hs-hero-copy">
            <p className="hs-kicker">RESURCHIN / SIX-MONTH RESEARCH APPRENTICESHIP</p>
            <h1 id="hs-hero-title">Bring the question<br />you keep <em>reopening.</em></h1>
            <p className="hs-hero-intro">Stay with one research problem for six months. Work with real data, get close mentor review, revise the claim, and leave with a research trail you can explain.</p>
            <div className="hs-hero-facts" aria-label="Programme facts">
              <span><b>06</b> months</span>
              <span><b>2–3</b> live sessions / week</span>
              <span><b>$0</b> tuition</span>
            </div>
            <div className="hs-hero-actions">
              <Link className="hs-primary-cta" href="/apply/">Bring V01 <span>↗</span></Link>
              <Link className="hs-secondary-cta" href="/program/">See how the programme works <span>→</span></Link>
            </div>
          </div>

          <figure className="hs-hero-image">
            <img src="/assets/images/pexels-5940839-w1800.avif" alt="Students discussing research work together" />
            <figcaption><span>FIELD NOTE / REVIEW SESSION</span><span>ONE PROJECT · MULTIPLE REVISIONS</span></figcaption>
          </figure>

          <aside className="hs-revision-strip" aria-label="Example question revision">
            <button type="button" onClick={() => setRevision((value) => value === "v01" ? "v06" : "v01")} aria-label="Toggle sample question between version one and version six">
              <span>{revision === "v01" ? "V01" : "V06"}</span>
              <i aria-hidden="true" />
              <small>{revision === "v01" ? "show revision" : "show first draft"}</small>
            </button>
            <p aria-live="polite">
              {revision === "v01"
                ? "How does social media affect students?"
                : "Among first-year students, does late-night social media use predict next-day lecture attendance?"}
            </p>
            <small>{revision === "v01" ? "A topic. Not yet a researchable question." : "A population, behaviour and outcome. Still open to being wrong."}</small>
          </aside>
        </section>

        <section className="hs-process" aria-labelledby="hs-process-title">
          <header>
            <p className="hs-kicker">ONE PROJECT / SIX DECISIONS</p>
            <h2 id="hs-process-title">The project stays.<br />Your reasoning moves.</h2>
            <p>ResurchIn is built around returning to the same work. Each phase leaves a version, a correction and something concrete to discuss with a mentor.</p>
          </header>

          <div className="hs-process-line" role="tablist" aria-label="Research stages">
            {stages.map((item, index) => (
              <button key={item.label} type="button" role="tab" aria-selected={stage === index} className={stage === index ? "is-active" : ""} onClick={() => setStage(index)}>
                <span>{item.weeks}</span>
                <b>{item.label}</b>
              </button>
            ))}
          </div>

          <article className="hs-process-output" aria-live="polite">
            <span className="hs-process-number">0{stage + 1}</span>
            <div>
              <p className="hs-process-verb">{currentStage.verb}</p>
              <p>{currentStage.copy}</p>
            </div>
            <footer><small>YOU LEAVE WITH</small><strong>{currentStage.artifact}</strong></footer>
          </article>
        </section>

        <section className="hs-proof" aria-labelledby="hs-proof-title">
          <div className="hs-proof-copy">
            <p className="hs-kicker">REVIEW THAT ATTACHES TO THE WORK</p>
            <h2 id="hs-proof-title">Feedback should land on the sentence.</h2>
            <p>Not “good job.” Not a vague score. A useful review points to the exact claim, table, method choice or missing limit that needs another pass.</p>
          </div>
          <figure className="hs-proof-image">
            <img src="/assets/images/pexels-5940715-w1800.avif" alt="A student reading and annotating research material" />
            <figcaption>READING / ANNOTATION / BEFORE REVIEW</figcaption>
          </figure>
          <blockquote>“What does this result actually let you say?”</blockquote>
        </section>

        <section className="hs-founder" aria-labelledby="hs-founder-title">
          <div className="hs-founder-copy">
            <p className="hs-kicker">WHY RESURCHIN EXISTS</p>
            <h2 id="hs-founder-title">Built by someone already inside the work.</h2>
            <p>Happiness Eric Aigbogun works in Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. ResurchIn grew from a practical gap: research advice is easy to find; close review of your actual work is harder.</p>
            <div className="hs-founder-links">
              <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
              <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer">Catalyst Quarterly ↗</a>
              <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Open field notes ↗</a>
            </div>
          </div>
          <figure className="hs-founder-image">
            <img src="/assets/images/pexels-9243385-w1800.avif" alt="A researcher working at a microscope" />
            <figcaption>METHOD OBSERVATION / ACTIVE RESEARCH PRACTICE</figcaption>
          </figure>
        </section>

        <section className="hs-claim" aria-labelledby="hs-claim-title">
          <header>
            <p className="hs-kicker">SAMPLE PROJECT / CLAIM AUDIT</p>
            <h2 id="hs-claim-title">A smaller sentence can be a stronger result.</h2>
          </header>
          <div className="hs-claim-before">
            <span>V03 / FIRST CLAIM</span>
            <p>“The intervention improved student outcomes.”</p>
          </div>
          <div className="hs-claim-after">
            <span>V05 / AFTER REVIEW</span>
            <p>“In this twelve-week sample, students receiving the intervention recorded a higher mean test score.”</p>
          </div>
          <aside>
            <span>MENTOR NOTE / LIMIT</span>
            <p>Name the sample. Keep “association” separate from “proof.” Do not claim beyond what this design can establish.</p>
          </aside>
        </section>

        <section className="hs-apply" aria-labelledby="hs-apply-title">
          <div>
            <p className="hs-kicker">ADMISSIONS / NEXT COHORT</p>
            <h2 id="hs-apply-title">You do not need a polished proposal.<br /><em>Bring V01.</em></h2>
          </div>
          <p>Tell us the question you keep returning to. If you can protect time for it for six months, that is enough to start the conversation.</p>
          <Link href="/apply/">Start an application <span>↗</span></Link>
        </section>
      </main>

      <footer className="hs-footer">
        <div className="hs-footer-mark" aria-hidden="true"><img src="/favicon-human.svg" alt="" /></div>
        <p className="hs-footer-word">resurchIn</p>
        <p className="hs-footer-line">Bring the question. Keep the trail.</p>
        <div className="hs-footer-meta"><span>RESEARCH APPRENTICESHIP / 2026</span><span>FREE · VOLUNTEER-LED · OPEN WORLDWIDE</span><Link href="/about/">About ↗</Link></div>
      </footer>
    </div>
  );
}
