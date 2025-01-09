export function PartnerLogo({ url }: { url: string }) {
  return (
    <div className="flex-shrink-0 w-32 h-16 flex items-center justify-center">
      <img
        src={url}
        alt="Partner Logo"
        className="max-w-full max-h-full object-contain opacity-50 hover:opacity-100 transition-opacity"
      />
    </div>
  );
}