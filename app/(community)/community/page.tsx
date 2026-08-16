import Link from "next/link";
import { CommunityRoom } from "@/components/experience/CommunityRoom";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="community" />
      <main id="main-content" className="pf-inner pf2-community">
        <section className="pf2-community-hero">
          <div className="pf2-grid" aria-hidden="true" />
          <div className="pf-inner-meta"><span>COMMUNITY / 04</span><span>THE OPEN ROOM</span><span>WORK BEFORE POLISH</span></div>
          <div className="pf2-community-title" data-reveal><p className="pf-kicker">BRING THE UNRESOLVED BIT</p><h1>SHOW THE<br /><em>MESS.</em></h1></div>
          <p>The useful conversation usually starts before the slide deck exists: a question that is still vague, a chart you do not trust, a paragraph that keeps overreaching.</p>
          <figure data-parallax="0.04"><img src="/assets/images/pexels-5940839-w1800.avif" srcSet="/assets/images/pexels-5940839-w1200.avif 1200w, /assets/images/pexels-5940839-w1600.avif 1600w, /assets/images/pexels-5940839-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students collaborating around a laptop" /><figcaption>OPEN ROOM / WORK IN PROGRESS / 2026</figcaption></figure>
          <div className="pf2-community-loop" aria-hidden="true"><span>ASK</span><i /><span>SHOW</span><i /><span>ARGUE</span><i /><span>REVISE</span><i /><span>ASK AGAIN</span></div>
        </section>

        <section className="pf2-community-manifesto"><span className="pf-kicker">COMMUNITY PRINCIPLE / 01</span><blockquote data-reveal>Polish hides the decision. <em>Show us the decision.</em></blockquote><p>The room is useful when people can see where you are uncertain and respond to something concrete.</p></section>

        <CommunityRoom />

        <section className="pf2-community-field">
          <div aria-hidden="true">UNFINISHED</div>
          <figure className="one" data-parallax="0.045"><img src="/assets/images/pexels-8197503-w1800.avif" srcSet="/assets/images/pexels-8197503-w1200.avif 1200w, /assets/images/pexels-8197503-w1600.avif 1600w, /assets/images/pexels-8197503-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Student participating in a learning session" loading="lazy" /><figcaption>QUESTION ROOM / 02</figcaption></figure>
          <figure className="two" data-parallax="-0.03"><img src="/assets/images/pexels-5940711-w1800.avif" srcSet="/assets/images/pexels-5940711-w1200.avif 1200w, /assets/images/pexels-5940711-w1600.avif 1600w, /assets/images/pexels-5940711-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students comparing research notes" loading="lazy" /><figcaption>PEER READING / 04</figcaption></figure>
          <article data-reveal><span>THE ROOM IS FOR</span><h2>Questions before certainty.<br />Drafts before performance.<br /><em>Critique before polish.</em></h2></article>
        </section>

        <section className="pf2-community-protocol">
          <header><p className="pf-kicker">HOW TO ENTER A REVIEW</p><h2>Bring three things.</h2></header>
          <ol><li><b>01</b><span>THE OBJECT</span><p>The paragraph, chart, question or method choice.</p></li><li><b>02</b><span>THE DOUBT</span><p>What exactly are you unsure about?</p></li><li><b>03</b><span>THE NEXT DECISION</span><p>What must you decide when the conversation ends?</p></li></ol>
        </section>

        <section className="pf2-closing">
          <p className="pf-kicker">THE OPEN ROOM / NEXT COHORT</p>
          <h2 data-reveal>SHOW THE WORK<br />BEFORE IT IS <em>READY.</em></h2>
          <Link className="pf-cta pf-cta-light" data-cursor="JOIN" href="/apply/">Join the next cohort <span>↗</span></Link>
          <small>ASK → SHOW → ARGUE → REVISE → ASK AGAIN</small>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
