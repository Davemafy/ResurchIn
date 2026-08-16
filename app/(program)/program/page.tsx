import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const phases = [
  ["01", "FRAME", "Give the question a boundary.", "QUESTION MEMO / V3"],
  ["02", "READ", "Arrange the field by disagreement.", "EVIDENCE MATRIX / 18 SOURCES"],
  ["03", "DESIGN", "Choose the evidence before collecting it.", "METHOD + DATA PLAN"],
  ["04", "ANALYSE", "Keep the result smaller than the ambition.", "ANALYSIS LOG / V4"],
  ["05", "WRITE", "Make every claim earn its confidence.", "RESEARCH DRAFT / V6"],
  ["06", "PRESENT", "Defend the decision, not the performance.", "DEFENCE / PORTFOLIO"],
] as const;

export default function Page() {
  return (
    <>
      <SiteHeader active="program" />
      <main className="studio-program">
        <section className="studio-page-intro studio-page-intro--dark">
          <div className="studio-page-meta">
            <span>PROGRAM DOSSIER / 2026</span>
            <span>R—01 / SIX MONTHS</span>
          </div>
          <div className="studio-page-copy">
            <p className="studio-eyebrow"><span>01</span> THE APPRENTICESHIP</p>
            <h1>Twenty-four weeks.<br /><em>One question under review.</em></h1>
            <p className="studio-lead">Every week ends with visible evidence: a sharper question, a documented choice, a corrected claim or a stronger draft.</p>
            <Link className="studio-primary" href="/apply/">Apply for the next cohort <span>↗</span></Link>
          </div>
          <figure className="studio-page-image studio-page-image--tall">
            <img src="/assets/images/pexels-5940715-w1800.avif" alt="A mentor and students reviewing research work together" />
            <figcaption><span>RESEARCH IN PRACTICE</span><b>REVIEW SESSION / 04</b></figcaption>
          </figure>
          <div className="studio-page-index" aria-hidden="true">01—06</div>
        </section>

        <section className="program-brief">
          <aside>
            <span>OPERATING BRIEF</span>
            <b>THE PROGRAM IS BUILT AROUND VERSIONS.</b>
          </aside>
          <div>
            <h2>Nothing moves forward just because the calendar says so.</h2>
            <p>The work advances when the reasoning gets better. Earlier drafts stay in the record so you can point to the decision that changed.</p>
          </div>
          <dl>
            <div><dt>TIME</dt><dd>6 months</dd></div>
            <div><dt>LIVE RHYTHM</dt><dd>2–3 sessions / week</dd></div>
            <div><dt>COST</dt><dd>$0 tuition</dd></div>
            <div><dt>OUTPUT</dt><dd>Portfolio + defence</dd></div>
          </dl>
        </section>

        <section className="program-phases" aria-labelledby="program-phases-title">
          <header>
            <span>02 / THE PROCESS</span>
            <h2 id="program-phases-title">One project changes shape six times.</h2>
            <p>Each phase produces a document another person can inspect.</p>
          </header>
          <div className="program-phase-grid">
            {phases.map(([index, label, title, output]) => (
              <article key={index}>
                <b>{index}</b>
                <span>{label}</span>
                <h3>{title}</h3>
                <small>{output}</small>
              </article>
            ))}
          </div>
        </section>

        <section className="program-photo-sequence" aria-label="Program in practice">
          <figure className="program-photo-wide"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing research documents" /><figcaption>FRAME / READ</figcaption></figure>
          <figure className="program-photo-narrow"><img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher making a laboratory observation" /><figcaption>DESIGN / TEST</figcaption></figure>
          <figure className="program-photo-square"><img src="/assets/images/pexels-5940839-w1600.avif" alt="Researchers discussing findings" /><figcaption>ANALYSE / DEFEND</figcaption></figure>
        </section>

        <section className="program-rhythm">
          <div className="program-rhythm-title"><span>03 / THE WEEK</span><h2>Repeat the research loop until the work can survive a question.</h2></div>
          <div className="program-rhythm-rows">
            <article><b>MON</b><span>CONTEXT</span><strong>Learn the idea needed for the week’s task.</strong><em>LIVE SESSION</em></article>
            <article><b>WED</b><span>PRACTICE</span><strong>Apply it to your question, data or draft.</strong><em>PROJECT DESK</em></article>
            <article><b>FRI</b><span>CRITIQUE</span><strong>Show the work and receive a specific correction.</strong><em>REVIEW ROOM</em></article>
            <article><b>+1</b><span>REVISION</span><strong>Annotate the change and keep both versions.</strong><em>PORTFOLIO TRACE</em></article>
          </div>
        </section>

        <section className="program-admission">
          <div>
            <span>04 / WHO SHOULD APPLY</span>
            <h2>Curiosity is required.<br />Prestige is not.</h2>
          </div>
          <div className="program-admission-grid">
            <article><b>YOU DO NOT NEED</b><p>A publication record, a prestigious affiliation or a polished project proposal.</p></article>
            <article><b>YOU DO NEED</b><p>Time for weekly project work, consistent attendance and the willingness to revise after critique.</p></article>
          </div>
          <Link className="studio-primary studio-primary--dark" href="/apply/">Submit an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
