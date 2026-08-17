"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const revisions = [
  {
    version: "V01",
    label: "BROAD",
    question: "How does social media affect students?",
    note: "Too many populations, behaviours and outcomes are hiding inside one sentence.",
  },
  {
    version: "V03",
    label: "BOUNDED",
    question: "How does late-night social media use affect first-year students?",
    note: "The population and behaviour are visible. The outcome is still vague.",
  },
  {
    version: "V06",
    label: "TESTABLE",
    question: "Among first-year students, does social media use after midnight predict next-day lecture attendance?",
    note: "Population, behaviour and outcome are named. The question can now meet evidence.",
  },
];

const stages = [
  {
    name: "Frame",
    weeks: "W01 to W04",
    line: "Name the question and its boundary.",
    artifact: "Question memo",
  },
  {
    name: "Read",
    weeks: "W05 to W08",
    line: "Find the conversation, disagreement and gap.",
    artifact: "Evidence matrix",
  },
  {
    name: "Design",
    weeks: "W09 to W12",
    line: "Choose the evidence and method before collecting more than you need.",
    artifact: "Method note",
  },
  {
    name: "Analyse",
    weeks: "W13 to W16",
    line: "Separate what happened from what you hoped would happen.",
    artifact: "Analysis log",
  },
  {
    name: "Revise",
    weeks: "W17 to W20",
    line: "Put the claim back under review. Keep the old version visible.",
    artifact: "Research draft",
  },
  {
    name: "Defend",
    weeks: "W21 to W24",
    line: "Explain the result, the limit and the next question.",
    artifact: "Portfolio and defence",
  },
];

