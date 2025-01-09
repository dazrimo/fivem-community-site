import { cn } from "@/lib/utils";

interface NavigationLinksProps {
  className?: string;
}

export function NavigationLinks({ className }: NavigationLinksProps) {
  const links = [
    { href: "/apply", label: "Apply" },
    { href: "https://discord.gg/your-discord", label: "Discord" },
    { href: "/rules", label: "Rules" },
    { href: "/team", label: "Team" },
  ];

  return (
    <nav className={className}>
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          className="text-sm lg:text-base text-white/90 hover:text-white font-medium transition-colors"
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}