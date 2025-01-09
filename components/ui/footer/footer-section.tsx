"use client";

interface FooterSectionProps {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export function FooterSection({ title, links }: FooterSectionProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-sm font-semibold text-white">{title}</h3>
      <ul className="flex flex-col gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-sm text-gray-400 hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}