"use client";

import { DiscordWidget } from "./discord-widget";
import { TwitterFeed } from "./twitter-feed";

export function SocialFeed() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Connect With Us
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <DiscordWidget />
          <TwitterFeed username="codevibing" />
        </div>
      </div>
    </section>
  );
}