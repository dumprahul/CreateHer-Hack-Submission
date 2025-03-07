"use client"

import { useState, useEffect } from "react";
import { backend } from "./utils/icp"; // Adjust the path if needed

function Counter() {
  const [count, setCount] = useState(0);
  const [addValue, setAddValue] = useState(1);

  // Fetch the counter value when the component mounts
  useEffect(() => {
    async function fetchCounter() {
      try {
        const value = await backend.get();
        setCount(value);
      } catch (error) {
        console.error("Failed to fetch counter:", error);
      }
    }
    fetchCounter();
  }, []);

  // Increment counter by 1
  const increment = async () => {
    try {
      await backend.inc();
      const newValue = await backend.get();
      setCount(newValue);
    } catch (error) {
      console.error("Failed to increment counter:", error);
    }
  };

  // Add a custom number to the counter
  const addNumber = async () => {
    try {
      await backend.add(Number(addValue));
      const newValue = await backend.get();
      setCount(newValue);
    } catch (error) {
      console.error("Failed to add number:", error);
    }
  };

  return (
    <div>
      <h1>ICP Counter</h1>
      <h2>Current Count: {count}</h2>
      <button onClick={increment}>Increment</button>

      <div>
        <input
          type="number"
          value={addValue}
          onChange={(e) => setAddValue(e.target.value)}
        />
        <button onClick={addNumber}>Add</button>
      </div>
    </div>
  );
}

export default Counter;
