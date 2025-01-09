import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { SocialFeed } from "@/components/ui/social-feed/social-feed";
import { HeroTitle } from "@/components/ui/hero-title";
import { FaqSection } from "@/components/ui/faq/faq-section";
import { PartnerSection } from "@/components/ui/partners/partner-section";
import { GettingStarted } from "@/components/ui/getting-started/getting-started";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="relative min-h-[60vh] hero-image">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 flex items-center min-h-[60vh]">
          <div className="flex flex-col items-center justify-center text-center w-full">
            <HeroTitle />
            <p className="mb-8 max-w-2xl text-lg text-gray-300">
              Create stunning web experiences with our modern UI components. Built
              with React and Tailwind CSS for maximum flexibility and performance.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:bg-gray-100"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="https://github.com"
                className="flex items-center gap-2 rounded-full border border-gray-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-white/10"
              >
                <FontAwesomeIcon icon={faDiscord} className="h-4 w-4" />
                Join Discord
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <PartnerSection />
      <GettingStarted />
      <SocialFeed />
      <FaqSection />
    </main>
  );
}