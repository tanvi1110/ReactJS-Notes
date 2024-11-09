// custom hooks 

import { useEffect, useState } from "react";



function useCurrecyInfo(currency) {
   const [data, setData] = useState({})
   useEffect(() => {
      fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
         .then((res) => 
            res.json()
         )
         .then((res) => setData(res[currency]))
   }, [currency])
   console.log(data)

   return data
   //  yha data aa rha h joki currencyConverter me use krna h ---- Q-> aisa kya use kre ki data ki keys extract kr ske

}


export default useCurrecyInfo;
