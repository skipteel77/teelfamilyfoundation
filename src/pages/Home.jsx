import Hero from "../components/Hero";
import Mission from "../components/Mission";
import Impact from "../components/Impact";
import Grants from "../components/Grants";
import PartnerCTA from "../components/PartnerCTA";
import ImpactQuote from "../components/ImpactQuote";

export default function Home() {
  return (
    <>
      <Hero />
      <Mission />
      <Impact />
      <ImpactQuote />
      <Grants />
      <PartnerCTA />
    </>
  );
}
