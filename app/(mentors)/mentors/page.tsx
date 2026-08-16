import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader active="mentors" />
      <main className="rv-inner rv-mentors">
        <section className="rv-inner-hero rv-mentor-hero">
          <div data-rv-reveal><p className="rv-eyebrow">MENTORSHIP / INLINE REVIEW</p><h1>Review should land on the sentence.</h1><p className="rv-lead">Bring the claim, method or paragraph you are least sure about. A mentor reads closely, tests the reasoning and names the next useful correction.</p></div>
          <figure data-rv-reveal><img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing work together"/><figcaption>REVIEW ROOM / WORK IN PROGRESS</figcaption></figure>
        </section>
        <section className="rv-mentor-thread">
          <article data-rv-reveal><span>YOU / DRAFT 03</span><p>The intervention <mark>proved</mark> that students performed better.</p></article>
          <article className="mentor" data-rv-reveal><span>MENTOR / COMMENT 04</span><p>Proved, or suggested? Name the sample before you name the effect.</p></article>
          <article data-rv-reveal><span>YOU / V04</span><p>In this twelve-week sample, students receiving the intervention recorded a higher mean test score.</p></article>
          <article className="mentor" data-rv-reveal><span>MENTOR / RESOLVED</span><p>Better. Now state what the design cannot establish.</p></article>
        </section>
        <section className="rv-mentor-method">
          <header data-rv-reveal><p className="rv-eyebrow">WHAT A USEFUL REVIEW DOES</p><h2>Specific enough to act on.<br />Calm enough to think with.</h2></header>
          <ol>
            <li data-rv-reveal><b>01</b><span>POINT</span><p>Attach feedback to the exact sentence, table or decision.</p></li>
            <li data-rv-reveal><b>02</b><span>QUESTION</span><p>Ask what the evidence supports before prescribing a rewrite.</p></li>
            <li data-rv-reveal><b>03</b><span>REVISE</span><p>Keep the earlier version so the correction remains visible.</p></li>
            <li data-rv-reveal><b>04</b><span>RETURN</span><p>Review the next version against the same reasoning standard.</p></li>
          </ol>
        </section>
        <section className="rv-contact rv-contact-mini"><div className="rv-contact-sheet"><figure><img src="/assets/images/pexels-5940839-w1600.avif" alt="Research group discussing a question"/><figcaption><b>01</b><span>QUESTION CLINIC</span></figcaption></figure><figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading source material"/><figcaption><b>02</b><span>CLOSE READING</span></figcaption></figure><figure><img src="/assets/images/pexels-8197503-w1600.avif" alt="Group research session"/><figcaption><b>03</b><span>GROUP CRITIQUE</span></figcaption></figure></div></section>
        <section className="rv-final rv-final-compact"><p className="rv-eyebrow">ADMISSIONS</p><h2>Bring the draft you are least certain about.</h2><Link className="rv-button rv-button-ink" href="/apply/">Start an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
