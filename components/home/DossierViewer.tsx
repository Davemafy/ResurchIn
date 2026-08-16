"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useHomeExperience } from "./HomeExperience";

const pages = [
  {
    folio: "01 / QUESTION MEMO", status: "REVISED / V03", revision: "REVISION 03", kicker: "RESEARCH QUESTION",
    title: "Does a weekly peer-review session change how first-year students revise analytical essays?",
    body: "Early interviews suggested that students received comments but did not always know what to do next. The study asks about one practice, one cohort and one visible behaviour: revision.",
    side: "First-year students in one twelve-week writing course. Revision quality is assessed through changes between submitted drafts.",
    note: "“Change ‘improves writing’ to the specific behaviour you can observe.”", cite: "MENTOR NOTE / ROUND 02",
    caption: "A useful question names the population, practice and outcome before the data arrives.",
  },
  {
    folio: "02 / EVIDENCE MATRIX", status: "18 SOURCES / 4 GAPS", revision: "MATRIX 02", kicker: "WHERE THE FIELD DISAGREES",
    title: "Feedback helps most when students can translate it into a visible next action.",
    body: "Eighteen sources were compared by participant group, feedback format, measured outcome and stated limitation. Four disagreements became more useful than a long list of summaries.",
    side: "Seven studies measured final scores. Five examined revision behaviour. Six relied on self-reported confidence and could not show what changed in the work.",
    note: "“Do not write another summary. Show me the disagreement.”", cite: "MENTOR NOTE / ROUND 03",
    caption: "The matrix keeps method and limitation beside every finding, so authority is never separated from context.",
  },
  {
    folio: "03 / MENTOR REVIEW", status: "CLAIM / NARROWED", revision: "REVISION 06", kicker: "CLAIM AFTER REVIEW",
    title: "In this sample, peer review was associated with more specific changes between drafts.",
    body: "The first draft said the sessions “improved student writing.” The revised claim names the sample, describes the observed behaviour and stops before claiming causation.",
    side: "The course was small, participation was not randomly assigned and the study did not measure whether the changes persisted after twelve weeks.",
    note: "“The result did not get weaker. The sentence became more honest.”", cite: "MENTOR NOTE / FINAL REVIEW",
    caption: "The final sentence is smaller than the ambition—and stronger because every word can be defended.",
  },
];

const tabs = [
  ["Question memo", "Framing the study"],
  ["Evidence matrix", "Comparing sources"],
  ["Mentor review", "Narrowing the claim"],
];

export function DossierViewer() {
  const { dossierOpen, closeDossier } = useHomeExperience();
  const [active, setActive] = useState(0);
  const [changing, setChanging] = useState(false);
  const viewerRef = useRef<HTMLElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const timer = useRef<number | null>(null);

  useEffect(() => {
    if (!dossierOpen) return;
    setActive(0);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const focusTimer = window.setTimeout(() => closeRef.current?.focus(), reduced ? 0 : 420);
    return () => window.clearTimeout(focusTimer);
  }, [dossierOpen]);

  useEffect(() => () => {
    if (timer.current) window.clearTimeout(timer.current);
  }, []);

  const choose = (next: number) => {
    const normalized = (next + pages.length) % pages.length;
    setChanging(true);
    if (timer.current) window.clearTimeout(timer.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = window.setTimeout(() => {
      setActive(normalized);
      setChanging(false);
    }, reduced ? 0 : 180);
  };

  const onKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === "Escape") {
      event.preventDefault();
      closeDossier();
      return;
    }

    if (event.key === "Tab" && viewerRef.current) {
      const focusable = Array.from(
        viewerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
      ).filter((node) => node.offsetParent !== null);
      if (focusable.length) {
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
      return;
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      choose(active - 1);
    } else if (event.key === "ArrowRight") {
      event.preventDefault();
      choose(active + 1);
    }
  };

  const page = pages[active];

  return (
    <section
      ref={viewerRef}
      className={`dossier-viewer${dossierOpen ? " open" : ""}`}
      aria-hidden={!dossierOpen}
      role="dialog"
      aria-modal="true"
      aria-labelledby="dossier-title"
      onKeyDown={onKeyDown}
    >
      <header>
        <Link className="wordmark" href="/"><i aria-hidden="true">r</i>resurchIn</Link>
        <span>SAMPLE RESEARCH RECORD / 01</span>
        <button ref={closeRef} type="button" aria-label="Close sample dossier" onClick={closeDossier}>Close <b>×</b></button>
      </header>
      <div className="dossier-shell">
        <aside>
          <p>DOCUMENT INDEX</p>
          <nav aria-label="Sample dossier pages">
            {tabs.map(([title, description], index) => (
              <button key={title} className={active === index ? "active" : undefined} type="button" aria-pressed={active === index} onClick={() => choose(index)}>
                <b>{String(index + 1).padStart(2, "0")}</b><span>{title}</span><small>{description}</small>
              </button>
            ))}
          </nav>
          <footer><span>STATUS</span><strong>{page.status}</strong></footer>
        </aside>
        <div className="dossier-stage">
          <div className="dossier-tools">
            <span>{page.folio}</span>
            <div>
              <button type="button" aria-label="Previous dossier page" onClick={() => choose(active - 1)}>←</button>
              <span>{String(active + 1).padStart(2, "0")} / 03</span>
              <button type="button" aria-label="Next dossier page" onClick={() => choose(active + 1)}>→</button>
            </div>
          </div>
          <article className={`dossier-sheet${changing ? " changing" : ""}`}>
            <header><span>RESURCHIN / SAMPLE PROJECT</span><span>{page.revision}</span></header>
            <div className="sheet-title"><p>{page.kicker}</p><h2 id="dossier-title">{page.title}</h2></div>
            <div className="sheet-body">
              <div><span>WHY THIS QUESTION</span><p>{page.body}</p></div>
              <div><span>BOUNDARY</span><p>{page.side}</p></div>
            </div>
            <blockquote>{page.note} <cite>{page.cite}</cite></blockquote>
            <footer><span>QUESTION → EVIDENCE → LIMIT</span><b>{String(active + 1).padStart(2, "0")}</b></footer>
          </article>
          <div className="dossier-caption"><span>TRAINING ARTIFACT / FICTIONAL SAMPLE</span><p>{page.caption}</p></div>
        </div>
      </div>
    </section>
  );
}
