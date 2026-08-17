"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState, type CSSProperties } from "react";
import { useReveal } from "@/components/site/useReveal";
import { useHomeExperience } from "./HomeExperience";

const storyData = [
  { folio:"01 / QUESTION MEMO", label:"THE FIRST DECISION", question:"What, exactly, are you trying to find out?", body:"A broad interest becomes useful only when it has a boundary, a population and evidence that could answer it.", document:"Question memo / version 03", review:"Could evidence actually answer this?", note:"Make the boundary visible.", trace:"INTEREST → QUESTION", kicker:"PHASE 01 / FRAME", title:"Give the problem a boundary.", explain:"Before collecting anything, decide what your question includes and what it refuses to include." },
  { folio:"02 / EVIDENCE MATRIX", label:"THE FIELD", question:"What is known, and where does it break?", body:"Sources are compared by claim, method and limitation until patterns and disagreements become visible.", document:"Evidence matrix / 18 sources", review:"Where do these authors actually disagree?", note:"Do not summarise. Compare.", trace:"QUESTION → FIELD", kicker:"PHASE 02 / READ", title:"Arrange the field by disagreement.", explain:"A literature review becomes useful when it shows relationships, not a stack of disconnected summaries." },
  { folio:"03 / METHOD PLAN", label:"THE TRADE-OFF", question:"What evidence would count as an answer?", body:"The question determines the method. Every choice creates a strength, a cost and a limit that must be named.", document:"Method + data plan / reviewed", review:"Why this method for this question?", note:"Name the trade-off.", trace:"FIELD → METHOD", kicker:"PHASE 03 / DESIGN", title:"Choose the evidence before collecting it.", explain:"A method is not impressive because it is complex. It is credible because it fits the question." },
  { folio:"04 / ANALYSIS LOG", label:"THE RESULT", question:"What can the pattern actually support?", body:"Results are examined alongside alternative explanations, missing information and the boundary of the sample.", document:"Analysis log / version 04", review:"Is that claim inside the data?", note:"Separate result from interpretation.", trace:"DATA → PATTERN", kicker:"PHASE 04 / ANALYSE", title:"Let the result stay smaller than the ambition.", explain:"Good analysis does not force certainty. It shows the result, the competing explanation and the limit." },
  { folio:"05 / RESEARCH DRAFT", label:"THE ARGUMENT", question:"Has every sentence earned its confidence?", body:"The question, evidence, claim and limitation are connected in a draft another researcher can follow and challenge.", document:"Research draft / version 06", review:"What changed after the evidence?", note:"Narrow the claim.", trace:"PATTERN → CLAIM", kicker:"PHASE 05 / WRITE", title:"Revision is where judgment becomes visible.", explain:"Earlier versions stay in the portfolio. The difference between them is evidence of learning." },
  { folio:"06 / FINAL DEFENCE", label:"THE CONTRIBUTION", question:"Can you defend every important decision?", body:"The project is presented with its evidence, limitations and the next question the work leaves behind.", document:"Presentation + complete portfolio", review:"What would you change next time?", note:"State where the work stops.", trace:"CLAIM → CONTRIBUTION", kicker:"PHASE 06 / PRESENT", title:"Finish with an honest contribution.", explain:"The program ends with work you can explain, not certainty you cannot support." },
];

const labels = ["Question", "Evidence", "Method", "Analysis", "Revision", "Defence"];
type StoryStyle = CSSProperties & { "--paper-rotate"?: string };
type ProgressStyle = CSSProperties & { "--story-progress"?: string };

