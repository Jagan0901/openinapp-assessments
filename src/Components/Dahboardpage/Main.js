import { Heading } from "./Heading";
import { Total  } from "./Total";
import { Footer } from "./Footer";
import { BarChart } from "./BarChart";
import { useState,useEffect } from "react";


export const Main = () => {
     const [barData, setBarData] = useState([]);
     const getBarData = () => {
         fetch("https://652d6ab8f9afa8ef4b276a73.mockapi.io/data", {
           method: "GET",
         })
           .then((response) => response.json())
           .then((data) => setBarData(data));

     };
     useEffect(() => getBarData(), []);
    
  return (
    <div className="main">
        <Heading/>
        <Total/>
        <BarChart data={barData}/>
        <Footer/>
    </div>
  );
}
