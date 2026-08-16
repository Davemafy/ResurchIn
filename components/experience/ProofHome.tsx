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
    artifact: "QUESTION MEMO / V03",
    note: "Population. Behaviour. Outcome. A question becomes useful when it becomes possible to be wrong.",
    defensible: 16,
  },
  {
    code: "02",
    verb: "READ",
    title: "Separate the record from the interpretation.",
    before: "The literature says social media harms attendance.",
    after: "Across 18 sources, five measures are comparable and three findings directly contradict one another.",
    artifact: "EVIDENCE MATRIX / V02",
    note: "A source can be relevant without supporting the sentence you want to write.",
    defensible: 32,
  },
  {
    code: "03",
    verb: "DESIGN",
    title: "Choose a method the question can survive.",
    before: "Ask students whether social media affects them.",
    after: "Observe late-night use and next-day attendance over twelve weeks with defined exclusions.",
    artifact: "METHOD NOTE / V04",
    note: "The method is not decoration. It decides which claims can exist later.",
    defensible: 49,
  },
  {
    code: "04",
    verb: "ANALYSE",
    title: "Describe the pattern before explaining it.",
    before: "Heavy use causes students to miss class.",
    after: "Lower next-day attendance is most visible above a two-hour late-night use threshold in this sample.",
    artifact: "ANALYSIS LOG / V05",
    note: "Pattern first. Interpretation second. Causation is a separate question.",
    defensible: 67,
  },
  {
    code: "05",
    verb: "REVISE",
    title: "Cut the sentence down to the evidence.",
    before: "Late-night social media use causes lower attendance.",
    after: "Late-night social media use is associated with lower next-day attendance in this sample.",
    artifact: "DRAFT / V06",
    note: "Good revision often makes a sentence smaller, not louder.",
    defensible: 83,
  },
  {
    code: "06",
    verb: "DEFEND",
    title: "Make the limit part of the result.",
    before: "We proved the effect.",
    after: "The association is visible here; the design does not establish causation or generalise beyond the sample.",
    artifact: "DEFENCE DECK / FINAL",
    note: "Credibility lives at the boundary of what you refuse to claim.",
    defensible: 100,
  },
];

type LensVars = CSSProperties & { "--lens-x": string; "--lens-y": string };

const pressureClaims = [
  "The intervention improved student outcomes.",
  "Students receiving the intervention recorded higher mean test scores.",
  "In this twelve-week sample, students receiving the intervention recorded higher mean test scores.",
  "In this twelve-week sample, students receiving the intervention recorded higher mean test scores; the design does not establish causation.",
];