export function ResearchStory() {
  const { registerSection, showCursor, hideCursor } = useHomeExperience();
  const sectionRef = useRef<HTMLElement | null>(null);
  const storyCopyReveal = useReveal<HTMLElement>();
  const lockUntil = useRef(0);
  const phaseTimer = useRef<number | null>(null);
  const [active, setActive] = useState(0);
  const [phaseChanging, setPhaseChanging] = useState(false);
  const reducedMotion = useRef(false);
  const activeRef = useRef(0);


  useEffect(() => {
    activeRef.current = active;
  }, [active]);

  const activate = useCallback((index: number) => {
    if (index === activeRef.current) return;
    activeRef.current = index;
    setActive(index);
    setPhaseChanging(true);
    if (phaseTimer.current) window.clearTimeout(phaseTimer.current);
    phaseTimer.current = window.setTimeout(() => {
      setPhaseChanging(false);
      phaseTimer.current = null;
    }, reducedMotion.current ? 0 : 380);
  }, []);

  const setRef = useCallback((node: HTMLElement | null) => {
    sectionRef.current = node;
    registerSection(1, node);
  }, [registerSection]);

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;

    const update = () => {
      frame = 0;
      if (window.innerWidth <= 720 || performance.now() < lockUntil.current || !sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const travel = Math.max(sectionRef.current.offsetHeight - window.innerHeight, 1);
      const ratio = Math.max(0, Math.min(0.999999, -rect.top / travel));
      const next = Math.min(storyData.length - 1, Math.floor(ratio * storyData.length));
      activate(next);
    };

    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, [activate]);

  useEffect(() => () => {
    if (phaseTimer.current) window.clearTimeout(phaseTimer.current);
  }, []);

  const choose = (index: number) => {
    if (index === activeRef.current && !phaseChanging) return;
    activate(index);

    if (window.innerWidth > 720 && sectionRef.current) {
      lockUntil.current = performance.now() + (reducedMotion.current ? 0 : 900);
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = window.scrollY + rect.top;
      const travel = Math.max(sectionRef.current.offsetHeight - window.innerHeight, 1);
      const phaseCenter = (index + 0.5) / storyData.length;
      window.scrollTo({
        top: sectionTop + travel * phaseCenter,
        behavior: reducedMotion.current ? "auto" : "smooth",
      });
    }
  };

  const data = storyData[active];
  const paperStyle: StoryStyle = { "--paper-rotate": `${[-1.2, 0.8, -0.6, 1, -0.4, 0.4][active]}deg` };
  const progressStyle: ProgressStyle = { "--story-progress": `${((active + 1) / storyData.length) * 100}%` };

  return (
    <section ref={setRef} className="living-research" aria-labelledby="story-title">
      <div className="story-sticky">
        <header className="story-header">
          <span>THE RESEARCH DOCUMENT / LIVE BUILD</span>
          <h2 id="story-title">One document.<br />Six acts of judgment.</h2>
          <p>The page changes as the research becomes more defensible.</p>
        </header>
        <nav className="story-nav" aria-label="Research document stages">
          {labels.map((label, index) => (
            <button
              key={label}
              className={active === index ? "active" : undefined}
              aria-pressed={active === index}
              onClick={() => choose(index)}
              onPointerEnter={() => showCursor("CHANGE PHASE")}
              onPointerLeave={hideCursor}
            >
              <b>{String(index + 1).padStart(2, "0")}</b><span>{label}</span>
            </button>
          ))}
        </nav>
        <div className="story-workbench">
          <div className="bench-grid" />
          <article className={`living-paper${phaseChanging ? " phase-change" : ""}`} aria-live="polite" style={paperStyle}>
            <header><span>{data.folio}</span><span>RESURCHIN / COHORT 01</span></header>
            <div className="paper-rule" />
            <p className="living-label">{data.label}</p>
            <h3>{data.question}</h3>
            <p className="living-body">{data.body}</p>
            <dl>
              <div><dt>DOCUMENT</dt><dd>{data.document}</dd></div>
              <div><dt>MENTOR ASKS</dt><dd>{data.review}</dd></div>
            </dl>
            <div className="paper-marks"><i /><i /><i /></div>
            <aside>{data.note}</aside>
            <footer><span>WORKING PAPER / NOT FINAL</span><b>{String(active + 1).padStart(2, "0")}—06</b></footer>
          </article>
          <div className="bench-side">
            <span className="bench-number">{String(active + 1).padStart(2, "0")}</span>
            <div className="bench-progress" style={progressStyle}><i /></div>
            <p>{data.trace}</p>
          </div>
        </div>
        <article ref={storyCopyReveal.ref} className={`story-copy quiet-reveal${storyCopyReveal.seen ? " seen" : ""}`} aria-live="polite">
          <p className="kicker">{data.kicker}</p>
          <blockquote>{data.title}</blockquote>
          <p>{data.explain}</p>
          <Link href="/curriculum/" className="text-link">Read the complete curriculum →</Link>
        </article>
      </div>
    </section>
  );
}
