import Link from "next/link";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main className="rv-inner rv-community">
        <section className="rv-community-hero">
          <div data-rv-reveal><p className="rv-eyebrow">COMMUNITY / WORK IN PROGRESS</p><h1>Unfinished work is the price of entry.</h1><p className="rv-lead">Bring the question that is still vague, the analysis that will not settle or the paragraph you keep rewriting. The room exists for the next version.</p></div>
          <figure data-rv-reveal><img src="/assets/images/pexels-5940839-w1800.avif" alt="Students collaborating around research work"/><figcaption>PEER TABLE / VERSION IN PROGRESS</figcaption></figure>
        </section>
        <section className="rv-community-loop">
          <p className="rv-eyebrow">THE ROOM / REPEAT</p>
          <div><article data-rv-reveal><b>01</b><h2>ASK</h2><p>Name the unresolved bit.</p></article><article data-rv-reveal><b>02</b><h2>SHOW</h2><p>Put the actual work on the table.</p></article><article data-rv-reveal><b>03</b><h2>ARGUE</h2><p>Explain why the decision made sense.</p></article><article data-rv-reveal><b>04</b><h2>REVISE</h2><p>Keep the previous version and make the change visible.</p></article></div>
        </section>
        <section className="rv-community-code">
          <header data-rv-reveal><p className="rv-eyebrow">PEER REVIEW / HOUSE RULES</p><h2>Useful critique is specific, inspectable and kind.</h2></header>
          <ol data-rv-reveal><li><b>01</b><span>Point to the work, not the person.</span></li><li><b>02</b><span>Ask before prescribing.</span></li><li><b>03</b><span>Name the evidence behind the comment.</span></li><li><b>04</b><span>Leave the writer with a next move.</span></li></ol>
        </section>
        <section className="rv-final rv-final-compact"><p className="rv-eyebrow">NEXT COHORT</p><h2>Bring the unresolved bit.</h2><Link className="rv-button rv-button-ink" href="/apply/">Start an application <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
