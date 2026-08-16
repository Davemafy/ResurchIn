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

export default function HomePage() {
  return (
    <HomeExperience>
      <PageReady />
      <SiteHeader />
      <ExperienceRail />
      <main>
        <HeroExperience />

        <section className="origin-ledger" aria-labelledby="origin-ledger-title">
          <header>
            <p className="kicker">WHY RESURCHIN EXISTS</p>
            <h2 id="origin-ledger-title">Research is learned by doing it—not by waiting until you feel qualified.</h2>
          </header>
          <article className="founder-proof">
            <div className="founder-monogram" aria-hidden="true"><span>HEA</span></div>
            <div>
              <span>FOUNDER / WORKING RESEARCHER</span>
              <h3>Happiness Eric Aigbogun</h3>
              <p>Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. She created ResurchIn to give students and early-career researchers the practical guidance she wished was easier to find.</p>
              <a className="text-link" href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Follow ResurchIn’s work ↗</a>
            </div>
          </article>
          <div className="origin-facts">
            <article><b>01</b><span>THE FORMAT</span><p>Six months of structured research training.</p></article>
            <article><b>02</b><span>THE WORK</span><p>Hands-on projects using real data.</p></article>
            <article><b>03</b><span>THE ACCESS</span><p>Always free. Volunteer-driven. Open worldwide.</p></article>
          </div>
        </section>

        <section className="public-record" aria-labelledby="public-record-title">
          <header>
            <span>PUBLIC RECORD / VERIFIED</span>
            <h2 id="public-record-title">The work exists beyond this website.</h2>
            <p>ResurchIn is led from active research practice. These records are external, inspectable and linked to their original sources.</p>
          </header>
          <div className="record-ledger">
            <a href="https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf" target="_blank" rel="noreferrer">
              <b>01</b><span><small>SRA INTERNATIONAL / JULY 2026</small><strong>Contributor, Catalyst Quarterly</strong><em>External publication ↗</em></span>
            </a>
            <a href="https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ" target="_blank" rel="noreferrer">
              <b>02</b><span><small>GOOGLE SCHOLAR / PUBLIC PROFILE</small><strong>Research publications and citations</strong><em>View record ↗</em></span>
            </a>
            <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">
              <b>03</b><span><small>RESURCHIN / OPEN FIELD NOTES</small><strong>Programme updates and research guidance</strong><em>Visit the channel ↗</em></span>
            </a>
          </div>
          <aside>
            <span>INDEPENDENT DESCRIPTION</span>
            <blockquote>“Creator and lead of ResurchIn, a free mentorship initiative for early-career scientists.”</blockquote>
            <cite>SRA INTERNATIONAL / CATALYST QUARTERLY / JULY 2026</cite>
          </aside>
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
