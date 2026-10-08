import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare, ShieldCheck, FileCheck2, Check, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import ambientInterior from "@/assets/ambient-interior.jpg";
import founderPhoto from "@/assets/founder.jpg";
import clientOccupancyBefore from "@/assets/client-occupancy-before.jpg";
import clientOccupancyAfter from "@/assets/client-occupancy-after.jpg";
import clientSuperhostLost from "@/assets/client-superhost-lost.jpg";
import clientSuperhostAfter from "@/assets/client-superhost-after.jpg";
import jacobPhoto from "@/assets/jacob-nostrant.jpg";
import crewLogo from "@/assets/crew-housing-logo.png";
import sikanderPhoto from "@/assets/sikander-zafar.jpg";
import estivenPhoto from "@/assets/estiven-gomez.jpg";
import dharmeshLogo from "@/assets/dharmesh-logo.png";
import dharmeshProof from "@/assets/dharmesh-superhost-proof.jpg";

const capabilities = [
  { title: "Remote Property Management", desc: "Full operational oversight of your short-term rental — managed entirely remotely." },
  { title: "Guest Communication", desc: "24/7 professional messaging that shapes the guest experience from inquiry to checkout." },
  { title: "Review Management & Reputation Protection", desc: "Strategic, policy-compliant review management that protects rankings and revenue." },
  { title: "Listing Optimization", desc: "SEO-driven listing improvements that increase visibility and booking conversion." },
  { title: "Revenue Optimization", desc: "Data-backed pricing strategies to maximize occupancy and daily rate." },
  { title: "Claims & Dispute Support", desc: "Expert handling of damage claims, refund requests, and platform disputes." },
  { title: "Bookkeeping & Finance Management", desc: "Optional, whenever you need it. Our specialized finance team keeps your books clean, property by property." },
];

const trustPillars = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Guest Experience System",
    desc: "Trained agents assigned to your account handle every guest conversation, day and night, from your playbook.",
    stat: "24/7",
    statLabel: "Live guest coverage",
    bullets: ["Every message answered on your playbook", "Issues flagged before checkout", "One team across your whole portfolio"],
  },
  {
    num: "02",
    icon: ShieldCheck,
    title: "Review Defense",
    desc: "Specialists challenge every review that breaks Airbnb's rules, using Airbnb's own dispute process.",
    stat: "48 hrs",
    statLabel: "Avg. dispute filing time",
    bullets: ["Every listing's rating tracked weekly", "500+ reviews disputed and removed", "Listing Rescue if one slips below 4.8"],
  },
  {
    num: "03",
    icon: FileCheck2,
    title: "Account Protection",
    desc: "We keep your account healthy and get you paid for damage, with a claims specialist on every case.",
    stat: "100%",
    statLabel: "Claims documented & filed",
    bullets: ["Damage and reimbursement claims", "Escalations handled for you", "Quarterly Superhost Risk Report"],
  },
];

const CHECKLIST_URL = "https://drive.google.com/file/d/1DJHIDicuIE0S8hocA2RTp9CLtDUcjYfB/view?usp=sharing";

