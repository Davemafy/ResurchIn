import Link from "next/link";
import { ProgramTimeline } from "@/components/experience/ProgramTimeline";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="program" />
      <main id="main-content" className="pf-inner pf-program pf2-program">
        <section className="pf2-program-hero">
          <div className="pf2-grid dark" aria-hidden="true" />
          <div className="pf-inner-meta"><span>PROGRAM / 01</span><span>24 WEEKS / ONE PROJECT</span><span>2–3 LIVE SESSIONS / WEEK</span></div>
          <div className="pf2-program-num" aria-hidden="true">24</div>
          <div className="pf2-program-title" data-reveal><p className="pf-kicker">THE SIX-MONTH APPRENTICESHIP</p><h1>One question.<br /><em>Twenty-four weeks<br />under review.</em></h1></div>
          <p className="pf2-program-lead" data-reveal>Not a course you finish by watching it. You move one project through six decisions, keep the earlier versions and learn to explain why the work changed.</p>
          <Link className="pf-cta pf-cta-light" data-cursor="APPLY" href="/apply/">Apply for the next cohort <span>↗</span></Link>
          <figure className="pf2-program-photo" data-parallax="0.05"><img src="/assets/images/pexels-5940715-w1800.avif" srcSet="/assets/images/pexels-5940715-w1200.avif 1200w, /assets/images/pexels-5940715-w1600.avif 1600w, /assets/images/pexels-5940715-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Mentor and students reviewing research work" /><figcaption>REVIEW ROOM / WORK IN PROGRESS / 2026</figcaption></figure>
          <div className="pf2-program-rule">NOTHING MOVES FORWARD JUST BECAUSE THE CALENDAR SAYS SO.</div>
        </section>

        <section className="pf2-program-intro" data-reveal><p className="pf-kicker">THE OPERATING SYSTEM</p><h2>Six phases.<br /><em>One question getting harder to fake.</em></h2><p>Every phase ends with a working artifact. Earlier versions stay visible because revision is part of the evidence.</p></section>

        <ProgramTimeline />

        <section className="pf2-weekly">
          <header data-reveal><p className="pf-kicker">THE WEEKLY RHYTHM</p><h2>Learn.<br />Apply.<br /><em>Get challenged.</em><br />Revise.</h2></header>
          <ol>
            <li data-reveal><b>MON</b><span>CONTEXT</span><p>Learn the idea needed for the week’s decision.</p><i>01</i></li>
            <li data-reveal><b>WED</b><span>PRACTICE</span><p>Apply it to your question, data or draft.</p><i>02</i></li>
            <li data-reveal><b>FRI</b><span>CRITIQUE</span><p>Show the work and receive a specific correction.</p><i>03</i></li>
            <li data-reveal><b>+1</b><span>REVISION</span><p>Keep the earlier version. Annotate what changed.</p><i>04</i></li>
          </ol>
        </section>

        <section className="pf2-program-field">
          <div className="pf2-program-field-word" aria-hidden="true">PRACTICE</div>
          <figure className="one" data-parallax="0.09"><img src="/assets/images/pexels-5940711-w1600.avif" srcSet="/assets/images/pexels-5940711-w1200.avif 1200w, /assets/images/pexels-5940711-w1600.avif 1600w, /assets/images/pexels-5940711-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students reading research material" loading="lazy" /><figcaption>READ / COMPARE / MARK</figcaption></figure>
          <figure className="two" data-parallax="-0.06"><img src="/assets/images/pexels-9243385-w1600.avif" srcSet="/assets/images/pexels-9243385-w1200.avif 1200w, /assets/images/pexels-9243385-w1600.avif 1600w, /assets/images/pexels-9243385-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Researcher at a microscope" loading="lazy" /><figcaption>OBSERVE / RECORD / QUESTION</figcaption></figure>
          <figure className="three" data-parallax="0.05"><img src="/assets/images/pexels-5940830-w1600.avif" srcSet="/assets/images/pexels-5940830-w1200.avif 1200w, /assets/images/pexels-5940830-w1600.avif 1600w, /assets/images/pexels-5940830-w1800.avif 1800w" sizes="(max-width: 820px) 100vw, 55vw" alt="Students presenting findings" loading="lazy" /><figcaption>EXPLAIN / DEFEND / LIMIT</figcaption></figure>
          <blockquote data-reveal>“The calendar creates time. <em>Revision creates the researcher.</em>”</blockquote>
        </section>

        <section className="pf2-eligibility">
          <header data-reveal><p className="pf-kicker">WHO SHOULD APPLY</p><h2>You need curiosity, time and a willingness to show unfinished work.</h2></header>
          <div className="pf2-eligibility-grid"><span>UNDERGRADUATES</span><span>RECENT GRADUATES</span><span>EARLY GRAD STUDENTS</span><span>CAREER SWITCHERS</span></div>
          <div className="pf2-eligibility-note"><div><b>YOU DO NOT NEED</b><p>A publication record, a prestigious affiliation or a polished proposal.</p></div><div><b>YOU DO NEED</b><p>Consistent attendance, weekly project time and the willingness to revise after critique.</p></div></div>
        </section>

        <section className="pf2-closing"><div className="pf2-grid dark" aria-hidden="true" /><p className="pf-kicker">ADMISSIONS / NEXT COHORT</p><h2 data-reveal>BRING THE<br /><em>QUESTION.</em><br />STAY FOR<br />THE <em>WORK.</em></h2><Link className="pf-cta pf-cta-light" href="/apply/">Submit an application <span>↗</span></Link><div className="pf2-closing-orbit" aria-hidden="true">24</div></section>
      </main>
      <SiteFooter />
    </>
  );
}
