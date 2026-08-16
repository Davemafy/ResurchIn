import { ProofHome } from "@/components/experience/ProofHome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <ProofHome />
      <SiteFooter variant="home" />
    </>
  );
}
