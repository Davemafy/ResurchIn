import "../inner.css";
import type { Metadata } from "next";
import { PageClass } from "@/components/PageClass";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "Apply — ResurchIn",
  description: "Research training built around practice, mentorship and real work.",
};

export default function Page() {
  return (
    <>
      <PageClass className={""} />
      <SiteHeader />
    <main>
      <section className={"apply-page"}>
        <div className={"apply-side"}>
          <p className={"kicker"}>ADMISSIONS / NEXT COHORT</p>
          <h1>Apply for the next ResurchIn cohort.</h1>
          <p>
            Tell us what you want to study, what experience you have so far and whether you can commit to six months of live sessions, project work and revision.
          </p>
          <div className={"apply-facts"}>
            <span>
              <b>TIME</b>
              6 months
            </span>
            <span>
              <b>RHYTHM</b>
              2–3 live sessions weekly
            </span>
            <span>
              <b>COST</b>
              Free
            </span>
          </div>
          <figure className={"photo wine"}>
            <div><ResponsiveImage src={"/assets/images/pexels-8197503-w1800.avif"} priority={true} sizes={"(max-width: 720px) 100vw, 58vw"} alt={"Students in a university lecture room"} /></div>
            <figcaption>
              Students in a university lecture room
              <span>Editorial photograph / Pexels</span>
            </figcaption>
          </figure>
        </div>
        <form className={"application"} data-apply-form={""}>
          <p className={"form-note"}>All fields marked * are required.</p>
          <label>
            Full name *
            <input name={"name"} autoComplete={"name"} required />
          </label>
          <label>
            Email address *
            <input name={"email"} type={"email"} autoComplete={"email"} required />
          </label>
          <label>
            Current stage *
            <select name={"stage"} required>
              <option value={""}>Choose one</option>
              <option>Undergraduate student</option>
              <option>Recent graduate</option>
              <option>Graduate student</option>
              <option>Career switcher</option>
              <option>Other</option>
            </select>
          </label>
          <label>
            Area of interest *
            <input name={"interest"} required placeholder={"e.g. public health, education, climate"} />
          </label>
          <label>
            What question keeps pulling at you? *
            <textarea name={"question"} rows={5} required></textarea>
          </label>
          <label>
            Why do you want to join now? *
            <textarea name={"why"} rows={5} required></textarea>
          </label>
          <label className={"check"}>
            <input type={"checkbox"} required />
            <span>I can commit to live sessions and weekly project work.</span>
          </label>
          <button className={"button submit"} type={"submit"}>Submit for review ↗</button>
          <p className={"form-status"} role={"status"}></p>
        </form>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}
