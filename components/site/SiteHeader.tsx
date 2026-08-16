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
    <header className={`site-head${open ? " open" : ""}${compact ? " compact" : ""}`}>
      <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
        <i aria-hidden="true">r</i>resurchIn
      </Link>
      <nav>
        {links.map((link) => (
          <Link
            key={link.href}
            className={active === link.section ? "active" : undefined}
            href={link.href}
            onClick={() => setOpen(false)}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <Link className="nav-apply" href="/apply/" onClick={() => setOpen(false)}>
        Apply ↗
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
