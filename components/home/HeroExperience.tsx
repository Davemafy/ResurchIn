"use client";

import Link from "next/link";
import { useCallback, useState, type CSSProperties, type PointerEvent } from "react";
import { useHomeExperience } from "./HomeExperience";

type OrbitStyle = CSSProperties & { "--ry"?: string; "--rx"?: string; "--mx"?: string; "--my"?: string };

export function HeroExperience() {
  const { openDossier, registerSection, showCursor, hideCursor } = useHomeExperience();
  const [orbitStyle, setOrbitStyle] = useState<OrbitStyle>({
    "--ry": "1.25deg",
    "--rx": "-1deg",
    "--mx": "0px",
    "--my": "0px",
  });

  const setHeroRef = useCallback((node: HTMLElement | null) => registerSection(0, node), [registerSection]);

  const moveOrbit = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const px = (event.clientX - rect.left) / rect.width - 0.5;
    const py = (event.clientY - rect.top) / rect.height - 0.5;
    setOrbitStyle({
      "--ry": `${px * 3.2}deg`,
      "--rx": `${py * -2.8}deg`,
      "--mx": `${px * 10}px`,
      "--my": `${py * 8}px`,
    });
  };

  const resetOrbit = () => setOrbitStyle({ "--ry": "1.25deg", "--rx": "-1deg", "--mx": "0px", "--my": "0px" });

  return (
    <section ref={setHeroRef} className="studio-hero">
      <div className="studio-hero-rule">
        <span>RESURCHIN / RESEARCH APPRENTICESHIP</span>
        <span>COHORT 01 / 2026</span>
        <span>FREE / OPEN WORLDWIDE</span>
      </div>

      <div className="studio-hero-grid">
        <div className="studio-hero-copy">
          <p className="studio-eyebrow"><span>01</span> PRACTICE BEFORE CREDENTIAL</p>
          <h1>
            <span>Research is</span>
            <span>a skill.</span>
            <em>Practice it here.</em>
          </h1>
          <div className="studio-hero-intro">
            <p>
              Six months of guided research practice built around real questions,
              visible decisions and work that gets revised—not just submitted.
            </p>
            <div className="studio-hero-actions">
              <Link className="studio-primary" href="/program/">Explore the programme <span>↗</span></Link>
              <button
                className="studio-secondary"
                type="button"
                onClick={(event) => openDossier(event.currentTarget)}
                onPointerEnter={() => showCursor("OPEN DOSSIER")}
                onPointerLeave={hideCursor}
              >
                Open sample dossier <span>↗</span>
              </button>
            </div>
          </div>

          <ol className="studio-method" aria-label="How the apprenticeship works">
            <li><b>01</b><span>FRAME</span><p>Turn a broad interest into a question evidence can answer.</p></li>
            <li><b>02</b><span>TEST</span><p>Work through method, evidence and real data.</p></li>
            <li><b>03</b><span>DEFEND</span><p>Revise the claim until it stays inside the evidence.</p></li>
          </ol>
        </div>

        <div
          className="studio-hero-desk"
          style={orbitStyle}
          onPointerMove={moveOrbit}
          onPointerLeave={resetOrbit}
        >
          <div className="desk-grid" aria-hidden="true" />
          <span className="desk-coordinate desk-coordinate-a">R—01 / WORKING FILE</span>
          <span className="desk-coordinate desk-coordinate-b">REV / 06</span>

          <div className="dossier-stack" aria-hidden="true">
            <div className="dossier-back dossier-back-one"><span>EVIDENCE</span></div>
            <div className="dossier-back dossier-back-two"><span>METHOD</span></div>
          </div>

          <article className="hero-paper studio-paper">
            <header><span>RESURCHIN / WORKING PAPER</span><span>REVISION 06</span></header>
            <p className="paper-field">PUBLIC HEALTH / STUDY 01</p>
            <h2>From a broad concern to a claim the evidence can hold.</h2>
            <div className="paper-abstract"><b>ABSTRACT</b><span /><span /><span /><span /></div>
            <figure>
              <img src="/assets/images/pexels-9243385-w1400.avif" alt="Researcher working at a microscope" />
              <figcaption>FIELD IMAGE / METHOD OBSERVATION</figcaption>
            </figure>
            <mark>What can the result actually support?</mark>
            <aside>MENTOR NOTE 04<br /><strong>NARROW THE CLAIM.</strong></aside>
            <footer><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
            <button
              className="paper-hotspot"
              type="button"
              aria-label="Open the sample research dossier"
              onClick={(event) => openDossier(event.currentTarget)}
              onPointerEnter={() => showCursor("OPEN DOSSIER")}
              onPointerLeave={hideCursor}
            >
              <span>OPEN<br />FILE</span>
            </button>
          </article>

          <div className="desk-note desk-note-one" aria-hidden="true">NOT FINAL<br /><strong>KEEP THE LIMIT.</strong></div>
          <div className="desk-stamp" aria-hidden="true">REVIEWED<br />R—01</div>
        </div>
      </div>

      <div className="studio-hero-footer">
        <span>SCROLL / FOLLOW ONE QUESTION THROUGH SIX DECISIONS</span>
        <i />
        <span>↓</span>
      </div>
    </section>
  );
}
