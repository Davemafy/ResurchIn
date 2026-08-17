"use client";

import Link from "next/link";
import { useCallback, useState, type CSSProperties, type PointerEvent } from "react";
import { useHomeExperience } from "./HomeExperience";

type OrbitStyle = CSSProperties & { "--ry"?: string; "--rx"?: string };

export function HeroExperience() {
  const { openDossier, registerSection, showCursor, hideCursor } = useHomeExperience();
  const [orbitStyle, setOrbitStyle] = useState<OrbitStyle>({ "--ry": "1.5deg", "--rx": "-1deg" });

  const setHeroRef = useCallback((node: HTMLElement | null) => registerSection(0, node), [registerSection]);

  const moveOrbit = (event: PointerEvent<HTMLDivElement>) => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - rect.left) / rect.width - 0.5) * 3;
    const y = ((event.clientY - rect.top) / rect.height - 0.5) * -2.5;
    setOrbitStyle({ "--ry": `${x}deg`, "--rx": `${y}deg` });
  };

  return (
    <section ref={setHeroRef} className="v14-hero">
      <div className="v14-meta">
        <span>RESURCHIN / RESEARCH APPRENTICESHIP</span>
        <span>US-BASED / OPEN WORLDWIDE</span>
        <span>2026 PROGRAM DOSSIER</span>
      </div>
      <div className="v14-headline">
        <p className="kicker">SIX MONTHS / GUIDED SUPPORT / HANDS-ON PROJECTS</p>
        <h1><span className="hero-title-main">Research is a skill.</span><em>Practice it here.</em></h1>
      </div>
      <div className="v14-hero-bottom">
        <p>Structured training, real data and guidance from experienced researchers. Free, volunteer-driven and open worldwide.</p>
        <Link className="button" href="/program/">See how it works ↗</Link>
        <button
          className="sample-trigger"
          type="button"
          onClick={(event) => openDossier(event.currentTarget)}
          onPointerEnter={() => showCursor("OPEN SAMPLE")}
          onPointerLeave={hideCursor}
        >
          Open a sample dossier <span>↗</span>
        </button>
      </div>
      <ol className="hero-method-track" aria-label="How the apprenticeship works">
        <li><b>01 / FRAME</b><span>Turn an interest into a researchable question.</span></li>
        <li><b>02 / TEST</b><span>Work through evidence, method and real data.</span></li>
        <li><b>03 / DEFEND</b><span>Revise the claim until the evidence can hold it.</span></li>
      </ol>
      <div
        className="document-orbit"
        style={orbitStyle}
        onPointerMove={moveOrbit}
        onPointerLeave={() => setOrbitStyle({ "--ry": "1.5deg", "--rx": "-1deg" })}
      >
        <div className="orbit-dots" />
        <div className="orbit-index">R—01<br />WORKING<br />DOCUMENT</div>
        <article className="hero-paper">
          <header><span>RESURCHIN / WORKING PAPER</span><span>REVISION 06</span></header>
          <p className="paper-field">PUBLIC HEALTH / STUDY 01</p>
          <h2>From a broad concern to a claim the evidence can hold.</h2>
          <div className="paper-abstract"><b>ABSTRACT</b><span /><span /><span /><span /></div>
          <figure><img src="/assets/images/pexels-9243385-w1400.avif" alt="" /><figcaption>FIELD IMAGE / METHOD OBSERVATION</figcaption></figure>
          <mark>What can the result actually support?</mark>
          <aside>MENTOR NOTE 04<br /><strong>NARROW THE CLAIM.</strong></aside>
          <footer><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></footer>
          <button
            className="paper-hotspot"
            type="button"
            aria-label="Open the sample research dossier"
            onClick={(event) => openDossier(event.currentTarget)}
            onPointerEnter={() => showCursor("OPEN SAMPLE")}
            onPointerLeave={hideCursor}
          >
            <span>OPEN<br />DOSSIER</span>
          </button>
        </article>
        <div className="orbit-stamp">REVIEWED<br />NOT FINAL</div>
      </div>
      <div className="v14-scroll"><span>SCROLL TO BUILD THE DOCUMENT</span><i /></div>
    </section>
  );
}
