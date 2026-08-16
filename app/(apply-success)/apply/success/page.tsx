import Link from "next/link";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="rv-success"><section><p className="rv-eyebrow">APPLICATION RECEIVED / V01</p><span className="rv-success-mark">01</span><h1>Your first version is in.</h1><p>Thanks for applying. We have your response and will contact you using the email you provided.</p><Link className="rv-button rv-button-ink" href="/resources/">Read a field note <span>↗</span></Link></section></main>
      <SiteFooter />
    </>
  );
}
