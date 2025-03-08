"use client";
import React, { useState } from "react";
import { FileUpload } from "./file-upload";
import axios from "axios";

export function FileUploadDemo({ onIpfsLinkUpload }: { onIpfsLinkUpload: (link: string) => void }) {
  const [files, setFiles] = useState<File[]>([]);
  const [uploadStatus, setUploadStatus] = useState<string>("");
  const [ipfsLink, setIpfsLink] = useState<string>("");

  // Handle file selection
  const handleFileUpload = (selectedFiles: File[]) => {
    setFiles(selectedFiles);
    console.log(selectedFiles);
  };

  // Upload file to IPFS
  const uploadToIPFS = async (file: File) => {
    if (!file) {
      alert("Please select a file to upload!");
      return;
    }

    setUploadStatus("Uploading...");

    // Pinata API keys (make sure to secure these in production)
    const PINATA_API_KEY = "86246e280b8cbf709918";
    const PINATA_API_SECRET = "acb24c100054544eb8f3a11f417cf3f2a8cfb438bed6cb321416e1aa926f26ab";

    try {
      const formData = new FormData();
      formData.append("file", file);

      // Pinata API URL
      const url = "https://api.pinata.cloud/pinning/pinFileToIPFS";

      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          pinata_api_key: PINATA_API_KEY,
          pinata_secret_api_key: PINATA_API_SECRET,
        },
      });

      const ipfsHash = res.data.IpfsHash;
      const ipfsUrl = `https://gateway.pinata.cloud/ipfs/${ipfsHash}`;

      setUploadStatus("File Uploaded Successfully!");
      setIpfsLink(ipfsUrl);
      console.log("IPFS URL:", ipfsUrl);

      // Pass the IPFS link to the parent component or another module
      if (onIpfsLinkUpload) {
        onIpfsLinkUpload(ipfsUrl);
      }
    } catch (error) {
      console.error("Error uploading file: ", error);
      setUploadStatus("Upload failed. Please try again.");
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto min-h-60 border border-dashed bg-white dark:bg-black border-neutral-200 dark:border-neutral-800 rounded-lg">
      <FileUpload onChange={handleFileUpload} />
      <div className="py-4">
        {files.length > 0 && (
          <button
            onClick={() => uploadToIPFS(files[0])}
            className="px-4 py-2 bg-blue-500 text-white rounded-md"
          >
            Upload to IPFS
          </button>
        )}
      </div>
      <div className="text-white">
        {uploadStatus && <p>{uploadStatus}</p>}
        {ipfsLink && <p>IPFS Link: <a href={ipfsLink} target="_blank" rel="noopener noreferrer">{ipfsLink}</a></p>}
      </div>
    </div>
  );
}
