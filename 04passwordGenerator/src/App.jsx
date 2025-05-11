import { useCallback, useEffect, useRef, useState } from "react";

function App() {
  const [len, setLen] = useState(9);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pwd, setPwd] = useState("");

  const pwdGen = useCallback(() => {
    let pass = "";
    let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (num) str += "0123456789";
    if (char) str += "~!@#$$%^&*()";
    for (let i = 0; i < len; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length));
    }
    setPwd(pass);
  }, [len, num, char, setPwd]);

  const pwdRef = useRef(null);

  const copyPwd = () => {
    pwdRef.current?.select(); // current optional bcoz initially it may have null value to select
    pwdRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(pwd);
  };

  useEffect(() => {
    pwdGen();
  }, [len, num, char, pwdGen]);
  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-center my-3">Password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={pwd}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={pwdRef}
          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={() => {
              copyPwd();
            }}
          >
            copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              className="cursor-pointer"
              min={6}
              max={100}
              value={len}
              onChange={(e) => setLen(e.target.value)}
            />
            <label>Length: {len}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={num}
              onChange={() => setNum((prev) => !prev)}
            />
            <label>Number: {num}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={char}
              onChange={() => setChar((prev) => !prev)}
            />
            <label>Character: {char}</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
