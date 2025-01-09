export function TeamHero() {
  return (
    <div className="relative min-h-[40vh] hero-image">
      <div className="absolute inset-0 hero-gradient" />
      <div className="relative container mx-auto px-4 flex items-center min-h-[40vh]">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Meet Our Team
          </h1>
          <p className="text-lg text-gray-300">
            Get to know the passionate individuals behind our community who work tirelessly to create an amazing gaming experience.
          </p>
        </div>
      </div>
    </div>
  );
}