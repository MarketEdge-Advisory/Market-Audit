"use client";

import { useState } from "react";

const navItems = ["Home", "Questionnaire", "Contact Information", "Result"];

export default function NavbarDark({ activeIndex = 0 }: { activeIndex?: number }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="relative z-50 flex items-center justify-between px-6 md:px-10 py-[18px] border-b border-white/[0.08]">
      {/* Logo */}
      <div className="flex flex-col leading-none select-none">
        <span className="font-extrabold text-[22px] tracking-tight">
          <span className="text-white">Market</span>
          <span className="text-[#F5A623]">Edge</span>
        </span>
        <span className="text-[9.5px] font-semibold tracking-[0.22em] text-white/40 uppercase mt-[3px]">
          Advisory
        </span>
      </div>

      {/* Desktop pill nav */}
      <div className="hidden md:flex items-center gap-0.5 bg-white/[0.05] border border-white/[0.09] rounded-full px-1.5 py-1.5">
        {navItems.map((item, i) => (
          <button
            key={item}
            className={`flex items-center gap-1.5 px-4 py-[7px] rounded-full text-[13.5px] font-medium transition-colors ${
              i === activeIndex
                ? "bg-white/[0.11] text-white"
                : "text-white/45 hover:text-white/70"
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
      <div className="relative flex md:hidden z-50">
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="flex items-center gap-2 bg-white/[0.05] border border-white/[0.09] rounded-full px-4 py-2"
        >
          <span className="w-[7px] h-[7px] rounded-full bg-[#F5A623] flex-shrink-0" />
          <span className="text-white text-[13px] font-medium">
            {navItems[activeIndex]}
          </span>
          <svg
            className={`w-3.5 h-3.5 text-white/40 transition-transform duration-200 ${
              menuOpen ? "rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>

        {menuOpen && (
          <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl z-[100] px-2 py-2 flex flex-col gap-1 shadow-xl">
            {navItems.map((item, i) => (
              <button
                key={item}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center gap-2.5 w-full px-4 py-2.5 rounded-xl text-[13.5px] font-medium transition-colors text-left ${
                  i === activeIndex
                    ? "bg-[#2a2a2a] text-white"
                    : "text-[#888888] hover:text-white hover:bg-[#222222]"
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
      <button className="bg-[#F5A623] hover:bg-[#e09415] text-black font-bold text-[13px] md:text-[13.5px] px-4 md:px-5 py-2 md:py-[10px] rounded-full transition-colors">
        Contact Us
      </button>
    </nav>
  );
}