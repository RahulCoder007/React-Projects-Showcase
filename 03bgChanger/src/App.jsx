import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className=" w-full h-screen" style={{ backgroundColor: color }}>
      {/* position */}
      <div className="fixed flex flex-wrap bottom-12 justify-center inset-x-0 px-2">
        {/* bar */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => setColor("red")}
            className="outline-none bg-red-500 px-4 py-1 rounded-full text-white shadow-2xl"
          >
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none bg-green-500 px-4 py-1 rounded-full text-white shadow-2xl"
          >
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none bg-blue-500 px-4 py-1 rounded-full text-white shadow-2xl"
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
