import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Curriculum — ResurchIn", description: "Move one research question through six acts of judgment." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
