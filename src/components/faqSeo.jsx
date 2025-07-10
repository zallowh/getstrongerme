"use client";
import React, { useState } from "react";

const faqs = [
  {
    question: "How long does SEO take to see results?",
    answer:
      "Most websites start seeing meaningful improvements in 3–6 months. Local keywords may rank faster, while competitive national terms take longer. SEO is a compounding investment — results build over time.",
  },
  {
    question: "What's the difference between SEO and Google Ads?",
    answer:
      "SEO brings free, long-term traffic from search engines by improving your site’s content and technical health. Google Ads is a paid model where you pay per click for visibility. Many businesses use both for maximum reach.",
  },
  {
    question: "Do you offer keyword research every month?",
    answer:
      "Yes. We conduct monthly keyword research to stay ahead of trends, identify new opportunities, and refine your content strategy based on performance and search behavior.",
  },
  {
    question: "Is local SEO included in your plan?",
    answer:
      "Absolutely. Our SEO plan includes optimization for local keywords, Google Maps, and your Google Business Profile. We help you rank for terms like 'plumber in Johannesburg' or 'digital marketing near me'.",
  },
  {
    question: "What makes Strongerme different from other SEO providers?",
    answer:
      "We go beyond checklists. Our SEO strategy is tailored to your goals, backed by local data, and informed by real user intent. We mix technical, content, and AI-driven optimization to keep you ahead of algorithm changes.",
  },
];

export default function FAQAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="mt-10 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-6">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-gray-200 font-medium flex justify-between items-center"
            >
              <span>{faq.question}</span>
              <span>{activeIndex === index ? "−" : "+"}</span>
            </button>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-white text-gray-700 leading-relaxed">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
