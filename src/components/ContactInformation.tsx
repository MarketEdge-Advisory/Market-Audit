"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import NavbarLight from "./Navbar/NavbarLight";



const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: "easeOut" } },
};

interface InputFieldProps {
  label: string;
  type?: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
  icon: React.ReactNode;
}

function InputField({ label, type = "text", placeholder, value, onChange, icon }: InputFieldProps) {
  return (
    <motion.div variants={itemVariants}>
      <label className="block text-[14px] font-medium text-gray-700 mb-2">
        {label}
      </label>
      <div className="flex items-center gap-3 bg-[#F5F5F5] border border-[#E8E8E8] rounded-xl px-4 py-[14px]">
        <span className="text-gray-400 flex-shrink-0">{icon}</span>
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 bg-transparent text-[15px] text-gray-800 placeholder-gray-400 outline-none"
        />
      </div>
    </motion.div>
  );
}

export default function ContactInformation() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    position: "",
  });

  const handleSubmit = () => {
    // Handle form submission — navigate to results page
    console.log("Form submitted:", form);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navbar */}
     <NavbarLight activeIndex={2} />

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
        <div className="flex-1 max-w-[580px] mx-auto w-full px-6 pt-12 pb-16">
          {/* Header */}
          <motion.div
            className="flex flex-col items-center text-center mb-8"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            {/* Green badge icon */}
            <div className="w-14 h-14 mb-5">
              <svg viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M28 4L33.5 10.2L42 8L43.2 16.8L51 20.5L47.5 28.5L51 36.5L43.2 40.2L42 49L33.5 46.8L28 53L22.5 46.8L14 49L12.8 40.2L5 36.5L8.5 28.5L5 20.5L12.8 16.8L14 8L22.5 10.2L28 4Z"
                  fill="#22C55E"
                />
                <path
                  d="M19 28.5L24.5 34L37 22"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-[32px] font-extrabold text-gray-900 tracking-tight mb-2">
              Your Results Are Ready
            </h1>
            <p className="text-gray-400 text-[15px]">
              Enter your details to unlock your personalized marketing audit report.
            </p>
          </motion.div>

          {/* Form */}
          <motion.div
            className="flex flex-col gap-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <InputField
              label="Full Name"
              placeholder="Enter your full name"
              value={form.fullName}
              onChange={(val) => setForm((p) => ({ ...p, fullName: val }))}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                </svg>
              }
            />

            <InputField
              label="Email Address"
              type="email"
              placeholder="example@gmail.com"
              value={form.email}
              onChange={(val) => setForm((p) => ({ ...p, email: val }))}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              }
            />

            <InputField
              label="Phone Number"
              type="tel"
              placeholder="0000 000 000"
              value={form.phone}
              onChange={(val) => setForm((p) => ({ ...p, phone: val }))}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
              }
            />

            <InputField
              label="Company Name"
              placeholder="Your company's name"
              value={form.company}
              onChange={(val) => setForm((p) => ({ ...p, company: val }))}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                </svg>
              }
            />

            <InputField
              label="Position"
              placeholder="CEO, Marketing manager, etc."
              value={form.position}
              onChange={(val) => setForm((p) => ({ ...p, position: val }))}
              icon={
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
                </svg>
              }
            />

            {/* Submit button */}
            <motion.div variants={itemVariants} className="pt-2">
              <Link href="/result">
                <button
                  onClick={handleSubmit}
                  className="w-full bg-[#F5A623] hover:bg-[#e09415] active:scale-[0.99] text-white font-bold text-[15px] py-4 rounded-full transition-all duration-150"
                >
                  Unlock my Results
                </button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}