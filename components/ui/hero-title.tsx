"use client";

import { FlipWords } from "./flip-words";

export function HeroTitle() {
  return (
    <div className="flex flex-col items-center justify-center text-center mb-6">
      <h1 className="text-6xl font-bold tracking-tight text-white sm:text-7xl">
        Elevate
        <span className="animated-text-bg ml-4">
          <FlipWords
            words={[
              "Roleplay",
              "Adventure",
              "Stories",
              "Action"
            ]}
          />
        </span>
      </h1>
    </div>
  );
}