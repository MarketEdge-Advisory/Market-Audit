"use client";

import { useState } from "react";
import QuestionnaireLayout from "@/components/QuestionnaireLayout";
import Dropdown from "@/components/Dropdown";

const questions = [
  {
    id: "q1",
    label: "Q1: Who currently sets your overall marketing strategy?",
    options: [
      "The business owner / founder",
      "An in-house marketing manager",
      "An external agency or consultant",
      "No one — it's ad hoc",
    ],
  },
  {
    id: "q2",
    label: "Q2: Can you clearly connect your current marketing activities to revenue goals?",
    options: [
      "Yes, very clearly",
      "Somewhat",
      "Not really",
      "No connection at all",
    ],
  },
  {
    id: "q3",
    label: "Q3: How often do you conduct strategic marketing reviews with leadership?",
    options: ["Monthly", "Quarterly", "Annually", "Never"],
  },
  {
    id: "q4",
    label: "Q4: Do you have documented ideal customer profiles and a clear positioning strategy?",
    options: [
      "Yes, fully documented",
      "Partially documented",
      "In our heads but not written",
      "No",
    ],
  },
  {
    id: "q5",
    label: `Q5: Rate this statement: "Our marketing budget is allocated based on data-driven ROI analysis."`,
    bold: `"Our marketing budget is allocated based on data-driven ROI analysis."`,
    options: [
      "Strongly agree",
      "Agree",
      "Disagree",
      "Strongly disagree",
    ],
  },
];

export default function Section1() {
    const [answers, setAnswers] = useState<Record<string, string>>({});

  // isValid = all 5 questions answered
  const isValid = questions.every((q) => !!answers[q.id]);

  return (
    <QuestionnaireLayout currentSection={1} isValid={isValid}>
      {/* Header */}
      <p className="flex items-center gap-1.5 text-[13.5px] text-gray-500 font-medium mb-2">
        <span>🎯</span>
        <span>Section 1 - (1/5)</span>
      </p>
      <h1 className="text-2xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
        Strategic Leadership &amp; Planning
      </h1>
      <p className="text-gray-400 text-[15px] mb-8">
        Understanding your marketing strategy foundation.
      </p>

      {/* Questions */}
      <div className="flex flex-col gap-7">
        {questions.map((q) => (
          <div key={q.id}>
            <p className="text-gray-700 text-[14.5px] mb-2.5">
              {q.bold ? (
                <>
                  Q5: Rate this statement:{" "}
                  <strong>{q.bold}</strong>
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