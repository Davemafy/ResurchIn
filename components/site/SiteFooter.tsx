import Link from "next/link";

type FooterVariant = "home" | "inner";

export function SiteFooter({ variant = "inner" }: { variant?: FooterVariant }) {
  const home = variant === "home";

  return (
    <footer>
      <div className="footer-main">
        <Link className="wordmark" href="/">
          <i aria-hidden="true">r</i>resurchIn
        </Link>
        <p>US-based.<br />Open to emerging researchers everywhere.</p>
        <div>
          <Link href="/program/">{home ? "Program dossier" : "Program"}</Link>
          <Link href="/community/">Community</Link>
          <Link href="/resources/">{home ? "Research notes" : "Resources"}</Link>
          <Link href="/apply/">{home ? "Admissions" : "Apply"}</Link>
        </div>
      </div>
      <div className="footer-base">
        <span>FREE / VOLUNTEER-LED / SIX MONTHS</span>
        <span>© 2026 RESURCHIN</span>
        <span>{home ? "Editorial photography: Pexels contributors" : "Photography: Pexels contributors"}</span>
      </div>
    </footer>
  );
}
