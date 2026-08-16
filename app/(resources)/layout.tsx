import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Field Notes", description: "Open research field guides for emerging researchers." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
