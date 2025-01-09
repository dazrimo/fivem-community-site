'use client';

interface FooterLink {
  id: string;
  href: string;
  label: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

export function FooterLinks() {
  const sections: FooterSection[] = [
    {
      title: 'Community',
      links: [
        { id: 'apply', href: 'https://discord.gg/hn6G9Qf4a3', label: 'Apply' },
        { id: 'discord', href: 'https://discord.gg/hn6G9Qf4a3', label: 'Discord' },
        { id: 'team', href: '/team', label: 'Team' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { id: 'privacy', href: '/rules', label: 'Privacy Policy' },
        { id: 'terms', href: '/rules', label: 'Terms of Service' },
        { id: 'rules', href: '/rules', label: 'Rules' },
      ],
    },
    {
      title: 'Support',
      links: [
        { id: 'support', href: '/support', label: 'Support' },
        { id: 'contact', href: '/contact', label: 'Contact' },
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      {sections.map((section) => (
        <div key={section.title}>
          <h3 className="text-sm font-semibold text-white mb-3">
            {section.title}
          </h3>
          <ul className="space-y-2">
            {section.links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}