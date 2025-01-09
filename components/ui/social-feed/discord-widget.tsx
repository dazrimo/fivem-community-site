"use client";

export function DiscordWidget() {
  return (
    <div className="rounded-lg overflow-hidden bg-zinc-900 shadow-xl">
      <iframe 
        src="https://discord.com/widget?id=1323330620675588186&theme=dark" 
        width="100%" 
        height="500" 
        allowTransparency={true}
        frameBorder="0" 
        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
        className="w-full"
      />
    </div>
  );
}