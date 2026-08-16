"use client";

import { useCallback, useRef, useState, type CSSProperties } from "react";
import { useReveal } from "@/components/site/useReveal";
import { useHomeExperience } from "./HomeExperience";

type ReviewMode = "claim" | "evidence" | "limit";
type ReviewStyle = CSSProperties & { "--review"?: string };

const modes: Record<ReviewMode, [string, string]> = {
  claim: ["CLAIM AUDIT", "In this twelve-week sample, participants receiving the intervention recorded a higher mean test score."],
  evidence: ["EVIDENCE CHECK", "Mean scores rose by 8.4 points in the intervention group and 3.1 points in the comparison group."],
  limit: ["LIMIT REGISTER", "Because group assignment was not random, the result cannot establish that the intervention caused the difference."],
};

export function CritiqueLab() {
  const { registerSection, showCursor, hideCursor } = useHomeExperience();
  const [review, setReview] = useState(58);
  const introReveal = useReveal<HTMLDivElement>();
  const [mode, setMode] = useState<ReviewMode>("claim");
  const [changing, setChanging] = useState(false);
  const timer = useRef<number | null>(null);

  const setRef = useCallback((node: HTMLElement | null) => registerSection(3, node), [registerSection]);

  const reviewState = review < 34
    ? "The claim still sounds more certain than the evidence."
    : review < 72
      ? "The confidence begins to fracture."
      : "The limitation is now part of the argument.";

  const chooseMode = (next: ReviewMode) => {
    setChanging(true);
    if (timer.current) window.clearTimeout(timer.current);
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    timer.current = window.setTimeout(() => {
      setMode(next);
      setChanging(false);
    }, reduced ? 0 : 180);
  };

  const paperStyle: ReviewStyle = { "--review": `${review}%` };

  return (
    <section ref={setRef} className="critique-lab" aria-labelledby="critique-title">
      <div ref={introReveal.ref} className={`critique-intro quiet-reveal${introReveal.seen ? " seen" : ""}`}>
        <p className="kicker">MENTOR REVIEW / SAMPLE EXERCISE</p>
        <h2 id="critique-title">Confidence is edited, not added.</h2>
        <p>Drag the control. Then inspect the exact sentence-level decision.</p>
        <p className="review-state">{reviewState}</p>
        <div className="review-modes" aria-label="Review channels">
          {(["claim", "evidence", "limit"] as ReviewMode[]).map((item, index) => (
            <button
              key={item}
              className={mode === item ? "active" : undefined}
              type="button"
              aria-pressed={mode === item}
              onClick={() => chooseMode(item)}
              onPointerEnter={() => showCursor("INSPECT DECISION")}
              onPointerLeave={hideCursor}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>{item[0].toUpperCase() + item.slice(1)}
            </button>
          ))}
        </div>
        <label htmlFor="review-range">
          <span>FIRST DRAFT</span>
          <input
            id="review-range"
            type="range"
            min="0"
            max="100"
            value={review}
            aria-valuetext={`${review}% of the mentor annotations visible`}
            onChange={(event) => setReview(Number(event.target.value))}
            onPointerEnter={() => showCursor("DRAG TO REVIEW")}
            onPointerLeave={hideCursor}
          />
          <span>MENTOR REVIEW</span>
        </label>
      </div>
      <div className={`review-desk${changing ? " mode-changing" : ""}`}>
        <div className="desk-coordinate"><span>R—04</span><span>{modes[mode][0]}</span></div>
        <article className="draft-paper" style={paperStyle}>
          <header><span>SAMPLE FINDINGS / DRAFT 03</span><span>TRAINING EXERCISE</span></header>
          <h3>The intervention improved student outcomes.</h3>
          <p>Participants who received the intervention showed a <mark>clear improvement</mark> in test performance. This demonstrates that the method is <mark>effective for students</mark> and should be adopted more widely.</p>
          <p>The mean score increased across the twelve-week sample. <mark>No meaningful differences</mark> were found between groups at baseline.</p>
          <div className="revision-output"><span>REVISED SENTENCE / LIVE</span><p>{modes[mode][1]}</p></div>
          <footer>SAMPLE DOCUMENT / NOT PARTICIPANT DATA</footer>
          <div className="review-layer" aria-hidden="true">
            <span className="circle c1" /><span className="circle c2" />
            <p className="scribble s1">clear compared with what?</p>
            <p className="scribble s2">name the sample. narrow this.</p>
            <p className="scribble s3">association ≠ proof</p>
            <strong>SHOW THE LIMIT.</strong>
          </div>
          <div className="review-curtain" />
        </article>
        <aside>
          <span className="review-value">{review}%</span>
          <p>review pressure</p>
          <div><b>CLAIM</b><i /><b>EVIDENCE</b><i /><b>LIMIT</b></div>
        </aside>
      </div>
    </section>
  );
}
