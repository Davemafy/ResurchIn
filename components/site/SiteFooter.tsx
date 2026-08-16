import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="rv-footer">
      <div className="rv-footer-statement">
        <span>RESURCHIN / VERSION HISTORY</span>
        <p>Bring V01.<br /><em>Leave with V06.</em></p>
      </div>
      <div className="rv-footer-main">
        <Link className="rv-brand rv-footer-brand" href="/"><span className="rv-brand-mark" aria-hidden="true"><i /></span><b>resurchIn</b></Link>
        <p>A free six-month research apprenticeship built around one project, close review and visible revision.</p>
        <nav aria-label="Footer navigation">
          <Link href="/program/">Program</Link><Link href="/curriculum/">Curriculum</Link><Link href="/mentors/">Mentors</Link><Link href="/community/">Community</Link><Link href="/resources/">Field notes</Link><Link href="/about/">About</Link>
        </nav>
      </div>
      <div className="rv-footer-base"><span>R—01 / QUESTION → EVIDENCE → LIMIT</span><span>© 2026 RESURCHIN</span><span>FREE / VOLUNTEER-LED / OPEN WORLDWIDE</span></div>
    </footer>
  );
}
