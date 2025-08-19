import React from 'react'
import Marquee from "react-fast-marquee";

export const Marquees = () => {
  return (
     <Marquee gradient={false} speed={80}>
      📈 Latest Stock -- technical -- 🚀 Smart Investing Tips -- psycology --  💹 Trusted Market Insights 📊 -- risk reward
    </Marquee>
  )
}


export const MarqueeHeadline = () =>{
  return(
    <Marquee gradient={false} speed={80}>
      <p className="text-[20px] my-2 text-white text-center">Welcome to behind the profit: the home of smart traders. </p>
    </Marquee>
  )
}