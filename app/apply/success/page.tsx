import "../../inner.css";
import type { Metadata } from "next";
import { PageClass } from "@/components/PageClass";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Application received — ResurchIn",
  description: "Research training built around practice, mentorship and real work.",
};

export default function Page() {
  return (
    <>
      <PageClass className={""} />
      <SiteHeader />
    <main>
      <section className={"success"}>
        <p className={"kicker"}>APPLICATION RECEIVED</p>
        <span>✓</span>
        <h1>
          Your first step
          <br />
          is already evidence.
        </h1>
        <p>Thanks for applying. We have your response and will contact you using the email you provided.</p>
        <a className={"button"} href={"/resources/"}>Read a field guide ↗</a>
      </section>
    </main>
      <SiteFooter />
    </>
  );
}
