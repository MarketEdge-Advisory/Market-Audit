"use client";

import { useState } from "react";
import Link from "next/link";

const navItems = ["Home", "Questionnaire", "Contact Information", "Result"];

export default function NavbarLight({ activeIndex = 0 }: { activeIndex?: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-10 flex items-center justify-between px-6 md:px-10 py-[18px] border-b border-gray-100">
      {/* Logo */}
      <Link href="/" className="flex flex-col leading-none select-none">
        <span className="font-extrabold text-[22px] tracking-tight">
          <span className="text-black">Market</span>
          <span className="text-[#F5A623]">Edge</span>
        </span>
        <span className="text-[9px] font-bold tracking-[0.22em] text-black uppercase mt-[2px]">
          Advisory
        </span>
      </Link>

      {/* Desktop pill nav */}
      <div className="hidden md:flex items-center gap-0.5 bg-white border border-gray-200 rounded-full px-1.5 py-1.5 shadow-sm">
        {navItems.map((item, i) => (
          <button
            key={item}
            className={`flex items-center gap-1.5 px-4 py-[7px] rounded-full text-[13.5px] font-medium transition-colors ${
              i === activeIndex
                ? "bg-gray-100 text-gray-900"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            {i === activeIndex && (
              <span className="w-[7px] h-[7px] rounded-full bg-[#F5A623] flex-shrink-0" />
            )}
            {item}
          </button>
        ))}
      </div>

      {/* Mobile pill indicator */}
      <div className="relative flex md:hidden">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[#F5A623] flex-shrink-0" />
          <span className="text-gray-800 text-[13px] font-medium">
            {navItems[activeIndex]}
          </span>
          <svg
            className={`w-3.5 h-3.5 text-gray-400 transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
            fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-white border border-gray-100 rounded-2xl shadow-lg z-50 px-2 py-2 flex flex-col gap-1">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors text-left ${
                  i === activeIndex
                    ? "bg-gray-50 text-gray-900"
                    : "text-gray-400 hover:text-gray-700 hover:bg-gray-50"
                }`}
              >
                {i === activeIndex && (
                  <span className="w-[7px] h-[7px] rounded-full bg-[#F5A623] flex-shrink-0" />
                )}
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* CTA */}
      <button className="bg-[#F5A623] hover:bg-[#e09415] text-white font-bold text-[13px] md:text-[13.5px] px-4 md:px-5 py-2 md:py-[10px] rounded-full transition-colors">
        Contact Us
      </button>
    </nav>
  );
}