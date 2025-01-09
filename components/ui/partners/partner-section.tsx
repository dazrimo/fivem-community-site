"use client";

import { PartnerScroll } from "./partner-scroll";
import { partnerLogos } from "./partner-data";

export function PartnerSection() {
  return (
    <div className="bg-black backdrop-blur-md">
      <div className="container mx-auto">
        <div className="relative py-12">
          <PartnerScroll items={partnerLogos} direction="left" speed={10} />
          <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-black/20 to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-black/20 to-transparent z-10" />
        </div>
      </div>
    </div>
  );
}