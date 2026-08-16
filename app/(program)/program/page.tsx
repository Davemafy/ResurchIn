import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const phases = [
  ["01", "FRAME", "Weeks 01–04", "Make the question small enough to answer.", "Question memo / v03"],
  ["02", "READ", "Weeks 05–08", "Map what is known, argued and still uncertain.", "Evidence matrix / v02"],
  ["03", "DESIGN", "Weeks 09–12", "Choose a method that can meet the question.", "Method note / v04"],
  ["04", "ANALYSE", "Weeks 13–16", "Separate pattern from interpretation.", "Analysis log / v05"],
  ["05", "REVISE", "Weeks 17–20", "Cut every claim the evidence cannot carry.", "Draft / v06"],
  ["06", "DEFEND", "Weeks 21–24", "Present the result and the limit with equal clarity.", "Defence deck / final"],
];

export default function Page() {
  return (
    <>
      <SiteHeader active="program" />
      <main id="main-content" className="pf-inner pf-program">
        <section className="pf-program-hero">
          <div className="pf-inner-meta"><span>PROGRAM / 01</span><span>24 WEEKS / ONE PROJECT</span><span>2–3 LIVE SESSIONS / WEEK</span></div>
          <div className="pf-program-number" aria-hidden="true">24</div>
          <div className="pf-program-title"><p className="pf-kicker">THE SIX-MONTH APPRENTICESHIP</p><h1>One question.<br /><em>Twenty-four weeks<br />under review.</em></h1></div>
          <p className="pf-program-lead">Not a course you finish by watching it. You move one project through six decisions, keep the earlier versions and learn to explain why the work changed.</p>
          <Link className="pf-cta pf-cta-light" href="/apply/">Apply for the next cohort <span>↗</span></Link>
          <figure className="pf-program-hero-image"><img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing research work" /><figcaption>REVIEW ROOM / WORK IN PROGRESS / 2026</figcaption></figure>
          <div className="pf-program-rule">NOTHING MOVES FORWARD JUST BECAUSE THE CALENDAR SAYS SO.</div>
        </section>

        <section className="pf-phase-intro"><p className="pf-kicker">THE OPERATING SYSTEM</p><h2>Six phases.<br /><em>One question getting harder to fake.</em></h2><p>Every phase ends with a working artifact. Earlier versions stay visible, because revision is part of the evidence.</p></section>

        <section className="pf-phases" aria-label="Six program phases">
          {phases.map(([n, label, weeks, title, artifact], index) => (
            <article key={n} className={index % 2 ? "reverse" : undefined}>
              <div className="pf-phase-num" aria-hidden="true">{n}</div>
              <div className="pf-phase-copy"><span>{label} / {weeks}</span><h2>{title}</h2><p>{artifact}</p></div>
              <div className="pf-phase-line"><i /></div>
            </article>
          ))}
        </section>

        <section className="pf-rhythm">
          <div><p className="pf-kicker">WEEKLY RHYTHM</p><h2>Learn.<br />Apply.<br /><em>Get challenged.</em><br />Revise.</h2></div>
          <ol>
            <li><b>MON</b><span>CONTEXT</span><p>Learn the idea needed for the week’s task.</p></li>
            <li><b>WED</b><span>PRACTICE</span><p>Apply it to your question, data or draft.</p></li>
            <li><b>FRI</b><span>CRITIQUE</span><p>Show the work and receive a specific correction.</p></li>
            <li><b>+1</b><span>REVISION</span><p>Keep the earlier version. Annotate what changed.</p></li>
          </ol>
        </section>

        <section className="pf-photo-triptych">
          <figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research material" loading="lazy" /><figcaption>READ / COMPARE / MARK</figcaption></figure>
          <figure><img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher at a microscope" loading="lazy" /><figcaption>OBSERVE / RECORD / QUESTION</figcaption></figure>
          <figure><img src="/assets/images/pexels-5940830-w1600.avif" alt="Students presenting findings" loading="lazy" /><figcaption>EXPLAIN / DEFEND / LIMIT</figcaption></figure>
        </section>

        <section className="pf-eligibility">
          <header><p className="pf-kicker">WHO SHOULD APPLY</p><h2>You need curiosity, time and a willingness to show unfinished work.</h2></header>
          <div className="pf-eligibility-grid"><span>UNDERGRADUATES</span><span>RECENT GRADUATES</span><span>EARLY GRAD STUDENTS</span><span>CAREER SWITCHERS</span></div>
          <div className="pf-eligibility-note"><div><b>YOU DO NOT NEED</b><p>A publication record, a prestigious affiliation or a polished proposal.</p></div><div><b>YOU DO NEED</b><p>Consistent attendance, weekly project time and the willingness to revise after critique.</p></div></div>
        </section>

        <section className="pf-inner-closing pf-blue"><p className="pf-kicker">ADMISSIONS / NEXT COHORT</p><h2>Apply with the question<br />you cannot leave alone.</h2><Link className="pf-cta pf-cta-light" href="/apply/">Submit an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
