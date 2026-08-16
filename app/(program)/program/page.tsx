import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const phases = [
  ["01", "FRAME", "Make the question small enough to answer.", "Question memo / v03"],
  ["02", "READ", "Map what is known, argued and still uncertain.", "Evidence matrix / v02"],
  ["03", "DESIGN", "Choose a method that can meet the question.", "Method note / v04"],
  ["04", "ANALYSE", "Separate pattern from interpretation.", "Analysis log / v05"],
  ["05", "WRITE", "Cut every claim the evidence cannot carry.", "Draft / v06"],
  ["06", "DEFEND", "Present the result and the limit with equal clarity.", "Defence deck / final"],
];

export default function Page() {
  return (
    <>
      <SiteHeader active="program" />
      <main className="instrument-inner program-page-new">
        <section className="inner-hero program-hero-new">
          <div className="inner-hero-index"><span>PROGRAM / 01</span><span>24 WEEKS / ONE PROJECT</span></div>
          <div className="inner-hero-copy">
            <p className="micro">THE SIX-MONTH APPRENTICESHIP</p>
            <h1>One question.<br /><em>Twenty-four weeks<br />under review.</em></h1>
            <p>Not a course you finish by watching it. You move one project through six decisions, keep the earlier versions and learn to explain why the work changed.</p>
            <Link className="signal-button" href="/apply/">Apply for the next cohort <span>↗</span></Link>
          </div>
          <figure className="hero-photo-slice">
            <img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing research work" />
            <figcaption>REVIEW ROOM / WORK IN PROGRESS / 2026</figcaption>
          </figure>
        </section>

        <section className="program-manifesto">
          <span className="micro">THE OPERATING RULE</span>
          <blockquote>Nothing moves forward just because the calendar says so.</blockquote>
          <p>Every week should leave evidence behind: a sharper question, a documented choice, a corrected claim, a stronger draft or a limitation you can finally name.</p>
        </section>

        <section className="phase-stack" aria-label="Six program phases">
          {phases.map(([n, label, title, artifact]) => (
            <article key={n}>
              <b>{n}</b>
              <span>{label}</span>
              <h2>{title}</h2>
              <small>{artifact}</small>
            </article>
          ))}
        </section>

        <section className="program-rhythm">
          <div className="rhythm-title"><p className="micro">WEEKLY RHYTHM</p><h2>Learn.<br />Apply.<br /><em>Get challenged.</em><br />Revise.</h2></div>
          <div className="rhythm-list">
            <article><b>MON</b><span>CONTEXT</span><p>Learn the idea needed for the week’s task.</p></article>
            <article><b>WED</b><span>PRACTICE</span><p>Apply it to your question, data or draft.</p></article>
            <article><b>FRI</b><span>CRITIQUE</span><p>Show the work and receive a specific correction.</p></article>
            <article><b>+1</b><span>REVISION</span><p>Keep the earlier version. Annotate what changed.</p></article>
          </div>
        </section>

        <section className="program-photo-run">
          <figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research material" loading="lazy" /><figcaption>READ / COMPARE / MARK</figcaption></figure>
          <figure><img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher at a microscope" loading="lazy" /><figcaption>OBSERVE / RECORD / QUESTION</figcaption></figure>
          <figure><img src="/assets/images/pexels-5940830-w1600.avif" alt="Students presenting findings" loading="lazy" /><figcaption>EXPLAIN / DEFEND / LIMIT</figcaption></figure>
        </section>

        <section className="eligibility-new">
          <div><p className="micro">WHO SHOULD APPLY</p><h2>You need curiosity, time and a willingness to show unfinished work.</h2></div>
          <div className="eligibility-cells"><span>UNDERGRADUATES</span><span>RECENT GRADUATES</span><span>EARLY GRAD STUDENTS</span><span>CAREER SWITCHERS</span></div>
          <aside><b>YOU DO NOT NEED</b><p>A publication record, a prestigious affiliation or a polished proposal.</p><b>YOU DO NEED</b><p>Consistent attendance, weekly project time and the willingness to revise after critique.</p></aside>
        </section>

        <section className="inner-cta acid"><p className="micro">ADMISSIONS / NEXT COHORT</p><h2>Apply with the question<br />you cannot leave alone.</h2><Link className="signal-button dark" href="/apply/">Submit an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
