import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [amt, setAmt] = useState(0);
  const [convertedAmt, setConvertedAmt] = useState(0);

  //Custom Hook
  const currencyInfo = useCurrencyInfo(from);

  const options = Object.keys(currencyInfo);
  // console.log("opt", options);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmt(convertedAmt);
    setConvertedAmt(amt);
  };
  const convert = () => {
    setConvertedAmt((amt * currencyInfo[to]).toFixed(2));
  };
  const BackgroundImage =
    "https://images.pexels.com/photos/31451898/pexels-photo-31451898/free-photo-of-serene-sunlit-forest-path-in-summer.jpeg";
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('${BackgroundImage}')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                Amount={amt}
                onAmtChange={(amt) => setAmt(amt)}
                onCurrencyChange={(currency) => setFrom(currency)}
                currencyOptions={options}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                Amount={convertedAmt}
                onAmtChange={(amt) => setConvertedAmt(amt)}
                selectCurrency={to}
                onCurrencyChange={(currency) => setTo(currency)}
                currencyOptions={options}
                amtDisabled
                currencyDisabled
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
