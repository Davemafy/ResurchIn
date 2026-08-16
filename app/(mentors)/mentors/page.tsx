import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="mentors" />
      <main id="main-content" className="pf-inner pf-mentors">
        <section className="pf-mentor-hero">
          <div className="pf-inner-meta"><span>MENTORS / 03</span><span>CLOSE READING</span><span>DOCUMENT-SPECIFIC REVIEW</span></div>
          <div className="pf-mentor-question"><span>MENTOR NOTE / 04</span><h1>“Proves?”<br /><em>“Or suggests?”</em></h1></div>
          <p>Good feedback does not say “make it better.” It points to the exact sentence, method choice or assumption that cannot survive another question.</p>
          <figure><img src="/assets/images/pexels-5940715-w1800.avif" alt="Mentor and students reviewing research work together" /><figcaption>REVIEW ROOM / DRAFT V04 / CLOSE READING</figcaption></figure>
          <div className="pf-mentor-mark" aria-hidden="true">?</div>
        </section>

        <section className="pf-review-room">
          <div className="pf-review-title"><p className="pf-kicker">A REVIEW, NOT A VERDICT</p><h2>Useful critique leaves<br /><em>a next move.</em></h2></div>
          <article className="pf-transcript">
            <div><b>YOU / 14:08</b><p>I think the data proves the intervention worked.</p></div>
            <div className="mentor"><b>MENTOR / 14:09</b><p>Proves? Or suggests?</p></div>
            <div><b>YOU / 14:12</b><p>Suggests. The sample is too small to claim more.</p></div>
            <div className="mentor"><b>MENTOR / 14:13</b><p>Good. Put the limitation before the conclusion.</p></div>
          </article>
          <aside><span>REVIEW PRINCIPLE / 01</span><strong>NAME THE DECISION THAT FAILED.</strong><p>Then point to the exact thing to inspect, change or rerun next.</p></aside>
        </section>

        <section className="pf-mentor-method">
          <header><p className="pf-kicker">WHAT MENTORS ACTUALLY DO</p><h2>Not inspiration.<br /><em>Intervention.</em></h2></header>
          <ol>
            <li><b>01</b><span>INTERROGATE</span><h3>Push vague interests toward answerable problems.</h3></li>
            <li><b>02</b><span>STRESS-TEST</span><h3>Separate what the data shows from what the writer hopes it means.</h3></li>
            <li><b>03</b><span>DIRECT</span><h3>End feedback with something concrete to inspect, change or rerun.</h3></li>
            <li><b>04</b><span>FOLLOW</span><h3>Keep the earlier version visible so progress can be explained.</h3></li>
          </ol>
        </section>

        <section className="pf-mentor-pair">
          <figure><img src="/assets/images/pexels-5940839-w1600.avif" alt="Research group in discussion" loading="lazy" /><figcaption>QUESTION CLINIC / OPEN FLOOR</figcaption></figure>
          <blockquote>“The correction should be specific enough that you know what to do when the call ends.”</blockquote>
          <figure><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students reading research papers" loading="lazy" /><figcaption>CLOSE READING / SOURCE AUDIT</figcaption></figure>
        </section>

        <section className="pf-inner-closing pf-acid"><p className="pf-kicker">MENTOR REVIEW / NEXT COHORT</p><h2>Bring the draft you are<br />least certain about.</h2><Link className="pf-cta pf-cta-dark" href="/apply/">Submit an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
