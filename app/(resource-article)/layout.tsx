import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "How to read a research paper — ResurchIn", description: "A six-pass method for reading research papers without getting lost." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
