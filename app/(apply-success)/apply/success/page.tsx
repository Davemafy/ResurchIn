import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="pf-inner pf-success">
        <section className="pf-success-panel">
          <span>APPLICATION / RECEIVED / R—01</span>
          <div aria-hidden="true">✓</div>
          <h1>Your question<br /><em>is in the room.</em></h1>
          <p>Your application has been recorded. Keep the question close—we care more about how you think through it than how polished it sounds today.</p>
          <Link className="pf-cta pf-cta-dark" href="/">Return home <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
