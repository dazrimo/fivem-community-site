'use client';
import { Logo } from '../logo';
import { FooterLinks } from './footer-links';
import { FooterAbout } from './footer-about';
import { FooterStatus } from './footer-status';

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <FooterAbout />
          </div>

          <div className="md:col-span-6">
            <FooterLinks />
          </div>

          <div className="md:col-span-3">
            <FooterStatus />
          </div>
        </div>

        <div className="mt-12 pt-8">
          <div className="text-center space-y-4">
            <p className="text-xs text-gray-500 max-w-3xl mx-auto">
              Community Name is not affiliated with or endorsed by Take-Two,
              Rockstar North Interactive, or any other rights holder. All the
              used trademarks belong to their respective owners.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
