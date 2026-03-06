"use client";

import { useState } from "react";
import QuestionnaireLayout from "@/components/QuestionnaireLayout";
import Dropdown from "@/components/Dropdown";

const questions = [
  {
    id: "q1",
    label: "Q1: How would you rate your current website's ability to convert visitors into leads?",
    options: [
      "Excellent — it consistently generates leads",
      "Good — it generates some leads",
      "Poor — rarely generates leads",
      "We don't track this",
    ],
  },
  {
    id: "q2",
    label: "Q2: How consistent is your brand identity across all digital channels?",
    options: [
      "Very consistent across all platforms",
      "Mostly consistent with minor differences",
      "Inconsistent across channels",
      "We have no defined brand identity",
    ],
  },
  {
    id: "q3",
    label: "Q3: How often do you publish content on your website or blog?",
    options: [
      "Multiple times per week",
      "Once a week",
      "Monthly",
      "Rarely or never",
    ],
  },
  {
    id: "q4",
    label: "Q4: Is your website optimised for search engines (SEO)?",
    options: [
      "Yes, fully optimised with ongoing SEO",
      "Partially optimised",
      "Minimal SEO work done",
      "No SEO at all",
    ],
  },
  {
    id: "q5",
    label: "Q5: Rate this statement:",
    bold: `"Our digital presence clearly communicates our unique value proposition."`,
    options: [
      "Strongly agree",
      "Agree",
      "Disagree",
      "Strongly disagree",
    ],
  },
];

export default function Section2() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // isValid = all 5 questions answered
  const isValid = questions.every((q) => !!answers[q.id]);

  return (
    <QuestionnaireLayout currentSection={2} isValid={isValid}>
      <p className="flex items-center gap-1.5 text-[13.5px] text-gray-500 font-medium mb-2">
        <span>🌐</span>
        <span>Section 2 - (2/5)</span>
      </p>
      <h1 className="text-[38px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
        Digital Presence &amp; Brand
      </h1>
      <p className="text-gray-400 text-[15px] mb-8">
        Evaluating your online visibility and brand consistency.
      </p>

      <div className="flex flex-col gap-7">
        {questions.map((q) => (
          <div key={q.id}>
            <p className="text-gray-700 text-[14.5px] mb-2.5">
              {q.bold ? (
                <>
                  {q.label} <strong>{q.bold}</strong>
                </>
              ) : (
                q.label
              )}
            </p>
            <Dropdown
              options={q.options}
              value={answers[q.id] || ""}
              onChange={(val) => setAnswers((prev) => ({ ...prev, [q.id]: val }))}
            />
          </div>
        ))}
      </div>
    </QuestionnaireLayout>
  );
}