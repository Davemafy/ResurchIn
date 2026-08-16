"use client";

import type { ReactNode } from "react";
import { useReveal } from "./useReveal";

export function RevealArticle({ children, className = "" }: { children: ReactNode; className?: string }) {
  const { ref, seen } = useReveal<HTMLElement>();
  return (
    <article ref={ref} className={`${className}${className ? " " : ""}quiet-reveal${seen ? " seen" : ""}`}>
      {children}
    </article>
  );
}
