type NavKey = "program" | "curriculum" | "mentors" | "resources" | "about";

type SiteHeaderProps = { active?: NavKey };

const nav = [
  ["program", "/program/", "Program"],
  ["curriculum", "/curriculum/", "Curriculum"],
  ["mentors", "/mentors/", "Mentors"],
  ["resources", "/resources/", "Resources"],
  ["about", "/about/", "About"],
] as const;

export function SiteHeader({ active }: SiteHeaderProps) {
  return (
    <header className="site-head">
      <a className="wordmark" href="/"><i aria-hidden="true">r</i>resurchIn</a>
      <nav>
        {nav.map(([key, href, label]) => (
          <a key={key} className={active === key ? "active" : ""} href={href}>{label}</a>
        ))}
      </nav>
      <a className="nav-apply" href="/apply/">Apply ↗</a>
      <button className="menu" aria-label="Toggle menu" aria-expanded="false"><span></span><span></span></button>
    </header>
  );
}
