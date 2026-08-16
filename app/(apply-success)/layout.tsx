import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = { title: "Application received — ResurchIn", description: "Your ResurchIn application has been received." };

export default function Layout({ children }: { children: ReactNode }) {
  return children;
}
