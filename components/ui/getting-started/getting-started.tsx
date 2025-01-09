"use client";

import { steps } from "./data";
import { StepCard } from "./step-card";

export function GettingStarted() {
  return (
    <section className="py-24 bg-black">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">
            Get Started in Minutes
          </h2>
          <p className="text-gray-400">
            Follow these simple steps to join our roleplay community
          </p>
        </div>
        <div className="grid gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}