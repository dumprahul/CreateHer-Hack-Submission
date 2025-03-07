"use client"

import { useState, useEffect } from "react";
import { backendActor } from "@/utils/icp";
 // Import the actor from utils/icp.js

function Counter() {
  const [count, setCount] = useState(0);
  const [addValue, setAddValue] = useState(1);

  // Fetch the counter value when the component mounts
  useEffect(() => {
    async function fetchCounter() { 
        const value = await backendActor.get();
        console.log(value);
        setCount(value);
    }
    fetchCounter();
  }, []);

  // Increment counter by 1
  const increment = async () => {
      await backendActor.inc();
      const newValue = await backendActor.get();
      console.log("The new value is",newValue);
      setCount(newValue);
  };

  // Add a custom number to the counter
  const addNumber = async () => {
      await backendActor.add(Number(addValue));
      const newValue = await backendActor.get();
      console.log("The new value is",newValue);
      setCount(newValue);
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black">ICP Counter</h1>
      <h2 className="text-lg mt-2 text-black">Current Count: {count}</h2>

      <button
        onClick={increment}
        className="mt-4 px-4 py-2 bg-blue-500  rounded text-black"
      >
        Increment
      </button>

      <div className="mt-4 flex items-center space-x-2">
        <input
          type="number"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
          className="border p-2"
        />
        <button
          onClick={addNumber}
          className="px-4 py-2 bg-green-500 text-black rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter;
