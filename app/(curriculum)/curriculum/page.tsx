import Link from "next/link";
import { CurriculumVersions } from "@/components/revision/CurriculumVersions";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader active="curriculum" />
      <main className="rv-inner rv-curriculum">
        <CurriculumVersions />
        <section className="rv-curriculum-principles">
          <article data-rv-reveal><b>01</b><h2>Every phase changes the same project.</h2><p>No disconnected practice exercises. The question, evidence and draft stay in view.</p></article>
          <article data-rv-reveal><b>02</b><h2>Every phase leaves a record.</h2><p>You keep the artifact and the correction that moved it forward.</p></article>
          <article data-rv-reveal><b>03</b><h2>Every phase ends in review.</h2><p>A mentor asks whether the decision matches the evidence available at that point.</p></article>
        </section>
        <section className="rv-final rv-final-compact"><p className="rv-eyebrow">PROGRAM / 24 WEEKS</p><h2>See where each version lives.</h2><Link className="rv-button rv-button-ink" href="/program/">Open the programme <span>↗</span></Link></section>
      </main>
      <SiteFooter />
    </>
  );
}
