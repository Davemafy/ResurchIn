import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: { absolute: "ResurchIn — Find the question. Earn the claim." }, description: "A free six-month research apprenticeship for emerging researchers." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
