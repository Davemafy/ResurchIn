import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { Reveal } from "@/components/revision/Reveal";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <Reveal />
      <SiteHeader />
      <main className="rv-inner rv-apply">
        <section className="rv-apply-intro">
          <div data-rv-reveal>
            <p className="rv-eyebrow">ADMISSIONS / NEXT COHORT</p>
            <h1>Bring V01.</h1>
            <p className="rv-lead">You do not need a polished proposal. Tell us what keeps pulling at you, where you are in your research journey and whether you can stay with one project long enough to revise it.</p>
          </div>
          <aside data-rv-reveal>
            <span>PROGRAM SPEC</span>
            <dl><div><dt>TIME</dt><dd>6 months</dd></div><div><dt>RHYTHM</dt><dd>2–3 live sessions weekly</dd></div><div><dt>COST</dt><dd>Free</dd></div><div><dt>MODE</dt><dd>Guided practice</dd></div></dl>
          </aside>
        </section>
        <section className="rv-apply-grid">
          <div className="rv-apply-note" data-rv-reveal>
            <span>WHAT WE ARE LOOKING FOR</span>
            <p>Curiosity you can name.</p><p>Time you can protect.</p><p>Willingness to show unfinished work.</p><p>Enough humility to change your mind.</p>
            <figure><img src="/assets/images/pexels-8197503-w1600.avif" alt="Students in a research learning session" loading="lazy"/><figcaption>COHORT / WORKING SESSION</figcaption></figure>
          </div>
          <ApplicationForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
