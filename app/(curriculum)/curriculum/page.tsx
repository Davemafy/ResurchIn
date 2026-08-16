import { CurriculumExperience } from "@/components/curriculum/CurriculumExperience";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
export default function Page() {
  return (
    <>
      <SiteHeader active="curriculum" />
<main>
<CurriculumExperience />
<section className={"photo-ledger"} aria-label={"The curriculum in practice"}>
<figure><img src={"/assets/images/pexels-5940711-w1200.avif"} alt={"Students comparing research material around a table"} loading={"lazy"} /><figcaption><span>FRAME + READ</span><b>01—02</b></figcaption></figure>
<figure><img src={"/assets/images/pexels-9243385-w1200.avif"} alt={"A researcher working carefully with a microscope"} loading={"lazy"} /><figcaption><span>DESIGN</span><b>03</b></figcaption></figure>
<figure><img src={"/assets/images/pexels-5940839-w1200.avif"} alt={"Researchers comparing findings together"} loading={"lazy"} /><figcaption><span>ANALYSE</span><b>04</b></figcaption></figure>
<figure><img src={"/assets/images/pexels-5940715-w1200.avif"} alt={"A mentor reviewing a draft with students"} loading={"lazy"} /><figcaption><span>WRITE + PRESENT</span><b>05—06</b></figcaption></figure>
</section>
<section className={"artifact-spread"} aria-label={"Illustrated research documents"}>
<figure><img src={"/assets/images/process-illustration.webp"} alt={"Editorial illustration of hands working across layered research documents"} loading={"lazy"} /><figcaption><span>ONE QUESTION / MANY DOCUMENTS</span><b>WORKING PROCESS</b></figcaption></figure>
<figure><img src={"/assets/images/revision-illustration.webp"} alt={"Editorial illustration showing drafts changing through revision"} loading={"lazy"} /><figcaption><span>THE VERSIONS STAY VISIBLE</span><b>REVISION TRACE</b></figcaption></figure>
</section>
<section className={"evidence-wall"}><div><p className={"kicker"}>WHAT PROGRESS LOOKS LIKE</p><h2>The finished work matters. The versions prove how you got there.</h2><p>Keep the questions, plans, drafts and corrections that show your judgment changing.</p></div><div className={"draft-stack"}><span>QUESTION / V1</span><span>LITERATURE MAP / V2</span><span>METHOD / REVIEWED</span><span>ANALYSIS / V3</span><span>FINAL / DEFENDED</span></div></section>
<section className={"closing"}><p className={"kicker"}>ADMISSIONS / NEXT COHORT</p><h2>Bring one question.<br />Expect it to change.</h2><a className={"button light"} href={"/apply/"}>Submit an application ↗</a></section>
</main>
      <SiteFooter />
</>
  );
}
