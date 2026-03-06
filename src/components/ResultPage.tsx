"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import NavbarLight from "./Navbar/NavbarLight";

const navItems = ["Home", "Questionnaire", "Contact Information", "Result"];

const sections = [
  {
    emoji: "🎯",
    label: "Section 1 - Strategic Leadership & Planning",
    score: 40,
    max: 50,
  },
  {
    emoji: "🌐",
    label: "Section 2 - Digital Presence and Brand",
    score: 27,
    max: 50,
  },
  {
    emoji: "✍️",
    label: "Section 3 - Content and Messaging",
    score: 20,
    max: 50,
  },
  {
    emoji: "📱",
    label: "Section 4 - Social Media & Community",
    score: 43,
    max: 50,
  },
  {
    emoji: "📊",
    label: "Section 5 - Paid Advertising & Performance",
    score: 40,
    max: 50,
  },
];

const totalScore = sections.reduce((sum, s) => sum + s.score, 0); // 170
const totalMax = sections.reduce((sum, s) => sum + s.max, 0);     // 250

function getBarColor(score: number, max: number): string {
  const pct = score / max;
  if (pct >= 0.8) return "#16A34A"; // green
  if (pct >= 0.5) return "#A3A000"; // olive/yellow
  return "#C0392B";                 // red
}

function getBarBg(score: number, max: number): string {
  const pct = score / max;
  if (pct >= 0.8) return "rgba(22,163,74,0.12)";
  if (pct >= 0.5) return "rgba(163,160,0,0.12)";
  return "rgba(192,57,43,0.12)";
}

// Hatched SVG pattern for the background of the progress bars
function HatchPattern({ color }: { color: string }) {
  return (
    <svg width="100%" height="100%" className="absolute inset-0">
      <defs>
        <pattern id={`hatch-${color.replace("#", "")}`} patternUnits="userSpaceOnUse" width="8" height="8" patternTransform="rotate(45)">
          <line x1="0" y1="0" x2="0" y2="8" stroke={color} strokeWidth="2" strokeOpacity="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#hatch-${color.replace("#", "")})`} />
    </svg>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ResultPage() {
  const overallPct = totalScore / totalMax;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
     <NavbarLight activeIndex={3} />

      {/* Body */}
      <div className="flex flex-1 relative">
        {/* Back to home */}
        <div className="absolute left-10 top-10">
          <Link href="/">
            <button className="flex items-center gap-2 bg-[#FFF3E0] hover:bg-[#FFE0B2] text-gray-700 font-medium text-[13.5px] px-5 py-3 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              Back to home
            </button>
          </Link>
        </div>

        {/* Main content */}
        <div className="flex-1 max-w-[620px] mx-auto w-full px-6 pt-10 pb-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-5"
          >
            {/* ── Overall Score Card ── */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl px-8 py-7 text-center"
              style={{ backgroundColor: "#F5F0E8" }}
            >
              <h2 className="text-[22px] font-extrabold text-gray-900 mb-1">
                Marketing Leader 🏆
              </h2>
              <p className="text-gray-500 text-[14px] mb-6">
                Your marketing is highly strategic and well-executed. You're in the top tier.
              </p>

              {/* Score */}
              <div className="mb-4">
                <span className="text-[48px] font-extrabold text-gray-900 leading-none">
                  {totalScore}
                </span>
                <span className="text-[18px] font-medium text-gray-500 ml-1">
                  out of {totalMax}
                </span>
              </div>

              {/* Overall progress bar */}
              <div className="relative h-[10px] rounded-full overflow-hidden bg-white/60">
                <HatchPattern color="#16A34A" />
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-full"
                  style={{ backgroundColor: "#16A34A" }}
                  initial={{ width: 0 }}
                  animate={{ width: `${overallPct * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                />
              </div>
            </motion.div>

            {/* ── Section Breakdown ── */}
            <motion.h3
              variants={itemVariants}
              className="text-[22px] font-extrabold text-gray-900 mt-1"
            >
              Section Breakdown
            </motion.h3>

            {sections.map((section, i) => {
              const pct = section.score / section.max;
              const barColor = getBarColor(section.score, section.max);
              const bgColor = getBarBg(section.score, section.max);

              return (
                <motion.div
                  key={section.label}
                  variants={itemVariants}
                  className="rounded-2xl border border-gray-100 px-6 py-5"
                  style={{ backgroundColor: "#FAFAFA" }}
                >
                  {/* Label + Score */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[14px] font-medium text-gray-700">
                      {section.emoji} {section.label}
                    </span>
                    <span className="text-[15px] font-medium text-gray-500 flex-shrink-0 ml-4">
                      <span className="text-[22px] font-extrabold text-gray-900">
                        {section.score}
                      </span>{" "}
                      out of {section.max}
                    </span>
                  </div>

                  {/* Section progress bar */}
                  <div
                    className="relative h-[9px] rounded-full overflow-hidden"
                    style={{ backgroundColor: bgColor }}
                  >
                    <HatchPattern color={barColor} />
                    <motion.div
                      className="absolute left-0 top-0 h-full rounded-full"
                      style={{ backgroundColor: barColor }}
                      initial={{ width: 0 }}
                      animate={{ width: `${pct * 100}%` }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        delay: 0.2 + i * 0.1,
                      }}
                    />
                  </div>
                </motion.div>
              );
            })}

            {/* ── Recommendation Card ── */}
            <motion.div
              variants={itemVariants}
              className="rounded-2xl border border-gray-100 px-8 py-7 text-center"
              style={{ backgroundColor: "#FAFAFA" }}
            >
              <h3 className="text-[17px] font-extrabold text-gray-900 mb-2">
                Our Recommendation
              </h3>
              <p className="text-gray-500 text-[14px] leading-relaxed max-w-[380px] mx-auto">
                Focus on optimization and scaling what&apos;s working. Consider advanced
                strategies or expansion into new markets.
              </p>
            </motion.div>

            {/* ── CTA Button ── */}
            <motion.div variants={itemVariants}>
              <button className="w-full bg-[#F5A623] hover:bg-[#e09415] active:scale-[0.99] text-white font-bold text-[15px] py-4 rounded-full transition-all duration-150">
                Schedule a Strategy call
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}