'use client';

import { motion } from 'framer-motion';

export function Navigation() {
  const links = [
    { id: 'apply', href: '/apply', label: 'Apply' },
    { id: 'discord', href: 'https://discord.gg/hn6G9Qf4a3', label: 'Discord' },
    { id: 'rules', href: '/rules', label: 'Rules' },
    { id: 'team', href: '/team', label: 'Team' },
  ];

  return (
    <nav className="flex items-center gap-8">
      {links.map(({ id, href, label }) => (
        <motion.a
          key={id}
          href={href}
          className="px-4 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-white"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {label}
        </motion.a>
      ))}
    </nav>
  );
}