export function DeliberateLanding() {
  const [revisionIndex, setRevisionIndex] = useState(0);
  const [stageIndex, setStageIndex] = useState(4);
  const [menuOpen, setMenuOpen] = useState(false);

  const revision = useMemo(() => revisions[revisionIndex], [revisionIndex]);
  const stage = useMemo(() => stages[stageIndex], [stageIndex]);

  return (
    <div className="rl-shell">
      <header className={`rl-header${menuOpen ? " is-open" : ""}`}>
        <Link className="rl-brand" href="/" aria-label="ResurchIn home" onClick={() => setMenuOpen(false)}>
          <span className="rl-brand-mark" aria-hidden="true"><b>r</b></span>
          <span className="rl-brand-name">resurchIn</span>
        </Link>

        <nav className="rl-nav" aria-label="Primary navigation">
          <Link href="/program/">Program</Link>
          <Link href="/curriculum/">Curriculum</Link>
          <Link href="/mentors/">Mentors</Link>
          <Link href="/resources/">Resources</Link>
          <Link href="/about/">About</Link>
        </nav>

        <Link className="rl-header-apply" href="/apply/">Apply <span aria-hidden="true">↗</span></Link>

        <button
          className="rl-menu"
          type="button"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((value) => !value)}
        >
          <span /><span />
        </button>

        {menuOpen && (
          <div className="rl-mobile-nav">
            <Link href="/program/" onClick={() => setMenuOpen(false)}>Program</Link>
            <Link href="/curriculum/" onClick={() => setMenuOpen(false)}>Curriculum</Link>
            <Link href="/mentors/" onClick={() => setMenuOpen(false)}>Mentors</Link>
            <Link href="/resources/" onClick={() => setMenuOpen(false)}>Resources</Link>
            <Link href="/about/" onClick={() => setMenuOpen(false)}>About</Link>
            <Link href="/apply/" onClick={() => setMenuOpen(false)}>Apply ↗</Link>
          </div>
        )}
      </header>

      <main>
        <section className="rl-hero" aria-labelledby="rl-hero-title">
          <div className="rl-hero-copy">
            <p className="rl-eyebrow">SIX-MONTH RESEARCH APPRENTICESHIP</p>
            <h1 id="rl-hero-title">Research is a skill.</h1>
            <p className="rl-hero-phrase"><strong>Practice it</strong> on one question for six months.</p>
            <p className="rl-hero-lead">
              Bring one question. You frame it, read around it, choose a method, analyse what happened, then revise the exact sentence with a mentor until the evidence can carry it.
            </p>
            <div className="rl-hero-meta" aria-label="Programme facts">
              <span><b>6</b> months</span>
              <span><b>2 to 3</b> live sessions weekly</span>
              <span><b>$0</b> tuition</span>
            </div>
            <div className="rl-hero-actions">
              <Link className="rl-primary-link" href="/program/">See the programme <span>↗</span></Link>
              <Link className="rl-secondary-link" href="/apply/">Bring V01</Link>
            </div>
          </div>

          <div className="rl-trace" aria-label="Example of a research question being revised">
            <div className="rl-trace-head">
              <span>SAMPLE QUESTION / REVISION TRACE</span>
              <span>V01 → V06</span>
            </div>
            <div className="rl-trace-list" role="tablist" aria-label="Question versions">
              {revisions.map((item, index) => (
                <button
                  key={item.version}
                  type="button"
                  role="tab"
                  aria-selected={revisionIndex === index}
                  className={revisionIndex === index ? "is-active" : ""}
                  onClick={() => setRevisionIndex(index)}
                >
                  <span>{item.version}</span>
                  <b>{item.label}</b>
                  <p>{item.question}</p>
                </button>
              ))}
            </div>
            <div className="rl-trace-note" aria-live="polite">
              <span>WHY IT CHANGED</span>
              <p>{revision.note}</p>
            </div>
          </div>
        </section>

        <section className="rl-method" aria-labelledby="rl-method-title">
          <header className="rl-section-head">
            <p className="rl-eyebrow">ONE PROJECT / TWENTY-FOUR WEEKS</p>
            <h2 id="rl-method-title">The project stays. The reasoning changes.</h2>
            <p>Each phase leaves a version behind, so the correction is visible instead of disappearing into a final polished document.</p>
          </header>

          <div className="rl-process" role="tablist" aria-label="Research process">
            {stages.map((item, index) => (
              <button
                key={item.name}
                type="button"
                role="tab"
                aria-selected={stageIndex === index}
                className={stageIndex === index ? "is-active" : ""}
                onClick={() => setStageIndex(index)}
              >
                <span>{item.weeks}</span>
                <b>{item.name}</b>
              </button>
            ))}
          </div>

          <div className="rl-stage-detail" aria-live="polite">
            <div>
              <span>WHAT HAPPENS HERE</span>
              <p>{stage.line}</p>
            </div>
            <div>
              <span>YOU LEAVE WITH</span>
              <p>{stage.artifact}</p>
            </div>
          </div>
        </section>

        <section className="rl-sample" aria-labelledby="rl-sample-title">
          <header>
            <p className="rl-eyebrow">FICTIONAL TRAINING SAMPLE / CLAIM AUDIT</p>
            <h2 id="rl-sample-title">A real sentence is more useful than a placeholder.</h2>
          </header>

          <div className="rl-sample-grid">
            <article className="rl-sample-question">
              <span>QUESTION</span>
              <p>Among first-year students, does social media use after midnight predict next-day lecture attendance?</p>
            </article>

            <article className="rl-sample-evidence">
              <span>EVIDENCE NOTE</span>
              <p>Across a twelve-week fictional sample, mornings after reported use past midnight were followed by lower lecture attendance more often than other mornings.</p>
              <dl>
                <div><dt>Population</dt><dd>84 first-year students</dd></div>
                <div><dt>Window</dt><dd>12 weeks</dd></div>
                <div><dt>Exposure</dt><dd>Self-reported use after midnight</dd></div>
                <div><dt>Outcome</dt><dd>Next-day attendance</dd></div>
              </dl>
            </article>

            <article className="rl-sample-claim">
              <span>CLAIM AFTER REVIEW</span>
              <p>In this sample, reported social media use after midnight was associated with lower next-day lecture attendance.</p>
              <small>LIMIT / association, not causation. Exposure is self-reported.</small>
            </article>
          </div>
        </section>

        <section className="rl-mentorship" aria-labelledby="rl-mentorship-title">
          <figure className="rl-mentor-photo">
            <img src="/assets/images/pexels-5940839-w1800.avif" alt="Students discussing written work with an instructor at a library table" />
            <figcaption>EDITORIAL PHOTOGRAPHY / MENTORING ENVIRONMENT</figcaption>
          </figure>

          <div className="rl-mentorship-copy">
            <p className="rl-eyebrow">REVIEW IS PART OF THE WORK</p>
            <h2 id="rl-mentorship-title">Feedback should land on the sentence.</h2>
            <p>
              ResurchIn review is attached to the claim, table, method choice or missing limit in front of you. You keep the earlier version, revise it, then explain what changed.
            </p>
            <blockquote>
              <span>MENTOR COMMENT / SAMPLE</span>
              “Proved, or suggested? Name the sample before you name the effect.”
            </blockquote>
            <div className="rl-proof-links" aria-label="Public research records">
              <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer">Google Scholar ↗</a>
              <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer">Catalyst Quarterly ↗</a>
              <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Open field notes ↗</a>
            </div>
          </div>
        </section>

        <section className="rl-fit" aria-labelledby="rl-fit-title">
          <div>
            <p className="rl-eyebrow">WHO THIS IS FOR</p>
            <h2 id="rl-fit-title">Bring curiosity you can name.</h2>
          </div>
          <ul>
            <li><span>01</span><p>A question you keep returning to.</p></li>
            <li><span>02</span><p>Enough time to work on it every week.</p></li>
            <li><span>03</span><p>Willingness to show unfinished work.</p></li>
            <li><span>04</span><p>Enough humility to change your mind.</p></li>
          </ul>
        </section>

        <section className="rl-apply" aria-labelledby="rl-apply-title">
          <p className="rl-eyebrow">ADMISSIONS / NEXT COHORT</p>
          <h2 id="rl-apply-title">Bring V01.</h2>
          <p>You do not need a polished proposal. Tell us what keeps pulling at you and whether you can stay with one project long enough to revise it.</p>
          <Link href="/apply/">Start an application <span>↗</span></Link>
        </section>
      </main>

      <footer className="rl-footer">
        <div className="rl-footer-brand">
          <span className="rl-brand-mark" aria-hidden="true"><b>r</b></span>
          <span>resurchIn</span>
        </div>
        <p>Research apprenticeship · free · guided practice · open worldwide</p>
        <div>
          <Link href="/program/">Program</Link>
          <Link href="/curriculum/">Curriculum</Link>
          <Link href="/mentors/">Mentors</Link>
          <Link href="/resources/">Resources</Link>
        </div>
      </footer>
    </div>
  );
}
