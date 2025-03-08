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
import axios from 'axios'; 
import { backendActor } from "../../../utils/icp";


export function PitchDialog() {
  const [title, setTitle] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [proposedSolution, setProposedSolution] = useState("");
  const [ipfsLink, setIpfsLink] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  // Log IPFS link when it's uploaded
  const handleIpfsLinkUpload = (link: string) => {
    console.log("Received IPFS link: ", link);
    setIpfsLink(link);
  };

  // Submit form logic (when the submit button is clicked)
  const handleSubmit = async () => {
    if (!title || !problemStatement || !proposedSolution || !ipfsLink) {
      alert("Please fill in all the fields.");
      return;
    }

    try {
      // Assuming backendActor.storeIdea is your backend call
      const ideaName = title;
      const description = proposedSolution;
      const pptLink = ipfsLink;  // Use IPFS link as ppt link

      
      const ideaId = await backendActor.storeIdea(ideaName, description, problemStatement, pptLink);
      setMessage(`✅ Idea stored successfully with ID: ${ideaId}`);

      // Clear form values after successful submission
      setTitle("");
      setProblemStatement("");
      setProposedSolution("");
      setIpfsLink("");
    } catch (error) {
      console.error("Error storing idea: ", error);
      setMessage("❌ Something went wrong. Please try again.");
    }
  };

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

              {/* File Upload Demo Component */}
              <div>
                <FileUploadDemo onIpfsLinkUpload={handleIpfsLinkUpload} />
              </div>
            </div>

            {/* Footer Buttons */}
            <div className="mt-4">
              <button
                onClick={handleSubmit}
                className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400"
              >
                Submit
              </button>
            </div>

            {/* Show message after submission */}
            {message && (
              <div className="mt-4 text-center">
                <p>{message}</p>
              </div>
            )}
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
