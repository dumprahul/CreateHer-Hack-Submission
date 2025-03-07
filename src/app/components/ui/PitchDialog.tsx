"use client";
import React, { useState } from "react";
import { FileUploadDemo } from "./FileUploadDemo";
import { ColourfulText } from "./colourful-text";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";

export function PitchDialog() {
  const [title, setTitle] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [proposedSolution, setProposedSolution] = useState("");

  return (
    <div className="flex items-center justify-center">
      <Modal>
        <ModalTrigger>
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black text-sm">
            Pitch
          </button>
        </ModalTrigger>
        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-6">
            Can you be {" "}
            {/* <ColourfulText text="PITCH PERFECT ? "/> */}
            <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Pitch perfect ? 
              </span>

            </h4>

            {/* Form Fields */}
            <div className="space-y-3">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Title of the Venture
                </label>
                <input
                  id="title"
                  type="text"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="problem" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Problem Statement
                </label>
                <textarea
                  id="problem"
                  placeholder="Describe the problem"
                  value={problemStatement}
                  onChange={(e) => setProblemStatement(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="solution" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Proposed Solution
                </label>
                <textarea
                  id="solution"
                  placeholder="Describe your solution"
                  value={proposedSolution}
                  onChange={(e) => setProposedSolution(e.target.value)}
                  className="w-full mt-1 p-2 border rounded-lg bg-gray-100 dark:bg-gray-800 dark:text-white"
                />
              </div>
              <div>
                <FileUploadDemo/>
              </div>
            </div>

          {/* Footer Buttons */}          
            {/* <button className="bg-black text-white dark:bg-white ml-50 mt-3 dark:text-black text-sm px-4 py-2 rounded-md border border-black w-28">
              Submit
            </button> */}
            <button className="shadow-[0_0_0_3px_#000000_inset] mt-2 px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400">
                Submit 
            </button>
          
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}