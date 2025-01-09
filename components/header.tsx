'use client';

import { Logo } from './ui/logo';
import { NavigationLinks } from './ui/navigation/navigation-links';
import { MobileMenu } from './ui/navigation/mobile-menu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useScroll } from '@/hooks/use-scroll';
import { cn } from '@/lib/utils';

export function Header() {
  const scrolled = useScroll();

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        scrolled ? 'bg-black/50 backdrop-blur-md shadow-lg' : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 sm:h-18 lg:h-20 items-center justify-between">
          <div className="flex items-center">
            <Logo className="text-base sm:text-lg lg:text-xl" />
          </div>

          <div className="hidden md:flex justify-center">
            <NavigationLinks className="flex items-center space-x-4 lg:space-x-8" />
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <a
              href="/store"
              className="hidden sm:flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-white transition-colors hover:bg-white/20"
            >
              <FontAwesomeIcon icon={faShoppingCart} className="h-3 w-3 sm:h-4 sm:w-4" />
              Store
            </a>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
}