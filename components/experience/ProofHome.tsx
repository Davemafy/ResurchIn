"use client";

import Link from "next/link";
import { useEffect, useMemo, useRef, useState, type CSSProperties, type PointerEvent } from "react";

const stages = [
  {
    code: "01",
    verb: "FRAME",
    title: "Give the question a boundary.",
    before: "How does social media affect students?",
    after: "Among first-year students, does late-night social media use predict next-day lecture attendance?",
    artifact: "Question memo / v03",
    note: "Population. Behaviour. Outcome. A question becomes useful when it becomes possible to be wrong.",
  },
  {
    code: "02",
    verb: "READ",
    title: "Separate the record from the interpretation.",
    before: "The literature says social media harms attendance.",
    after: "Across 18 sources, five measures are comparable and three findings directly contradict one another.",
    artifact: "Evidence matrix / v02",
    note: "A source can be relevant without supporting the sentence you want to write.",
  },
  {
    code: "03",
    verb: "DESIGN",
    title: "Choose a method the question can survive.",
    before: "Ask students whether social media affects them.",
    after: "Observe late-night use and next-day attendance over twelve weeks with defined exclusions.",
    artifact: "Method note / v04",
    note: "The method is not decoration. It decides which claims can exist later.",
  },
  {
    code: "04",
    verb: "ANALYSE",
    title: "Describe the pattern before explaining it.",
    before: "Heavy use causes students to miss class.",
    after: "Lower next-day attendance is most visible above a two-hour late-night use threshold in this sample.",
    artifact: "Analysis log / v05",
    note: "Pattern first. Interpretation second. Causation is a separate question.",
  },
  {
    code: "05",
    verb: "REVISE",
    title: "Cut the sentence down to the evidence.",
    before: "Late-night social media use causes lower attendance.",
    after: "Late-night social media use is associated with lower next-day attendance in this sample.",
    artifact: "Draft / v06",
    note: "Good revision often makes a sentence smaller, not louder.",
  },
  {
    code: "06",
    verb: "DEFEND",
    title: "Make the limit part of the result.",
    before: "We proved the effect.",
    after: "The association is visible here; the design does not establish causation or generalise beyond the sample.",
    artifact: "Defence deck / final",
    note: "Credibility lives at the boundary of what you refuse to claim.",
  },
];

type LensVars = CSSProperties & { "--lens-x": string; "--lens-y": string };

