import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(10);

  // function for Increment
  const incrementValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
  };

  // function for Decrement
  const decrementValue = () => {
    setCounter((prevCounter) =>
      prevCounter <= 0 ? setCounter(0) : prevCounter - 1
    );
  };

  // function for reset
  const resetValue = () => {
    setCounter(0);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen">
        <div className="flex flex-col w-72 h-72 p-4 border-2 rounded-xl border-teal-700">
          <h1 className="text-3xl text-center mb-6 text-red-900 underline">
            Counter App
          </h1>
          <input
            type="number"
            readOnly
            value={counter}
            className="text-center text-4xl p-2 mb-4 text-emerald-800"
          />

          <div className="flex justify-between items-center">
            <button
              onClick={incrementValue}
              className="bg-emerald-700 text-white rounded-lg w-32 h-10 hover:text-emerald-800 hover:font-bold hover:bg-white hover:border-2 hover:border-emerald-800"
            >
              Add
            </button>
            <button
              onClick={decrementValue}
              className="bg-teal-900 text-white ml-4 rounded-lg w-32 h-10 hover:text-teal-800 hover:font-bold hover:bg-white hover:border-2 hover:border-teal-800"
            >
              Remove
            </button>
          </div>
          <button
            onClick={resetValue}
            className="bg-red-900 text-white mt-4 rounded-lg w-64 h-10 hover:text-red-800 hover:font-bold hover:bg-white hover:border-2 hover:border-red-800"
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
