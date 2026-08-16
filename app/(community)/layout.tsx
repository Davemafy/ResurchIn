import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Community — ResurchIn", description: "A room for unfinished questions, peer review and research conversation." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
