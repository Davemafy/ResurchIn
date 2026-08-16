import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Mentors", description: "Close reading, useful critique and document-specific research feedback." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
