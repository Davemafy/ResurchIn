"use client";

import { useEffect } from "react";

export function PageReady() {
  useEffect(() => {
    const frame = requestAnimationFrame(() => document.body.classList.add("v16-ready"));
    return () => {
      cancelAnimationFrame(frame);
      document.body.classList.remove("v16-ready");
    };
  }, []);

  return null;
}
