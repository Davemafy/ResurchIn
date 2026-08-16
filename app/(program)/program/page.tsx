import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const weeks = [
  ["01–04", "FRAME", "Question memo", "Turn an area of interest into a question with a boundary."],
  ["05–08", "READ", "Evidence matrix", "Locate the conversation, disagreement and gap."],
  ["09–12", "DESIGN", "Method note", "Match the evidence to the question and name the trade-off."],
  ["13–16", "ANALYSE", "Analysis log", "Separate what happened from what you hoped it meant."],
  ["17–20", "REVISE", "Research draft", "Narrow every claim until the evidence can hold it."],
  ["21–24", "DEFEND", "Portfolio + defence", "Explain the result, the limit and the next question."],
];

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader active="program" />
      <main className="rv-inner rv-program">
        <section className="rv-inner-hero rv-program-hero">
          <div data-rv-reveal>
            <p className="rv-eyebrow">PROGRAM / 24-WEEK REVISION SYSTEM</p>
            <h1>Twenty-four weeks.<br />One question under review.</h1>
            <p className="rv-lead">Nothing moves forward just because the calendar says so. Each phase leaves behind a version, a correction and a decision you can explain.</p>
            <Link className="rv-button rv-button-ink" href="/apply/">Apply for the next cohort <span>↗</span></Link>
          </div>
          <figure className="rv-program-photo" data-rv-reveal>
            <img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing research work together" />
            <figcaption><span>REVIEW SESSION / DRAFT 04</span><b>One project stays visible for the full six months.</b></figcaption>
          </figure>
        </section>

        <section className="rv-program-spec" aria-label="Program facts">
          <article><small>TIME</small><b>24 weeks</b><p>Long enough to revisit the same decision.</p></article>
          <article><small>RHYTHM</small><b>2–3 live sessions / week</b><p>Teaching, project work and critique.</p></article>
          <article><small>REVIEW</small><b>Document-specific</b><p>Feedback attached to the sentence or choice.</p></article>
          <article><small>COST</small><b>$0 tuition</b><p>Free and volunteer-led.</p></article>
        </section>

        <section className="rv-program-runway">
          <header data-rv-reveal>
            <p className="rv-eyebrow">THE OPERATING SEQUENCE</p>
            <h2>Six phases. Six records.<br />One continuous piece of work.</h2>
          </header>
          <ol>
            {weeks.map(([range, label, output, copy], index) => (
              <li key={label} data-rv-reveal>
                <div><i>0{index + 1}</i><small>W{range}</small></div>
                <h3>{label}</h3><p>{copy}</p><span>{output}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="rv-week-cycle">
          <div data-rv-reveal><p className="rv-eyebrow">REPEAT × 24</p><h2>A week ends with a version, not a checkbox.</h2></div>
          <div className="rv-cycle-list" data-rv-reveal>
            <article><b>MON</b><span>CONTEXT</span><p>Learn the idea needed for the week’s decision.</p></article>
            <article><b>WED</b><span>PRACTICE</span><p>Apply it to your own question, evidence or draft.</p></article>
            <article><b>FRI</b><span>CRITIQUE</span><p>Show the work. Receive one specific correction.</p></article>
            <article><b>+1</b><span>REVISION</span><p>Keep the old version. Explain what changed.</p></article>
          </div>
        </section>

        <section className="rv-program-output">
          <div data-rv-reveal><p className="rv-eyebrow">WHAT LEAVES WITH YOU</p><h2>A portfolio that shows the reasoning, not only the ending.</h2></div>
          <div data-rv-reveal>
            <p>Question memo</p><p>Evidence matrix</p><p>Method + data plan</p><p>Analysis log</p><p>Research draft</p><p>Defence + revision history</p>
          </div>
        </section>

        <section className="rv-final rv-final-compact">
          <p className="rv-eyebrow">NEXT COHORT</p><h2>Bring V01.</h2><p>The rest of the programme is built around what happens next.</p><Link className="rv-button rv-button-ink" href="/apply/">Start an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
