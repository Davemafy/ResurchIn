"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

const stages = [
  {
    label: "Frame",
    verb: "Make it answerable.",
    copy: "Turn a broad interest into one question with a population, a boundary and evidence that could actually answer it.",
    artifact: "Question memo",
  },
  {
    label: "Read",
    verb: "Find the disagreement.",
    copy: "Read for what is already known, where authors disagree and which gap is worth spending six months on.",
    artifact: "Evidence matrix",
  },
  {
    label: "Design",
    verb: "Choose what counts.",
    copy: "Name the evidence, method and trade-off before collecting more information than the question needs.",
    artifact: "Method note",
  },
  {
    label: "Analyse",
    verb: "Separate result from hope.",
    copy: "Work out what happened, what did not, and which explanation your design can support without pretending it can do more.",
    artifact: "Analysis log",
  },
  {
    label: "Revise",
    verb: "Cut the claim down.",
    copy: "Mentor review lands on the sentence. Keep the earlier version, change the reasoning, and make the correction visible.",
    artifact: "Research draft",
  },
  {
    label: "Defend",
    verb: "Show your trail.",
    copy: "Explain the result, the limit and the next question so another person can follow how your thinking changed.",
    artifact: "Portfolio + defence",
  },
];

const cursorLabels: Record<string, string> = {
  photo: "FIELD NOTE",
  revision: "REVISE",
  link: "OPEN",
  apply: "BRING V01",
};

