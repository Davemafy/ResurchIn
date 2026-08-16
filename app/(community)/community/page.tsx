import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="instrument-inner community-page-new">
        <section className="community-opening">
          <div><p className="micro">COMMUNITY / THE OPEN ROOM</p><h1>Bring the<br /><em>unresolved bit.</em></h1></div>
          <figure><img src="/assets/images/pexels-5940839-w1800.avif" alt="Students collaborating around a laptop" /><figcaption>PEER TABLE / WORK IN PROGRESS</figcaption></figure>
          <p>The question that is still vague. The chart that will not settle. The paragraph you keep rewriting. The room exists for work before it becomes impressive.</p>
        </section>

        <section className="community-ticker" aria-hidden="true"><span>ASK / SHOW / ARGUE / REVISE / ASK AGAIN / </span></section>

        <section className="room-scenes-new">
          <article><b>01</b><h2>Work-in-progress sessions</h2><p>Bring the unresolved part, not just the polished ending.</p></article>
          <article><b>02</b><h2>Peer review circles</h2><p>Learn to give critique that is specific, useful and kind.</p></article>
          <article><b>03</b><h2>Research conversations</h2><p>See how people in different fields reason through uncertainty.</p></article>
        </section>

        <section className="community-collage-new">
          <figure className="cc-a"><img src="/assets/images/pexels-8197503-w1600.avif" alt="Collaborative learning session" loading="lazy" /><figcaption>QUESTION ROOM / 02</figcaption></figure>
          <figure className="cc-b"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing notes" loading="lazy" /><figcaption>PEER READING / 04</figcaption></figure>
          <blockquote>Questions do not need to be polished before they are shared.</blockquote>
        </section>

        <section className="inner-cta black"><p className="micro">THE OPEN ROOM / NEXT COHORT</p><h2>Show the work<br />before it is ready.</h2><Link className="signal-button" href="/apply/">Join the next cohort <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
