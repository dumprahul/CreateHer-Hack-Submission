"use client";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "./hero-highlight";
import { AnimatedModalDemo } from "./AnimatedModalDemo";

export function HeroHighlightDemo() {
  return (
    <HeroHighlight>
      <h1 className="text-2xl px-4 md:text-4xl mt-2 lg:text-9xl font-bold text-neutral-700 font-sans dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto " >
      SheFunded
      </h1>
      <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-2xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto " >
        A decentralised platform where your idea — not your identity — gets you funded through{" "}
        <Highlight className="text-black dark:text-white">
          Zero Knowledge Proofs and ICP
        </Highlight>
      </motion.h1>
      <div className="relative mt-3 ">
        <AnimatedModalDemo />
      </div>
    </HeroHighlight>
  );
}