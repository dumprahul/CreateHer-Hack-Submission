import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../../canisters/src/canisters_backend/canisters_backend.did.js";

const CANISTER_ID = "YOUR_CANISTER_ID"; // Replace with actual canister ID

const agent = new HttpAgent({
  host: "http://127.0.0.1:4943", // Local replica
});

const backend = Actor.createActor(idlFactory, {
  agent,
  canisterId: CANISTER_ID,
});

export default backend;
