import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
    const [data,setData] = useState({})
    useEffect(()=>{
        fetch(`https://open.er-api.com/v6/latest/${currency}`)         //api call kiye
        .then((res)=> res.json())     //api response jo json me aaya usko json me convert kiye
        .then((res)=>setData(res.rates))   //use me se rates object ko data me store kiye
        
        .catch((error)=> console.error(error));
    }
        
    ,[currency]);     

    return data;
}
export default useCurrencyInfo;


//custom hook hai yeh