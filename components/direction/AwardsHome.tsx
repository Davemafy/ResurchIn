"use client";

import Link from "next/link";
import { useMemo, useState, type CSSProperties, type PointerEvent } from "react";
import { QuestionEngine } from "./QuestionEngine";

type LensStyle = CSSProperties & { "--lx"?: string; "--ly"?: string };

export function AwardsHome() {
  const [lens, setLens] = useState<LensStyle>({ "--lx": "62%", "--ly": "46%" });
  const [pressure, setPressure] = useState(58);

  const claim = useMemo(() => {
    if (pressure < 34) return "The intervention improved student outcomes.";
    if (pressure < 68) return "Participants receiving the intervention recorded higher mean test scores.";
    return "In this twelve-week sample, participants receiving the intervention recorded a higher mean test score; the design does not establish causation.";
  }, [pressure]);

  const moveLens = (event: PointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width) * 100;
    const y = ((event.clientY - rect.top) / rect.height) * 100;
    setLens({ "--lx": `${x}%`, "--ly": `${y}%` });
  };

  return (
    <main className="instrument-home">
      <section className="instrument-hero">
        <div className="hero-axis" aria-hidden="true">
          <span>R—01</span>
          <i />
          <span>2026</span>
        </div>

        <div className="hero-copy">
          <p className="micro">SIX MONTHS / GUIDED RESEARCH PRACTICE / FREE</p>
          <h1>
            <span>Turn curiosity</span>
            <em>into proof.</em>
          </h1>
          <div className="hero-deck">
            <p>ResurchIn is a free research apprenticeship where emerging researchers learn by framing questions, handling evidence, revising claims and defending what the work can actually support.</p>
            <div>
              <Link className="signal-button" href="/apply/">Apply for the next cohort <span>↗</span></Link>
              <Link className="text-arrow" href="/program/">See the six-month program →</Link>
            </div>
          </div>
        </div>

        <div className="hero-lab" onPointerMove={moveLens} style={lens}>
          <img className="lab-base" src="/assets/images/pexels-9243385-w1800.avif" alt="Researcher making a laboratory observation" />
          <div className="lab-evidence" aria-hidden="true">
            <img src="/assets/images/pexels-9243385-w1800.avif" alt="" />
            <span className="evidence-tag tag-a">OBSERVATION / 14:32</span>
            <span className="evidence-tag tag-b">METHOD / REPEAT × 03</span>
            <span className="evidence-tag tag-c">DOES THIS SUPPORT THE CLAIM?</span>
          </div>
          <div className="lens-crosshair" aria-hidden="true"><i /><i /></div>
          <div className="lab-caption"><span>FIELD IMAGE / METHOD OBSERVATION</span><span>MOVE TO INSPECT</span></div>
        </div>

        <div className="hero-revision">
          <span>WORKING QUESTION / V01 → V03</span>
          <p><del>How does social media affect students?</del></p>
          <strong>Among first-year students, does late-night social media use predict next-day lecture attendance?</strong>
        </div>

        <div className="hero-scroll" aria-hidden="true">SCROLL / QUESTION → EVIDENCE → CLAIM</div>
      </section>

      <section className="signal-marquee" aria-hidden="true">
        <div>FRAME THE QUESTION · TEST THE EVIDENCE · NAME THE LIMIT · REVISE THE CLAIM · </div>
      </section>

      <QuestionEngine />

      <section className="field-break">
        <header>
          <p className="micro">THE WORK IS VISIBLE</p>
          <h2>Research is not a vibe.<br /><em>It leaves a trail.</em></h2>
        </header>
        <div className="field-collage">
          <figure className="field-a"><img src="/assets/images/pexels-5940711-w1800.avif" alt="Students comparing research documents" loading="lazy" /><figcaption>01 / READ THE RECORD</figcaption></figure>
          <figure className="field-b"><img src="/assets/images/pexels-5940839-w1600.avif" alt="Researchers discussing findings" loading="lazy" /><figcaption>02 / ARGUE WITH THE RESULT</figcaption></figure>
          <figure className="field-c"><img src="/assets/images/pexels-5940715-w1600.avif" alt="Mentor reviewing work with students" loading="lazy" /><figcaption>03 / REVISE IN PUBLIC</figcaption></figure>
          <blockquote>“The first draft says what you hoped to find. The sixth says what the evidence allows.”</blockquote>
        </div>
      </section>

      <section className="proof-room">
        <div className="proof-statement">
          <p className="micro">WHY RESURCHIN EXISTS</p>
          <h2>Research shouldn’t be inherited through access.</h2>
          <p>Happiness Eric Aigbogun created ResurchIn to make the invisible parts of research practice visible: how questions get framed, why methods get chosen, how claims get cut down and what useful critique actually sounds like.</p>
        </div>

        <div className="proof-founder">
          <span className="founder-code">HEA / FOUNDER + WORKING RESEARCHER</span>
          <div className="founder-monolith" aria-hidden="true">H</div>
          <p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh.</p>
        </div>

        <div className="proof-links">
          <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer"><b>01</b><span>SRA International / Catalyst Quarterly</span><em>External publication ↗</em></a>
          <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer"><b>02</b><span>Google Scholar / public profile</span><em>View record ↗</em></a>
          <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer"><b>03</b><span>ResurchIn / open field notes</span><em>Visit channel ↗</em></a>
        </div>
      </section>

      <section className="pressure-lab">
        <div className="pressure-copy">
          <p className="micro">MENTOR REVIEW / CLAIM UNDER PRESSURE</p>
          <h2>A confident sentence is easy.<br /><em>A defensible one is harder.</em></h2>
          <p>Move the review pressure. Watch the sentence lose the confidence the evidence cannot carry.</p>
          <label>
            <span>FIRST DRAFT</span>
            <input type="range" min="0" max="100" value={pressure} onChange={(event) => setPressure(Number(event.target.value))} />
            <span>MENTOR REVIEW</span>
          </label>
        </div>
        <article className="pressure-sheet">
          <header><span>SAMPLE FINDINGS / DRAFT 03</span><span>{pressure}% REVIEW</span></header>
          <p className="micro">CLAIM / LIVE REVISION</p>
          <h3>{claim}</h3>
          <div className="pressure-mark" style={{ width: `${pressure}%` }} />
          <aside>
            <span>MENTOR NOTE</span>
            <p>{pressure < 34 ? "What does ‘improved’ mean here?" : pressure < 68 ? "Name the sample. Remove the universal claim." : "Good. Now keep the causal limit visible."}</p>
          </aside>
          <footer>TRAINING EXERCISE / FICTIONAL SAMPLE</footer>
        </article>
      </section>

      <section className="home-terms">
        <div><b>06</b><span>MONTHS</span><p>Long enough to revise the same project more than once.</p></div>
        <div><b>2–3</b><span>LIVE SESSIONS / WEEK</span><p>Teaching, work-in-progress review and research conversation.</p></div>
        <div><b>1:1</b><span>DOCUMENT REVIEW</span><p>Feedback attached to the exact sentence, table or decision.</p></div>
        <div><b>$0</b><span>TUITION</span><p>Free, volunteer-led and open worldwide.</p></div>
      </section>

      <section className="admission-signal">
        <div className="admission-number" aria-hidden="true">?</div>
        <p className="micro">ADMISSIONS / NEXT COHORT</p>
        <h2>Bring the question<br />you cannot leave alone.</h2>
        <Link className="signal-button dark" href="/apply/">Submit an application <span>↗</span></Link>
      </section>
    </main>
  );
}
