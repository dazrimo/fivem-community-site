export function RulesHero() {
  return (
    <div className="relative min-h-[40vh] hero-image">
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative container mx-auto px-4 flex items-center min-h-[40vh]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Server Rules
          </h1>
          <p className="text-lg text-gray-300">
            Please read and follow these rules to ensure a positive gaming experience for everyone.
          </p>
        </div>
      </div>
    </div>
  );
}