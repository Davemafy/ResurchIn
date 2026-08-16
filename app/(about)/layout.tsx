import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "About — ResurchIn", description: "Why ResurchIn exists and what the program protects." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
