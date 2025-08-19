import React from "react";
import { BarChart3, ShieldCheck, UserCog, Headset, Users } from "lucide-react";

const WhyUs = () => {
  const features = [
    {
      icon: <BarChart3 className="w-10 h-10 text-red-500" />,
      title: "100% Research-Backed Insights",
      desc: "We provide market insights backed by deep research and expert analysis.",
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-green-500" />,
      title: "Transparent & Ethical Approach",
      desc: "Our strategies are built on honesty, ethics, and complete transparency.",
    },
    {
      icon: <UserCog className="w-10 h-10 text-blue-500" />,
      title: "Personalized Strategies",
      desc: "Tailored investment strategies for every type of investor.",
    },
    {
      icon: <Headset className="w-10 h-10 text-yellow-500" />,
      title: "Dedicated Support",
      desc: "Get guidance via calls, messages, and detailed reports.",
    },
    {
      icon: <Users className="w-10 h-10 text-purple-500" />,
      title: "Trusted Community",
      desc: "Join a growing community of investors who trust our platform.",
    },
  ];

  return (
    <section className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Why Choose <span className="text-red-500">Us?</span>
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
