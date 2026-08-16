"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type NavSection = "program" | "curriculum" | "mentors" | "resources" | "about";

const links: Array<{ href: string; label: string; section: NavSection; index: string }> = [
  { href: "/program/", label: "Program", section: "program", index: "01" },
  { href: "/curriculum/", label: "Curriculum", section: "curriculum", index: "02" },
  { href: "/mentors/", label: "Mentors", section: "mentors", index: "03" },
  { href: "/resources/", label: "Field notes", section: "resources", index: "04" },
  { href: "/about/", label: "About", section: "about", index: "05" },
];

export function SiteHeader({ active }: { active?: NavSection }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`instrument-nav${open ? " is-open" : ""}${scrolled ? " is-scrolled" : ""}`}>
      <Link className="instrument-wordmark" href="/" onClick={() => setOpen(false)}>
        <span className="mark-dot" aria-hidden="true" />
        resurchIn
      </Link>

      <div className="nav-status" aria-hidden="true">
        <span>RESEARCH APPRENTICESHIP</span>
        <span>OPEN WORLDWIDE / 2026</span>
      </div>

      <nav className="instrument-links" aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            className={active === link.section ? "active" : undefined}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            <small>{link.index}</small>
            <span>{link.label}</span>
          </Link>
        ))}
      </nav>

      <Link className="instrument-apply" href="/apply/" onClick={() => setOpen(false)}>
        Apply <span aria-hidden="true">↗</span>
      </Link>

      <button
        className="instrument-menu"
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
