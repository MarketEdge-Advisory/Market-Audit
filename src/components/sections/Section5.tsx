"use client";

import { useState } from "react";
import QuestionnaireLayout from "@/components/QuestionnaireLayout";
import Dropdown from "@/components/Dropdown";

const questions = [
  {
    id: "q1",
    label: "Q1: Do you have marketing analytics tools set up and actively monitored?",
    options: [
      "Yes — full analytics stack monitored weekly",
      "Some tools set up but rarely reviewed",
      "Basic tools only (e.g. Google Analytics)",
      "No analytics tools in place",
    ],
  },
  {
    id: "q2",
    label: "Q2: How do you report marketing performance to stakeholders?",
    options: [
      "Regular dashboards and reports",
      "Ad hoc reports when requested",
      "Verbally with no formal reports",
      "We don't report marketing performance",
    ],
  },
  {
    id: "q3",
    label: "Q3: Do you conduct A/B testing on your marketing campaigns?",
    options: [
      "Yes, regularly on most campaigns",
      "Occasionally on some campaigns",
      "Rarely",
      "Never",
    ],
  },
  {
    id: "q4",
    label: "Q4: How clearly can you attribute revenue to specific marketing activities?",
    options: [
      "Very clearly — full attribution tracking",
      "Partially — some attribution exists",
      "Mostly guesswork",
      "We can't attribute revenue to marketing",
    ],
  },
  {
    id: "q5",
    label: "Q5: Rate this statement:",
    bold: `"Data and insights drive every major marketing decision we make."`,
    options: [
      "Strongly agree",
      "Agree",
      "Disagree",
      "Strongly disagree",
    ],
  },
];

export default function Section5() {
 const [answers, setAnswers] = useState<Record<string, string>>({});

  // isValid = all 5 questions answered
  const isValid = questions.every((q) => !!answers[q.id]);

  return (
    <QuestionnaireLayout currentSection={5} isValid={isValid}>
      <p className="flex items-center gap-1.5 text-[13.5px] text-gray-500 font-medium mb-2">
        <span>📊</span>
        <span>Section 5 - (5/5)</span>
      </p>
      <h1 className="text-[38px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
        Analytics &amp; Performance
      </h1>
      <p className="text-gray-400 text-[15px] mb-8">
        Measuring how well you track and act on marketing data.
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