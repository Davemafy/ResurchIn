"use client";

import Link from "next/link";
import { useCallback } from "react";
import { useHomeExperience } from "./HomeExperience";

export function ClosingSection() {
  const { registerSection } = useHomeExperience();
  const setRef = useCallback((node: HTMLElement | null) => registerSection(4, node), [registerSection]);
  return (
    <section ref={setRef} className="v14-closing">
      <p>ADMISSIONS / NEXT COHORT</p>
      <h2>Bring the question<br />you cannot leave alone</h2>
      <Link className="button light" href="/apply/">Submit an application ↗</Link>
      <div className="closing-dots" />
    </section>
  );
}