export function ProofHome() {
  const [stage, setStage] = useState(0);
  const [pressure, setPressure] = useState(72);
  const [lens, setLens] = useState<LensVars>({ "--lens-x": "69%", "--lens-y": "42%" });
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const touchLensIndex = useRef(0);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(max-width: 820px)").matches) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = Number((visible.target as HTMLElement).dataset.stage || 0);
        setStage(index);
      },
      { threshold: [0.45, 0.6, 0.75] },
    );
    stageRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  const current = stages[stage];
  const revisedClaim = useMemo(() => {
    if (pressure < 28) return pressureClaims[0];
    if (pressure < 54) return pressureClaims[1];
    if (pressure < 80) return pressureClaims[2];
    return pressureClaims[3];
  }, [pressure]);

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "touch") return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = Math.max(12, Math.min(88, ((event.clientX - rect.left) / rect.width) * 100));
    const y = Math.max(12, Math.min(88, ((event.clientY - rect.top) / rect.height) * 100));
    setLens({ "--lens-x": `${x}%`, "--lens-y": `${y}%` });
  };

  const tapLens = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType !== "touch") return;
    const positions: LensVars[] = [
      { "--lens-x": "72%", "--lens-y": "28%" },
      { "--lens-x": "48%", "--lens-y": "52%" },
      { "--lens-x": "70%", "--lens-y": "70%" },
    ];
    touchLensIndex.current = (touchLensIndex.current + 1) % positions.length;
    setLens(positions[touchLensIndex.current]);
  };

  return (
    <main id="main-content" className="pf-home pf-v2">
      <section className="pf2-hero">
        <div className="pf2-grid" aria-hidden="true" />
        <div className="pf2-hero-meta">
          <span>RESURCHIN / FIELD OFFICE 001</span>
          <span>24 WEEKS / ONE PROJECT / CLOSE REVIEW</span>
          <span>FREE / VOLUNTEER-LED</span>
        </div>

        <div className="pf3-hero-index" aria-hidden="true"><span>R</span><i /><b>01</b></div>

        <div className="pf2-hero-title pf3-hero-title" data-reveal>
          <p className="pf-kicker">PRACTICE RESEARCH BY DOING RESEARCH</p>
          <h1 aria-label="Ask big. Claim small.">
            <span className="line-a">ASK</span><em className="line-b">BIG.</em><span className="line-c">CLAIM</span><em className="line-d">SMALL.</em>
          </h1>
          <div className="pf3-title-foot" aria-hidden="true"><span>QUESTION → EVIDENCE</span><span>METHOD → LIMIT</span></div>
        </div>

        <div className="pf2-observation" onPointerMove={moveLens} onPointerDown={tapLens} style={lens} data-cursor="INSPECT">
          <img
            src="/assets/images/pexels-9243385-w1800.avif"
            srcSet="/assets/images/pexels-9243385-w1200.avif 1200w, /assets/images/pexels-9243385-w1600.avif 1600w, /assets/images/pexels-9243385-w1800.avif 1800w"
            sizes="(max-width: 820px) 100vw, 48vw"
            alt="Researcher making an observation through a microscope"
            fetchPriority="high"
          />
          <div className="pf2-photo-wash" aria-hidden="true" />
          <div className="pf2-lens" aria-hidden="true">
            <div className="pf2-lens-image" />
            <span>OBS / 14:32 / R—01</span>
            <b>Does this support<br />the sentence?</b>
            <i className="x" /><i className="y" />
          </div>
          <div className="pf3-photo-coordinate" aria-hidden="true"><span>R—01</span><span>OBS / 14:32</span></div>
          <div className="pf2-photo-caption"><span>FIELD IMAGE 01 / OBSERVATION</span><span>MOVE TO INSPECT</span></div>
        </div>

        <article className="pf2-question pf3-question" data-cursor="READ" data-reveal>
          <header><span>WORKING QUESTION</span><span>REV 03 / ACTIVE</span></header>
          <div className="pf3-question-number" aria-hidden="true">Q—01</div>
          <del>How does social media affect students?</del>
          <strong>Among first-year students, does late-night social media use predict next-day lecture attendance?</strong>
          <footer><span>QUESTION NARROWED AFTER REVIEW</span><span>↘</span></footer>
        </article>

        <div className="pf2-hero-intro pf3-hero-intro" data-reveal>
          <p><span>24 weeks.</span> One project. Close review. Enough time to revise the same work until the claim fits the evidence.</p>
          <div>
            <Link className="pf-cta pf-cta-dark" data-cursor="APPLY" href="/apply/">Apply for the next cohort <span>↗</span></Link>
            <Link className="pf-link" href="/program/">Enter the field <span>→</span></Link>
          </div>
        </div>

        <aside className="pf3-hero-spec" aria-label="Program specification" data-reveal>
          <div><span>MODE</span><b>LIVE + PRACTICE</b></div>
          <div><span>ACCESS</span><b>WORLDWIDE / $0</b></div>
          <div><span>OUTPUT</span><b>DEFENSIBLE WORK</b></div>
        </aside>

        <div className="pf2-axis" aria-hidden="true"><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></div>
        <div className="pf2-scroll" aria-hidden="true"><span>SCROLL TO PUT THE CLAIM UNDER PRESSURE</span><i /></div>
      </section>

      <section className="pf2-manifesto">
        <div className="pf2-grid dark" aria-hidden="true" />
        <p className="pf-kicker" data-reveal>THE OPERATING IDEA / 001</p>
        <div className="pf2-manifesto-copy" data-reveal>
          <span>RESEARCH IS NOT</span>
          <span>KNOWING MORE WORDS.</span>
          <em>IT IS LEARNING WHERE</em>
          <em>A SENTENCE HAS TO STOP.</em>
        </div>
        <aside data-reveal><span>MENTOR NOTE / MARGIN 04</span><p>Keep the old version. Show the correction. Explain why the claim changed.</p></aside>
        <div className="pf2-manifesto-mark" aria-hidden="true">↳</div>
      </section>

      <section className="pf2-engine" aria-labelledby="engine-title">
        <header className="pf2-engine-intro" data-reveal>
          <p className="pf-kicker">ONE QUESTION / SIX STATES</p>
          <h2 id="engine-title">Watch the same project<br /><em>become harder to fake.</em></h2>
          <p>Move through six decisions. The project changes because the evidence changes what can be said.</p>
        </header>

        <div className="pf2-engine-runway">
          <div className="pf2-engine-sticky">
            <div className="pf2-engine-left">
              <span>{current.code} / 06</span>
              <div className="pf2-stage-word" aria-hidden="true">{current.verb}</div>
              <p>{current.title}</p>
              <div className="pf2-stage-meter" aria-hidden="true"><i style={{ height: `${((stage + 1) / stages.length) * 100}%` }} /></div>
            </div>

            <article className="pf2-research-sheet" key={current.code} data-cursor="REVIEW" aria-live="polite">
              <header><span>RESURCHIN / WORKING PROJECT</span><span>{current.artifact}</span></header>
              <div className="pf2-sheet-id" aria-hidden="true">R—{current.code}</div>
              <p className="pf-kicker">DECISION UNDER REVIEW</p>
              <h3>{current.title}</h3>
              <div className="pf2-version before"><span>BEFORE</span><p>{current.before}</p></div>
              <div className="pf2-edit-arrow" aria-hidden="true">↓</div>
              <div className="pf2-version after"><span>AFTER REVIEW</span><p>{current.after}</p></div>
              <aside><span>MENTOR NOTE</span><p>{current.note}</p></aside>
              <footer><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
            </article>

            <div className="pf2-engine-right">
              <b>{current.defensible}</b><span>% DEFENSIBLE</span>
              <p>Every stage removes one kind of ambiguity.</p>
              <nav aria-label="Choose research stage">
                {stages.map((item, index) => (
                  <button type="button" key={item.code} className={stage === index ? "active" : undefined} onClick={() => setStage(index)} aria-pressed={stage === index}>
                    <span>{item.code}</span>{item.verb}
                  </button>
                ))}
              </nav>
            </div>
          </div>
          <div className="pf2-engine-markers" aria-hidden="true">
            {stages.map((item, index) => <div key={item.code} data-stage={index} ref={(node) => { stageRefs.current[index] = node; }} />)}
          </div>
        </div>
      </section>

      <section className="pf2-evidence">
        <div className="pf2-evidence-word" aria-hidden="true">EVIDENCE</div>
        <header data-reveal><p className="pf-kicker">THE WORK LEAVES A TRAIL</p><h2>Read it. Mark it.<br />Argue with it. <em>Revise it.</em></h2></header>
        <figure className="pf2-field-image one" data-parallax="0.11"><img src="/assets/images/pexels-5940711-w1800.avif" srcSet="/assets/images/pexels-5940711-w1200.avif 1200w, /assets/images/pexels-5940711-w1600.avif 1600w, /assets/images/pexels-5940711-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students reading research material" loading="lazy" /><figcaption>01 / SOURCE AUDIT</figcaption></figure>
        <figure className="pf2-field-image two" data-parallax="-0.07"><img src="/assets/images/pexels-5940715-w1800.avif" srcSet="/assets/images/pexels-5940715-w1200.avif 1200w, /assets/images/pexels-5940715-w1600.avif 1600w, /assets/images/pexels-5940715-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Mentor and student reviewing a draft" loading="lazy" /><figcaption>02 / CLOSE READING</figcaption></figure>
        <figure className="pf2-field-image three" data-parallax="0.05"><img src="/assets/images/pexels-5940839-w1800.avif" srcSet="/assets/images/pexels-5940839-w1200.avif 1200w, /assets/images/pexels-5940839-w1600.avif 1600w, /assets/images/pexels-5940839-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Research group discussing work" loading="lazy" /><figcaption>03 / WORK IN PROGRESS</figcaption></figure>
        <blockquote data-reveal>“The first draft says what you hoped to find. <em>The sixth says what the evidence allows.</em>”</blockquote>
        <aside data-reveal><span>FIELD NOTE / 03</span><p>A source can be relevant without supporting your sentence.</p></aside>
      </section>

      <section className="pf2-pressure" aria-labelledby="pressure-title">
        <header data-reveal><p className="pf-kicker">MENTOR REVIEW / LIVE EXERCISE</p><h2 id="pressure-title">Put the sentence<br /><em>under pressure.</em></h2><p>Drag the review pressure. Watch certainty disappear until only the evidence remains.</p></header>
        <div className="pf2-pressure-stage">
          <article className={`pf2-claim-panel${pressure >= 54 ? " reviewed" : ""}`} data-cursor="DRAG" aria-live="polite">
            <header><span>CLAIM AUDIT / DRAFT 03</span><span>{pressure}%</span></header>
            <div className="pf2-claim-wrap">
              <p key={revisedClaim}>{revisedClaim}</p>
              <span className="pf2-redline r1">PROVES?</span>
              <span className="pf2-redline r2">NAME THE SAMPLE.</span>
              <span className="pf2-redline r3">SHOW THE LIMIT.</span>
            </div>
            <footer><span>CONFIDENCE</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
          </article>
          <div className="pf2-pressure-ui">
            <label htmlFor="review-pressure"><span>FIRST DRAFT</span><input id="review-pressure" type="range" min="0" max="100" value={pressure} onChange={(event) => setPressure(Number(event.target.value))} aria-valuetext={`${pressure}% mentor review pressure`} /><span>MENTOR REVIEW</span></label>
            <div><span>0</span><i /><span>100</span></div>
            <p>At higher pressure, the sentence names the sample and stops claiming causation.</p>
          </div>
        </div>
      </section>

      <section className="pf2-proof">
        <header data-reveal><p className="pf-kicker">WHY RESURCHIN EXISTS</p><h2>Research should not be<br /><em>inherited through access.</em></h2><p>ResurchIn was created to make practical research guidance easier to enter, practice and repeat.</p></header>
        <article className="pf2-founder" data-reveal><div aria-hidden="true">H</div><section><span>FOUNDER / WORKING RESEARCHER</span><h3>Happiness Eric Aigbogun</h3><p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh.</p><a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Follow ResurchIn’s work ↗</a></section></article>
        <div className="pf2-records" data-reveal>
          <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><b>01</b><span><small>SRA INTERNATIONAL / JULY 2026</small><strong>Contributor, Catalyst Quarterly</strong></span><i>↗</i></a>
          <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><b>02</b><span><small>GOOGLE SCHOLAR / PUBLIC PROFILE</small><strong>Research publications and citations</strong></span><i>↗</i></a>
          <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer"><b>03</b><span><small>RESURCHIN / OPEN FIELD NOTES</small><strong>Programme updates and research guidance</strong></span><i>↗</i></a>
        </div>
      </section>

      <section className="pf2-terms" aria-label="Program facts">
        <article><b>24</b><span>WEEKS</span><p>Enough time to revise the same project more than once.</p></article>
        <article><b>2–3</b><span>LIVE SESSIONS / WEEK</span><p>Teaching, critique and work-in-progress review.</p></article>
        <article><b>1:1</b><span>DOCUMENT REVIEW</span><p>Feedback attached to the exact sentence or decision.</p></article>
        <article><b>$0</b><span>TUITION</span><p>Selection is based on readiness to do the work.</p></article>
      </section>

      <section className="pf2-closing">
        <div className="pf2-grid dark" aria-hidden="true" />
        <p className="pf-kicker">ADMISSIONS / NEXT COHORT</p>
        <h2 data-reveal>BRING THE<br /><em>QUESTION.</em><br />LEAVE WITH<br />A <em>CLAIM.</em></h2>
        <Link className="pf-cta pf-cta-light" data-cursor="APPLY" href="/apply/">Submit an application <span>↗</span></Link>
        <div className="pf2-closing-orbit" aria-hidden="true">R—06</div>
        <small>FREE / VOLUNTEER-LED / OPEN WORLDWIDE</small>
      </section>
    </main>
  );
}
