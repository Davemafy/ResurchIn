import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pf-inner pf2-success">
        <section className="pf2-success-panel">
          <div className="pf2-grid" aria-hidden="true" />
          <span>APPLICATION / RECEIVED / R—01</span>
          <div className="pf2-success-mark" aria-hidden="true">✓</div>
          <h1 data-reveal>YOUR QUESTION<br /><em>IS IN THE ROOM.</em></h1>
          <p>Your application has been recorded. Keep the question close—we care more about how you think through it than how polished it sounds today.</p>
          <div className="pf2-success-next"><span>NEXT</span><p>If there is a next step for your application, it will be communicated through the contact details you submitted.</p></div>
          <Link className="pf-cta pf-cta-dark" href="/">Return home <span>↗</span></Link>
          <small>QUESTION → EVIDENCE → LIMIT</small>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
