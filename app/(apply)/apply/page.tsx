import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="studio-apply">
        <section className="apply-intro">
          <div className="studio-page-meta"><span>ADMISSIONS / APPLICATION FILE</span><span>COHORT 01 / 2026</span></div>
          <div className="apply-intro-copy">
            <p className="studio-eyebrow"><span>01</span> YOUR QUESTION STARTS HERE</p>
            <h1>Apply with the question<br /><em>you cannot leave alone.</em></h1>
            <p>We are not looking for a polished proposal. We are looking for curiosity, time and a willingness to show unfinished work.</p>
          </div>
          <dl className="apply-fact-ledger">
            <div><dt>TIME</dt><dd>6 months</dd></div>
            <div><dt>RHYTHM</dt><dd>2–3 live sessions / week</dd></div>
            <div><dt>COST</dt><dd>Free</dd></div>
            <div><dt>FORMAT</dt><dd>Project + review</dd></div>
          </dl>
          <figure className="apply-intro-photo"><img src="/assets/images/pexels-8197503-w1800.avif" alt="Students in a university learning session" /><figcaption>THE ROOM / OPEN WORLDWIDE</figcaption></figure>
          <aside className="apply-margin-note">NO POLISHED<br /><strong>PROPOSAL REQUIRED.</strong></aside>
        </section>

        <section className="application-file">
          <aside className="application-file-index">
            <span>02 / APPLICATION</span>
            <p>Take your time. The useful answer is usually more specific than the impressive one.</p>
            <div><b>01</b><span>WHO YOU ARE</span></div>
            <div><b>02</b><span>WHAT PULLS AT YOU</span></div>
            <div><b>03</b><span>WHY NOW</span></div>
          </aside>
          <ApplicationForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
