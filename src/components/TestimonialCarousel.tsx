import { useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight, Building2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import jacobPhoto from "@/assets/jacob-nostrant.jpg";
import crewLogo from "@/assets/crew-housing-logo.png";
import sikanderPhoto from "@/assets/sikander-zafar.jpg";
import estivenPhoto from "@/assets/estiven-gomez.jpg";
import dharmeshLogo from "@/assets/dharmesh-logo.png";
import dharmeshProof from "@/assets/dharmesh-superhost-proof.jpg";
import sikanderProof from "@/assets/sikander-superhost-proof.jpg";
import floridaProof from "@/assets/florida-superhost-proof.jpg";

type Avatar =
  | { kind: "photo"; src: string; alt: string; top?: boolean }
  | { kind: "logo"; src: string; alt: string }
  | { kind: "icon" };

interface Slide {
  id: string;
  tab: string;
  name: string;
  role: ReactNode;
  avatar: Avatar;
  short: ReactNode;
  full: ReactNode;
  chips: string[];
  proof?: { src: string; alt: string; caption: string };
}

const B = ({ children }: { children: ReactNode }) => <span className="font-bold">{children}</span>;
const O = ({ children }: { children: ReactNode }) => <span className="text-brand font-bold">{children}</span>;

const slides: Slide[] = [
  {
    id: "jacob",
    tab: "Jacob",
    name: "Jacob Nostrant",
    role: (
      <span className="inline-flex flex-col items-center gap-2">
        <span className="inline-flex items-center gap-2.5">
          <img src={crewLogo} alt="Crew Housing logo" className="h-8 w-auto" loading="lazy" />
          <span className="text-foreground text-base font-semibold">Crew Housing</span>
        </span>
        <span>Short-term &amp; mid-term rentals &middot; 100+ properties</span>
      </span>
    ),
    avatar: { kind: "photo", src: jacobPhoto, alt: "Jacob Nostrant" },
    short: (
      <>Working with James was a <O>game changer!</O> We kept Superhost <B>every single quarter</B> &hellip; We've won multiple claims, too many to count &hellip; some months we brought in an extra <O>$20K+</O> in revenue just by following [the SOP].</>
    ),
    full: (
      <>Working with James was a <O>game changer!</O> We kept Superhost <B>every single quarter</B>, and a few times it was a nail-biter. His team stepped in and saved it! We've won multiple claims, too many to count, and James was an absolute <B>BEAST</B> with reviews. Then there's the SOP: some months we brought in an extra <O>$20K+</O> in revenue just by following it. It felt like a money hack, and all of it is built on Airbnb's own policy. If you run Airbnbs, talk to James!</>
    ),
    chips: ["100+ short & mid-term properties managed", "Superhost every quarter", "Multiple claims won", "$20K+ extra revenue in some months"],
  },
  {
    id: "regal",
    tab: "Regal Bricks",
    name: "Regal Bricks",
    role: "Superhost · 324 reviews · 4.8 rating",
    avatar: { kind: "logo", src: dharmeshLogo, alt: "Regal Bricks logo" },
    short: (
      <>The EliteBNB team have been nothing short of <O>heaven sent</O> &hellip; the team's success rate with getting [untrue reviews] <B>removed properly</B> has been very successful! Highly recommend!</>
    ),
    full: (
      <>The EliteBNB team have been nothing short of <O>heaven sent</O>. They manage our entire portfolio of STRs and have been paramount to the success of our business. We have had a myriad of guests attend our homes and try to manipulate the BNB system with untrue reviews, and the team's success rate with getting them <B>removed properly</B> has been very successful! Highly recommend!</>
    ),
    chips: ["Superhost earned this assessment period", "Untrue reviews removed through Airbnb policy"],
    proof: {
      src: dharmeshProof,
      alt: "Airbnb Superhost assessment for Oct 1, 2025 to Sep 30, 2026 showing all four criteria achieved",
      caption: "Airbnb Superhost assessment, Oct 1, 2025 – Sep 30, 2026. All four criteria achieved.",
    },
  },
  {
    id: "florida",
    tab: "Florida Operator",
    name: "Short-Term Rental Operator",
    role: "Florida · 50+ listings",
    avatar: { kind: "icon" },
    short: (
      <>Elite BNB Hosts <O>removed the unfair reviews</O> that were dragging us down, stepped in on guest issues before they turned into bad ratings &hellip; Since moving to our new account we're at a <B>5.0 rating</B> and <O>Superhost</O>.</>
    ),
    full: (
      <>When my family took over our portfolio, the reviews were a mess. Elite BNB Hosts <O>removed the unfair reviews</O> that were dragging us down, stepped in on guest issues before they turned into bad ratings, and flagged the real problems in our units every month so our ops team could fix them. Since moving to our new account we're at a <B>5.0 rating</B> and <O>Superhost</O>. Their team is doing a fantastic job of protecting our ratings!</>
    ),
    chips: ["Superhost earned", "5.0 rating", "50+ listings", "80+ reviews removed"],
    proof: {
      src: floridaProof,
      alt: "Airbnb Superhost assessment for Oct 1, 2025 to Sep 30, 2026 showing Superhost status earned and all four criteria achieved",
      caption: "Airbnb Superhost assessment, Oct 1, 2025 – Sep 30, 2026. Superhost status earned.",
    },
  },
  {
    id: "estiven",
    tab: "Estiven",
    name: "Estiven Gomez",
    role: "Airbnb Property Manager · 36 listings",
    avatar: { kind: "photo", src: estivenPhoto, alt: "Estiven Gomez" },
    short: (
      <>Partnering with James has been a <O>transformative experience</O>. He and his team helped us <B>regain our Superhost status</B>, boosting our rating from <O>4.76 to 4.89</O>. Magnificent work.</>
    ),
    full: (
      <>Partnering with James has been a <O>transformative experience</O>. His professionalism, deep knowledge, and collaborative teamwork are second to none. He and his team helped us <B>regain our Superhost status</B>, boosting our rating from <O>4.76 to 4.89</O>. Magnificent work. I honestly didn't think a comeback like this was possible in the Airbnb world. I couldn't be happier to work with him!</>
    ),
    chips: ["Superhost status regained", "Rating 4.76 → 4.89"],
  },
  {
    id: "sikander",
    tab: "Sikander",
    name: "Sikander Zafar",
    role: "Airbnb host",
    avatar: { kind: "photo", src: sikanderPhoto, alt: "Sikander Zafar", top: true },
    short: (
      <>Having Elite BNB Hosts handle our Airbnb has taken a <O>huge load off my plate</O>. They helped us win back our <B>Superhost status</B> &hellip; and filed <B>26 claims</B> for us, most paid out in full, which adds up to <O>$7,000+ in reimbursements</O>.</>
    ),
    full: (
      <div className="space-y-4">
        <p>Having Elite BNB Hosts handle our Airbnb has taken a <O>huge load off my plate</O>. They helped us win back our <B>Superhost status</B>, removed <B>30+</B> low rating, ineligible reviews, and won several Airbnb Support cases I wouldn't have known how to handle on my own. They've also filed <B>26 claims</B> for us, most paid out in full, which adds up to <O>$7,000+ in reimbursements</O>.</p>
        <p>What I appreciate most is that they know Airbnb's policies inside and out, and they know exactly when and how to push back. It's reassuring to have someone looking out for the property and making sure we don't leave money or opportunities on the table.</p>
        <p>I'd recommend them to any host.</p>
      </div>
    ),
    chips: ["Superhost status recovered", "30+ ineligible reviews removed", "26 claims filed", "$7,000+ covered"],
    proof: {
      src: sikanderProof,
      alt: "Airbnb Superhost assessment for Oct 1, 2025 to Sep 30, 2026 showing Superhost status earned and all four criteria achieved",
      caption: "Airbnb Superhost assessment, Oct 1, 2025 \u2013 Sep 30, 2026. Superhost status earned.",
    },
  },
];

const AvatarView = ({ a }: { a: Avatar }) => {
  const ring = "w-28 h-28 md:w-40 md:h-40 rounded-full ring-4 ring-brand ring-offset-4 ring-offset-background";
  if (a.kind === "photo")
    return <img src={a.src} alt={a.alt} className={`${ring} object-cover ${a.top ? "object-top" : ""}`} loading="lazy" />;
  if (a.kind === "logo")
    return (
      <div className={`${ring} bg-white flex items-center justify-center overflow-hidden`}>
        <img src={a.src} alt={a.alt} className="w-4/5 h-4/5 object-contain" loading="lazy" />
      </div>
    );
  return (
    <div className={`${ring} bg-black flex items-center justify-center`}>
      <Building2 className="text-brand w-12 h-12 md:w-16 md:h-16" strokeWidth={1.5} aria-hidden="true" />
    </div>
  );
};

const TestimonialCarousel = () => {
  const [i, setI] = useState(0);
  const [open, setOpen] = useState(false);
  const go = (n: number) => {
    setI((n + slides.length) % slides.length);
    setOpen(false);
  };
  const s = slides[i];

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Client testimonials"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(i + 1);
        if (e.key === "ArrowLeft") go(i - 1);
      }}
      className="outline-none"
    >
      <div className="relative">
        <button
          onClick={() => go(i - 1)}
          aria-label="Previous testimonial"
          className="flex absolute -left-3 md:-left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-border bg-background shadow-md hover:border-brand hover:text-brand"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => go(i + 1)}
          aria-label="Next testimonial"
          className="flex absolute -right-3 md:-right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-10 h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-border bg-background shadow-md hover:border-brand hover:text-brand"
        >
          <ChevronRight className="h-5 w-5" />
        </button>

        <AnimatePresence mode="wait">
          <motion.div
            key={s.id}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.25 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragEnd={(_, info) => {
              if (info.offset.x < -60) go(i + 1);
              else if (info.offset.x > 60) go(i - 1);
            }}
            className="bg-background rounded-3xl p-8 md:p-12 border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]"
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center">
              <div className="flex flex-col items-center text-center md:w-56">
                <AvatarView a={s.avatar} />
                <p className="font-heading text-xl md:text-2xl font-bold text-foreground mt-6">{s.name}</p>
                <div className="text-muted-foreground text-sm md:text-base mt-2">{s.role}</div>
              </div>
              <div>
                <span aria-hidden="true" className="font-heading text-6xl leading-none text-brand block h-8">&ldquo;</span>
                <blockquote className="font-heading text-lg md:text-xl lg:text-2xl font-medium leading-[1.5] tracking-[-0.01em] text-foreground">
                  {open ? s.full : s.short}
                </blockquote>
                <button
                  onClick={() => setOpen(!open)}
                  className="mt-4 text-sm font-semibold text-[#c2410c] underline underline-offset-4 hover:text-brand"
                >
                  {open ? "Show less" : "Read full review"}
                </button>
                <div className="flex flex-wrap gap-2.5 mt-6">
                  {s.chips.map((chip) => (
                    <span key={chip} className="text-sm tracking-wide text-foreground border border-brand/40 bg-brand/10 rounded-full px-4 py-2">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            {s.proof && (
              <figure className="mt-10">
                <img src={s.proof.src} alt={s.proof.alt} className="w-full rounded-2xl border border-border" loading="lazy" draggable={false} />
                <figcaption className="text-muted-foreground text-sm mt-3 text-center">{s.proof.caption}</figcaption>
              </figure>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-6 mt-6">
        <div className="flex gap-2">
          {slides.map((t, n) => (
            <button key={t.id} onClick={() => go(n)} aria-label={`Show ${t.tab}`} className={`h-2.5 rounded-full transition-all ${n === i ? "w-8 bg-brand" : "w-2.5 bg-border"}`} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
