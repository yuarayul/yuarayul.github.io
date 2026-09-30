type TickerProps = { text: string; label?: string };

export function Ticker({ text, label = "Services" }: TickerProps) {
  const content = (
    <span className="flex shrink-0 items-center" aria-hidden="true">
      {Array.from({ length: 4 }, (_, index) => (
        <span key={index} className="px-5 italic sm:px-8">
          {text} <span className="text-ink-black">•</span>
        </span>
      ))}
    </span>
  );

  return (
    <div className="overflow-hidden border-y-2 border-ink-black bg-brutalist-pink py-5 sm:py-6" role="region" aria-label={label}>
      <p className="sr-only">{text}</p>
      <div className="marquee-track flex w-max whitespace-nowrap text-3xl font-black text-off-white sm:text-6xl">
        {content}
        {content}
      </div>
    </div>
  );
}
