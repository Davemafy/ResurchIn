import "../inner.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "Community — ResurchIn",
  description: "Research training built around practice, mentorship and real work.",
};

export default function Page() {
  return (
    <div className="inner-page community-page" data-page-root>
      <SiteHeader />
    <main>
      <section className={"page-hero split reverse"}>
        <div>
          <p className={"kicker"}>COMMUNITY / LEARN TOGETHER</p>
          <h1>Unfinished work is the price of entry.</h1>
          <p className={"lead"}>
            Bring the question that is still vague, the analysis that will not settle or the paragraph you keep rewriting. The room helps you find the next move.
          </p>
        </div>
        <figure className={"photo mint"}>
          <div><ResponsiveImage src={"/assets/images/pexels-5940839-w1800.avif"} priority={true} sizes={"(max-width: 720px) 100vw, 58vw"} alt={"Students collaborating around a laptop"} /></div>
          <figcaption>
            Students collaborating around a laptop
            <span>Editorial photograph / Pexels</span>
          </figcaption>
        </figure>
      </section>
      <section className={"community-scenes"}>
        <p className={"kicker"}>INSIDE THE ROOM</p>
        <div>
          <article>
            <span>01</span>
            <h2>Work-in-progress sessions</h2>
            <p>Bring the unresolved bit, not just the polished ending.</p>
          </article>
          <article>
            <span>02</span>
            <h2>Peer review circles</h2>
            <p>Learn to give critique that is specific, useful and kind.</p>
          </article>
          <article>
            <span>03</span>
            <h2>Research conversations</h2>
            <p>See how people in different fields solve problems.</p>
          </article>
        </div>
      </section>
      <section className={"visual-evidence light"}>
        <header>
          <span>INSIDE THE ROOM / UNPOLISHED</span>
          <h2>The useful moment usually happens before the final slide.</h2>
          <p>A question gets sharper across a table. A limitation appears in the margin. Someone else sees what you missed.</p>
        </header>
        <div className={"evidence-grid"}>
          <figure data-index={"01"}>
            <ResponsiveImage src={"/assets/images/pexels-5940839-w1600.avif"} alt={"Students collaborating around a laptop"} />
            <figcaption>
              <span>PEER TABLE</span>
              <span>WORK IN PROGRESS</span>
            </figcaption>
          </figure>
          <figure data-index={"02"}>
            <ResponsiveImage src={"/assets/images/pexels-8197503-w1600.avif"} alt={"Students in a collaborative learning session"} />
            <figcaption>
              <span>GROUP SESSION</span>
              <span>QUESTION / ROOM</span>
            </figcaption>
          </figure>
          <figure data-index={"03"}>
            <ResponsiveImage src={"/assets/images/pexels-5940711-w1200.avif"} alt={"Students comparing notes together"} />
            <figcaption>
              <span>PEER READING</span>
              <span>SOURCE / NOTE</span>
            </figcaption>
          </figure>
          <figure data-index={"04"}>
            <ResponsiveImage src={"/assets/images/pexels-5940830-w1200.avif"} alt={"A group sharing research findings"} />
            <figcaption>
              <span>OPEN FLOOR</span>
              <span>PRESENT / ASK</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className={"community-quote"}><p>Questions and drafts do not need to be polished before they are shared.</p></section>
      <section className={"closing"}>
        <p className={"kicker"}>ADMISSIONS / NEXT COHORT</p>
        <h2>Bring the unresolved bit.</h2>
        <a className={"button light"} href={"/apply/"}>Submit an application ↗</a>
      </section>
    </main>
      <SiteFooter />
    </div>
  );
}
