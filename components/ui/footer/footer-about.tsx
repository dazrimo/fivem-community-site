"use client";
import { Logo } from "../logo";

export function FooterAbout() {
  return (
    <div className="flex flex-col gap-4">
      <Logo />
      <p className="text-sm text-gray-400">
        Join our thriving gaming community where passion meets innovation. 
        Experience next-generation gameplay and be part of something extraordinary.
      </p>
    </div>
  );
}