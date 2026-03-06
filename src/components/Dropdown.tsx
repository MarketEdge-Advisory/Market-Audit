"use client";

import { useState } from "react";

interface DropdownProps {
  options: string[];
  value: string;
  onChange: (val: string) => void;
}

export default function Dropdown({ options, value, onChange }: DropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="w-full flex items-center justify-between bg-[#F5F5F5] border border-[#E8E8E8] rounded-xl px-5 py-4 text-left text-[15px] focus:outline-none focus:ring-2 focus:ring-[#F5A623]/40 transition-all"
      >
        <span className={value ? "text-gray-800" : "text-gray-400"}>
          {value || "Select Option"}
        </span>
        <svg
          className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {open && (
        <ul className="absolute z-20 w-full mt-1 bg-white border border-[#E8E8E8] rounded-xl shadow-lg overflow-hidden">
          {options.map((opt) => (
            <li key={opt}>
              <button
                type="button"
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`w-full text-left px-5 py-3 text-[14.5px] hover:bg-[#FFF7EC] transition-colors ${
                  value === opt
                    ? "text-[#F5A623] font-semibold bg-[#FFF7EC]"
                    : "text-gray-700"
                }`}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}