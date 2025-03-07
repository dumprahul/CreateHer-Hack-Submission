import { useState, useEffect } from "react";
import { backendActor } from "../../utils/icp"; // Import the actor from utils/icp.js

function Counter() {
  const [count, setCount] = useState(0);
  const [addValue, setAddValue] = useState(1);

  // Fetch the counter value when the component mounts
  useEffect(() => {
    async function fetchCounter() {
      try {
        const value = await backendActor.get();
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
      await backendActor.inc();
      const newValue = await backendActor.get();
      setCount(newValue);
    } catch (error) {
      console.error("Failed to increment counter:", error);
    }
  };

  // Add a custom number to the counter
  const addNumber = async () => {
    try {
      await backendActor.add(Number(addValue));
      const newValue = await backendActor.get();
      setCount(newValue);
    } catch (error) {
      console.error("Failed to add number:", error);
    }
  };

  return (
    <div className="p-6 flex flex-col items-center">
      <h1 className="text-2xl font-bold">ICP Counter</h1>
      <h2 className="text-lg mt-2">Current Count: {count}</h2>

      <button
        onClick={increment}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
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
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Counter;
