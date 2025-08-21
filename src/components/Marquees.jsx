import React, { useState, useEffect } from "react";
import axios from "axios";
import Marquee from "react-fast-marquee";

export const Marquees = () => {
  const [stocks, setStocks] = useState([]);

  useEffect(() => {
    const fetchstock = async () => {
      try {
        const response = await axios.get(
          "https://finnhub.io/api/v1/stock/peers?symbol=AAPL&token=d2is489r01qqoaj8d1d0d2is489r01qqoaj8d1dg"
        );
        setStocks(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("stock not found", error);
      }
    };
    fetchstock();
  }, []);

  return (
    <div className="bg-gray-900 py-3">
      <Marquee gradient={false} speed={50}>
        {stocks.map((stock, idx) => (
          <div
            key={idx}
            className="mx-6 font-semibold text-yellow-400"
          >
            {stock}
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export const MarqueeHeadline = () => {
  return (
    <Marquee gradient={false} speed={50}>
      <p className="text-[20px] text-white text-center">
        Welcome to behind the profit: the home of smart traders.
      </p>
    </Marquee>
  );
};
