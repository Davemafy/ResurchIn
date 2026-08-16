import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
export default function Page() {
  return (
    <>
      <SiteHeader />
<main><section className={"success"}><p className={"kicker"}>APPLICATION RECEIVED</p><span>✓</span><h1>Your first step<br />is already evidence.</h1><p>Thanks for applying. We have your response and will contact you using the email you provided.</p><a className={"button"} href={"/resources/"}>Read a field guide ↗</a></section></main>
      <SiteFooter />
</>
  );
}
