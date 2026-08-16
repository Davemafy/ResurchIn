import Link from "next/link";

export function SiteFooter({ variant = "inner" }: { variant?: "home" | "inner" }) {
  return (
    <footer className={`pf-footer ${variant}`}>
      <div className="pf-footer-meta"><span>RESURCHIN / RESEARCH APPRENTICESHIP</span><span>US-BASED / OPEN WORLDWIDE</span><span>2026 / COHORT 01</span></div>
      <div className="pf-footer-statement" aria-label="Find the question. Earn the claim.">
        <span>FIND THE</span><em>QUESTION.</em><span>EARN THE</span><em>CLAIM.</em>
      </div>
      <div className="pf-footer-grid">
        <Link className="pf-wordmark pf-footer-wordmark" href="/"><span className="pf-wordmark-mark" aria-hidden="true"><i /></span><span>resurchIn</span></Link>
        <p>Research is learned by doing it, showing it, revising it and defending what the evidence can actually hold.</p>
        <nav aria-label="Footer navigation">
          <Link href="/program/">Program</Link><Link href="/curriculum/">Curriculum</Link><Link href="/mentors/">Mentors</Link><Link href="/community/">Community</Link>
        </nav>
        <nav aria-label="More links">
          <Link href="/resources/">Field notes</Link><Link href="/about/">About</Link><Link href="/apply/">Apply</Link><a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </nav>
      </div>
      <div className="pf-footer-base"><span>FREE / VOLUNTEER-LED / SIX MONTHS</span><span>© 2026 RESURCHIN</span><span>Editorial photography: Pexels contributors</span></div>
    </footer>
  );
}
