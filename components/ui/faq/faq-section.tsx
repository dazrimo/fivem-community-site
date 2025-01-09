"use client";

import { useState } from "react";
import { FaqItem } from "./faq-item";

const faqs = [
  {
    question: "What is FiveM?",
    answer: "FiveM is a modification for Grand Theft Auto V enabling you to play multiplayer on customized dedicated servers. Our server offers a unique roleplay experience with custom vehicles, jobs, and a vibrant community."
  },
  {
    question: "How do I join the server?",
    answer: "To join our server, you'll need to own GTA V on Steam or Epic Games, install FiveM, and join our Discord community. We'll guide you through the application process and provide all necessary resources."
  },
  {
    question: "What makes your server unique?",
    answer: "Our server features custom-scripted jobs, 500+ custom vehicles, active staff support, and a dedicated community. We focus on realistic roleplay with unique features like advanced property systems and business ownership."
  },
  {
    question: "Are there rules I need to follow?",
    answer: "Yes, we maintain strict roleplay guidelines to ensure a quality experience for everyone. Our main rules include staying in character, respecting other players, and following server-specific regulations available in our Discord."
  }
];

export function FaqSection() {
  return (
    <section className="bg-black py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 animated-text-bg">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}