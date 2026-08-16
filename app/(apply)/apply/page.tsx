import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pf-inner pf2-apply">
        <section className="pf2-apply-hero">
          <div className="pf2-grid dark" aria-hidden="true" />
          <div className="pf-inner-meta"><span>ADMISSIONS / 07</span><span>NEXT COHORT</span><span>APPLICATION FILE / R—01</span></div>
          <div className="pf2-apply-title" data-reveal><p className="pf-kicker">DO NOT PITCH YOURSELF</p><h1>SHOW US<br />THE<br /><em>QUESTION.</em></h1></div>
          <p>We are looking for readiness to do the work: curiosity, consistency and the willingness to revise after critique. A polished research identity is not the entry requirement.</p>
          <aside><span>APPLICATION BRIEF / 2026</span><dl><div><dt>FORMAT</dt><dd>24 weeks</dd></div><div><dt>SESSIONS</dt><dd>2–3 / week</dd></div><div><dt>TUITION</dt><dd>$0</dd></div><div><dt>ACCESS</dt><dd>Worldwide</dd></div></dl><p>No publication record required. No prestigious affiliation required. No polished project proposal required.</p></aside>
          <div className="pf2-apply-mark" aria-hidden="true">?</div>
        </section>

        <section className="pf2-application-shell">
          <aside className="pf2-application-context">
            <span>BEFORE YOU TYPE</span>
            <blockquote>We would rather read one question you genuinely cannot leave alone than five paragraphs trying to sound impressive.</blockquote>
            <div><b>01</b><p>Be specific where you can.</p></div><div><b>02</b><p>It is okay to name what you do not know yet.</p></div><div><b>03</b><p>Show us why this question has stayed with you.</p></div>
          </aside>
          <div className="pf2-application-main">
            <header><p className="pf-kicker">APPLICATION / WORKING COPY</p><h2>Give us enough to see<br /><em>how you think.</em></h2></header>
            <div className="pf2-form-frame"><ApplicationForm /></div>
          </div>
        </section>

        <section className="pf2-apply-after">
          <p className="pf-kicker">WHAT HAPPENS AFTER SUBMIT</p>
          <ol><li><b>01</b><span>READ</span><p>Your application is reviewed for readiness and fit, not prestige.</p></li><li><b>02</b><span>DISCUSS</span><p>Shortlisted applicants may be invited to a conversation about the work.</p></li><li><b>03</b><span>BEGIN</span><p>The first task is not a performance. It is a question memo.</p></li></ol>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
