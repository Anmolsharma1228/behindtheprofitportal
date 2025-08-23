import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, LineChart } from "lucide-react"; // Example icons

const Service = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0f172a] to-black text-white py-16">
      <h1 className="text-center font-bold text-4xl md:text-5xl py-6 text-yellow-500 tracking-wide">
        Services
      </h1>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Card 1 */}

        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center px-6 py-12 bg-gray-900 rounded-2xl shadow-lg"
        >
          <div className="relative group px-6 py-12 rounded-2xl shadow-lg bg-gray-900 overflow-hidden border border-gray-800 hover:border-yellow-400/40 hover:shadow-yellow-500/30 hover:-translate-y-2 transition duration-300">
            {/* Icon */}
            <div className="flex justify-center items-center mb-6">
              <TrendingUp className="w-12 h-12 text-yellow-400 group-hover:scale-125 transition duration-300" />
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-yellow-400">
              Alpha Move Strategy
            </h3>
            {/* Description */}
            <p className="mt-3 text-gray-400 text-lg">
              Event based and tailored for seasonal opportunities.
            </p>
            {/* Decorative Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-500 to-transparent blur-2xl transition"></div>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="text-center px-6 py-12 bg-gray-900 rounded-2xl shadow-lg"
        >
          <div className="relative group px-6 py-12 rounded-2xl shadow-lg bg-gray-900 overflow-hidden border border-gray-800 hover:border-yellow-400/40 hover:shadow-yellow-500/30 hover:-translate-y-2 transition duration-300">
            {/* Icon */}
            <div className="flex justify-center items-center mb-6">
              <LineChart className="w-12 h-12 text-yellow-400 group-hover:scale-125 transition duration-300" />
            </div>
            {/* Title */}
            <h3 className="text-2xl font-semibold text-yellow-400">
              BTP TurboTrades Strategy
            </h3>
            {/* Description */}
            <p className="mt-3 text-gray-400 text-lg">
              Designed for portfolio growth and long-term investment.
            </p>
            {/* Decorative Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-500 to-transparent blur-2xl transition"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Service;
