import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";
export default function Page() {
  return (
    <>
      <SiteHeader active="resources" />
<main><article className={"reading"}><header><a href={"/resources/"}>← All resources</a><p className={"kicker"}>FIELD GUIDE 01 / 8 MIN READ</p><h1>How to read a research paper<br /><em>without getting lost.</em></h1><p>Read it in layers, with a different question each time.</p></header><div className={"reading-body"}><aside>THE SIX-PASS METHOD<br /><span>01 → 06</span></aside><div><section><b>01</b><h2>Start with the claim</h2><p>Read the title, abstract and conclusion. Write one sentence: ‘The authors argue that…’</p></section><section><b>02</b><h2>Find the question</h2><p>Look near the end of the introduction. What exact problem are the authors resolving?</p></section><section><b>03</b><h2>Trace the evidence</h2><p>Scan figures, tables and results. Ask what each one shows and supports.</p></section><section><b>04</b><h2>Interrogate the method</h2><p>Who or what was studied? How was it measured? Method is where limits begin.</p></section><section><b>05</b><h2>Look for restraint</h2><p>Strong papers say what they cannot conclude. Find the limitations.</p></section><section><b>06</b><h2>Write your own note</h2><p>Record the question, evidence, claim, limitation and one new question.</p></section></div></div></article></main>
      <SiteFooter />
</>
  );
}
