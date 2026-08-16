import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="studio-success">
        <section>
          <div className="studio-page-meta"><span>APPLICATION / RECEIVED</span><span>STATUS / FILED</span></div>
          <div className="success-stamp" aria-hidden="true">RECEIVED<br />R—01</div>
          <p className="studio-eyebrow"><span>✓</span> YOUR FILE IS IN</p>
          <h1>Your first step<br /><em>is already evidence.</em></h1>
          <p>Thanks for applying. Your response has been received. ResurchIn will contact you using the email you provided.</p>
          <Link className="studio-primary studio-primary--dark" href="/resources/">Read a field guide <span>↗</span></Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
