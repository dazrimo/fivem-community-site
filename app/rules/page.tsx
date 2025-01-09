import { RulesHero } from "@/components/ui/rules/hero";
import { RulesContent } from "@/components/ui/rules/content";
import { Footer } from "@/components/ui/footer/footer";

export default function RulesPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <RulesHero />
      <RulesContent />
    </main>
  );
}