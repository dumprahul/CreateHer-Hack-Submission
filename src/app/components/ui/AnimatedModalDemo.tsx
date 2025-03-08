import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger } from "../ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import { startVerification } from "../../components/startverification";
import { redirect } from "next/navigation"; // Use redirect from next/navigation

export function AnimatedModalDemo() {
  const [result, setResult] = useState<any>();
  const [isClient, setIsClient] = useState(false); // State to track client-side render

  useEffect(() => {
    setIsClient(true); // Set to true when the component is mounted in the client
  }, []);

  // Early return if not client-side
  if (!isClient) {
    return null;
  }

  const images = [
    "https://media.licdn.com/dms/image/v2/C5112AQHtlyU-On4vmA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1577079568488?e=2147483647&v=beta&t=tln4XdnvfvI0onPxIsPczDBUgCtGG3sbXYXfycuVxoc",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO0J_12Nq2GvFa5n9VL7onxRcYSiWEd09bGA&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7prB4e37OjQaIkCuTP78uxT_1bpSyXHar4w&s",
    "https://images-eds-ssl.xboxlive.com/image?url=4rt9.lXDC4H_93laV1_eHHFT949fUipzkiFOBH3fAiZZUCdYojwUyX2aTonS1aIwMrx6NUIsHfUHSLzjGJFxxo4K81Ei7WzcnqEk8W.MgwadpHjl76SlQnWKc4OkaILTy7aDmpraBC2vB.Q_eb6EavJPyLEBEEqc.BSkZzu5Vng-&format=source",
    "https://www.pharmatutor.org/sites/default/files/styles/webp/public/2022-07/niramai-health-analytix-is-looking-for-clinical-research-associate.jpg.webp?itok=OvxiIO0m",
  ];

  const handleRedirect = () => {
    redirect("/idea"); // Use the redirect method to navigate
  };

  return (
    <div className="py-5 flex items-center justify-center">
      <Modal>
        <ModalTrigger className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          {/* Animated Border */}
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
          {/* Button Content */}
          <span className="relative inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-6 py-1 text-sm font-medium text-white backdrop-blur-3xl">
            <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-500">
              Get started now!
            </span>
          </span>
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
              Your idea is one step closer to becoming the next{" "}
              <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                Big
              </span>{" "}
              thing!
            </h4>
            <div className="flex justify-center items-center">
              {images.map((image, idx) => (
                <motion.div
                  key={"images" + idx}
                  style={{
                    rotate: Math.random() * 20 - 10,
                  }}
                  whileHover={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  whileTap={{
                    scale: 1.1,
                    rotate: 0,
                    zIndex: 100,
                  }}
                  className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                >
                  <Image
                    src={image}
                    alt="bali images"
                    width="500"
                    height="500"
                    className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                  />
                </motion.div>
              ))}
            </div>
            <div className="py-10 flex items-center justify-center">
              <h2 className="text-2xl relative mt-10 z-20 md:text-7xl lg:text-2xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
                Verify your identity through ZK-proofs{" "}
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                  <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                    <span className="">100% private, 0% bias, <br />only your idea matters!</span>
                  </div>
                  <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 py-4">
                    <span className="">100% private, 0% bias, <br />only your idea matters!</span>
                  </div>
                </div>
              </h2>
            </div>
          </ModalContent>

          <ModalFooter className="gap-4 justify-center">
            <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
              Cancel
            </button>

            {result ? (
              <button
                className="bg-green-500 text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                onClick={handleRedirect} // Call handleRedirect to navigate
              >
                Lets go
              </button>
            ) : (
              <button
                className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28"
                onClick={() => startVerification(setResult)}
              >
                Verify
              </button>
            )}

            {result && console.log(result)} {/* Log the result */}
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}
