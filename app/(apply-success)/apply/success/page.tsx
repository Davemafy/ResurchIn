import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="instrument-inner success-page-new">
        <section className="success-signal">
          <span className="success-code">APPLICATION / RECEIVED / R—01</span>
          <div className="success-mark" aria-hidden="true">✓</div>
          <h1>Your question<br /><em>is in the room.</em></h1>
          <p>Your application has been recorded. Keep the question close—we care more about how you think through it than how polished it sounds today.</p>
          <Link className="signal-button dark" href="/">Return home <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
