import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="mentors" />
      <main className="instrument-inner mentors-page-new">
        <section className="mentor-opening">
          <p className="micro">MENTORSHIP / CLOSE READING</p>
          <h1>“Proves?”<br /><em>“Or suggests?”</em></h1>
          <p>Good feedback does not say “make it better.” It points to the exact sentence, method choice or assumption that cannot survive another question.</p>
          <div className="mentor-arrow" aria-hidden="true">↘</div>
        </section>

        <section className="review-room-new">
          <figure><img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing work together" /><figcaption>REVIEW ROOM / DRAFT V04</figcaption></figure>
          <article className="review-transcript">
            <div><b>YOU</b><p>I think the data proves the intervention worked.</p></div>
            <div><b>MENTOR</b><p>Proves? Or suggests?</p></div>
            <div><b>YOU</b><p>Suggests. The sample is too small to claim more.</p></div>
            <div><b>MENTOR</b><p>Good. Put the limitation before the conclusion.</p></div>
          </article>
          <aside><span>REVIEW PRINCIPLE / 01</span><strong>NAME THE DECISION THAT FAILED.</strong></aside>
        </section>

        <section className="mentor-actions">
          <article><b>01</b><h2>Interrogate the question.</h2><p>Push vague interests toward answerable problems.</p></article>
          <article><b>02</b><h2>Stress-test the claim.</h2><p>Separate what the data shows from what the writer hopes it means.</p></article>
          <article><b>03</b><h2>Point to the next move.</h2><p>Feedback ends with something concrete to inspect, change or rerun.</p></article>
          <article><b>04</b><h2>Follow the revision.</h2><p>The earlier version stays visible so progress can be explained.</p></article>
        </section>

        <section className="mentor-photo-pair">
          <figure><img src="/assets/images/pexels-5940839-w1600.avif" alt="Research group in discussion" loading="lazy" /><figcaption>QUESTION CLINIC / OPEN FLOOR</figcaption></figure>
          <figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research papers" loading="lazy" /><figcaption>CLOSE READING / SOURCE AUDIT</figcaption></figure>
        </section>

        <section className="inner-cta acid"><p className="micro">MENTOR REVIEW / NEXT COHORT</p><h2>Bring the draft you are<br />least certain about.</h2><Link className="signal-button dark" href="/apply/">Submit an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
