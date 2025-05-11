import { useState } from "react";
import "./App.css";

function App() {
  // let count = 15; no UI updation therefore hooks
  let [count, setCount] = useState(0);
  const addVal = () => {
    // console.log(count++)
    if (count >= 20) return;
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    // setCount(count + 1);
    //output=1 bcoz react fiber algo does changes in a single batch
    //correct way
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };
  const remVal = () => {
    if (count <= 0) return;
    setCount((count) => count - 1);
  };
  return (
    <>
      <h1>Counter Function: {count}</h1>
      <button onClick={addVal}>Increment: {count}</button>
      <button onClick={remVal}>Decrement: {count}</button>
    </>
  );
}

export default App;
