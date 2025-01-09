"use client";

import { Step } from "./types";
import { Icon } from "@/components/ui/icon";
import { motion } from "framer-motion";

interface StepCardProps {
  step: Step;
  index: number;
}

export function StepCard({ step, index }: StepCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-colors"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-indigo-500/20 flex items-center justify-center">
          <Icon name={step.icon} className="w-6 h-6 text-indigo-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
          <p className="text-gray-400 mb-4">{step.description}</p>
          {step.link && (
            <a
              href={step.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              Get Started
              <Icon name="arrow-right" className="w-4 h-4" />
            </a>
          )}
        </div>
        <div className="text-4xl font-bold text-white/10">
          {index + 1}
        </div>
      </div>
    </motion.div>
  );
}