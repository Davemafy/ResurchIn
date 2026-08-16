"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type NavSection = "program" | "curriculum" | "mentors" | "community" | "resources" | "about";

const links: Array<{ href: string; label: string; section: NavSection; index: string }> = [
  { href: "/program/", label: "Program", section: "program", index: "01" },
  { href: "/curriculum/", label: "Curriculum", section: "curriculum", index: "02" },
  { href: "/mentors/", label: "Mentors", section: "mentors", index: "03" },
  { href: "/community/", label: "Community", section: "community", index: "04" },
  { href: "/resources/", label: "Field notes", section: "resources", index: "05" },
  { href: "/about/", label: "About", section: "about", index: "06" },
];

export function SiteHeader({ active }: { active?: NavSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-lock", open);
    return () => document.documentElement.classList.remove("menu-lock");
  }, [open]);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className={`pf-nav${open ? " is-open" : ""}${scrolled ? " is-scrolled" : ""}`}>
        <Link className="pf-wordmark" href="/" onClick={() => setOpen(false)} aria-label="ResurchIn home">
          <span className="pf-wordmark-mark" aria-hidden="true"><i /></span>
          <span>resurchIn</span>
        </Link>

        <div className="pf-nav-status" aria-hidden="true"><span>RESEARCH APPRENTICESHIP</span><span>OPEN WORLDWIDE / 2026</span></div>

        <nav className="pf-nav-links" aria-label="Primary navigation">
          {links.map((link) => (
            <Link key={link.href} className={active === link.section ? "active" : undefined} href={link.href} onClick={() => setOpen(false)}>
              <small>{link.index}</small><span>{link.label}</span>
            </Link>
          ))}
        </nav>

        <Link className="pf-nav-apply" href="/apply/" onClick={() => setOpen(false)}>Apply <span>↗</span></Link>

        <button className="pf-menu" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((value) => !value)}>
          <span /><span />
        </button>
      </header>

      <div className={`pf-mobile-nav${open ? " is-open" : ""}`} aria-hidden={!open}>
        <div className="pf-mobile-meta"><span>RESURCHIN / NAVIGATION</span><span>R—01 / 2026</span></div>
        <nav aria-label="Mobile navigation">
          {links.map((link) => (
            <Link key={link.href} className={active === link.section ? "active" : undefined} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <small>{link.index}</small><span>{link.label}</span><b>↗</b>
            </Link>
          ))}
        </nav>
        <Link className="pf-mobile-apply" href="/apply/" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Bring the question <span>↗</span></Link>
        <p>FREE / VOLUNTEER-LED / SIX MONTHS</p>
      </div>
    </>
  );
}