export function ProofHome() {
  const [stage, setStage] = useState(0);
  const [pressure, setPressure] = useState(72);
  const [lens, setLens] = useState<LensVars>({ "--lens-x": "68%", "--lens-y": "42%" });
  const [lensOpen, setLensOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setLensOpen(true)),
      { threshold: 0.3 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const revisedClaim = useMemo(() => {
    if (pressure < 30) return "The intervention improved student outcomes.";
    if (pressure < 58) return "Students receiving the intervention recorded higher mean test scores.";
    if (pressure < 82) return "In this twelve-week sample, students receiving the intervention recorded higher mean test scores.";
    return "In this twelve-week sample, students receiving the intervention recorded higher mean test scores; the design does not establish causation.";
  }, [pressure]);

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(8, Math.min(92, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(10, Math.min(90, ((event.clientY - rect.top) / rect.height) * 100));
    setLens({ "--lens-x": `${x}%`, "--lens-y": `${y}%` });
  };

  return (
    <main id="main-content" className="pf-home">
      <section className="pf-hero" ref={sectionRef}>
        <div className="pf-hero-grid" aria-hidden="true" />
        <div className="pf-hero-meta">
          <span>RESURCHIN / RESEARCH APPRENTICESHIP</span>
          <span>24 WEEKS / ONE PROJECT</span>
          <span>OPEN WORLDWIDE / $0 TUITION</span>
        </div>

        <div className="pf-hero-copy">
          <p className="pf-kicker">PRACTICE RESEARCH BY DOING RESEARCH</p>
          <h1>
            <span>ASK</span>
            <em>BIG.</em>
            <span>CLAIM</span>
            <em>SMALL.</em>
          </h1>
          <div className="pf-hero-intro">
            <p>Six months of guided practice in framing questions, handling evidence, choosing methods, revising claims and defending what the work can actually support.</p>
            <div>
              <Link className="pf-cta pf-cta-dark" href="/apply/">Apply for the next cohort <span>↗</span></Link>
              <Link className="pf-link" href="/program/">Explore the program <span>→</span></Link>
            </div>
          </div>
        </div>

        <div className={`pf-hero-observation${lensOpen ? " is-ready" : ""}`} onPointerMove={moveLens} style={lens}>
          <img src="/assets/images/pexels-9243385-w1800.avif" alt="Researcher making a laboratory observation" />
          <div className="pf-lens" aria-hidden="true">
            <img src="/assets/images/pexels-9243385-w1800.avif" alt="" />
            <div className="pf-lens-cross"><i /><i /></div>
            <span className="pf-lens-a">OBS / 14:32</span>
            <span className="pf-lens-b">REPEAT ×03</span>
            <span className="pf-lens-c">WHAT DOES THIS ACTUALLY SUPPORT?</span>
          </div>
          <div className="pf-photo-index"><span>FIELD IMAGE / 01</span><span>MOVE TO INSPECT</span></div>
        </div>

        <aside className="pf-question-card">
          <span>WORKING QUESTION / REVISION 03</span>
          <del>How does social media affect students?</del>
          <strong>Among first-year students, does late-night social media use predict next-day lecture attendance?</strong>
          <small>QUESTION NARROWED AFTER REVIEW</small>
        </aside>

        <div className="pf-hero-axis" aria-hidden="true"><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></div>
      </section>

      <section className="pf-manifesto">
        <p className="pf-kicker">THE OPERATING IDEA</p>
        <p className="pf-manifesto-copy">Research is not knowing more words. It is learning <em>where a sentence has to stop.</em></p>
        <div className="pf-manifesto-note"><span>RESURCHIN / 2026</span><p>Keep the old version. Show the correction. Explain why the claim changed.</p></div>
      </section>

      <section className="pf-sequence" aria-label="Six research decisions">
        <header className="pf-sequence-intro">
          <p className="pf-kicker">ONE QUESTION / SIX STATES</p>
          <h2>The project should look different after every decision.</h2>
          <p>Choose a stage. The same project changes as the evidence gets harder to ignore.</p>
        </header>

        <div className="pf-sequence-shell">
          <nav className="pf-sequence-nav" aria-label="Research stages">
            {stages.map((item, index) => (
              <button key={item.code} className={index === stage ? "active" : undefined} onClick={() => setStage(index)} aria-pressed={index === stage}>
                <span>{item.code}</span><b>{item.verb}</b>
              </button>
            ))}
          </nav>

          <article className="pf-sequence-sheet" key={stages[stage].code}>
            <header><span>RESURCHIN / WORKING PROJECT</span><span>{stages[stage].artifact}</span></header>
            <div className="pf-sheet-code" aria-hidden="true">R—{stages[stage].code}</div>
            <p className="pf-kicker">DECISION UNDER REVIEW</p>
            <h3>{stages[stage].title}</h3>
            <div className="pf-version-block pf-version-before"><span>BEFORE</span><p>{stages[stage].before}</p></div>
            <div className="pf-review-arrow" aria-hidden="true">↓</div>
            <div className="pf-version-block pf-version-after"><span>AFTER REVIEW</span><p>{stages[stage].after}</p></div>
            <aside><span>MENTOR NOTE</span><p>{stages[stage].note}</p></aside>
            <footer><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
          </article>

          <div className="pf-sequence-meter" aria-hidden="true"><b>{String(stage + 1).padStart(2, "0")}</b><div><i style={{ height: `${((stage + 1) / stages.length) * 100}%` }} /></div><span>DEFENSIBILITY</span></div>
        </div>
      </section>

      <section className="pf-field">
        <header><p className="pf-kicker">THE WORK LEAVES A TRAIL</p><h2>Read it. Mark it. Argue with it. <em>Revise it.</em></h2></header>
        <div className="pf-field-word" aria-hidden="true">EVIDENCE</div>
        <figure className="pf-field-image pf-fi-1"><img src="/assets/images/pexels-5940711-w1800.avif" alt="Students comparing research material" loading="lazy" /><figcaption>01 / SOURCE AUDIT</figcaption></figure>
        <figure className="pf-field-image pf-fi-2"><img src="/assets/images/pexels-5940839-w1800.avif" alt="Researchers discussing findings" loading="lazy" /><figcaption>02 / WORK IN PROGRESS</figcaption></figure>
        <figure className="pf-field-image pf-fi-3"><img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing a draft" loading="lazy" /><figcaption>03 / CLOSE REVIEW</figcaption></figure>
        <blockquote>“The first draft says what you hoped to find. The sixth says what the evidence allows.”</blockquote>
      </section>

      <section className="pf-pressure">
        <div className="pf-pressure-copy">
          <p className="pf-kicker">MENTOR REVIEW / LIVE CLAIM AUDIT</p>
          <h2>Confidence is easy.<br /><em>Precision takes work.</em></h2>
          <p>Increase review pressure. Watch the sentence lose the confidence the study cannot carry.</p>
          <label className="pf-pressure-control">
            <span>FIRST DRAFT</span>
            <input type="range" min="0" max="100" value={pressure} onChange={(event) => setPressure(Number(event.target.value))} aria-valuetext={`${pressure}% mentor review pressure`} />
            <span>FULL REVIEW</span>
          </label>
        </div>
        <article className="pf-pressure-paper">
          <header><span>SAMPLE FINDINGS / DRAFT 03</span><span>{pressure}% REVIEW</span></header>
          <p className="pf-kicker">CLAIM / LIVE REVISION</p>
          <h3>{revisedClaim}</h3>
          <div className="pf-pressure-rule"><i style={{ width: `${pressure}%` }} /></div>
          <aside><b>MENTOR NOTE</b><p>{pressure < 30 ? "What does ‘improved’ mean here?" : pressure < 58 ? "Name the outcome, not the feeling." : pressure < 82 ? "Good. Now keep the sample visible." : "Now the limit belongs inside the claim."}</p></aside>
          <footer>TRAINING EXERCISE / FICTIONAL SAMPLE</footer>
        </article>
      </section>

      <section className="pf-proof">
        <div className="pf-proof-lead">
          <p className="pf-kicker">WHY RESURCHIN EXISTS</p>
          <h2>Research should not be inherited through access.</h2>
          <p>Happiness Eric Aigbogun created ResurchIn to make the invisible parts of research practice easier to access: how questions are framed, why methods are chosen, how drafts are reviewed and how uncertainty is communicated.</p>
        </div>
        <div className="pf-founder">
          <span>HEA / FOUNDER + WORKING RESEARCHER</span>
          <b aria-hidden="true">H</b>
          <p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh.</p>
        </div>
        <div className="pf-proof-links">
          <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><b>01</b><span><small>PUBLIC RECORD</small>SRA International / Catalyst Quarterly</span><em>↗</em></a>
          <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><b>02</b><span><small>PUBLIC PROFILE</small>Google Scholar / publications and citations</span><em>↗</em></a>
          <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer"><b>03</b><span><small>OPEN CHANNEL</small>ResurchIn / field notes and updates</span><em>↗</em></a>
        </div>
      </section>

      <section className="pf-terms" aria-label="Program facts">
        <div><b>24</b><span>WEEKS</span><p>Long enough to revise the same work more than once.</p></div>
        <div><b>2–3</b><span>LIVE SESSIONS / WEEK</span><p>Teaching, work-in-progress review and research conversation.</p></div>
        <div><b>1:1</b><span>DOCUMENT REVIEW</span><p>Feedback attached to the exact sentence, table or decision.</p></div>
        <div><b>$0</b><span>TUITION</span><p>Free, volunteer-led and open worldwide.</p></div>
      </section>

      <section className="pf-closing">
        <div className="pf-closing-mark" aria-hidden="true">?</div>
        <p className="pf-kicker">ADMISSIONS / NEXT COHORT</p>
        <h2>Bring the question<br />you cannot leave alone.</h2>
        <Link className="pf-cta pf-cta-light" href="/apply/">Submit an application <span>↗</span></Link>
        <small>NO PUBLICATION RECORD REQUIRED / NO PRESTIGIOUS AFFILIATION REQUIRED</small>
      </section>
    </main>
  );
}
