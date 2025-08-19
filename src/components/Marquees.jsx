import React from 'react'
import Marquee from "react-fast-marquee";

export const Marquees = () => {

 const stocks = [
    { name: "AAPL", price: "+1.25%", trend: "up" },
    { name: "TSLA", price: "-0.85%", trend: "down" },
    { name: "AMZN", price: "+0.40%", trend: "up" },
    { name: "GOOGL", price: "-1.15%", trend: "down" },
  ];

  return (
      <div className="bg-gray-900 py-3">
      <Marquee gradient={false} speed={50}>
        {stocks.map((stock, idx) => (
          <div
            key={idx}
            className={`mx-6 font-semibold ${
              stock.trend === "up" ? "text-green-400" : "text-red-500"
            }`}
          >
            {stock.name}: {stock.price}
          </div>
        ))}
      </Marquee>
    </div>
  )
}


export const MarqueeHeadline = () =>{
  return(
    <Marquee gradient={false} speed={80}>
      <p className="text-[20px] my-2 text-white text-center">Welcome to behind the profit: the home of smart traders. </p>
    </Marquee>
  )
}