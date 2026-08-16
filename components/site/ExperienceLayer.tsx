"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const sectionLabels: Record<string, string> = {
  "/": "FIELD / 01",
  "/program/": "PROGRAM / 01",
  "/curriculum/": "CURRICULUM / 02",
  "/mentors/": "MENTORS / 03",
  "/community/": "COMMUNITY / 04",
  "/resources/": "FIELD NOTES / 05",
  "/about/": "ABOUT / 06",
  "/apply/": "ADMISSIONS / 07",
};

export function ExperienceLayer() {
  const pathname = usePathname();
  const router = useRouter();
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorTextRef = useRef<HTMLSpanElement>(null);
  const [intro, setIntro] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    root.classList.toggle("has-fine-pointer", finePointer);

    try {
      if (!sessionStorage.getItem("resurchin-intro-seen")) {
        setIntro(true);
        sessionStorage.setItem("resurchin-intro-seen", "1");
        const timer = window.setTimeout(() => setIntro(false), 1700);
        return () => window.clearTimeout(timer);
      }
    } catch {
      // Session storage can be unavailable in strict browsing modes.
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.dataset.route = pathname || "/";
    root.classList.remove("route-exit");
    root.classList.add("route-enter");
    const timer = window.setTimeout(() => root.classList.remove("route-enter"), 720);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
      const anchor = (event.target as HTMLElement | null)?.closest<HTMLAnchorElement>("a[href]");
      if (!anchor || anchor.target === "_blank" || anchor.hasAttribute("download")) return;
      const url = new URL(anchor.href, window.location.href);
      if (url.origin !== window.location.origin || url.pathname === window.location.pathname || url.hash) return;
      event.preventDefault();
      document.documentElement.classList.add("route-exit");
      window.setTimeout(() => router.push(`${url.pathname}${url.search}${url.hash}`), 360);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [router]);

  useEffect(() => {
    const revealNodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (!revealNodes.length || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.target.classList.toggle("is-visible", entry.isIntersecting)),
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    revealNodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    let frame = 0;
    const parallaxNodes = () => Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    let nodes = parallaxNodes();

    const update = () => {
      const center = window.innerHeight / 2;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const depth = Number(node.dataset.parallax || 0.06);
        const offset = (center - (rect.top + rect.height / 2)) * depth;
        node.style.setProperty("--parallax-y", `${Math.max(-90, Math.min(90, offset))}px`);
      });
      frame = 0;
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const onResize = () => {
      nodes = parallaxNodes();
      onScroll();
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [pathname]);

  useEffect(() => {
    const cursor = cursorRef.current;
    const label = cursorTextRef.current;
    if (!cursor || !label || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let x = -120;
    let y = -120;
    let tx = x;
    let ty = y;
    let raf = 0;

    const render = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = requestAnimationFrame(render);
    };
    const onMove = (event: PointerEvent) => {
      tx = event.clientX;
      ty = event.clientY;
      cursor.classList.add("is-active");
    };
    const onOver = (event: Event) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      const value = target?.dataset.cursor;
      label.textContent = value || "VIEW";
      cursor.classList.toggle("is-context", Boolean(value));
    };
    const onOut = (event: Event) => {
      const related = (event as MouseEvent).relatedTarget as HTMLElement | null;
      if (!related?.closest?.("[data-cursor]")) {
        label.textContent = "VIEW";
        cursor.classList.remove("is-context");
      }
    };

    raf = requestAnimationFrame(render);
    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver);
    document.addEventListener("pointerout", onOut);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.removeEventListener("pointerout", onOut);
    };
  }, [pathname]);

  return (
    <>
      <div className={`pf-intro${intro ? " is-running" : ""}`} aria-hidden={!intro}>
        <div className="pf-intro-grid" />
        <div className="pf-intro-word">resurchIn</div>
        <div className="pf-intro-question"><span>QUESTION</span><i /><span>EVIDENCE</span><i /><span>LIMIT</span></div>
        <div className="pf-intro-route">{sectionLabels[pathname || "/"] || "RESURCHIN / 2026"}</div>
      </div>
      <div className="pf-cursor" ref={cursorRef} aria-hidden="true"><span ref={cursorTextRef}>VIEW</span></div>
      <div className="pf-route-curtain" aria-hidden="true" />
    </>
  );
}
