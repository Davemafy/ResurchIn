import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="instrument-inner apply-page-new">
        <section className="apply-opening">
          <div className="apply-copy">
            <p className="micro">ADMISSIONS / NEXT COHORT</p>
            <h1>Do not pitch<br />yourself.<br /><em>Show us the question.</em></h1>
            <p>We are looking for readiness to do the work: curiosity, consistency and the willingness to revise after critique.</p>
          </div>
          <aside className="apply-brief">
            <span>APPLICATION FILE / R—01</span>
            <dl><div><dt>FORMAT</dt><dd>Six months</dd></div><div><dt>SESSIONS</dt><dd>2–3 / week</dd></div><div><dt>TUITION</dt><dd>$0</dd></div><div><dt>ACCESS</dt><dd>Worldwide</dd></div></dl>
            <p>No publication record required. No prestigious affiliation required. No polished project proposal required.</p>
          </aside>
        </section>
        <section className="application-shell-new">
          <div className="form-rail"><span>01</span><i /><span>IDENTITY</span><i /><span>QUESTION</span><i /><span>COMMITMENT</span></div>
          <div className="form-heading"><p className="micro">APPLICATION / WORKING COPY</p><h2>Give us enough to understand what is pulling you toward research.</h2></div>
          <ApplicationForm />
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
