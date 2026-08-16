"use client";

import { useMemo, useState } from "react";

type Channel = "claim" | "evidence" | "limit";

const states = [
  {
    threshold: 0,
    label: "FIRST DRAFT",
    claim: "The intervention improved student outcomes and should be adopted more widely.",
    confidence: "OVERCLAIM / 92%",
  },
  {
    threshold: 30,
    label: "CLAIM CHECK",
    claim: "Students receiving the intervention recorded higher mean test scores.",
    confidence: "CLAIM / 66%",
  },
  {
    threshold: 58,
    label: "SAMPLE CHECK",
    claim: "In this twelve-week sample, students receiving the intervention recorded higher mean test scores.",
    confidence: "BOUNDARY / 41%",
  },
  {
    threshold: 82,
    label: "DEFENSIBLE VERSION",
    claim: "In this twelve-week sample, students receiving the intervention recorded higher mean test scores; the design does not establish causation.",
    confidence: "DEFENSIBLE / 100%",
  },
];

const notes = {
  claim: ["‘Improved’ compared with what?", "Remove the recommendation. The study did not test adoption."],
  evidence: ["Point to the table, not the feeling.", "Name the observed difference before explaining it."],
  limit: ["Twelve weeks. One sample.", "Association is not a causal design."],
};

export function MentorReview() {
  const [pressure, setPressure] = useState(64);
  const [channel, setChannel] = useState<Channel>("claim");

  const state = useMemo(() => {
    return [...states].reverse().find((item) => pressure >= item.threshold) || states[0];
  }, [pressure]);

  return (
    <section className="pf2-review-instrument" aria-labelledby="review-instrument-title">
      <div className="pf2-review-controls">
        <div>
          <p className="pf-kicker">LIVE REVIEW / SAMPLE EXERCISE</p>
          <h2 id="review-instrument-title">Put the sentence<br /><em>under pressure.</em></h2>
          <p>Mentor feedback is useful when it changes a decision you can point to. Increase the pressure and watch certainty get edited down to what the evidence can carry.</p>
        </div>

        <div className="pf2-review-channels" role="group" aria-label="Review channel">
          {(["claim", "evidence", "limit"] as Channel[]).map((item, index) => (
            <button key={item} type="button" className={channel === item ? "active" : undefined} onClick={() => setChannel(item)} aria-pressed={channel === item}>
              <span>0{index + 1}</span>{item.toUpperCase()}
            </button>
          ))}
        </div>

        <label className="pf2-review-range">
          <span>REVIEW PRESSURE</span>
          <input type="range" min="0" max="100" value={pressure} onChange={(event) => setPressure(Number(event.target.value))} aria-valuetext={`${pressure}% review pressure`} />
          <b>{pressure}%</b>
        </label>
      </div>

      <div className="pf2-review-desk">
        <article className="pf2-review-paper" key={`${state.label}-${channel}`} aria-live="polite">
          <header><span>FINDINGS / DRAFT 03</span><span>{state.label}</span></header>
          <div className="pf2-review-code" aria-hidden="true">R—04</div>
          <p className="pf-kicker">WORKING CLAIM</p>
          <h3>{state.claim}</h3>
          <div className="pf2-review-source">
            <span>OBSERVED RESULT</span>
            <p>Mean test scores were higher in the intervention group at week twelve. Baseline scores were similar between groups.</p>
          </div>
          <div className="pf2-review-output">
            <span>STATUS</span><strong>{state.confidence}</strong>
          </div>
          <div className={`pf2-review-annotations channel-${channel}`} aria-live="polite">
            <p className="a">{notes[channel][0]}</p>
            <p className="b">{notes[channel][1]}</p>
            <i aria-hidden="true" />
          </div>
          <footer><span>CLAIM</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
        </article>
        <aside>
          <span>MENTOR NOTE / {channel.toUpperCase()}</span>
          <blockquote>{channel === "claim" ? "Which word is carrying more certainty than the method?" : channel === "evidence" ? "Show me the exact observation that earns this sentence." : "Where does this result stop being yours to claim?"}</blockquote>
          <small>THE GOAL IS NOT A SMALLER IDEA. IT IS A MORE DEFENSIBLE ONE.</small>
        </aside>
      </div>
    </section>
  );
}
