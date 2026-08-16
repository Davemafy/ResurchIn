"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from "react";

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
  const headerRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    let frame = 0;
    const updateCompact = () => {
      setCompact(window.scrollY > 48);
      frame = 0;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(updateCompact);
    };
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        window.requestAnimationFrame(() => menuRef.current?.focus());
      }
    };
    const onResize = () => {
      if (window.innerWidth > 920) setOpen(false);
    };

    updateCompact();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKeyDown);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (open) {
      window.requestAnimationFrame(() => {
        headerRef.current?.querySelector<HTMLElement>("nav a")?.focus();
      });
    }
    return () => document.body.classList.remove("menu-open");
  }, [open]);

  const trapOpenMenuFocus = (event: ReactKeyboardEvent<HTMLElement>) => {
    if (!open || event.key !== "Tab" || !headerRef.current) return;
    const focusable = Array.from(
      headerRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'),
    ).filter((node) => node.offsetParent !== null);
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <header
      ref={headerRef}
      onKeyDown={trapOpenMenuFocus}
      className={`site-head${open ? " open" : ""}${compact ? " compact" : ""}`}
      data-active={active ?? "home"}
    >
      <div className="site-brand">
        <Link className="wordmark" href="/" onClick={() => setOpen(false)}>
          <i aria-hidden="true">r</i>resurchIn
        </Link>
        <span className="brand-office">RESEARCH APPRENTICESHIP / 2026</span>
      </div>

      <nav id="primary-navigation" aria-label="Primary navigation">
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
        ref={menuRef}
        className="menu"
        type="button"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-controls="primary-navigation"
        aria-expanded={open}
        onClick={() => setOpen((value) => !value)}
      >
        <span />
        <span />
      </button>
    </header>
  );
}
