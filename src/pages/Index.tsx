import HeroSection from "@/components/HeroSection";
import DigitalSignageSection from "@/components/DigitalSignageSection";
import SmartSignageSection from "@/components/SmartSignageSection";
import AiAgentSection from "@/components/AiAgentSection";
import FooterSection from "@/components/FooterSection";
import SectionDivider from "@/components/SectionDivider";

const Index = () => (
  <div className="min-h-screen">
    <HeroSection />
    <SectionDivider />
    <DigitalSignageSection />
    <SectionDivider />
    <SmartSignageSection />
    <SectionDivider />
    <AiAgentSection />
    <FooterSection />
  </div>
);

export default Index;
