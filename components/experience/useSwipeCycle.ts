"use client";

import { useRef, type PointerEventHandler } from "react";

export function useSwipeCycle(count: number, active: number, onChange: (next: number) => void) {
  const start = useRef<{ x: number; y: number; id: number } | null>(null);

  const onPointerDown: PointerEventHandler<HTMLElement> = (event) => {
    if (event.pointerType !== "touch") return;
    start.current = { x: event.clientX, y: event.clientY, id: event.pointerId };
  };

  const onPointerUp: PointerEventHandler<HTMLElement> = (event) => {
    const origin = start.current;
    start.current = null;
    if (!origin || origin.id !== event.pointerId) return;
    const dx = event.clientX - origin.x;
    const dy = event.clientY - origin.y;
    if (Math.abs(dx) < 44 || Math.abs(dx) < Math.abs(dy) * 1.25) return;
    const direction = dx < 0 ? 1 : -1;
    onChange((active + direction + count) % count);
  };

  const onPointerCancel: PointerEventHandler<HTMLElement> = () => {
    start.current = null;
  };

  return { onPointerDown, onPointerUp, onPointerCancel };
}
