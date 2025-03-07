"use client";

import { useState, useEffect } from "react";
import { backendActor } from "@/utils/icp";

function IdeaSubmission() {
  const [ideaName, setIdeaName] = useState("");
  const [description, setDescription] = useState("");
  const [problemStatement, setProblemStatement] = useState("");
  const [pptLink, setPptLink] = useState("");
  const [ideaCount, setIdeaCount] = useState(0);
  const [message, setMessage] = useState("");

  // Fetch total ideas count when the component mounts
  useEffect(() => {
    async function fetchIdeaCount() {
      const count = await backendActor.getIdeaCount();
      setIdeaCount(Number(count)); // Ensure it's treated as a number
    }
    fetchIdeaCount();
  }, []);

  // Function to store idea
  const storeIdea = async () => {
    if (!ideaName || !description || !problemStatement || !pptLink) {
      setMessage("⚠️ All fields are required!");
      return;
    }

    try {
      const ideaId = await backendActor.storeIdea(ideaName, description, problemStatement, pptLink);
      setMessage(`✅ Idea stored successfully with ID: ${ideaId}`);
      
      // Update total idea count
      const updatedCount = await backendActor.getIdeaCount();
      setIdeaCount(Number(updatedCount));

      // Reset input fields
      setIdeaName("");
      setDescription("");
      setProblemStatement("");
      setPptLink("");
    } catch (error) {
      console.error("Error storing idea:", error);
      setMessage("Store on-chain now");
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black">💡 ICP Idea Submission</h1>

      <h2 className="text-lg mt-2 text-black">Total Ideas: {ideaCount}</h2>

      <input
        type="text"
        placeholder="Idea Name"
        value={ideaName}
        onChange={(e) => setIdeaName(e.target.value)}
        className="border p-2 mt-4 w-80"
      />
      <textarea
        placeholder="Idea Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border p-2 mt-2 w-80"
      />
      <textarea
        placeholder="Problem Statement"
        value={problemStatement}
        onChange={(e) => setProblemStatement(e.target.value)}
        className="border p-2 mt-2 w-80"
      />
      <input
        type="text"
        placeholder="PPT Pitch Link"
        value={pptLink}
        onChange={(e) => setPptLink(e.target.value)}
        className="border p-2 mt-2 w-80"
      />

      <button
        onClick={storeIdea}
        className="mt-4 px-4 py-2 bg-blue-500 rounded text-black"
      >
        Submit Idea
      </button>

      {message && <p className="mt-4 text-black">{message}</p>}
    </div>
  );
}

export default IdeaSubmission;
