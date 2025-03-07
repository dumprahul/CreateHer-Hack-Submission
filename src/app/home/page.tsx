"use client";
// import React from "react";
// // import { SparklesCore } from "@/components/ui/Sparkles";
// import { GlobeDemo } from "../components/ui/GlobeDemo";
// // import { CanvasRevealEffectDemo } from "@/components/ui/CanvasRevealEffectDemo";
// import { AnimatedTestimonialsDemo } from "../components/ui/AnimatedTestimonialsDemo";
// import { FeaturesSectionDemo } from "../components/ui/FeaturesSectionDemo";
// // import { Vortex } from "@/components/ui/vortex";
// import { HeroHighlightDemo } from "../components/ui/HeroHighlightDemo";

import React from "react";
import { GlobeDemo } from "../components/ui/GlobeDemo";
import { AnimatedTestimonialsDemo } from "../components/ui/AnimatedTestimonialsDemo";
import { FeaturesSectionDemo } from "../components/ui/FeaturesSectionDemo";
import { HeroHighlightDemo } from "../components/ui/HeroHighlightDemo";
import { BackgroundLines } from "../components/ui/background-lines";

export default function HomePage() {
  return (
    <div className="w-full bg-black">
<BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
<section className="h-screen flex flex-col overflow-hidden items-center justify-center relative">
        <HeroHighlightDemo />
      </section>
    </BackgroundLines>  

      <section className="min-h-screen flex items-center justify-center">
        <GlobeDemo />
      </section>

      <section className="relative py-5">      
      <FeaturesSectionDemo />
      </section>

      <section className="h-screen flex items-center justify-center mt-[-9rem]">
        <AnimatedTestimonialsDemo />
    </section>
<hr></hr>
    {/* Footer Section */}
<footer className="w-full bg-black text-white py-8">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h3 className="text-xl md:text-2xl font-semibold">SheFunded</h3>
    <p className="text-sm md:text-base text-neutral-400 mt-2">
      Building the future, one block at a time.
    </p>
    <div className="flex justify-center gap-4 mt-4">
      <a href="#" className="text-neutral-400 hover:text-white transition">
        Privacy Policy
      </a>
      <a href="#" className="text-neutral-400 hover:text-white transition">
        Terms of Service
      </a>
      <a href="#" className="text-neutral-400 hover:text-white transition">
        Contact
      </a>
    </div>
    <p className="text-xs text-neutral-500 mt-2">
      ©️ {new Date().getFullYear()} SheFunded. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}