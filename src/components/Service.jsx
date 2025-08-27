import React, { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, LineChart } from "lucide-react"; // Example icons

const Service = () => {
  const [cardone, setcardone] = useState(false);
  const [cardtwo, setcardtwo] = useState(false);

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
          className="relative text-center px-6 py-12 bg-gray-900 rounded-2xl shadow-lg cursor-pointer"
          onClick={() => setcardone(!cardone)}
        >
          {/* Default Card Content */}
          <div className="relative px-6 py-12 rounded-2xl shadow-lg bg-gray-900 overflow-hidden border border-gray-800 hover:border-yellow-400/40 hover:shadow-yellow-500/30 hover:-translate-y-2 transition duration-300 group">
            {/* Icon */}
            <div className="flex justify-center items-center mb-6">
              <TrendingUp className="w-12 h-12 text-yellow-400 group-hover:scale-125 transition duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-400">
              Alpha Move Strategy
            </h3>
            <p className="mt-3 text-gray-400 text-lg">
              Event based and tailored for seasonal opportunities.
            </p>

            {/* Decorative Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-500 to-transparent blur-2xl transition"></div>
          </div>

          {/* Overlay Card (shows when clicked) */}
          {cardone && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 text-white rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-yellow-400">
                More Details
              </h2>
              <p className="text-gray-300">
                Here you can show extra information about the strategy,
                benefits, or even a button for more actions.
              </p>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click toggle
                  setcardone(false);
                }}
                className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>

        {/* Card 2 */}
        <motion.div
          whileHover={{ scale: 1.05, rotate: 1 }}
          transition={{ type: "spring", stiffness: 200 }}
          className="relative text-center px-6 py-12 bg-gray-900 rounded-2xl shadow-lg cursor-pointer"
          onClick={() => setcardtwo(!cardtwo)}
        >
          {/* Default Card Content */}
          <div className="relative px-6 py-12 rounded-2xl shadow-lg bg-gray-900 overflow-hidden border border-gray-800 hover:border-yellow-400/40 hover:shadow-yellow-500/30 hover:-translate-y-2 transition duration-300 group">
            {/* Icon */}
            <div className="flex justify-center items-center mb-6">
              <LineChart className="w-12 h-12 text-yellow-400 group-hover:scale-125 transition duration-300" />
            </div>
            <h3 className="text-2xl font-semibold text-yellow-400">
               BTP TurboTrades Strategy
            </h3>
            <p className="mt-3 text-gray-400 text-lg">
              Designed for portfolio growth and long-term investment.
            </p>

            {/* Decorative Glow */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 bg-gradient-to-tr from-yellow-500 to-transparent blur-2xl transition"></div>
          </div>

          {/* Overlay Card (shows when clicked) */}
          {cardtwo && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center bg-black/90 text-white rounded-2xl p-6"
            >
              <h2 className="text-xl font-bold mb-3 text-yellow-400">
                More Details
              </h2>
              <p className="text-gray-300">
                Here you can show extra information about the strategy,
                benefits, or even a button for more actions.
              </p>

              {/* Close Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation(); // prevent card click toggle
                  setcardtwo(false);
                }}
                className="mt-4 px-4 py-2 bg-yellow-500 text-black rounded-lg hover:bg-yellow-400"
              >
                Close
              </button>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default Service;