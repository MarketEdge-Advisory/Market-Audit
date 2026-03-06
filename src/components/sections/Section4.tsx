"use client";

import { useState } from "react";
import QuestionnaireLayout from "@/components/QuestionnaireLayout";
import Dropdown from "@/components/Dropdown";

const questions = [
  {
    id: "q1",
    label: "Q1: Do you have a documented content marketing strategy?",
    options: [
      "Yes, fully documented and followed",
      "Informal strategy exists",
      "We post ad hoc without a strategy",
      "No content marketing at all",
    ],
  },
  {
    id: "q2",
    label: "Q2: Which social media platforms are you actively using for marketing?",
    options: [
      "3 or more platforms consistently",
      "1–2 platforms consistently",
      "We post occasionally on some platforms",
      "We are not active on social media",
    ],
  },
  {
    id: "q3",
    label: "Q3: How do you measure the performance of your content?",
    options: [
      "Detailed analytics and KPI tracking",
      "Basic metrics (likes, views)",
      "We rarely check performance",
      "We don't measure content performance",
    ],
  },
  {
    id: "q4",
    label: "Q4: How would you describe your content's engagement with your target audience?",
    options: [
      "Highly engaging — strong comments and shares",
      "Moderate engagement",
      "Low engagement",
      "Little to no engagement",
    ],
  },
  {
    id: "q5",
    label: "Q5: Rate this statement:",
    bold: `"Our content consistently attracts and educates our ideal clients."`,
    options: [
      "Strongly agree",
      "Agree",
      "Disagree",
      "Strongly disagree",
    ],
  },
];

export default function Section4() {
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // isValid = all 5 questions answered
  const isValid = questions.every((q) => !!answers[q.id]);

  return (
    <QuestionnaireLayout currentSection={4} isValid={isValid}>
      <p className="flex items-center gap-1.5 text-[13.5px] text-gray-500 font-medium mb-2">
        <span>📱</span>
        <span>Section 4 - (4/5)</span>
      </p>
      <h1 className="text-[38px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
        Content &amp; Social Media
      </h1>
      <p className="text-gray-400 text-[15px] mb-8">
        Understanding how you create and distribute content.
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