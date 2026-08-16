import "../inner.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "Mentorship — ResurchIn",
  description: "Research training built around practice, mentorship and real work.",
};

export default function Page() {
  return (
    <div className="inner-page mentors-page" data-page-root>
      <SiteHeader active={"mentors"} />
    <main>
      <section className={"page-hero split reverse"}>
        <div>
          <p className={"kicker"}>MENTORSHIP / CLOSE READING</p>
          <h1>Good feedback does not say “make it better.” It points to the decision that failed.</h1>
          <p className={"lead"}>
            Bring the sentence, method or claim you are least sure about. A mentor reads the work closely, tests the reasoning and names the next useful correction.
          </p>
        </div>
        <figure className={"photo wine"}>
          <div><ResponsiveImage src={"/assets/images/pexels-5940715-w1800.avif"} priority={true} sizes={"(max-width: 720px) 100vw, 58vw"} alt={"Students and a mentor reviewing work together"} /></div>
          <figcaption>
            Students and a mentor reviewing work together
            <span>Editorial photograph / Pexels</span>
          </figcaption>
        </figure>
      </section>
      <section className={"dialogue"}>
        <p className={"kicker"}>A REVIEW, IN FOUR LINES</p>
        <dl>
          <dt>YOU</dt>
          <dd>I think the data proves the intervention worked.</dd>
          <dt>MENTOR</dt>
          <dd>Proves? Or suggests?</dd>
          <dt>YOU</dt>
          <dd>Suggests. The sample is too small to claim more.</dd>
          <dt>MENTOR</dt>
          <dd>Good. Write the limitation before the conclusion.</dd>
        </dl>
      </section>
      <section className={"visual-evidence light"}>
        <header>
          <span>THE REVIEW ROOM</span>
          <h2>Feedback is an act of close looking.</h2>
          <p>A useful review points to the exact claim, assumption or method choice that needs another pass.</p>
        </header>
        <div className={"evidence-grid"}>
          <figure data-index={"01"}>
            <ResponsiveImage src={"/assets/images/pexels-5940715-w1600.avif"} alt={"Mentor and students reviewing work together"} />
            <figcaption>
              <span>ONE-TO-ONE REVIEW</span>
              <span>DRAFT / V4</span>
            </figcaption>
          </figure>
          <figure data-index={"02"}>
            <ResponsiveImage src={"/assets/images/pexels-5940839-w1600.avif"} alt={"Students discussing a research question"} />
            <figcaption>
              <span>QUESTION CLINIC</span>
              <span>CLAIM / LIMIT</span>
            </figcaption>
          </figure>
          <figure data-index={"03"}>
            <ResponsiveImage src={"/assets/images/pexels-5940711-w1200.avif"} alt={"Students reading research materials"} />
            <figcaption>
              <span>CLOSE READING</span>
              <span>SOURCE / NOTE</span>
            </figcaption>
          </figure>
          <figure data-index={"04"}>
            <ResponsiveImage src={"/assets/images/pexels-8197503-w1200.avif"} alt={"Research group in a learning session"} />
            <figcaption>
              <span>GROUP CRITIQUE</span>
              <span>ROOM / 04</span>
            </figcaption>
          </figure>
        </div>
      </section>
      <section className={"mentor-work"}>
        <div>
          <p className={"kicker"}>WHAT MENTORS DO</p>
          <h2>Mentors focus on the decisions behind the work.</h2>
        </div>
        <ol>
          <li>
            <b>01</b>
            <span>
              <strong>QUESTION</strong>
              Push vague ideas toward answerable questions.
            </span>
          </li>
          <li>
            <b>02</b>
            <span>
              <strong>CHALLENGE</strong>
              Test assumptions and overconfident claims.
            </span>
          </li>
          <li>
            <b>03</b>
            <span>
              <strong>DIRECT</strong>
              Point toward the next useful move.
            </span>
          </li>
          <li>
            <b>04</b>
            <span>
              <strong>REVIEW</strong>
              Follow the work across drafts.
            </span>
          </li>
        </ol>
      </section>
      <section className={"closing"}>
        <p className={"kicker"}>ADMISSIONS / NEXT COHORT</p>
        <h2>Bring the draft you are least certain about.</h2>
        <a className={"button light"} href={"/apply/"}>Submit an application ↗</a>
      </section>
    </main>
      <SiteFooter />
    </div>
  );
}
