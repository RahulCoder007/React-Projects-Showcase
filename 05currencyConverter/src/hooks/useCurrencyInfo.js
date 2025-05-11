import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency])); //saved in useState var so that it can be reflected in UI
  }, [currency]); // as soon the custom hook is mounted, it fetches the API and also if currency changes

  console.log("data", data); // moved outside useEffect to avoid dependency issues
  return data;
}

export default useCurrencyInfo;
