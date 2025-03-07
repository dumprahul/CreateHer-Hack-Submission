import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../canisters/src/declarations/backend/backend.did.js"; 

const CANISTER_ID = "b77ix-eeaaa-aaaaa-qaada-cai"; // Replace with your actual Canister ID

// Create the agent
const agent = await HttpAgent.create({ host: "http://127.0.0.1:4943" });

// Create the actor
export const backendActor = Actor.createActor(idlFactory, {
  agent,
  canisterId: CANISTER_ID,
});
