import Link from "next/link";
import { MentorReview } from "@/components/experience/MentorReview";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="mentors" />
      <main id="main-content" className="pf-inner pf2-mentors">
        <section className="pf2-mentor-hero">
          <div className="pf2-grid dark" aria-hidden="true" />
          <div className="pf-inner-meta"><span>MENTORS / 03</span><span>THE REVIEW ROOM</span><span>DOCUMENT-SPECIFIC CRITIQUE</span></div>
          <div className="pf2-mentor-title" data-reveal>
            <p className="pf-kicker">THE SENTENCE IS NOT SAFE YET</p>
            <h1>PROVES?<br /><em>OR SUGGESTS?</em></h1>
          </div>
          <p className="pf2-mentor-lede">The mentor is not the answer key. Their job is to find the exact place where your reasoning becomes less careful than your evidence.</p>
          <figure className="pf2-mentor-hero-photo" data-parallax="0.035">
            <img src="/assets/images/pexels-5940715-w1800.avif" srcSet="/assets/images/pexels-5940715-w1200.avif 1200w, /assets/images/pexels-5940715-w1600.avif 1600w, /assets/images/pexels-5940715-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Researchers reviewing work together" />
            <figcaption>REVIEW ROOM / DRAFT V04 / CLOSE READING</figcaption>
          </figure>
          <blockquote className="pf2-mentor-hero-note">“Put the limitation <em>before</em> the conclusion.”<span>MENTOR NOTE / 04</span></blockquote>
          <div className="pf2-mentor-questionmark" aria-hidden="true">?</div>
        </section>

        <MentorReview />

        <section className="pf2-mentor-method" data-reveal>
          <header><p className="pf-kicker">THE REVIEW LOOP</p><h2>Feedback should change<br /><em>what happens next.</em></h2></header>
          <ol>
            <li><b>01</b><span>LOCATE</span><h3>Name the exact sentence, table or design choice under review.</h3><p>No floating advice. The comment has an address.</p></li>
            <li><b>02</b><span>QUESTION</span><h3>Ask what the evidence actually earns.</h3><p>Confidence gets interrogated before wording gets polished.</p></li>
            <li><b>03</b><span>REVISE</span><h3>Keep the earlier version visible.</h3><p>The change should be explainable, not merely prettier.</p></li>
            <li><b>04</b><span>RETURN</span><h3>Check whether the revision solved the decision.</h3><p>One critique can open the next research question.</p></li>
          </ol>
        </section>

        <section className="pf2-mentor-field">
          <div className="pf2-mentor-field-word" aria-hidden="true">REVIEW</div>
          <figure className="one" data-parallax="0.045"><img src="/assets/images/pexels-5940839-w1800.avif" srcSet="/assets/images/pexels-5940839-w1200.avif 1200w, /assets/images/pexels-5940839-w1600.avif 1600w, /assets/images/pexels-5940839-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Research group discussing a draft" loading="lazy" /><figcaption>QUESTION CLINIC / OPEN FLOOR</figcaption></figure>
          <figure className="two" data-parallax="-0.025"><img src="/assets/images/pexels-5940711-w1600.avif" srcSet="/assets/images/pexels-5940711-w1200.avif 1200w, /assets/images/pexels-5940711-w1600.avif 1600w, /assets/images/pexels-5940711-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students reading research papers" loading="lazy" /><figcaption>SOURCE AUDIT / TABLE 02</figcaption></figure>
          <blockquote data-reveal>Good critique is specific enough that you know what to do when the call ends.</blockquote>
        </section>

        <section className="pf2-closing pf2-closing-acid">
          <p className="pf-kicker">MENTOR REVIEW / NEXT COHORT</p>
          <h2 data-reveal>BRING THE DRAFT<br />YOU TRUST <em>LEAST.</em></h2>
          <Link className="pf-cta pf-cta-dark" data-cursor="APPLY" href="/apply/">Submit an application <span>↗</span></Link>
          <small>THE POINT IS NOT TO BE RIGHT EARLY. THE POINT IS TO BECOME MORE DEFENSIBLE.</small>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
