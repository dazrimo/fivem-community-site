import { TeamHero } from "@/components/ui/team/hero";
import { TeamGrid } from "@/components/ui/team/grid";

export default function TeamPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <TeamHero />
      <TeamGrid />
    </main>
  );
}