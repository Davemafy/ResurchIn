import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="studio-community">
        <section className="community-hero">
          <div className="studio-page-meta"><span>COMMUNITY / OPEN ROOM</span><span>WORK IN PROGRESS / WELCOME</span></div>
          <div className="community-hero-copy">
            <p className="studio-eyebrow"><span>01</span> LEARN TOGETHER</p>
            <h1>Unfinished work is<br /><em>the price of entry.</em></h1>
            <p>Bring the question that is still vague, the analysis that will not settle or the paragraph you keep rewriting.</p>
          </div>
          <figure className="community-hero-photo"><img src="/assets/images/pexels-5940839-w1800.avif" alt="Students collaborating around a laptop" /><figcaption>PEER TABLE / WORK IN PROGRESS</figcaption></figure>
          <div className="community-hero-note">BRING THE<br /><strong>UNRESOLVED BIT.</strong></div>
        </section>

        <section className="community-room">
          <header><span>02 / INSIDE THE ROOM</span><h2>The useful moment usually happens before the final slide.</h2></header>
          <div>
            <article><b>01</b><span>WORK-IN-PROGRESS</span><h3>Bring the unresolved bit, not just the polished ending.</h3></article>
            <article><b>02</b><span>PEER REVIEW</span><h3>Learn to give critique that is specific, useful and kind.</h3></article>
            <article><b>03</b><span>RESEARCH CONVERSATION</span><h3>See how people in different fields solve problems.</h3></article>
          </div>
        </section>

        <section className="community-photo-wall">
          <figure className="community-photo-a"><img src="/assets/images/pexels-5940839-w1600.avif" alt="Students collaborating around a laptop" /><figcaption>PEER TABLE / 01</figcaption></figure>
          <figure className="community-photo-b"><img src="/assets/images/pexels-8197503-w1600.avif" alt="Students in a collaborative learning session" /><figcaption>GROUP SESSION / 02</figcaption></figure>
          <div className="community-photo-quote"><span>THE ROOM</span><blockquote>Questions and drafts do not need to be polished before they are shared.</blockquote></div>
          <figure className="community-photo-c"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing notes together" /><figcaption>PEER READING / 03</figcaption></figure>
        </section>

        <section className="studio-cta-band studio-cta-band--dark">
          <span>ADMISSIONS / NEXT COHORT</span>
          <h2>Bring the unresolved bit.</h2>
          <Link className="studio-primary" href="/apply/">Enter the room <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
