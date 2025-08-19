import React from 'react';
import { motion } from 'framer-motion';
import stock from '../assets/Images/stock2.avif';
import news from '../assets/Images/news.avif';
import stock3 from '../assets/Images/stock3.jpg';
import WhyUs from '../components/WhyUs';
import {Marquees} from '../components/Marquees';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col mt-16">
      {/* Main Content */}
      <main className="flex-grow w-full mx-auto">
      <section className="space-y-10">
  {/* Intro Section */}
 <div className='px-2 sm:px-10 grid items-center md:grid-cols-2 gap-8 bg-black'>
   <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    className='mt-10 mx-2'
  >
    <h2 className="text-2xl sm:text-3xl font-bold text-white">Decode the market with Behind The Profit</h2>
    {/* <h3 className="text-xl sm:text-2xl text-white mt-2">Real-time data, insights, and analysis</h3> */}
    <p className="mt-4 text-white text-lg sm:text-xl">
     Welcome to Behind The Progit, your trusted partner in navigating the financial markets. 
Whether you’re a beginner or a seasoned investor, we provide research-backed strategies, 
market insights, and personalized guidance to help you achieve consistent returns.

    </p>
  </motion.div>

  <motion.div
    variants={fadeInUp}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
  >
    <img
      src={stock}
      alt="Stock market dashboard"
      className="rounded-lg shadow-lg h-[450px] w-full object-cover"
    />
  </motion.div>
 </div>
</section>

<Marquees/>
<WhyUs />
      </main>
    </div>
  );
};

export default Home;
