import React from "react";
import { HeroSection } from "./components/HeroSection";
import { DiagnosticsSection } from "./components/DiagnosticsSection";
import { TrustSection } from "./components/TrustSection";
import { PricingSection } from "./components/PricingSection";
import { FooterSection } from "./components/FooterSection";
import { CustomCursor } from "./components/CustomCursor";
import { ScrollProgress } from "./components/ScrollProgress";

function App() {
  return (
    <>
      <CustomCursor />
      <ScrollProgress />
      <div className="w-full h-screen overflow-y-scroll snap-y snap-mandatory bg-black text-white selection:bg-[#004FFF] selection:text-white">
        <HeroSection />
        <DiagnosticsSection />
        <TrustSection />
        <PricingSection />
        <FooterSection />
      </div>
    </>
  );
}

export default App;
