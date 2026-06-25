import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WhySection } from "./components/WhySection";
import { PricingSection } from "./components/PricingSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { AreaSection } from "./components/AreaSection";
import { SocialSection } from "./components/SocialSection";
import { FooterSection } from "./components/FooterSection";
import { MobileCallButton } from "./components/MobileCallButton";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhySection />
      <PricingSection />
      <ReviewsSection />
      <AreaSection />
      <SocialSection />
      <FooterSection />
      <MobileCallButton />
    </div>
  );
}

export default App;
