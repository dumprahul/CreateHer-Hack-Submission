"use client";
import { TypewriterEffect } from "../ui/typewriter-effect";
import { PitchDialog } from "./PitchDialog";
import { useRouter } from "next/navigation";

export function TypewriterEffectDemo() {
  const router = useRouter();
  const words = [
    {
      text: "Now",
    },
    {
      text: "get",
    },
    {
      text: "ready",
    },
    {
      text: "to",
    },
    {
        text: "make",
    },
    {
        text: "your",
    },
    {
      text: "Pitch.",
      className: "text-blue-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base lg:text-xl mb-10">
        Congratulations on getting verified!!
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button 
        onClick={() => router.push("/home")}
        className="w-40 h-10 mt-2 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
          Go back
        </button>
        <PitchDialog />
      </div>
    </div>
  );
}