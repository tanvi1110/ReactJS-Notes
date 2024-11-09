
import InputBox from "./Input/InputBox"
import { useState } from "react"
import useCurrecyInfo from "../hooks/userCurrencyInfo"



const CurrencyConverter = () => {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("inr")
  const [to, setTo] = useState("usd")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const CurrecyInfo = useCurrecyInfo(from)

  const options = Object.keys(CurrecyInfo)
  //[when user clicks to swap button] to swap "from" to "to" and vice versa
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // [when user clicks to convert btn] -> 
  const convert = () => {
    setConvertedAmount(amount * CurrecyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/29282317/pexels-photo-29282317/free-photo-of-symmetrical-architecture-view-in-berlin-cityscape.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();

            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={() => setAmount(amount)}
                currencyOptions={options}
                selectCurrency={from}
                
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
               label="To"
               amount={convertedAmount}
               onCurrencyChange={(currency) => setTo(currency)}
               currencyOptions={options}
               selectCurrency={to}
               amountDisable
              />
            </div>
            <button onClick={convert} type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CurrencyConverter