export function HumanStudioLanding() {
  const [stage, setStage] = useState(4);
  const [revision, setRevision] = useState<"v01" | "v06">("v01");
  const [cursor, setCursor] = useState({ x: 0, y: 0, label: "", active: false });
  const cursorFrame = useRef<number | null>(null);

  const currentStage = useMemo(() => stages[stage], [stage]);

  useEffect(() => {
    const onPointerMove = (event: PointerEvent) => {
      if (cursorFrame.current) cancelAnimationFrame(cursorFrame.current);
      cursorFrame.current = requestAnimationFrame(() => {
        setCursor((current) => ({ ...current, x: event.clientX, y: event.clientY }));
      });
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      if (cursorFrame.current) cancelAnimationFrame(cursorFrame.current);
    };
  }, []);

  const cursorEnter = (kind: keyof typeof cursorLabels) => {
    setCursor((current) => ({ ...current, label: cursorLabels[kind], active: true }));
  };

  const cursorLeave = () => {
    setCursor((current) => ({ ...current, active: false, label: "" }));
  };

  return (
    <div className="hs-shell">
      <div
        className={`hs-cursor${cursor.active ? " is-active" : ""}`}
        aria-hidden="true"
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0)` }}
      >
        <span>{cursor.label}</span>
      </div>

      <header className="hs-header">
        <Link className="hs-wordmark" href="/" aria-label="ResurchIn home">
          <span>resurch</span><b>/</b><span>in</span>
        </Link>
        <p className="hs-edition">FIELD OFFICE · 2026</p>
        <nav aria-label="Primary navigation">
          <Link href="/program/">Program</Link>
          <Link href="/curriculum/">Curriculum</Link>
          <Link href="/mentors/">Mentors</Link>
          <Link href="/resources/">Notes</Link>
        </nav>
        <Link className="hs-apply-link" href="/apply/" onPointerEnter={() => cursorEnter("apply")} onPointerLeave={cursorLeave}>
          Apply <span aria-hidden="true">↘</span>
        </Link>
      </header>

      <main>
        <section className="hs-hero" aria-labelledby="hs-hero-title">
          <div className="hs-hero-micro">RESURCHIN / SIX-MONTH RESEARCH APPRENTICESHIP</div>
          <h1 id="hs-hero-title">Bring the question<br />you keep reopening.</h1>
          <div className="hs-hero-copy">
            <p>For six months, you stay with one research problem long enough to make it smaller, sharper and harder to fool yourself about.</p>
            <p className="hs-hero-numbers"><strong>$0 tuition</strong><span>2–3 live sessions / week</span><span>one project, revised repeatedly</span></p>
            <Link className="hs-text-cta" href="/program/" onPointerEnter={() => cursorEnter("link")} onPointerLeave={cursorLeave}>
              Read the programme <span>↗</span>
            </Link>
          </div>

          <figure className="hs-hero-image" onPointerEnter={() => cursorEnter("photo")} onPointerLeave={cursorLeave}>
            <img src="/assets/images/pexels-5940839-w1800.avif" alt="Students discussing research work with a mentor in a library" />
            <i aria-hidden="true" />
            <figcaption>FIELD NOTE / REVIEW SESSION / PHOTO: PEXELS CONTRIBUTOR</figcaption>
          </figure>

          <aside className="hs-revision-panel" aria-label="Sample question revision">
            <button
              type="button"
              className={`hs-revision-toggle ${revision === "v06" ? "is-final" : ""}`}
              onClick={() => setRevision((value) => value === "v01" ? "v06" : "v01")}
              onPointerEnter={() => cursorEnter("revision")}
              onPointerLeave={cursorLeave}
              aria-label="Toggle between first and sixth version of a sample research question"
            >
              <span>{revision === "v01" ? "V01 / BROAD" : "V06 / DEFENSIBLE"}</span>
              <b>{revision === "v01" ? "tap to revise" : "tap to rewind"}</b>
            </button>
            <p className="hs-revision-question" aria-live="polite">
              {revision === "v01"
                ? "How does social media affect students?"
                : "Among first-year students, does late-night social media use predict next-day lecture attendance?"}
            </p>
            <small>{revision === "v01" ? "A topic pretending to be a question." : "Population. Behaviour. Outcome. Still imperfect, finally testable."}</small>
          </aside>

          <div className="hs-hero-margin" aria-hidden="true">
            <span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span>
          </div>
        </section>

        <section className="hs-statement" aria-labelledby="hs-statement-title">
          <p className="hs-kicker">THE WORK, NOT THE COSTUME</p>
          <h2 id="hs-statement-title">You do not need to arrive sounding like a researcher.</h2>
          <p>You need a question you can name, time you can protect, and enough humility to change your mind when the evidence refuses to cooperate.</p>
          <aside><span>NO POLISHED PROPOSAL REQUIRED.</span><span>YES, YOUR FIRST VERSION CAN BE MESSY.</span></aside>
        </section>

        <section className="hs-trace" aria-labelledby="hs-trace-title">
          <header>
            <p className="hs-kicker">ONE PROJECT / SIX MONTHS</p>
            <h2 id="hs-trace-title">The project stays. Your reasoning moves.</h2>
            <p>Choose a stage. The output changes, but the work remains one continuous research trail.</p>
          </header>

          <div className="hs-stage-picker" role="tablist" aria-label="Research stages">
            {stages.map((item, index) => (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={stage === index}
                className={stage === index ? "is-active" : ""}
                onClick={() => setStage(index)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <article className="hs-stage-output" aria-live="polite">
            <p className="hs-stage-verb">{currentStage.verb}</p>
            <p className="hs-stage-copy">{currentStage.copy}</p>
            <footer><span>YOU LEAVE WITH</span><strong>{currentStage.artifact}</strong></footer>
          </article>

          <figure className="hs-trace-image" onPointerEnter={() => cursorEnter("photo")} onPointerLeave={cursorLeave}>
            <img src="/assets/images/pexels-5940715-w1800.avif" alt="A student reading research material at a library desk" />
            <figcaption>READING / WORKING ALONE BEFORE REVIEW</figcaption>
          </figure>

          <div className="hs-handmark" aria-hidden="true"><span>keep the old version</span><i /></div>
        </section>

        <section className="hs-founder" aria-labelledby="hs-founder-title">
          <div className="hs-founder-title">
            <p className="hs-kicker">WHO BUILT THIS</p>
            <h2 id="hs-founder-title">Started from inside the work.</h2>
          </div>
          <p className="hs-founder-copy">Happiness Eric Aigbogun works in Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. ResurchIn grew from a practical frustration: early researchers can find advice everywhere and still struggle to find someone willing to review the actual sentence, method or decision in front of them.</p>
          <figure className="hs-founder-image" onPointerEnter={() => cursorEnter("photo")} onPointerLeave={cursorLeave}>
            <img src="/assets/images/pexels-9243385-w1800.avif" alt="A researcher looking through a microscope" />
            <figcaption>FIELD IMAGE / METHOD OBSERVATION</figcaption>
          </figure>
          <blockquote>“Useful feedback should attach to the exact sentence, table or choice that needs to change.”</blockquote>
          <div className="hs-founder-links">
            <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer" onPointerEnter={() => cursorEnter("link")} onPointerLeave={cursorLeave}>Google Scholar ↗</a>
            <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer" onPointerEnter={() => cursorEnter("link")} onPointerLeave={cursorLeave}>Catalyst Quarterly ↗</a>
            <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer" onPointerEnter={() => cursorEnter("link")} onPointerLeave={cursorLeave}>Open field notes ↗</a>
          </div>
        </section>

        <section className="hs-claim" aria-labelledby="hs-claim-title">
          <header>
            <p className="hs-kicker">SAMPLE PROJECT / CLAIM AUDIT</p>
            <h2 id="hs-claim-title">A sentence can get smaller and become more useful.</h2>
          </header>
          <div className="hs-claim-grid">
            <p className="hs-claim-before"><span>FIRST DRAFT</span>“The intervention improved student outcomes.”</p>
            <p className="hs-claim-after"><span>AFTER REVIEW</span>“In this twelve-week sample, students receiving the intervention recorded a higher mean test score.”</p>
            <aside><b>LIMIT</b><p>Association and sample-specific evidence. No universal claim, no victory lap.</p></aside>
          </div>
        </section>

        <section className="hs-apply" aria-labelledby="hs-apply-title">
          <p className="hs-kicker">ADMISSIONS / NEXT COHORT</p>
          <h2 id="hs-apply-title">Bring V01.<br /><em>We can work with honest.</em></h2>
          <p>You do not need a polished proposal. Tell us the question that keeps pulling at you and whether you can protect time for it for six months.</p>
          <Link href="/apply/" onPointerEnter={() => cursorEnter("apply")} onPointerLeave={cursorLeave}>Start an application <span>↘</span></Link>
          <div className="hs-apply-spec">
            <span>6 months</span><span>2–3 live sessions weekly</span><span>free</span><span>open worldwide</span>
          </div>
        </section>
      </main>

      <footer className="hs-footer">
        <div className="hs-footer-mark" aria-hidden="true">R/IN</div>
        <p>question → evidence → limit → claim</p>
        <div className="hs-footer-meta"><span>RESURCHIN / 2026</span><span>US-BASED · OPEN WORLDWIDE</span><a href="/about/">About ↗</a></div>
      </footer>
    </div>
  );
}
