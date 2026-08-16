import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Apply", description: "Apply to the next ResurchIn research apprenticeship cohort." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
