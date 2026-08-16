import { ClosingSection } from "@/components/home/ClosingSection";
import { CritiqueLab } from "@/components/home/CritiqueLab";
import { DossierViewer } from "@/components/home/DossierViewer";
import { ExperienceRail } from "@/components/home/ExperienceRail";
import { FieldReel } from "@/components/home/FieldReel";
import { HeroExperience } from "@/components/home/HeroExperience";
import { HomeExperience } from "@/components/home/HomeExperience";
import { ResearchStory } from "@/components/home/ResearchStory";
import { TermsSection } from "@/components/home/TermsSection";
import { PageReady } from "@/components/site/PageReady";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

const records = [
  {
    index: "01",
    meta: "SRA INTERNATIONAL / JULY 2026",
    title: "Contributor, Catalyst Quarterly",
    href: "https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf",
  },
  {
    index: "02",
    meta: "GOOGLE SCHOLAR / PUBLIC PROFILE",
    title: "Research publications and citations",
    href: "https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ",
  },
  {
    index: "03",
    meta: "RESURCHIN / OPEN FIELD NOTES",
    title: "Programme updates and research guidance",
    href: "https://www.instagram.com/resurchinhub/",
  },
];

export default function HomePage() {
  return (
    <HomeExperience>
      <PageReady />
      <SiteHeader />
      <ExperienceRail />
      <main className="studio-home">
        <HeroExperience />

        <section className="studio-provenance" aria-labelledby="provenance-title">
          <div className="provenance-index">
            <span>02 / WHY THIS EXISTS</span>
            <b>ACCESS ≠ ABILITY</b>
          </div>
          <div className="provenance-statement">
            <p className="kicker">THE PREMISE</p>
            <h2 id="provenance-title">
              Research should not be something you learn only after someone lets you into the room.
            </h2>
          </div>
          <article className="founder-file">
            <div className="founder-mark" aria-hidden="true">HEA</div>
            <div>
              <span>FOUNDER / WORKING RESEARCHER</span>
              <h3>Happiness Eric Aigbogun</h3>
              <p>
                Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory,
                University of Pittsburgh. ResurchIn turns that working-researcher perspective into a free place to practise.
              </p>
              <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Follow the field notes ↗</a>
            </div>
          </article>
          <aside className="provenance-quote">
            <span>INDEPENDENT DESCRIPTION / SRA INTERNATIONAL</span>
            <blockquote>“Creator and lead of ResurchIn, a free mentorship initiative for early-career scientists.”</blockquote>
          </aside>
          <div className="provenance-records" aria-label="Public research records">
            {records.map((record) => (
              <a key={record.index} href={record.href} target="_blank" rel="noreferrer">
                <b>{record.index}</b>
                <span><small>{record.meta}</small><strong>{record.title}</strong></span>
                <em>↗</em>
              </a>
            ))}
          </div>
        </section>

        <section className="studio-field-break" aria-label="Research practice in the field">
          <div className="field-break-copy">
            <span>03 / THE WORK</span>
            <h2>Not lectures about research.<br /><em>Research under review.</em></h2>
            <p>Questions, source maps, methods, analysis logs and drafts stay visible long enough to be challenged.</p>
          </div>
          <div className="field-break-images">
            <figure className="field-image field-image-a">
              <img src="/assets/images/pexels-5940711-w1600.avif" alt="Students comparing research material around a table" />
              <figcaption>QUESTION DESK / FRAME + READ</figcaption>
            </figure>
            <figure className="field-image field-image-b">
              <img src="/assets/images/pexels-9243385-w1600.avif" alt="Researcher working carefully at a microscope" />
              <figcaption>METHOD / OBSERVE + TEST</figcaption>
            </figure>
            <figure className="field-image field-image-c">
              <img src="/assets/images/pexels-5940715-w1600.avif" alt="Mentor and students reviewing work together" />
              <figcaption>REVIEW / REVISE + DEFEND</figcaption>
            </figure>
          </div>
        </section>

        <section className="studio-interstitial" aria-hidden="true">
          <span>ONE QUESTION</span>
          <b>→</b>
          <span>SIX DECISIONS</span>
          <b>→</b>
          <span>VISIBLE JUDGMENT</span>
        </section>

        <ResearchStory />
        <FieldReel />
        <CritiqueLab />
        <TermsSection />
        <ClosingSection />
      </main>
      <DossierViewer />
      <SiteFooter variant="home" />
    </HomeExperience>
  );
}
