"use client";

import { useState } from "react";

const before = "How does social media affect students?";
const after = "Among first-year students, does late-night social media use predict next-day lecture attendance?";

export function RevisionCompare() {
  const [position, setPosition] = useState(53);

  return (
    <section className="rv-compare" aria-label="Compare the first and sixth version of a research question">
      <div className="rv-compare-orbit" aria-hidden="true">
        <span className="rv-compare-dots" />
        <span className="rv-compare-index">R—01<br />WORKING<br />DOCUMENT</span>
        <span className="rv-compare-stamp">REVIEWED<br />NOT FINAL</span>
      </div>

      <div className="rv-compare-stage" style={{ "--rv-split": `${position}%` } as React.CSSProperties}>
        <div className="rv-paper-rules" aria-hidden="true" />
        <header className="rv-paper-header" aria-hidden="true">
          <span>RESURCHIN / WORKING PAPER</span><span>REVISION 06</span>
        </header>
        <p className="rv-paper-field" aria-hidden="true">PUBLIC HEALTH / QUESTION MEMO 01</p>

        <article className="rv-version rv-version-before">
          <header><span>V01 / BROAD</span><span>QUESTION MEMO</span></header>
          <p>{before}</p>
          <footer><span>Too broad to test cleanly</span><b>01</b></footer>
        </article>
        <article className="rv-version rv-version-after">
          <header><span>V06 / DEFENSIBLE</span><span>QUESTION MEMO</span></header>
          <p>{after}</p>
          <footer><span>Population · behaviour · outcome</span><b>06</b></footer>
        </article>

        <aside className="rv-compare-note" aria-hidden="true">MENTOR NOTE 04<br /><strong>NARROW THE CLAIM.</strong></aside>
        <div className="rv-compare-seam" aria-hidden="true"><i /><span>↔</span></div>
        <div className="rv-paper-footer" aria-hidden="true"><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></div>
      </div>
      <label className="rv-compare-control">
        <span>V01</span>
        <input
          type="range"
          min="20"
          max="80"
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-label="Move the revision seam"
          aria-valuetext={`${position}% showing version six`}
        />
        <span>V06</span>
      </label>
      <p className="rv-compare-caption">Drag the seam. The work is the change between these two sentences.</p>
    </section>
  );
}
