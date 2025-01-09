"use client";

import { TwitterTimelineEmbed } from "react-twitter-embed";

interface TwitterFeedProps {
  username: string;
}

export function TwitterFeed({ username }: TwitterFeedProps) {
  return (
    <div className="rounded-lg overflow-hidden bg-zinc-900 shadow-xl h-[500px]">
      <TwitterTimelineEmbed
        sourceType="profile"
        screenName={username}
        options={{
          height: 500,
          theme: "dark",
          chrome: "noheader nofooter noborders transparent"
        }}
      />
    </div>
  );
}