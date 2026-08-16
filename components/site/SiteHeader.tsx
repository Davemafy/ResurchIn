"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type NavSection = "program" | "curriculum" | "mentors" | "resources" | "about";

const links: Array<{ href: string; label: string; section: NavSection }> = [
  { href: "/program/", label: "Program", section: "program" },
  { href: "/curriculum/", label: "Curriculum", section: "curriculum" },
  { href: "/mentors/", label: "Mentors", section: "mentors" },
  { href: "/resources/", label: "Resources", section: "resources" },
  { href: "/about/", label: "About", section: "about" },
];

export function SiteHeader({ active }: { active?: NavSection }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", close);
    document.body.dataset.menuOpen = open ? "true" : "false";
    return () => {
      window.removeEventListener("keydown", close);
      delete document.body.dataset.menuOpen;
    };
  }, [open]);

  return (
    <header className="rv-header">
      <Link className="rv-brand" href="/" onClick={() => setOpen(false)} aria-label="ResurchIn home">
        <span className="rv-brand-mark" aria-hidden="true"><i /></span>
        <b>resurchIn</b>
        <small>RESEARCH<br />APPRENTICESHIP / 2026</small>
      </Link>
      <nav className="rv-nav" aria-label="Primary navigation">
        {links.map((link, index) => (
          <Link key={link.href} href={link.href} className={active === link.section ? "is-active" : undefined}>
            <small>0{index + 1}</small>{link.label}
          </Link>
        ))}
      </nav>
      <span className="rv-nav-office" aria-hidden="true">FIELD OFFICE / OPEN WORLDWIDE</span>
      <Link className="rv-nav-apply" href="/apply/">Bring V01 <span>↗</span></Link>
      <button className="rv-menu-button" type="button" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(v => !v)}>
        <span /><span />
      </button>
      <div className={`rv-mobile-menu${open ? " is-open" : ""}`} aria-hidden={!open}>
        <p>RESURCHIN / NAVIGATION</p>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
              <small>0{index + 1}</small><span>{link.label}</span><b>↗</b>
            </Link>
          ))}
          <Link href="/community/" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>
            <small>06</small><span>Community</span><b>↗</b>
          </Link>
        </nav>
        <Link className="rv-mobile-apply" href="/apply/" onClick={() => setOpen(false)} tabIndex={open ? 0 : -1}>Bring V01 <span>↗</span></Link>
        <span>FREE / SIX MONTHS / OPEN WORLDWIDE</span>
      </div>
    </header>
  );
}
