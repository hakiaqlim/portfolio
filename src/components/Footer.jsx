import React from "react";
import { RiUserSearchLine } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white px-6 md:px-20 py-14">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row justify-between gap-10 mb-10">
        {/* Brand + Description */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-3xl font-extrabold bg-[linear-gradient(267deg,_#DA7C25_0.36%,_#B923E1_102.06%)] bg-clip-text text-transparent">
            Hakima Aqlim
          </h1>
          <p className="text-sm text-gray-400 leading-relaxed">
            Passionate Frontend Developer based in Rawalpindi, Pakistan. I specialize in creating visually appealing and responsive web interfaces. With hands-on experience at companies like PNY, Decimal Solution, and CodesVista, I craft user-friendly websites that drive results.
          </p>
        </div>

        {/* Newsletter Subscription */}
        <div className="md:w-1/2">
          <h2 className="text-xl font-semibold mb-3">Stay in the Loop</h2>
          <p className="text-sm text-gray-400 mb-4">
            Subscribe to receive my latest portfolio updates, new projects, and web development tips.
          </p>
          <form className="flex flex-col sm:flex-row items-center gap-4">
            <div className="flex items-center bg-neutral-800 rounded-full px-4 py-2 w-full sm:w-auto">
              <RiUserSearchLine size={16} className="text-gray-400" />
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent outline-none text-sm text-white placeholder:text-gray-400 ml-2 w-full"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-orange-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm hover:scale-105 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-700 my-6"></div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <p>© 2025 Hakima Aqlim — Designed & Developed with </p>
        <ul className="flex gap-4 flex-wrap justify-center">
          <li className="hover:text-white cursor-pointer transition">Terms of Service</li>
          <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
          <li className="hover:text-white cursor-pointer transition">Connect</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
