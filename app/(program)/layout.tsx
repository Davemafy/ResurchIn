import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Program", description: "Twenty-four weeks. One research question under review." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
