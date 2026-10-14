import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import photo1 from "@/assets/founder-1.jpg";
import photo2 from "@/assets/founder-2.jpg";
import photo3 from "@/assets/founder-3.jpg";

const photos = [
  { src: photo1, alt: "James Jamaca, Founder of Elite BNB Hosts" },
  { src: photo2, alt: "James Jamaca seated in a living room" },
  { src: photo3, alt: "James Jamaca working on his laptop" },
];

const FounderPhotos = () => {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((n + photos.length) % photos.length);

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Photos of James Jamaca"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
      className="outline-none w-full max-w-[19rem] md:max-w-sm"
    >
      <div className="relative">
        <div className="relative aspect-[3/4] overflow-hidden rounded-3xl border border-border bg-muted shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
          <AnimatePresence mode="wait">
            <motion.img
              key={i}
              src={photos[i].src}
              alt={photos[i].alt}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(_, info) => {
                if (info.offset.x < -50) go(i + 1);
                else if (info.offset.x > 50) go(i - 1);
              }}
              draggable={false}
              className="absolute inset-0 h-full w-full object-cover"
              loading={i === 0 ? "eager" : "lazy"}
            />
          </AnimatePresence>
        </div>
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous photo"
          className="absolute -left-4 md:-left-5 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-border bg-background shadow-md hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next photo"
          className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-10 flex h-9 w-9 md:h-10 md:w-10 items-center justify-center rounded-full border border-border bg-background shadow-md hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        {photos.map((p, n) => (
          <button
            key={p.src}
            onClick={() => go(n)}
            aria-label={`Show photo ${n + 1}`}
            className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-brand" : "w-2.5 bg-border"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default FounderPhotos;
