"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const navItems = ["Home", "Questionnaire", "Contact Information", "Result"];

const SECTIONS = [
  "/questionnaire/section-1",
  "/questionnaire/section-2",
  "/questionnaire/section-3",
  "/questionnaire/section-4",
  "/questionnaire/section-5",
];

interface Props {
  children: React.ReactNode;
  currentSection: number;
  isValid: boolean;
}

export default function QuestionnaireLayout({ children, currentSection, isValid }: Props) {
  const router = useRouter();
  const progress = (currentSection / 5) * 100;
  const prevHref = currentSection > 1 ? SECTIONS[currentSection - 2] : "/";
  const nextHref = currentSection < 5 ? SECTIONS[currentSection] : "/contact";
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (isValid) setShowError(false);
  }, [isValid]);

  const handleNext = () => {
    if (!isValid) {
      setShowError(true);
      return;
    }
    router.push(nextHref);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col pb-32">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-[18px] border-b border-gray-100 z-10">
        <Link href="/" className="flex flex-col leading-none select-none">
          <span className="font-extrabold text-[22px] tracking-tight">
            <span className="text-black">Market</span>
            <span className="text-[#F5A623]">Edge</span>
          </span>
          <span className="text-[9px] font-bold tracking-[0.22em] text-black uppercase mt-[2px]">
            Advisory
          </span>
        </Link>

        <div className="flex items-center gap-0.5 bg-white border border-gray-200 rounded-full px-1.5 py-1.5 shadow-sm">
          {navItems.map((item, i) => (
            <button
              key={item}
              className={`flex items-center gap-1.5 px-4 py-[7px] rounded-full text-[13.5px] font-medium transition-colors ${
                i === 1 ? "text-gray-800" : "text-gray-400 hover:text-gray-600"
              }`}
            >
              {i === 1 && (
                <span className="w-[7px] h-[7px] rounded-full bg-[#F5A623] flex-shrink-0" />
              )}
              {item}
            </button>
          ))}
        </div>

        <button className="bg-[#F5A623] hover:bg-[#e09415] text-white font-bold text-[13.5px] px-5 py-[10px] rounded-full transition-colors">
          Contact Us
        </button>
      </nav>

      {/* Body */}
      <div className="flex flex-1 relative overflow-hidden">
        <div className="absolute left-10 top-10 z-10">
          <Link href="/">
            <button className="flex items-center gap-2 bg-[#FFF3E0] hover:bg-[#FFE0B2] text-gray-700 font-medium text-[13.5px] px-5 py-3 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to home
            </button>
          </Link>
        </div>

        <div className="flex-1 max-w-[780px] mx-auto w-full px-6 pt-10 pb-60">
          {children}
        </div>
      </div>

      {/* Fixed footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 z-50">
        {/* Progress bar */}
        <div className="h-1 bg-gray-100 w-full">
          <motion.div
            className="h-1 bg-[#F5A623]"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

      <div className="flex items-center justify-between px-10 py-4">
  {/* Previous + Error */}
  <div className="flex items-center gap-6">
    <button
      onClick={() => currentSection > 1 && router.push(prevHref)}
      disabled={currentSection === 1}
      className={`flex items-center gap-2 font-bold text-[14px] px-7 py-3 rounded-full transition-all duration-200 ${
        currentSection === 1
          ? "bg-gray-100 text-gray-400 cursor-not-allowed"
          : "bg-[#F5A623] hover:bg-[#e09415] text-white cursor-pointer"
      }`}
    >
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
      </svg>
      Previous
    </button>

    {/* Inline error */}
    {showError && (
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        animate={{ opacity: 1, x: 0 }}
        className="text-red-500 text-[13px] font-medium flex items-center gap-1.5"
      >
        <svg className="w-4 h-4 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
        </svg>
        Please answer all questions before continuing.
      </motion.p>
    )}
  </div>

  {/* Next button */}
  <button
    onClick={handleNext}
    className={`font-bold text-[14px] px-7 py-3 rounded-full transition-all duration-200 ${
      isValid
        ? "bg-[#F5A623] hover:bg-[#e09415] text-white cursor-pointer"
        : "bg-gray-100 text-gray-400 cursor-not-allowed"
    }`}
  >
    {currentSection === 5 ? "Submit" : "Next"}
  </button>
</div>
      </div>
    </div>
  );
}