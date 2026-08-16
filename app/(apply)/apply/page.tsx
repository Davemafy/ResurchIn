import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pf-inner pf-apply">
        <section className="pf-apply-hero">
          <div className="pf-inner-meta"><span>ADMISSIONS / R—01</span><span>NEXT COHORT</span><span>APPLICATION FILE</span></div>
          <div><p className="pf-kicker">DO NOT PITCH YOURSELF</p><h1>Show us<br /><em>the question.</em></h1><p>We are looking for readiness to do the work: curiosity, consistency and the willingness to revise after critique.</p></div>
          <aside><span>APPLICATION BRIEF / 2026</span><dl><div><dt>FORMAT</dt><dd>24 weeks</dd></div><div><dt>SESSIONS</dt><dd>2–3 / week</dd></div><div><dt>TUITION</dt><dd>$0</dd></div><div><dt>ACCESS</dt><dd>Worldwide</dd></div></dl><p>No publication record required. No prestigious affiliation required. No polished project proposal required.</p></aside>
          <div className="pf-apply-mark" aria-hidden="true">?</div>
        </section>

        <section className="pf-application-shell">
          <div className="pf-application-rail" aria-hidden="true"><span>01</span><i/><span>IDENTITY</span><i/><span>QUESTION</span><i/><span>COMMITMENT</span></div>
          <header><p className="pf-kicker">APPLICATION / WORKING COPY</p><h2>Give us enough to understand what is pulling you toward research.</h2></header>
          <div className="pf-form-frame"><ApplicationForm /></div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
