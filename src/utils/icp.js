import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory, canisterId } from "../../canisters/backend/backend.did.js";

const setupAgent = async () => {
  const agent = await HttpAgent.create({
    host: "http://127.0.0.1:4943", // Local replica
  });

  return Actor.createActor(idlFactory, { agent, canisterId });
};

// Export a function that returns the canister actor
export default setupAgent;
