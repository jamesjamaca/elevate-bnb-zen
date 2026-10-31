import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tools = [
  "Airbnb", "Hostaway", "Guesty", "PriceLabs", "Breezeway", "Hospitable", "Enso Connect",
  "Turno", "Booking.com", "Notion", "Claude", "Make.com", "Canva",
];

const ToolsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const scroll = (dir: 1 | -1) => ref.current?.scrollBy({ left: dir * 320, behavior: "smooth" });

  return (
    <div>
      <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium text-center mb-6">
        The platforms and tools we run your operation on
      </p>
      <div className="relative">
        <button
          type="button"
          aria-label="Scroll tools left"
          onClick={() => scroll(-1)}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:border-brand transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <div
          ref={ref}
          className="flex items-center gap-12 overflow-x-auto snap-x px-16 py-6 rounded-3xl bg-secondary border border-border/60 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {tools.map((t) => (
            <span
              key={t}
              className="snap-center shrink-0 font-heading text-xl md:text-2xl font-semibold tracking-[-0.01em] text-foreground/70 whitespace-nowrap"
            >
              {t}
            </span>
          ))}
        </div>
        <button
          type="button"
          aria-label="Scroll tools right"
          onClick={() => scroll(1)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-11 w-11 rounded-full bg-background border border-border shadow-md flex items-center justify-center hover:border-brand transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>
      <p className="text-muted-foreground/60 text-xs text-center mt-4">
        Names belong to their respective owners. No affiliation or endorsement implied.
      </p>
    </div>
  );
};

export default ToolsStrip;
