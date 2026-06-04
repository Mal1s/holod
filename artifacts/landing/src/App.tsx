import React from "react";
import { HeroSection } from "./components/HeroSection";
import { WhySection } from "./components/WhySection";
import { PricingSection } from "./components/PricingSection";
import { ReviewsSection } from "./components/ReviewsSection";
import { SocialSection } from "./components/SocialSection";
import { FooterSection } from "./components/FooterSection";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <WhySection />
      <PricingSection />
      <ReviewsSection />
      <SocialSection />
      <FooterSection />
    </div>
  );
}

export default App;
