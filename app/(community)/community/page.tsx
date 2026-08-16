import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="community" />
      <main id="main-content" className="pf-inner pf-community">
        <section className="pf-community-hero">
          <div className="pf-inner-meta"><span>COMMUNITY / 04</span><span>THE OPEN ROOM</span><span>WORK BEFORE POLISH</span></div>
          <div><p className="pf-kicker">BRING THE UNRESOLVED BIT</p><h1>Not networking.<br /><em>Working out loud.</em></h1></div>
          <p>The question that is still vague. The chart that will not settle. The paragraph you keep rewriting. The room exists for work before it becomes impressive.</p>
          <figure><img src="/assets/images/pexels-5940839-w1800.avif" alt="Students collaborating around a laptop" /><figcaption>PEER TABLE / WORK IN PROGRESS / 2026</figcaption></figure>
          <div className="pf-community-loop" aria-hidden="true">ASK → SHOW → ARGUE → REVISE → ASK AGAIN</div>
        </section>

        <section className="pf-room-grid">
          <article><b>01</b><span>WORK-IN-PROGRESS</span><h2>Bring the unresolved part.</h2><p>Not just the polished ending. Show the section that still does not behave.</p></article>
          <article><b>02</b><span>PEER REVIEW</span><h2>Learn to make critique usable.</h2><p>Specific, evidence-aware and kind enough to keep the conversation moving.</p></article>
          <article><b>03</b><span>RESEARCH CONVERSATION</span><h2>Watch other fields reason.</h2><p>Different subjects. Same discipline: question, evidence, method, limit.</p></article>
        </section>

        <section className="pf-community-collage">
          <div className="pf-community-word" aria-hidden="true">UNFINISHED</div>
          <figure className="one"><img src="/assets/images/pexels-8197503-w1600.avif" alt="Collaborative learning session" loading="lazy" /><figcaption>QUESTION ROOM / 02</figcaption></figure>
          <figure className="two"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing notes" loading="lazy" /><figcaption>PEER READING / 04</figcaption></figure>
          <blockquote>Questions do not need to be polished before they are shared.</blockquote>
        </section>

        <section className="pf-inner-closing pf-black"><p className="pf-kicker">THE OPEN ROOM / NEXT COHORT</p><h2>Show the work<br />before it is ready.</h2><Link className="pf-cta" href="/apply/">Join the next cohort <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
