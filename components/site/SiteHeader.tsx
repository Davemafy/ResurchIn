"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export type NavSection = "program" | "curriculum" | "mentors" | "resources" | "about";

const links: Array<{ href: string; label: string; section: NavSection; index: string }> = [
  { href: "/program/", label: "Program", section: "program", index: "01" },
  { href: "/curriculum/", label: "Curriculum", section: "curriculum", index: "02" },
  { href: "/mentors/", label: "Mentors", section: "mentors", index: "03" },
  { href: "/resources/", label: "Resources", section: "resources", index: "04" },
  { href: "/about/", label: "About", section: "about", index: "05" },
];

export function SiteHeader({ active }: { active?: NavSection }) {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 48);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  return (
    <header
      className={`site-head${open ? " open" : ""}${compact ? " compact" : ""}`}
      data-active={active ?? "home"}
    >
      <div className="site-brand">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          <i aria-hidden="true">r</i>resurchIn
        </Link>
        <span className="brand-office">RESEARCH APPRENTICESHIP / 2026</span>
      </div>

      <nav aria-label="Primary navigation">
        {links.map((link) => (
          <Link
            key={link.href}
            className={active === link.section ? "active" : undefined}
            href={link.href}
            onClick={() => setOpen(false)}
            data-index={link.index}
          >
            <span aria-hidden="true">{link.index}</span>
            {link.label}
          </Link>
        ))}
      </nav>

      <span className="nav-edition" aria-hidden="true">FIELD OFFICE / OPEN WORLDWIDE</span>

      <Link className="nav-apply" href="/apply/" onClick={() => setOpen(false)}>
        Apply <span aria-hidden="true">↗</span>
      </Link>

      <button
        className="menu"
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
