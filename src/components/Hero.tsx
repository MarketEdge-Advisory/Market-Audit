"use client";

import Image from "next/image";
import Link from "next/link";
import NavbarDark from "./Navbar/NavbarDark";

export default function Hero() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* ── Rounded-square cell overlay ── */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 96 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-[18px] border border-white/[0.045]"
            style={{
              width: 78,
              height: 78,
              left: (i % 16) * 90 + 6,
              top: Math.floor(i / 16) * 90 + 6,
            }}
          />
        ))}
      </div>

      {/* ══════════════════════════════
          NAVBAR
      ══════════════════════════════ */}
      <NavbarDark activeIndex={0} />

      {/* ══════════════════════════════
          HERO
      ══════════════════════════════ */}
      <main className="relative z-10 flex flex-col items-center text-center px-6 pt-14 pb-0">

        {/* Icon badge */}
        <div className="relative mb-7">
        
          <Image src="/logos/hero-icon.png" alt="Icon" width={40} height={40} />
         
          {/* Sparkle dot top-right */}
          <span className="absolute -top-1 -right-0.5 text-[#F5A623] text-base leading-none">✦</span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl lg:text-6xl md:text-[60px] font-extrabold leading-[1.08] tracking-[-0.02em] max-w-[820px] mb-5">
          Is Your{" "}
          <span className="text-[#F5A623]">Marketing Driving</span> Growth
          <br />
          or Just Keeping You Busy?
        </h1>

        {/* Sub-copy */}
        <p className="text-white/50 text-[15.5px] md:text-[16.5px] max-w-[540px] leading-relaxed mb-9">
          Take this 8-minute audit to discover exactly where your marketing is
          strong — and where gaps are costing you revenue.
        </p>

          {/* CTA */}
        <Link href="/questionnaire">
          <button className="flex items-center gap-3 bg-[#F5A623] hover:bg-[#e09415] active:scale-[0.98] text-black font-extrabold text-[15px] px-6 py-3.5 rounded-full transition-all duration-150 mb-12 group">
            Start Your Free Audit
            <span className="w-7 h-7 rounded-full bg-black/20 group-hover:bg-black/30 flex items-center justify-center transition-colors">
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path
                  d="M1.5 11.5L11.5 1.5M11.5 1.5H4.5M11.5 1.5V8.5"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </Link>

        {/* Hero image card */}
       <div className="relative w-full max-w-[660px] mx-auto rounded-[28px] overflow-hidden aspect-video border border-white/10">
  <Image
    src="/images/hero-advisor.jpg"
    alt="Marketing advisor at desk"
    fill
    className="object-cover"
    priority
  />
</div>
      </main>
    </div>
  );
}