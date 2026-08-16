import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="mentors" />
      <main className="studio-mentors">
        <section className="mentor-hero">
          <div className="studio-page-meta"><span>MENTORSHIP / CLOSE READING</span><span>REVIEW ROOM / R—04</span></div>
          <div className="mentor-hero-copy">
            <p className="studio-eyebrow"><span>01</span> THE REVIEW</p>
            <h1>Good feedback does not say<br /><em>“make it better.”</em></h1>
            <p>It points to the exact decision that failed, then gives you somewhere useful to look next.</p>
            <Link className="studio-primary" href="/apply/">Bring your work <span>↗</span></Link>
          </div>
          <figure className="mentor-hero-photo">
            <img src="/assets/images/pexels-5940715-w1800.avif" alt="Students and a mentor reviewing work together" />
            <figcaption>ONE-TO-ONE REVIEW / DRAFT V4</figcaption>
          </figure>
          <aside className="mentor-hero-note">MENTOR NOTE 04<br /><strong>NAME THE LIMIT.</strong></aside>
          <div className="mentor-hero-index" aria-hidden="true">04</div>
        </section>

        <section className="mentor-dialogue" aria-labelledby="mentor-dialogue-title">
          <div className="mentor-dialogue-intro"><span>02 / A REVIEW, IN FOUR LINES</span><h2 id="mentor-dialogue-title">The useful moment is often one word.</h2></div>
          <div className="mentor-transcript">
            <article><b>YOU</b><p>I think the data <mark>proves</mark> the intervention worked.</p></article>
            <article className="mentor-reply"><b>MENTOR</b><p>Proves?<br /><em>Or suggests?</em></p><span>↳ CHECK THE VERB</span></article>
            <article><b>YOU</b><p>Suggests. The sample is too small to claim more.</p></article>
            <article className="mentor-reply"><b>MENTOR</b><p>Good. Put the limitation <em>before</em> the conclusion.</p><span>↳ REVISE ORDER</span></article>
          </div>
        </section>

        <section className="mentor-review-desk">
          <div className="mentor-review-copy"><span>03 / WHAT MENTORS DO</span><h2>They read the decisions behind the document.</h2><p>Question, method, evidence, wording, confidence. The review stays attached to the work.</p></div>
          <ol>
            <li><b>01</b><div><span>QUESTION</span><h3>Push vague ideas toward answerable questions.</h3></div></li>
            <li><b>02</b><div><span>CHALLENGE</span><h3>Test assumptions and overconfident claims.</h3></div></li>
            <li><b>03</b><div><span>DIRECT</span><h3>Point toward the next useful move.</h3></div></li>
            <li><b>04</b><div><span>REVIEW</span><h3>Follow the work across drafts.</h3></div></li>
          </ol>
        </section>

        <section className="mentor-photo-ledger" aria-label="Mentorship in practice">
          <figure className="mentor-photo-a"><img src="/assets/images/pexels-5940839-w1600.avif" alt="Students discussing a research question" /><figcaption>QUESTION CLINIC / CLAIM + LIMIT</figcaption></figure>
          <figure className="mentor-photo-b"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research materials" /><figcaption>CLOSE READING / SOURCE + NOTE</figcaption></figure>
          <figure className="mentor-photo-c"><img src="/assets/images/pexels-8197503-w1600.avif" alt="Research group in a learning session" /><figcaption>GROUP CRITIQUE / ROOM 04</figcaption></figure>
        </section>

        <section className="studio-cta-band studio-cta-band--dark">
          <span>ADMISSIONS / NEXT COHORT</span>
          <h2>Bring the draft you are<br />least certain about.</h2>
          <Link className="studio-primary" href="/apply/">Submit an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
