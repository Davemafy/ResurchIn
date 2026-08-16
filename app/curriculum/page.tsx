import "../inner.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "Curriculum — ResurchIn",
  description: "Move one research question through six practical decisions.",
};

export default function Page() {
  return (
    <div className="inner-page curriculum-page" data-page-root>
      <SiteHeader active={"curriculum"} />
    <main>
      <section className={"curriculum-hero"} data-curriculum={""}>
        <div className={"curriculum-hero-copy"}>
          <p className={"kicker"}>SIX PHASES / ONE CONTINUOUS PIECE OF WORK</p>
          <h1>
            You will not study research in chapters.
            <em>You will move one question.</em>
          </h1>
          <p>Every phase leaves behind a document, a mentor correction and a decision you should be able to defend.</p>
        </div>
        <div className={"curriculum-console"}>
          <div className={"curriculum-tabs"} aria-label={"Curriculum phases"}>
            <button className={"active"} data-curriculum-step={"0"} aria-pressed={"true"}>01</button>
            <button data-curriculum-step={"1"} aria-pressed={"false"}>02</button>
            <button data-curriculum-step={"2"} aria-pressed={"false"}>03</button>
            <button data-curriculum-step={"3"} aria-pressed={"false"}>04</button>
            <button data-curriculum-step={"4"} aria-pressed={"false"}>05</button>
            <button data-curriculum-step={"5"} aria-pressed={"false"}>06</button>
          </div>
          <div className={"curriculum-sheet"}>
            <div>
              <small data-curriculum-label={""}>01 / FRAME</small>
              <h2 data-curriculum-title={""}>Give the question a boundary.</h2>
              <p data-curriculum-body={""}>Turn a broad interest into something evidence could actually answer.</p>
            </div>
            <dl>
              <div>
                <dt>YOU LEAVE WITH</dt>
                <dd data-curriculum-output={""}>Question memo / V3</dd>
              </div>
              <div>
                <dt>MENTOR ASKS</dt>
                <dd data-curriculum-review={""}>Could evidence answer this?</dd>
              </div>
            </dl>
            <span className={"curriculum-progress"} aria-hidden={"true"}><i></i></span>
          </div>
        </div>
      </section>
      <section className={"curriculum-list"}>
        <article data-phase={"0"}>
          <b>01</b>
          <h2>Frame</h2>
          <p>Make the question specific enough to investigate.</p>
          <small>QUESTION MEMO / REVIEWED</small>
        </article>
        <article data-phase={"1"}>
          <b>02</b>
          <h2>Read</h2>
          <p>Compare the field by claims, methods and disagreement.</p>
          <small>EVIDENCE MATRIX / 18 SOURCES</small>
        </article>
        <article data-phase={"2"}>
          <b>03</b>
          <h2>Design</h2>
          <p>Choose evidence that fits the question and name the trade-off.</p>
          <small>METHOD + DATA PLAN</small>
        </article>
        <article data-phase={"3"}>
          <b>04</b>
          <h2>Analyse</h2>
          <p>Separate the result from what you hope it means.</p>
          <small>ANALYSIS LOG / V4</small>
        </article>
        <article data-phase={"4"}>
          <b>05</b>
          <h2>Write</h2>
          <p>Build an argument in which every claim earns its confidence.</p>
          <small>RESEARCH DRAFT / V6</small>
        </article>
        <article data-phase={"5"}>
          <b>06</b>
          <h2>Present</h2>
          <p>Defend the work, the limit and the next question.</p>
          <small>DEFENCE / PORTFOLIO READY</small>
        </article>
      </section>
      <section className={"photo-ledger"} aria-label={"The curriculum in practice"}>
        <figure>
          <ResponsiveImage src={"/assets/images/pexels-5940711-w1200.avif"} alt={"Students comparing research material around a table"} />
          <figcaption>
            <span>FRAME + READ</span>
            <b>01—02</b>
          </figcaption>
        </figure>
        <figure>
          <ResponsiveImage src={"/assets/images/pexels-9243385-w1200.avif"} alt={"A researcher working carefully with a microscope"} />
          <figcaption>
            <span>DESIGN</span>
            <b>03</b>
          </figcaption>
        </figure>
        <figure>
          <ResponsiveImage src={"/assets/images/pexels-5940839-w1200.avif"} alt={"Researchers comparing findings together"} />
          <figcaption>
            <span>ANALYSE</span>
            <b>04</b>
          </figcaption>
        </figure>
        <figure>
          <ResponsiveImage src={"/assets/images/pexels-5940715-w1200.avif"} alt={"A mentor reviewing a draft with students"} />
          <figcaption>
            <span>WRITE + PRESENT</span>
            <b>05—06</b>
          </figcaption>
        </figure>
      </section>
      <section className={"artifact-spread"} aria-label={"Illustrated research documents"}>
        <figure>
          <ResponsiveImage src={"/assets/images/process-illustration.webp"} alt={"Editorial illustration of hands working across layered research documents"} />
          <figcaption>
            <span>ONE QUESTION / MANY DOCUMENTS</span>
            <b>WORKING PROCESS</b>
          </figcaption>
        </figure>
        <figure>
          <ResponsiveImage src={"/assets/images/revision-illustration.webp"} alt={"Editorial illustration showing drafts changing through revision"} />
          <figcaption>
            <span>THE VERSIONS STAY VISIBLE</span>
            <b>REVISION TRACE</b>
          </figcaption>
        </figure>
      </section>
      <section className={"evidence-wall"}>
        <div>
          <p className={"kicker"}>WHAT PROGRESS LOOKS LIKE</p>
          <h2>The finished work matters. The versions prove how you got there.</h2>
          <p>Keep the questions, plans, drafts and corrections that show your judgment changing.</p>
        </div>
        <div className={"draft-stack"}>
          <span>QUESTION / V1</span>
          <span>LITERATURE MAP / V2</span>
          <span>METHOD / REVIEWED</span>
          <span>ANALYSIS / V3</span>
          <span>FINAL / DEFENDED</span>
        </div>
      </section>
      <section className={"closing"}>
        <p className={"kicker"}>ADMISSIONS / NEXT COHORT</p>
        <h2>
          Bring one question.
          <br />
          Expect it to change.
        </h2>
        <a className={"button light"} href={"/apply/"}>Submit an application ↗</a>
      </section>
    </main>
      <SiteFooter />
    </div>
  );
}
