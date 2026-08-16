import "./home.css";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ResponsiveImage } from "@/components/ResponsiveImage";

export const metadata: Metadata = {
  title: "ResurchIn — Find the question. Earn the claim.",
  description: "A free six-month research apprenticeship for early-career researchers.",
};

export default function Page() {
  return (
    <div className="home-v16 home-v17" data-page-root>
      <SiteHeader />
    <aside className={"experience-rail"} aria-label={"Homepage sections"}>
      <span data-experience-count={""}>01</span>
      <i></i>
      <button data-experience-jump={"0"}>Opening</button>
      <button data-experience-jump={"1"}>Process</button>
      <button data-experience-jump={"2"}>Revisions</button>
      <button data-experience-jump={"3"}>Review</button>
      <button data-experience-jump={"4"}>Apply</button>
    </aside>
    <main>
      <section className={"v14-hero"}>
        <div className={"v14-meta"}>
          <span>RESURCHIN / RESEARCH APPRENTICESHIP</span>
          <span>US-BASED / OPEN WORLDWIDE</span>
          <span>2026 PROGRAM DOSSIER</span>
        </div>
        <div className={"v14-headline"}>
          <p className={"kicker"}>SIX MONTHS / GUIDED SUPPORT / HANDS-ON PROJECTS</p>
          <h1>
            Research is a skill.
            <em>Practice it here.</em>
          </h1>
        </div>
        <div className={"v14-hero-bottom"}>
          <p>Structured training, real data and guidance from experienced researchers. Free, volunteer-driven and open worldwide.</p>
          <a className={"button"} href={"/program/"}>See how it works ↗</a>
          <button className={"sample-trigger"} type={"button"} data-dossier-open={""}>
            Open a sample dossier
            <span>↗</span>
          </button>
        </div>
        <ol className={"hero-method-track"} aria-label={"How the apprenticeship works"}>
          <li>
            <b>01 / FRAME</b>
            <span>Turn an interest into a researchable question.</span>
          </li>
          <li>
            <b>02 / TEST</b>
            <span>Work through evidence, method and real data.</span>
          </li>
          <li>
            <b>03 / DEFEND</b>
            <span>Revise the claim until the evidence can hold it.</span>
          </li>
        </ol>
        <div className={"document-orbit"} data-document-orbit={""} aria-hidden={"true"}>
          <div className={"orbit-dots"}></div>
          <div className={"orbit-index"}>
            R—01
            <br />
            WORKING
            <br />
            DOCUMENT
          </div>
          <article className={"hero-paper"}>
            <header>
              <span>RESURCHIN / WORKING PAPER</span>
              <span>REVISION 06</span>
            </header>
            <p className={"paper-field"}>PUBLIC HEALTH / STUDY 01</p>
            <h2>From a broad concern to a claim the evidence can hold.</h2>
            <div className={"paper-abstract"}>
              <b>ABSTRACT</b>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
            <figure>
              <ResponsiveImage src={"/assets/images/pexels-9243385-w1400.avif"} priority={true} sizes={"(max-width: 720px) 100vw, 58vw"} alt={""} />
              <figcaption>FIELD IMAGE / METHOD OBSERVATION</figcaption>
            </figure>
            <mark>What can the result actually support?</mark>
            <aside>
              MENTOR NOTE 04
              <br />
              <strong>NARROW THE CLAIM.</strong>
            </aside>
            <footer>
              <span>QUESTION</span>
              <i></i>
              <span>EVIDENCE</span>
              <i></i>
              <span>LIMIT</span>
            </footer>
            <button className={"paper-hotspot"} type={"button"} data-dossier-open={""} aria-label={"Open the sample research dossier"}>
              <span>
                OPEN
                <br />
                DOSSIER
              </span>
            </button>
          </article>
          <div className={"orbit-stamp"}>
            REVIEWED
            <br />
            NOT FINAL
          </div>
        </div>
        <div className={"v14-scroll"}>
          <span>SCROLL TO BUILD THE DOCUMENT</span>
          <i></i>
        </div>
      </section>
      <section className={"origin-ledger"} aria-labelledby={"origin-ledger-title"}>
        <header>
          <p className={"kicker"}>WHY RESURCHIN EXISTS</p>
          <h2 id={"origin-ledger-title"}>Research is learned by doing it—not by waiting until you feel qualified.</h2>
        </header>
        <article className={"founder-proof"}>
          <div className={"founder-monogram"} aria-hidden={"true"}><span>HEA</span></div>
          <div>
            <span>FOUNDER / WORKING RESEARCHER</span>
            <h3>Happiness Eric Aigbogun</h3>
            <p>
              Happiness supports Alzheimer’s biomarker research at the UPMC Karikari Biofluid Biomarker Laboratory, University of Pittsburgh. She created ResurchIn to give students and early-career researchers the practical guidance she wished was easier to find.
            </p>
            <a className={"text-link"} href={"https://www.instagram.com/resurchinhub/"} target={"_blank"} rel={"noreferrer"}>Follow ResurchIn’s work ↗</a>
          </div>
        </article>
        <div className={"origin-facts"}>
          <article>
            <b>01</b>
            <span>THE FORMAT</span>
            <p>Six months of structured research training.</p>
          </article>
          <article>
            <b>02</b>
            <span>THE WORK</span>
            <p>Hands-on projects using real data.</p>
          </article>
          <article>
            <b>03</b>
            <span>THE ACCESS</span>
            <p>Always free. Volunteer-driven. Open worldwide.</p>
          </article>
        </div>
      </section>
      <section className={"public-record"} aria-labelledby={"public-record-title"}>
        <header>
          <span>PUBLIC RECORD / VERIFIED</span>
          <h2 id={"public-record-title"}>The work exists beyond this website.</h2>
          <p>ResurchIn is led from active research practice. These records are external, inspectable and linked to their original sources.</p>
        </header>
        <div className={"record-ledger"}>
          <a href={"https://higherlogicdownload.s3.amazonaws.com/SRAINTERNATIONAL/85ddee13-3958-46a6-85e6-1ba5c50bb93e/UploadedImages/Catalyst_Quarterly_July_2026.pdf"} target={"_blank"} rel={"noreferrer"}>
            <b>01</b>
            <span>
              <small>SRA INTERNATIONAL / JULY 2026</small>
              <strong>Contributor, Catalyst Quarterly</strong>
              <em>External publication ↗</em>
            </span>
          </a>
          <a href={"https://scholar.google.com/citations?hl=en&user=f8rh6SIAAAAJ"} target={"_blank"} rel={"noreferrer"}>
            <b>02</b>
            <span>
              <small>GOOGLE SCHOLAR / PUBLIC PROFILE</small>
              <strong>Research publications and citations</strong>
              <em>View record ↗</em>
            </span>
          </a>
          <a href={"https://www.instagram.com/resurchinhub/"} target={"_blank"} rel={"noreferrer"}>
            <b>03</b>
            <span>
              <small>RESURCHIN / OPEN FIELD NOTES</small>
              <strong>Programme updates and research guidance</strong>
              <em>Visit the channel ↗</em>
            </span>
          </a>
        </div>
        <aside>
          <span>INDEPENDENT DESCRIPTION</span>
          <blockquote>“Creator and lead of ResurchIn, a free mentorship initiative for early-career scientists.”</blockquote>
          <cite>SRA INTERNATIONAL / CATALYST QUARTERLY / JULY 2026</cite>
        </aside>
      </section>
      <section className={"living-research"} data-research-story={""} aria-labelledby={"story-title"}>
        <div className={"story-sticky"}>
          <header className={"story-header"}>
            <span>THE RESEARCH DOCUMENT / LIVE BUILD</span>
            <h2 id={"story-title"}>
              One document.
              <br />
              Six acts of judgment.
            </h2>
            <p>The page changes as the research becomes more defensible.</p>
          </header>
          <nav className={"story-nav"} aria-label={"Research document stages"}>
            <button className={"active"} data-story-step={"0"} aria-pressed={"true"}>
              <b>01</b>
              <span>Question</span>
            </button>
            <button data-story-step={"1"} aria-pressed={"false"}>
              <b>02</b>
              <span>Evidence</span>
            </button>
            <button data-story-step={"2"} aria-pressed={"false"}>
              <b>03</b>
              <span>Method</span>
            </button>
            <button data-story-step={"3"} aria-pressed={"false"}>
              <b>04</b>
              <span>Analysis</span>
            </button>
            <button data-story-step={"4"} aria-pressed={"false"}>
              <b>05</b>
              <span>Revision</span>
            </button>
            <button data-story-step={"5"} aria-pressed={"false"}>
              <b>06</b>
              <span>Defence</span>
            </button>
          </nav>
          <div className={"story-workbench"}>
            <div className={"bench-grid"}></div>
            <article className={"living-paper"} aria-live={"polite"}>
              <header>
                <span data-story-folio={""}>01 / QUESTION MEMO</span>
                <span>RESURCHIN / COHORT 01</span>
              </header>
              <div className={"paper-rule"}></div>
              <p className={"living-label"} data-story-label={""}>THE FIRST DECISION</p>
              <h3 data-story-question={""}>What, exactly, are you trying to find out?</h3>
              <p className={"living-body"} data-story-body={""}>A broad interest becomes useful only when it has a boundary, a population and evidence that could answer it.</p>
              <dl>
                <div>
                  <dt>DOCUMENT</dt>
                  <dd data-story-document={""}>Question memo / version 03</dd>
                </div>
                <div>
                  <dt>MENTOR ASKS</dt>
                  <dd data-story-review={""}>Could evidence actually answer this?</dd>
                </div>
              </dl>
              <div className={"paper-marks"}>
                <i></i>
                <i></i>
                <i></i>
              </div>
              <aside data-story-note={""}>Make the boundary visible.</aside>
              <footer>
                <span>WORKING PAPER / NOT FINAL</span>
                <b data-story-count={""}>01—06</b>
              </footer>
            </article>
            <div className={"bench-side"}>
              <span className={"bench-number"} data-story-number={""}>01</span>
              <div className={"bench-progress"}><i></i></div>
              <p data-story-trace={""}>INTEREST → QUESTION</p>
            </div>
          </div>
          <article className={"story-copy"} aria-live={"polite"}>
            <p className={"kicker"} data-story-kicker={""}>PHASE 01 / FRAME</p>
            <blockquote data-story-title={""}>Give the problem a boundary.</blockquote>
            <p data-story-explain={""}>Before collecting anything, decide what your question includes—and what it refuses to include.</p>
            <a href={"/curriculum/"} className={"text-link"}>Read the complete curriculum →</a>
          </article>
        </div>
      </section>
      <section className={"field-reel"} data-field-reel={""} aria-labelledby={"field-reel-title"}>
        <header>
          <p className={"kicker"}>ONE PROJECT / THREE VERSIONS</p>
          <h2 id={"field-reel-title"}>
            The first draft says what you hoped to find.
            <br />
            <em>The sixth says what the evidence allows.</em>
          </h2>
        </header>
        <div className={"field-reel-stage"}>
          <figure>
            <ResponsiveImage data-field-image={""} src={"/assets/images/pexels-5940711-w1800.avif"} sizes={"(max-width: 720px) 100vw, 64vw"} alt={"Students reviewing research material together"} />
            <div className={"field-scan"}></div>
            <figcaption>
              <span data-field-caption={""}>QUESTION MEMO / VERSION 01</span>
              <span data-field-credit={""}>FRAMING THE PROBLEM</span>
            </figcaption>
          </figure>
          <article aria-live={"polite"}>
            <span data-field-index={""}>01 / 03</span>
            <h3 data-field-title={""}>The question was too broad to fail.</h3>
            <p data-field-body={""}>“How does social media affect students?” became one population, one behavior and one outcome that could actually be observed.</p>
            <dl>
              <div>
                <dt>MENTOR MARK</dt>
                <dd data-field-mark={""}>Who, where, and over what period?</dd>
              </div>
              <div>
                <dt>DOCUMENT</dt>
                <dd data-field-document={""}>Question memo / v01 → v03</dd>
              </div>
            </dl>
          </article>
          <nav aria-label={"Project revision views"}>
            <button className={"active"} data-field-step={"0"} aria-pressed={"true"}>
              <b>01</b>
              <span>Frame</span>
            </button>
            <button data-field-step={"1"} aria-pressed={"false"}>
              <b>02</b>
              <span>Test</span>
            </button>
            <button data-field-step={"2"} aria-pressed={"false"}>
              <b>03</b>
              <span>Defend</span>
            </button>
          </nav>
        </div>
      </section>
      <section className={"critique-lab"} aria-labelledby={"critique-title"}>
        <div className={"critique-intro"}>
          <p className={"kicker"}>MENTOR REVIEW / SAMPLE EXERCISE</p>
          <h2 id={"critique-title"}>Confidence is edited, not added.</h2>
          <p>Drag the control. Then inspect the exact sentence-level decision.</p>
          <p className={"review-state"} data-review-state={""}>The confidence begins to fracture.</p>
          <div className={"review-modes"} aria-label={"Review channels"}>
            <button className={"active"} type={"button"} data-review-mode={"claim"} aria-pressed={"true"}>
              <span>01</span>
              Claim
            </button>
            <button type={"button"} data-review-mode={"evidence"} aria-pressed={"false"}>
              <span>02</span>
              Evidence
            </button>
            <button type={"button"} data-review-mode={"limit"} aria-pressed={"false"}>
              <span>03</span>
              Limit
            </button>
          </div>
          <label htmlFor={"review-range"}>
            <span>FIRST DRAFT</span>
            <input id={"review-range"} type={"range"} min={"0"} max={"100"} value={"58"} />
            <span>MENTOR REVIEW</span>
          </label>
        </div>
        <div className={"review-desk"}>
          <div className={"desk-coordinate"}>
            <span>R—04</span>
            <span data-review-coordinate={""}>CLAIM AUDIT</span>
          </div>
          <article className={"draft-paper"}>
            <header>
              <span>SAMPLE FINDINGS / DRAFT 03</span>
              <span>TRAINING EXERCISE</span>
            </header>
            <h3>The intervention improved student outcomes.</h3>
            <p>
              Participants who received the intervention showed a
              <mark>clear improvement</mark>
              in test performance. This demonstrates that the method is
              <mark>effective for students</mark>
              and should be adopted more widely.
            </p>
            <p>
              The mean score increased across the twelve-week sample.
              <mark>No meaningful differences</mark>
              were found between groups at baseline.
            </p>
            <div className={"revision-output"}>
              <span>REVISED SENTENCE / LIVE</span>
              <p data-review-revision={""}>In this twelve-week sample, participants receiving the intervention recorded a higher mean test score.</p>
            </div>
            <footer>SAMPLE DOCUMENT / NOT PARTICIPANT DATA</footer>
            <div className={"review-layer"} aria-hidden={"true"}>
              <span className={"circle c1"}></span>
              <span className={"circle c2"}></span>
              <p className={"scribble s1"}>clear compared with what?</p>
              <p className={"scribble s2"}>name the sample. narrow this.</p>
              <p className={"scribble s3"}>association ≠ proof</p>
              <strong>SHOW THE LIMIT.</strong>
            </div>
            <div className={"review-curtain"}></div>
          </article>
          <aside>
            <span className={"review-value"}>58%</span>
            <p>review pressure</p>
            <div>
              <b>CLAIM</b>
              <i></i>
              <b>EVIDENCE</b>
              <i></i>
              <b>LIMIT</b>
            </div>
          </aside>
        </div>
      </section>
      <section className={"v14-terms"}>
        <div>
          <span>06</span>
          <p>MONTHS OF PRACTICE</p>
          <small>Enough time to revise the same work more than once.</small>
        </div>
        <div>
          <span>1:1</span>
          <p>DOCUMENT-SPECIFIC REVIEW</p>
          <small>Feedback attached to the sentence, table or decision.</small>
        </div>
        <div>
          <span>2–3</span>
          <p>LIVE SESSIONS / WEEK</p>
          <small>Teaching, work-in-progress review and research conversation.</small>
        </div>
        <div>
          <span>$0</span>
          <p>TUITION FEE</p>
          <small>Selection is based on readiness to do the work.</small>
        </div>
      </section>
      <section className={"v14-closing"}>
        <p>ADMISSIONS / NEXT COHORT</p>
        <h2>
          Bring the question
          <br />
          you cannot leave alone.
        </h2>
        <a className={"button light"} href={"/apply/"}>Submit an application ↗</a>
        <div className={"closing-dots"}></div>
      </section>
    </main>
    <section className={"dossier-viewer"} data-dossier-viewer={""} aria-hidden={"true"} role={"dialog"} aria-modal={"true"} aria-labelledby={"dossier-title"}>
      <header>
        <a className={"wordmark"} href={"/"}>
          <i aria-hidden={"true"}>r</i>
          resurchIn
        </a>
        <span>SAMPLE RESEARCH RECORD / 01</span>
        <button type={"button"} data-dossier-close={""} aria-label={"Close sample dossier"}>
          Close
          <b>×</b>
        </button>
      </header>
      <div className={"dossier-shell"}>
        <aside>
          <p>DOCUMENT INDEX</p>
          <nav aria-label={"Sample dossier pages"}>
            <button className={"active"} type={"button"} data-dossier-tab={"0"} aria-pressed={"true"}>
              <b>01</b>
              <span>Question memo</span>
              <small>Framing the study</small>
            </button>
            <button type={"button"} data-dossier-tab={"1"} aria-pressed={"false"}>
              <b>02</b>
              <span>Evidence matrix</span>
              <small>Comparing sources</small>
            </button>
            <button type={"button"} data-dossier-tab={"2"} aria-pressed={"false"}>
              <b>03</b>
              <span>Mentor review</span>
              <small>Narrowing the claim</small>
            </button>
          </nav>
          <footer>
            <span>STATUS</span>
            <strong data-dossier-status={""}>REVISED / V03</strong>
          </footer>
        </aside>
        <div className={"dossier-stage"}>
          <div className={"dossier-tools"}>
            <span data-dossier-folio={""}>01 / QUESTION MEMO</span>
            <div>
              <button type={"button"} data-dossier-prev={""} aria-label={"Previous dossier page"}>←</button>
              <span data-dossier-count={""}>01 / 03</span>
              <button type={"button"} data-dossier-next={""} aria-label={"Next dossier page"}>→</button>
            </div>
          </div>
          <article className={"dossier-sheet"} data-dossier-sheet={""}>
            <header>
              <span>RESURCHIN / SAMPLE PROJECT</span>
              <span data-sheet-revision={""}>REVISION 03</span>
            </header>
            <div className={"sheet-title"}>
              <p data-sheet-kicker={""}>RESEARCH QUESTION</p>
              <h2 id={"dossier-title"} data-sheet-title={""}>Does a weekly peer-review session change how first-year students revise analytical essays?</h2>
            </div>
            <div className={"sheet-body"}>
              <div>
                <span>WHY THIS QUESTION</span>
                <p data-sheet-body={""}>
                  Early interviews suggested that students received comments but did not always know what to do next. The study asks about one practice, one cohort and one visible behaviour: revision.
                </p>
              </div>
              <div>
                <span>BOUNDARY</span>
                <p data-sheet-side={""}>
                  First-year students in one twelve-week writing course. Revision quality is assessed through changes between submitted drafts.
                </p>
              </div>
            </div>
            <blockquote data-sheet-note={""}>
              “Change ‘improves writing’ to the specific behaviour you can observe.”
              <cite>MENTOR NOTE / ROUND 02</cite>
            </blockquote>
            <footer>
              <span>QUESTION → EVIDENCE → LIMIT</span>
              <b data-sheet-page={""}>01</b>
            </footer>
          </article>
          <div className={"dossier-caption"}>
            <span>TRAINING ARTIFACT / FICTIONAL SAMPLE</span>
            <p data-dossier-caption={""}>A useful question names the population, practice and outcome before the data arrives.</p>
          </div>
        </div>
      </div>
    </section>
      <SiteFooter editorial />
    </div>
  );
}
