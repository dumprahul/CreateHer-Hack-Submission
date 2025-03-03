"use client";

import { motion } from "framer-motion";
import React from "react";
import { useState } from "react"
import { AuroraBackground } from "./components/aurora-background";
import { startVerification } from "./components/startverification";

export default function AuroraBackgroundDemo() {
  const [result, setResult] = useState<any>()
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center text-white">
          verify your identity through zk.
        </div>
        <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4 text-white">
          Click verify to get verified without revealing your details.
        </div>
        
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2" onClick={() => startVerification(setResult)} >
          Verify your X 
        </button>
        {result && <pre className="text-white">{JSON.stringify(result, null, 2)}</pre>}

      </motion.div>
    </AuroraBackground>
  );
}
