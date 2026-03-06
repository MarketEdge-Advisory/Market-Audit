"use client";

import { useState } from "react";
import QuestionnaireLayout from "@/components/QuestionnaireLayout";
import Dropdown from "@/components/Dropdown";

const questions = [
  {
    id: "q1",
    label: "Q1: What is your primary lead generation channel?",
    options: [
      "Paid advertising (Google, Meta, etc.)",
      "Organic / SEO",
      "Referrals and word of mouth",
      "We don't have a defined channel",
    ],
  },
  {
    id: "q2",
    label: "Q2: Do you have a documented lead nurturing process?",
    options: [
      "Yes, fully automated and documented",
      "Partially — some follow-up processes exist",
      "Mostly manual and informal",
      "No process at all",
    ],
  },
  {
    id: "q3",
    label: "Q3: How do you currently track leads through your sales pipeline?",
    options: [
      "CRM software (e.g. HubSpot, Salesforce)",
      "Spreadsheets",
      "Informally / memory",
      "We don't track leads",
    ],
  },
  {
    id: "q4",
    label: "Q4: What is your average lead-to-customer conversion rate?",
    options: [
      "Above 20%",
      "10–20%",
      "Below 10%",
      "We don't measure this",
    ],
  },
  {
    id: "q5",
    label: "Q5: Rate this statement:",
    bold: `"We have a reliable, repeatable system for generating qualified leads every month."`,
    options: [
      "Strongly agree",
      "Agree",
      "Disagree",
      "Strongly disagree",
    ],
  },
];

export default function Section3() {
 const [answers, setAnswers] = useState<Record<string, string>>({});

  // isValid = all 5 questions answered
  const isValid = questions.every((q) => !!answers[q.id]);

  return (
    <QuestionnaireLayout currentSection={3} isValid={isValid}>
      <p className="flex items-center gap-1.5 text-[13.5px] text-gray-500 font-medium mb-2">
        <span>🔥</span>
        <span>Section 3 - (3/5)</span>
      </p>
      <h1 className="text-[38px] font-extrabold text-gray-900 tracking-tight leading-tight mb-2">
        Lead Generation &amp; Pipeline
      </h1>
      <p className="text-gray-400 text-[15px] mb-8">
        Assessing how you attract and convert potential customers.
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