import { useId } from "react";

function InputBox({
  label,
  Amount,
  onAmtChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency,
  className = "",
  amtDisabled = false,
  currencyDisabled = false,
}) {
  const amtInputId = useId(); // for key binding using tab it generate unique id
  return (
    <div className={`${className}bg-white p-3 rounded-lg text-sm flex`}>
      <div className="w-1/2">
        <label htmlFor={amtInputId} className="text-black/40 mb-2 inline-block">
          {label}
        </label>
        <input
          id={amtInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="text"
          placeholder="Amount"
          value={Amount}
          onChange={(e) => onAmtChange && onAmtChange(Number(e.target.value))} // e.target.val mostly in str
          disabled={amtDisabled}
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //when currency changed it needs to be re-asigned in value={}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
