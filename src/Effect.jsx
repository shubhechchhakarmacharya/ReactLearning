import { useState, useEffect } from "react";

function Timer() {
  const [count, setCount] = useState(1);
  const [calculation, setCalculation] = useState(1);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); // <- add the count variable here

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c * 2)} className="rounded-md border-dashed border-2 border-indigo-200 border-y-indigo-500 mt-4 pt-1 pb-1 px-4">+</button>
      <p>Multiplies By 2: {calculation}</p>
    </>
  );
}

export default Timer; 

