import { ApplicationForm } from "@/components/apply/ApplicationForm";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
export default function Page() {
  return (
    <>
      <SiteHeader />
<main><section className={"apply-page"}><div className={"apply-side"}><p className={"kicker"}>ADMISSIONS / NEXT COHORT</p><h1>Apply for the next ResurchIn cohort.</h1><p>Tell us what you want to study, what experience you have so far and whether you can commit to six months of live sessions, project work and revision.</p><div className={"apply-facts"}><span><b>TIME</b>6 months</span><span><b>RHYTHM</b>2–3 live sessions weekly</span><span><b>COST</b>Free</span></div><figure className={"photo wine"}><div><img src={"/assets/images/pexels-8197503-w1800.avif"} alt={"Students in a university lecture room"} loading={"lazy"} /></div><figcaption>Students in a university lecture room<span>Editorial photograph / Pexels</span></figcaption></figure></div><ApplicationForm /></section></main>
      <SiteFooter />
</>
  );
}
