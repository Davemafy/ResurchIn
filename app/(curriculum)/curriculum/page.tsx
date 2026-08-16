import Link from "next/link";
import { CurriculumExperience } from "@/components/curriculum/CurriculumExperience";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader active="curriculum" />
      <main className="studio-curriculum">
        <CurriculumExperience />

        <section className="curriculum-photo-sequence" aria-label="The curriculum in practice">
          <div className="curriculum-photo-copy"><span>02 / THE PRACTICE</span><h2>Every idea has to survive contact with the work.</h2><p>Read. Mark. Compare. Test. Rewrite. The curriculum is a sequence of visible decisions, not a list of topics.</p></div>
          <figure className="curriculum-photo-a"><img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing research material around a table" /><figcaption>FRAME + READ / 01—02</figcaption></figure>
          <figure className="curriculum-photo-b"><img src="/assets/images/pexels-9243385-w1600.avif" alt="A researcher working carefully with a microscope" /><figcaption>DESIGN + TEST / 03</figcaption></figure>
          <figure className="curriculum-photo-c"><img src="/assets/images/pexels-5940839-w1600.avif" alt="Researchers comparing findings together" /><figcaption>ANALYSE + WRITE / 04—05</figcaption></figure>
        </section>

        <section className="curriculum-artifacts">
          <div><span>03 / THE TRACE</span><h2>The finished work matters.<br /><em>The versions prove how you got there.</em></h2></div>
          <figure><img src="/assets/images/process-illustration.webp" alt="Editorial illustration of layered research documents" /><figcaption>ONE QUESTION / MANY DOCUMENTS</figcaption></figure>
          <figure><img src="/assets/images/revision-illustration.webp" alt="Editorial illustration showing drafts changing through revision" /><figcaption>REVISION TRACE / V1 → V6</figcaption></figure>
          <div className="artifact-index">
            <span>QUESTION / V1</span><span>LITERATURE MAP / V2</span><span>METHOD / REVIEWED</span><span>ANALYSIS / V4</span><span>FINAL / DEFENDED</span>
          </div>
        </section>

        <section className="studio-cta-band">
          <span>ADMISSIONS / NEXT COHORT</span>
          <h2>Bring one question.<br />Expect it to change.</h2>
          <Link className="studio-primary studio-primary--dark" href="/apply/">Submit an application <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
