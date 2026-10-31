import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import airbnbLogo from "@/assets/tools/airbnb.png";
import hostawayLogo from "@/assets/tools/hostaway.png";
import guestyLogo from "@/assets/tools/guesty.png";
import pricelabsLogo from "@/assets/tools/pricelabs.png";
import breezewayLogo from "@/assets/tools/breezeway.png";
import hospitableLogo from "@/assets/tools/hospitable.png";
import ensoLogo from "@/assets/tools/enso.png";
import turnoLogo from "@/assets/tools/turno.png";
import bookingLogo from "@/assets/tools/booking.png";
import notionLogo from "@/assets/tools/notion.png";
import claudeLogo from "@/assets/tools/claude.png";
import makeLogo from "@/assets/tools/make.png";
import canvaLogo from "@/assets/tools/canva.png";

// Add a `logo` import for any tool as its file arrives. Without one, the name shows as text.
const tools: { name: string; logo?: string }[] = [
  { name: "Airbnb", logo: airbnbLogo },
  { name: "Hostaway", logo: hostawayLogo },
  { name: "Guesty", logo: guestyLogo },
  { name: "PriceLabs", logo: pricelabsLogo },
  { name: "Breezeway", logo: breezewayLogo },
  { name: "Hospitable", logo: hospitableLogo },
  { name: "Enso Connect", logo: ensoLogo },
  { name: "Turno", logo: turnoLogo },
  { name: "Booking.com", logo: bookingLogo },
  { name: "Notion", logo: notionLogo },
  { name: "Claude", logo: claudeLogo },
  { name: "Make.com", logo: makeLogo },
  { name: "Canva", logo: canvaLogo },
];

const ToolsStrip = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);

  // Endless loop: the list is rendered twice and we jump back by one list length before each step.
  const step = (dir: 1 | -1, page = false) => {
    const el = ref.current;
    if (!el) return;
    const item = el.firstElementChild as HTMLElement | null;
    const w = item ? item.offsetWidth : 200;
    if (!w) return;
    const half = w * tools.length;
    const count = page ? Math.max(1, Math.round(el.clientWidth / w)) : 1;
    let pos = el.scrollLeft;
    if (pos >= half) pos -= half;
    if (dir === -1 && pos < w * count) pos += half;
    if (pos !== el.scrollLeft) el.scrollTo({ left: pos, behavior: "instant" });
    el.scrollBy({ left: dir * w * count, behavior: "smooth" });
  };

  useEffect(() => {
    if (paused) return;
    const id = setInterval(() => step(1), 2800);
    return () => clearInterval(id);
  }, [paused]);

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} onTouchStart={() => setPaused(true)}>
      <p className="text-white/80 text-sm tracking-[0.2em] uppercase font-medium text-center mb-6">
        The platforms and tools we run your operation on
      </p>
      <div className="relative">
        <button
          type="button"
          aria-label="Previous tools"
          onClick={() => step(-1, true)}
          className="absolute left-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-black hover:text-brand transition-colors"
        >
          <ChevronLeft size={20} />
        </button>
        <div className="rounded-3xl bg-white/75 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.4)] px-16 sm:px-20 py-6">
          <div
            ref={ref}
            className="flex overflow-x-auto snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {[...tools, ...tools].map((t, i) => (
              <div key={t.name + i} aria-hidden={i >= tools.length || undefined} className="snap-start shrink-0 basis-full sm:basis-1/3 lg:basis-1/6 flex items-center justify-center px-5 h-14">
                {t.logo ? (
                  <img src={t.logo} alt={t.name} className="max-h-12 max-w-full w-auto object-contain" loading="lazy" />
                ) : (
                  <span className="font-heading text-xl md:text-2xl font-semibold tracking-[-0.01em] text-black/70 whitespace-nowrap">{t.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          aria-label="Next tools"
          onClick={() => step(1, true)}
          className="absolute right-3 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-white shadow-md flex items-center justify-center text-black hover:text-brand transition-colors"
        >
          <ChevronRight size={20} />
        </button>
      </div>
      <p className="text-white/60 text-xs text-center mt-4">
        Names and logos belong to their respective owners. No affiliation or endorsement implied.
      </p>
    </div>
  );
};

export default ToolsStrip;
