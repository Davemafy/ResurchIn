type SiteFooterProps = { editorial?: boolean };

export function SiteFooter({ editorial = false }: SiteFooterProps) {
  return (
    <footer>
      <div className="footer-main">
        <a className="wordmark" href="/"><i aria-hidden="true">r</i>resurchIn</a>
        <p>US-based.<br />Open to emerging researchers everywhere.</p>
        <div>
          <a href="/program/">{editorial ? "Program dossier" : "Program"}</a>
          <a href="/community/">Community</a>
          <a href="/resources/">{editorial ? "Research notes" : "Resources"}</a>
          <a href="/apply/">{editorial ? "Admissions" : "Apply"}</a>
        </div>
      </div>
      <div className="footer-base">
        <span>FREE / VOLUNTEER-LED / SIX MONTHS</span>
        <span>© 2026 RESURCHIN</span>
        <span>{editorial ? "Editorial photography: Pexels contributors" : "Photography: Pexels contributors"}</span>
      </div>
    </footer>
  );
}
