import Link from "next/link";

export function SiteFooter({ variant = "inner" }: { variant?: "home" | "inner" }) {
  return (
    <footer className={`instrument-footer ${variant}`}>
      <div className="footer-topline">
        <span>RESURCHIN / RESEARCH APPRENTICESHIP</span>
        <span>US-BASED / OPEN WORLDWIDE</span>
        <span>2026 / COHORT 01</span>
      </div>

      <div className="footer-signal" aria-label="ResurchIn — Find the question. Earn the claim.">
        <span>FIND THE</span>
        <em>QUESTION.</em>
        <span>EARN THE</span>
        <em>CLAIM.</em>
      </div>

      <div className="footer-grid">
        <Link className="instrument-wordmark footer-mark" href="/">
          <span className="mark-dot" aria-hidden="true" />
          resurchIn
        </Link>
        <p>Research is learned by doing it, showing it, revising it and defending what the evidence can actually hold.</p>
        <div>
          <Link href="/program/">Program</Link>
          <Link href="/curriculum/">Curriculum</Link>
          <Link href="/mentors/">Mentors</Link>
          <Link href="/community/">Community</Link>
        </div>
        <div>
          <Link href="/resources/">Field notes</Link>
          <Link href="/about/">About</Link>
          <Link href="/apply/">Apply</Link>
          <a href="https://www.instagram.com/resurchinhub/" target="_blank" rel="noreferrer">Instagram ↗</a>
        </div>
      </div>

      <div className="footer-base">
        <span>FREE / VOLUNTEER-LED / SIX MONTHS</span>
        <span>© 2026 RESURCHIN</span>
        <span>Photography: Pexels contributors</span>
      </div>
    </footer>
  );
}
