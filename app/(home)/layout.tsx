import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "ResurchIn — Turn curiosity into proof.", description: "A free six-month research apprenticeship for emerging researchers." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
