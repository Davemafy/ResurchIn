import { AwardsHome } from "@/components/direction/AwardsHome";
import { SiteFooter } from "@/components/site/SiteFooter";
import { SiteHeader } from "@/components/site/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <AwardsHome />
      <SiteFooter variant="home" />
    </>
  );
}
