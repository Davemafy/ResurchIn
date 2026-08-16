"use client";

import { useLayoutEffect } from "react";

const pageClasses = [
  "home-v16", "home-v17", "inner-page", "about-page", "program-page",
  "curriculum-page", "mentors-page", "community-page", "resources-page",
];

export function PageClass({ className }: { className: string }) {
  useLayoutEffect(() => {
    document.body.classList.remove(...pageClasses);
    const next = className.split(/\s+/).filter(Boolean);
    if (next.length) document.body.classList.add(...next);
    return () => document.body.classList.remove(...next);
  }, [className]);

  return null;
}
