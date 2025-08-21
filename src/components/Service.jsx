import React from "react";
import { TrendingUp, LineChart } from "lucide-react"; // Example icons

const Service = () => {
  return (
    <section className="bg-gradient-to-r from-black via-[#0f172a] to-black text-white py-16">
      <h1 className="text-center font-bold text-4xl md:text-5xl py-6 text-yellow-500 tracking-wide">
        Services
      </h1>

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10">
        {/* Card 1 */}
        <div className="text-center group px-6 py-12 bg-gray-900 rounded-2xl shadow-lg hover:shadow-yellow-500/20 hover:-translate-y-2 transform transition duration-300">
          <div className="flex justify-center items-center mb-6">
            <TrendingUp className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition" />
          </div>
          <h3 className="text-2xl font-semibold text-yellow-400">Alpha Move Strategy</h3>
          <p className="mt-3 text-gray-400 text-lg">
            Event based and tailored for seasonal opportunities.
          </p>
        </div>

        {/* Card 2 */}
        <div className="text-center group px-6 py-12 bg-gray-900 rounded-2xl shadow-lg hover:shadow-green-500/20 hover:-translate-y-2 transform transition duration-300">
          <div className="flex justify-center items-center mb-6">
            <LineChart className="w-12 h-12 text-green-400 group-hover:scale-110 transition" />
          </div>
          <h3 className="text-2xl text-center font-semibold text-green-400">BTP TurboTrades Strategy</h3>
          <p className="mt-3 text-gray-400 text-lg">
            Designed for portfolio growth and long-term investment success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Service;
