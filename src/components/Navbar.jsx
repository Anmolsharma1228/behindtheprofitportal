import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import { Phone } from "lucide-react";
import { MarqueeHeadline } from "./Marquees";
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black w-full fixed top-0 right-0 left-0 mx-auto z-10 py-[14px]">
      <MarqueeHeadline />
      <nav className="flex justify-between items-center mx-4">
        {/* Logo */}
        <div>
          <NavLink to="#">
            {/* <img src={logo} className="w-[80px] h-[40px]" /> */}
            <p className="text-white text-xl font-serif font-semibold text-center">
              PROFIT
            </p>
          </NavLink>
        </div>

        {/* Mobile Toggle */}
        <div className="text-white sm:hidden text-[20px]">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <ImCross /> : <FaBars />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="md:space-x-6 lg:text-[20px] font-bold hidden md:block">
          <NavLink to="/" className={({ isActive }) => (isActive ? "text-gray-500" : "text-white")}>
            Home
          </NavLink>
          <NavLink to="/News" className={({ isActive }) => (isActive ? "text-gray-300" : "text-white")}>
            News & insight
          </NavLink>
          <NavLink to="/Learn" className={({ isActive }) => (isActive ? "text-gray-300" : "text-white")}>
            Learn
          </NavLink>
          <NavLink to="/About" className={({ isActive }) => (isActive ? "text-gray-300" : "text-white")}>
            About Us
          </NavLink>
        </div>

        {/* Call Info */}
        <div className="text-white space-x-4 lg:text-[20px] text-[17px] hidden sm:block font-bold">
          <p className="flex items-center"><Phone/> - 115656984847</p>
        </div>
      </nav>

      {/* Mobile Menu - Smooth Transition */}
      <div
        className={`sm:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="text-white ml-4 flex flex-col items-start justify-start space-y-2 py-2 lg:text-[18px]">
          <NavLink to="/" className="hover:text-indigo-700 duration-500">
            Home
          </NavLink>
          <NavLink to="/News" className="hover:text-indigo-700 duration-500">
            News & insight
          </NavLink>
          <NavLink to="/Learn" className="hover:text-indigo-700 duration-500">
            Learn
          </NavLink>
          <NavLink to="/About" className="hover:text-indigo-700 duration-500">
            About Us
          </NavLink>
        </div>
      </div>
    </header>
  );
};