const Index = () => {
  const [heroSubmitting, setHeroSubmitting] = useState(false);
  const [lightbox, setLightbox] = useState<{ src: string; alt: string; caption: string } | null>(null);

  const handleHeroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const email = (e.currentTarget.elements.namedItem('hero-email') as HTMLInputElement).value;
    if (!email) return;
    setHeroSubmitting(true);
    try {
      await supabase.functions.invoke('subscribe-mailerlite', {
        body: { email },
      });
    } catch (err) {
      console.error('Subscription error:', err);
    }
    setHeroSubmitting(false);
    window.open(CHECKLIST_URL, '_blank');
  };

  return (
    <div>
      {/* Hero */}
      <section
        className="relative -mt-14 flex flex-col items-center justify-center px-6 pt-28 md:pt-32 pb-20 md:pb-28 overflow-hidden text-white"
        style={{
          background:
            "radial-gradient(78% 30% at 50% -9%, #ffb347 0%, #ff6a1a 42%, #c2310a 66%, #5a1304 71%, rgba(0,0,0,0) 78%), radial-gradient(70% 20% at 50% 112%, #ff9a3a 0%, #d2400d 45%, #5a1304 70%, rgba(0,0,0,0) 78%), #000",
        }}
      >
        <div className="relative max-w-6xl mx-auto text-center">
          <ScrollReveal>
            <p className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-1.5 pr-4 py-1.5 text-sm md:text-base text-white/80 mb-8">
              <span className="rounded-full bg-brand text-brand-foreground text-xs md:text-sm font-semibold px-3 py-1">Airbnb</span>
              Review Management Specialists
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-[2.9rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] font-bold leading-[1] tracking-[-0.04em] mb-6">
              Superhost every quarter.<br />
              <span className="bg-gradient-to-r from-[#ffc58a] via-[#ff8a2a] to-[#ff5a14] bg-clip-text text-transparent">Every listing at 4.8+.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/75 text-xl md:text-2xl max-w-3xl mx-auto leading-[1.5] mb-4">
              A done-for-you guest experience and review defense system for property managers and operators with 10 to 100+ listings. It holds up even with unreasonable guests, and you don't add a single hire.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/50 text-base md:text-lg tracking-wide mb-10">
              Built for growing multi-listing operators.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <form
              onSubmit={handleHeroSubmit}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-2xl mx-auto mb-3"
            >
              <input
                name="hero-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="flex h-14 w-full sm:min-w-[300px] rounded-full border border-white/20 bg-white/10 px-6 py-2 text-lg text-white placeholder:text-white/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              />
              <Button type="submit" variant="brand" size="xl" disabled={heroSubmitting} className="w-full sm:w-auto">
                {heroSubmitting ? 'Submitting…' : 'Get the Free Checklist'} <ArrowRight className="ml-1" size={18} />
              </Button>
            </form>
            <p className="text-white/45 text-sm tracking-wide mb-10">Free instant download. No spam, ever.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="brand" size="xl" asChild className="w-full sm:w-auto">
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get your free Review Audit <ArrowRight className="ml-1" size={18} /></a>
              </Button>
              <Button variant="on-dark" size="xl" asChild className="w-full sm:w-auto">
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">See how it works</a>
              </Button>
            </div>
            <p className="text-white/50 text-base md:text-lg tracking-wide mt-8 max-w-xl mx-auto">
              We find every review that qualifies for removal across your portfolio. Free, and yours to keep.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Jacob testimonial */}
      <section className="py-20 lg:py-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-[#c2410c] text-sm font-semibold tracking-[0.3em] uppercase mb-10 text-center">In a client's words</p>
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center bg-background rounded-3xl p-8 md:p-14 border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col items-center text-center">
                <img
                  src={jacobPhoto}
                  alt="Jacob Nostrant"
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-brand ring-offset-4 ring-offset-background"
                  loading="lazy"
                />
                <p className="font-heading text-2xl font-bold text-foreground mt-6">Jacob Nostrant</p>
                <div className="flex items-center justify-center gap-2.5 mt-3">
                  <img src={crewLogo} alt="Crew Housing logo" className="h-9 w-auto" loading="lazy" />
                  <span className="text-foreground text-lg font-semibold">Crew Housing</span>
                </div>
                <p className="text-muted-foreground text-base mt-2">Short-term &amp; mid-term rentals &middot; 100+ properties</p>
              </div>
              <div>
                <span aria-hidden="true" className="font-heading text-7xl leading-none text-brand block h-10">&ldquo;</span>
                <blockquote className="font-heading text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-[1.45] tracking-[-0.01em] text-foreground">
                  Working with James was a <span className="text-brand font-bold">game changer!</span> We kept Superhost <span className="font-bold">every single quarter</span>, and a few times it was a nail-biter. His team stepped in and saved it! We've won multiple claims, too many to count, and James was an absolute <span className="font-bold">BEAST</span> with reviews. Then there's the SOP: some months we brought in an extra <span className="text-brand font-bold">$20K+</span> in revenue just by following it. It felt like a money hack, and all of it is built on Airbnb's own policy. If you run Airbnbs, talk to James!
                </blockquote>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["100+ short & mid-term properties managed", "Superhost every quarter", "Multiple claims won", "$20K+ extra revenue in some months"].map((chip) => (
                    <span key={chip} className="text-sm tracking-wide text-foreground border border-brand/40 bg-brand/10 rounded-full px-4 py-2">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center bg-background rounded-3xl p-8 md:p-14 border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <div className="order-2 md:order-1">
                <span aria-hidden="true" className="font-heading text-7xl leading-none text-brand block h-10">&ldquo;</span>
                <div className="font-heading text-lg md:text-xl lg:text-[1.4rem] font-medium leading-[1.5] tracking-[-0.01em] text-foreground space-y-4">
                  <p>
                    Having Elite BNB Hosts handle our Airbnb has taken a <span className="text-brand font-bold">huge load off my plate</span>. They helped us win back our <span className="font-bold">Superhost status</span>, removed <span className="font-bold">30+</span> low rating, ineligible reviews, and won several Airbnb Support cases I wouldn't have known how to handle on my own. They've also filed <span className="font-bold">26 claims</span> for us, most paid out in full, which adds up to <span className="text-brand font-bold">$7,000+ in reimbursements</span>.
                  </p>
                  <p>
                    What I appreciate most is that they know Airbnb's policies inside and out, and they know exactly when and how to push back. It's reassuring to have someone looking out for the property and making sure we don't leave money or opportunities on the table.
                  </p>
                  <p>I'd recommend them to any host.</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["Superhost status recovered", "30+ ineligible reviews removed", "26 claims filed", "$7,000+ covered"].map((chip) => (
                    <span key={chip} className="text-sm tracking-wide text-foreground border border-brand/40 bg-brand/10 rounded-full px-4 py-2">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
              <div className="order-1 md:order-2 flex flex-col items-center text-center">
                <img
                  src={sikanderPhoto}
                  alt="Sikander Zafar"
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover object-top ring-4 ring-brand ring-offset-4 ring-offset-background"
                  loading="lazy"
                />
                <p className="font-heading text-2xl font-bold text-foreground mt-6">Sikander Zafar</p>
                <p className="text-muted-foreground text-base mt-2">Airbnb host</p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 md:gap-14 items-center bg-background rounded-3xl p-8 md:p-14 border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col items-center text-center">
                <img
                  src={estivenPhoto}
                  alt="Estiven Gomez"
                  className="w-36 h-36 md:w-48 md:h-48 rounded-full object-cover ring-4 ring-brand ring-offset-4 ring-offset-background"
                  loading="lazy"
                />
                <p className="font-heading text-2xl font-bold text-foreground mt-6">Estiven Gomez</p>
                <p className="text-muted-foreground text-base mt-2">Airbnb Property Manager &middot; 36 listings</p>
              </div>
              <div>
                <span aria-hidden="true" className="font-heading text-7xl leading-none text-brand block h-10">&ldquo;</span>
                <blockquote className="font-heading text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-[1.45] tracking-[-0.01em] text-foreground">
                  Partnering with James has been a <span className="text-brand font-bold">transformative experience</span>. His professionalism, deep knowledge, and collaborative teamwork are second to none. He and his team helped us <span className="font-bold">regain our Superhost status</span>, boosting our rating from <span className="text-brand font-bold">4.76 to 4.89</span>. Magnificent work. I honestly didn't think a comeback like this was possible in the Airbnb world. I couldn't be happier to work with him!
                </blockquote>
                <div className="flex flex-wrap gap-3 mt-8">
                  {["Superhost status regained", "Rating 4.76 \u2192 4.89"].map((chip) => (
                    <span key={chip} className="text-sm tracking-wide text-foreground border border-brand/40 bg-brand/10 rounded-full px-4 py-2">
                      {chip}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <div className="mt-10 bg-background rounded-3xl p-8 md:p-14 border border-border shadow-[0_30px_80px_-40px_rgba(0,0,0,0.35)]">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 md:gap-14 items-center">
                <div className="order-2 md:order-1">
                  <span aria-hidden="true" className="font-heading text-7xl leading-none text-brand block h-10">&ldquo;</span>
                  <blockquote className="font-heading text-xl md:text-2xl lg:text-[1.75rem] font-medium leading-[1.45] tracking-[-0.01em] text-foreground">
                    The EliteBNB team have been nothing short of <span className="text-brand font-bold">heaven sent</span>. They manage our entire portfolio of STRs and have been paramount to the success of our business. We have had a myriad of guests attend our homes and try to manipulate the BNB system with fake reviews, and the team's success rate with getting them <span className="font-bold">removed properly</span> has been very successful! Highly recommend!
                  </blockquote>
                  <div className="flex flex-wrap gap-3 mt-8">
                    {["Superhost earned this assessment period", "Fake reviews removed through Airbnb policy"].map((chip) => (
                      <span key={chip} className="text-sm tracking-wide text-foreground border border-brand/40 bg-brand/10 rounded-full px-4 py-2">
                        {chip}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="order-1 md:order-2 flex flex-col items-center text-center">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center ring-4 ring-brand ring-offset-4 ring-offset-background overflow-hidden">
                    <img src={dharmeshLogo} alt="Regal Bricks logo" className="w-4/5 h-4/5 object-contain" loading="lazy" />
                  </div>
                  <p className="font-heading text-2xl font-bold text-foreground mt-6">Regal Bricks</p>
                  <p className="text-muted-foreground text-base mt-2">Superhost &middot; 324 reviews &middot; 4.8 rating</p>
                </div>
              </div>
              <figure className="mt-12">
                <img src={dharmeshProof} alt="Airbnb Superhost assessment for Oct 1, 2025 to Sep 30, 2026 showing all four criteria achieved" className="w-full rounded-2xl border border-border" loading="lazy" />
                <figcaption className="text-muted-foreground text-sm mt-3 text-center">Airbnb Superhost assessment, Oct 1, 2025 &ndash; Sep 30, 2026. All four criteria achieved.</figcaption>
              </figure>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-black text-white rounded-3xl p-10 md:p-16 lg:p-20" style={{ backgroundImage: "radial-gradient(90% 60% at 100% 0%, rgba(255,106,26,0.45) 0%, rgba(0,0,0,0) 60%), radial-gradient(70% 50% at 0% 110%, rgba(255,138,42,0.30) 0%, rgba(0,0,0,0) 60%)" }}>
              <p className="text-brand text-sm tracking-[0.2em] uppercase font-medium mb-10">Client Result</p>
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.35] tracking-[-0.01em] mb-8">
                "What could have been a major financial loss was fully recovered through ElitebnbHosts' structured documentation and claims process. Their attention to detail resulted in an $8,587 reimbursement and protected the integrity of our portfolio."
              </blockquote>
              <p className="text-white/60 text-base tracking-wide mb-12">— Multi-Property Investor</p>
              <div className="flex flex-wrap gap-3">
                {["90% Review Dispute Success Rate", "$8,587 Claims Recovered", "Multi-Platform Support"].map((stat) => (
                  <span key={stat} className="text-sm tracking-wide text-white/80 border border-brand/40 bg-brand/10 rounded-full px-5 py-2.5">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Client results</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-[4.25rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10 max-w-3xl">
              Lost Superhost twice. Superhost status recovered.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-xl md:text-2xl leading-[1.6] max-w-2xl mb-14">
              A Boston-area operator came to us after missing Superhost at two assessments in a row. Guests were getting AI-only replies, nobody was watching his reviews, and he was answering messages late into the night. We took over operations in May.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8">
            {[
              { metric: "68.5% → 91.9%", label: "Occupancy" },
              { metric: "Recovered", label: "Superhost status" },
              { metric: "18+", label: "Bad reviews removed" },
              { metric: "17 → 24", label: "Listings" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <div className="rounded-2xl bg-black p-5 sm:p-6 md:p-8 h-full">
                  <p className="font-heading text-2xl sm:text-3xl lg:text-3xl xl:text-[2.25rem] font-bold text-brand tracking-[-0.03em] leading-[1.1]">{item.metric}</p>
                  <p className="text-white/70 text-base mt-3 tracking-wide">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <p className="text-foreground text-lg md:text-xl font-medium leading-[1.6] mb-14">
              He's no longer answering guests at night. Our team runs it.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
            {[
              { src: clientOccupancyBefore, alt: "Airbnb occupancy report for January to April showing a 68.5% average occupancy rate across 24 listings", caption: "Occupancy, Jan 1 – Apr 30: 68.5%" },
              { src: clientOccupancyAfter, alt: "Airbnb occupancy report for May to October showing a 91.9% average occupancy rate across 24 listings", caption: "Occupancy, May 1 – Oct 5: 91.9%" },
              { src: clientSuperhostLost, alt: "Airbnb Superhost assessment showing Superhost status not earned for the July 2025 to June 2026 period, with a 4.7 overall rating", caption: "Before: Superhost not earned, 4.7 rating (Jul 2025 – Jun 2026)" },
              { src: clientSuperhostAfter, alt: "Airbnb Superhost assessment showing Superhost status earned for the October 2025 to September 2026 period, with a 4.8 overall rating", caption: "After: Superhost earned, 4.8 rating (Oct 2025 – Sep 2026)" },
            ].map((shot, i) => (
              <ScrollReveal key={shot.caption} delay={i * 0.08}>
                <figure className="h-full flex flex-col">
                  <button
                    type="button"
                    onClick={() => setLightbox(shot)}
                    aria-label={`Enlarge screenshot: ${shot.caption}`}
                    className="group relative block w-full cursor-zoom-in border border-border rounded-2xl overflow-hidden bg-background transition-all duration-300 hover:border-brand hover:shadow-[0_0_0_3px_hsl(var(--brand)/0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
                  >
                    <img src={shot.src} alt={shot.alt} className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]" loading="lazy" />
                    <span className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 rounded-full bg-black/80 text-white text-xs font-medium px-3 py-1.5">
                      <ZoomIn size={14} /> Tap to enlarge
                    </span>
                  </button>
                  <figcaption className="text-muted-foreground text-sm tracking-wide mt-3">{shot.caption}</figcaption>
                </figure>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <Button variant="brand" size="xl" asChild>
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get your free Review Audit <ArrowRight className="ml-1" size={18} /></a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="border border-border rounded-2xl p-10 md:p-12 h-full flex flex-col bg-background">
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-4">Free Download</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-4">
                  The Airbnb Review Dispute Checklist
                </h3>
                <p className="text-muted-foreground text-base leading-[1.7] mb-8 flex-1">
                  The exact 10-step process we use to dispute unfair reviews — with a 90% success rate. Free for any Airbnb host.
                </p>
                <div className="ml-embedded" data-form="0u14Yd"></div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <div className="border border-border rounded-2xl p-10 md:p-12 h-full flex flex-col bg-background">
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-4">Free Review Audit</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-4">
                  Get your free Review Audit.
                </h3>
                <p className="text-muted-foreground text-base leading-[1.7] mb-4">
                  We go through your portfolio listing by listing and show you exactly what we'd fix.
                </p>
                <ul className="space-y-3 mb-6 flex-1">
                  {[
                    "Every review that qualifies for removal",
                    "Listings at risk of dropping below 4.8",
                    "Your Superhost risk before the next assessment",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-foreground text-sm">
                      <span className="w-1 h-1 rounded-full bg-foreground shrink-0 mt-2" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-muted-foreground/70 text-sm leading-[1.6] mb-1">
                  We accept 2 new Full Operations clients per month. Each one gets a newly trained, dedicated team.
                </p>
                <p className="text-muted-foreground/50 text-sm italic leading-[1.6] mb-8">
                  Next Superhost assessment: January 1. Start now and your system is running before it.
                </p>
                <Button variant="brand" size="xl" asChild className="w-full sm:w-fit h-auto min-h-14 py-3 whitespace-normal text-center">
                  <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Review Audit <ArrowRight className="ml-1" size={18} /></a>
                </Button>
                <p className="text-muted-foreground/50 text-xs tracking-wide mt-4">No cost. No obligation. You keep the audit.</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">The Reality</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-[4.25rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
              One unreasonable guest can sink a listing.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-xl md:text-2xl leading-[1.6] max-w-2xl mb-12">
              Your portfolio average looks fine. Then one listing slips under 4.8, Superhost goes at the next assessment, and bookings follow. Hiring more people to watch it adds cost, not control.
            </p>
          </ScrollReveal>
          <div className="space-y-5 max-w-2xl">
            {[
              { title: "Unfair reviews stay up.", desc: "Nobody has time to file disputes properly, so reviews that break Airbnb's rules never get challenged." },
              { title: "Damage goes unpaid.", desc: "Claims get filed late, filed wrong, or not filed at all." },
              { title: "Guest messaging is inconsistent.", desc: "Different people, different tone, slow replies at 2 a.m." },
              { title: "You find out too late.", desc: "The first sign of trouble is a lost badge, not an early warning." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={0.2 + i * 0.05}>
                <div className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground shrink-0 mt-2.5" />
                  <p className="text-foreground text-base leading-[1.6]">
                    <span className="font-semibold">{item.title}</span>{" "}
                    <span className="text-muted-foreground">{item.desc}</span>
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break — warmth after introduction */}
      <ScrollReveal>
        <section className="w-full">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <img
              src={ambientInterior}
              alt="Minimal luxury rental interior with natural light"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Who We Are */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Who We Are</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
              Real experience. Real results.
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl leading-[1.6] max-w-xl mb-8">
              Elite BNB Hosts was founded by James Jamaca — a former Airbnb support supervisor and subject matter expert with direct experience managing reviews, guest communication, and AirCover claims. We don't guess at what works. We know — because we've worked inside the system that governs your listing.
            </p>
            <ul className="space-y-3 text-foreground text-lg">
              {[
                "Former Airbnb support supervisor & SME",
                "3+ years managing Airbnb operations & property teams",
                "Proprietary review dispute process — 90% success rate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
            {[
              { metric: "500+", label: "Reviews managed" },
              { metric: "30+", label: "Clients supported" },
              { metric: "90%", label: "Superhost rate across 8 portfolios" },
              { metric: "200+", label: "Properties" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <p className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-[-0.03em]">{item.metric}</p>
                <p className="text-muted-foreground text-base mt-4 tracking-wide">{item.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-10">Our Mission</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-[4.75rem] font-bold text-foreground leading-[1.08] tracking-[-0.025em]">
              Every host deserves a listing that reflects the quality of their work.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-xl md:text-2xl leading-[1.5] mt-14 max-w-xl font-normal">
              We exist to make that possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Three Pillars</p>
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
                  Three pillars.<br />One team running them for you.
                </h2>
              </div>
              <p className="text-muted-foreground text-base max-w-xs leading-[1.6]">
                Every system below is tracked and reported on — not just promised.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {trustPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="bg-secondary rounded-2xl p-8 md:p-9 h-full flex flex-col border border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <p.icon size={18} className="text-foreground" strokeWidth={1.75} />
                    </div>
                    <span className="text-muted-foreground/60 text-xs tracking-[0.2em] font-mono">{p.num}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-base leading-[1.6] mb-6">{p.desc}</p>

                  <div className="border-t border-border pt-5 mb-6">
                    <div className="font-heading text-3xl font-bold text-foreground tracking-[-0.02em] tabular-nums">
                      {p.stat}
                    </div>
                    <p className="text-muted-foreground text-sm uppercase tracking-[0.1em] mt-1">{p.statLabel}</p>
                  </div>

                  <ul className="space-y-2.5 mt-auto">
                    {p.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-base text-foreground">
                        <Check size={14} className="text-muted-foreground shrink-0 mt-[3px]" strokeWidth={2} />
                        <span className="leading-snug">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Capabilities</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-16">
              One system.<br />Complete management.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-4">{c.title}</h3>
                  <p className="text-muted-foreground text-lg leading-[1.6]">{c.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Founder */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Who We Are</p>
                <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6">
                  Built by someone who's been in your corner.
                </h2>
                <p className="text-muted-foreground text-lg md:text-xl leading-[1.6] mb-8">
                  James Jamaca spent years inside Airbnb's support and operations teams — as a supervisor, subject matter expert, and property manager. He's seen exactly how the platform works from the inside. Elite BNB Hosts was built on that experience.
                </p>
                <ul className="space-y-4">
                  {[
                    "Former Airbnb support supervisor & SME",
                    "3+ years managing Airbnb operations & property teams",
                    "Proprietary review dispute process — 90% success rate",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg leading-[1.6]">
                      <span className="text-brand mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="flex flex-col items-center">
                <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-border">
                  <img
                    src={founderPhoto}
                    alt="James Jamaca, Founder of Elite BNB Hosts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground text-sm tracking-wide mt-6 text-center">
                  <a href="https://www.linkedin.com/in/jamesjamaca/" target="_blank" rel="noopener noreferrer" className="underline decoration-brand/60 underline-offset-4 hover:text-foreground transition-colors">James Jamaca</a> — Founder, Elite BNB Hosts
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-28 bg-muted px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Who It's For</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-16">
              Built for two kinds of operators.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Arbitrage operators</h3>
                <p className="text-muted-foreground text-base mb-6">10 to 20 listings</p>
                <p className="text-muted-foreground text-lg leading-[1.6] mb-6">
                  You're stuck. Every new listing adds more messages, more reviews to fight, more fires. You want to grow without becoming the bottleneck.
                </p>
                <ul className="space-y-4">
                  {[
                    "Hand off guests and reviews in 30 days",
                    "Scale past 20 listings with Superhost protected",
                    "Get your time back",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg leading-[1.6]">
                      <span className="text-brand mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Property managers</h3>
                <p className="text-muted-foreground text-base mb-6">50 to 100+ listings</p>
                <p className="text-muted-foreground text-lg leading-[1.6] mb-6">
                  You answer to owners. One bad quarter on one listing becomes a hard conversation. You want protection and visibility across the whole portfolio.
                </p>
                <ul className="space-y-4">
                  {[
                    "Every listing at 4.8+, tracked one by one",
                    "Owner-ready monthly reports",
                    "Risk flagged before the assessment, not after",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-lg leading-[1.6]">
                      <span className="text-brand mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.25}>
            <div className="text-center">
              <Button variant="brand" size="xl" asChild>
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get Your Free Review Audit <ArrowRight className="ml-1" size={18} /></a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden py-24 lg:py-36 px-6 text-white"
        style={{
          background:
            "radial-gradient(90% 60% at 50% 125%, #ff8a2a 0%, #c2350c 28%, rgba(0,0,0,0) 62%), radial-gradient(70% 40% at 50% -20%, rgba(255,106,26,0.35) 0%, rgba(0,0,0,0) 60%), #000",
        }}
      >
        <div className="relative container mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.02] tracking-[-0.03em] mb-8">
              Management built<br />around performance.
            </h2>
            <p className="text-white/70 text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-[1.5]">
              Scale your Airbnb without the stress. Let's build a strategy that works.
            </p>
            <Button variant="brand" size="xl" asChild>
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowRight className="ml-1" size={18} /></a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      <Dialog open={!!lightbox} onOpenChange={(o) => !o && setLightbox(null)}>
        <DialogContent className="max-w-[95vw] md:max-w-5xl p-3 md:p-4 bg-background">
          <DialogTitle className="sr-only">{lightbox?.caption}</DialogTitle>
          <DialogDescription className="sr-only">{lightbox?.alt}</DialogDescription>
          {lightbox && (
            <div className="overflow-auto max-h-[85vh]">
              <img src={lightbox.src} alt={lightbox.alt} className="w-full min-w-[820px] md:min-w-0 h-auto rounded-lg" />
              <p className="text-muted-foreground text-sm mt-3">{lightbox.caption}</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;
