
"use client";
import React from "react";
// import { SparklesCore } from "@/components/ui/Sparkles";
import { GlobeDemo } from "../components/ui/GlobeDemo";
// import { CanvasRevealEffectDemo } from "@/components/ui/CanvasRevealEffectDemo";
import { AnimatedTestimonialsDemo } from "../components/ui/AnimatedTestimonialsDemo";
import { FeaturesSectionDemo } from "../components/ui/FeaturesSectionDemo";
// import { Vortex } from "@/components/ui/vortex";
import { HeroHighlightDemo } from "../components/ui/HeroHighlightDemo";


export default function HomePage() {
  return (
    <div className="w-full bg-black">
    {/* <div className="w-full bg-gradient-to-b from-blue-900 via-purple-800 to-black"> */}

      {/* Sparkles Section */}
      {/* <section className="h-screen flex flex-col  overflow-hidden items-center justify-center relative">
      <Vortex
        backgroundColor="black"
        className="flex items-center flex-col justify-center px-2 md:px-10 py-4 w-full h-full overflow-hidden"
      >
        <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white mt-20 relative z-20 font-[Playfair]">
        SheFunded
        </h1>

      </Vortex>
      
      </section> */}

<section className="h-screen flex flex-col overflow-hidden items-center justify-center relative">
        <HeroHighlightDemo />
      </section>

      {/* Globe Section */}
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
      © {new Date().getFullYear()} SheFunded. All rights reserved.
    </p>
  </div>
</footer>

    </div>
  );
}