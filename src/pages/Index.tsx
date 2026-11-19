import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { ArrowRight, MessageSquare, ShieldCheck, FileCheck2, ClipboardList, ZoomIn } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import ambientInterior from "@/assets/ambient-interior.jpg";
import FounderPhotos from "@/components/FounderPhotos";
import PayoutLeakCalculator from "@/components/PayoutLeakCalculator";
import ToolsStrip from "@/components/ToolsStrip";
import { NEXT_SUPERHOST_ASSESSMENT } from "@/lib/offer";
import clientOccupancyBefore from "@/assets/client-occupancy-before.jpg";
import clientOccupancyAfter from "@/assets/client-occupancy-after.jpg";
import clientSuperhostLost from "@/assets/client-superhost-lost.jpg";
import clientSuperhostAfter from "@/assets/client-superhost-after.jpg";

const steps = [
  { num: "01", icon: MessageSquare, title: "Prevent", desc: "In-stay check-ins catch unhappy guests before checkout." },
  { num: "02", icon: ShieldCheck, title: "Defend", desc: "Policy-breaking reviews disputed within 48 hours through Airbnb's official process." },
  { num: "03", icon: FileCheck2, title: "Recover", desc: "Damage claims and payout adjustments filed and disputed properly." },
  { num: "04", icon: ClipboardList, title: "Report", desc: "Weekly rating tracking, monthly Money Recovered & Saved report, quarterly Superhost Risk Report." },
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
              Review and payout protection
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-[2.9rem] sm:text-6xl md:text-7xl lg:text-[4.75rem] xl:text-[5.25rem] font-bold leading-[1] tracking-[-0.04em] mb-6">
              <span className="bg-gradient-to-r from-[#ffc58a] via-[#ff8a2a] to-[#ff5a14] bg-clip-text text-transparent">Keep Superhost.</span><br />
              Keep your payouts.
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-white/75 text-xl md:text-2xl max-w-3xl mx-auto leading-[1.5] mb-6">
              You keep adding units. We protect your ratings and the money Airbnb takes out of your payouts, on every listing you already have.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-white/60 text-base md:text-lg tracking-wide max-w-3xl mx-auto mb-10">
              Run by a former Airbnb Support Supervisor (TDCX), who knows how support decides reviews, refunds, claims and disputes from the inside.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-col items-center justify-center gap-5">
              <Button variant="brand" size="xl" asChild className="w-full max-w-full h-auto min-h-14 py-3 whitespace-normal text-center sm:w-auto">
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={18} /></a>
              </Button>
              <a
                href="#payout-leak-calculator"
                onClick={(e) => {
                  e.preventDefault();
                  const go = () => {
                    const el = document.getElementById("payout-leak-calculator");
                    if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 72, behavior: "instant" as ScrollBehavior });
                  };
                  go();
                  setTimeout(go, 350);
                  setTimeout(go, 900);
                }}
                className="text-white/80 hover:text-white text-base md:text-lg underline decoration-brand/70 underline-offset-4 transition-colors">
                Calculate your payout leak
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Tools strip */}
      <section className="relative py-16 px-6 overflow-hidden">
        <img src={ambientInterior} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative container mx-auto max-w-5xl">
          <ScrollReveal>
            <ToolsStrip />
          </ScrollReveal>
        </div>
      </section>

      {/* Jacob testimonial */}
      <section className="py-20 lg:py-28 px-6 bg-secondary">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-[#c2410c] text-sm font-semibold tracking-[0.3em] uppercase mb-8 text-center">In a client's words</p>
            <TestimonialCarousel />
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
              { metric: "Lost twice", label: "Superhost, before we started" },
              { metric: "Recovered", label: "Superhost status" },
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
            <Button variant="brand" size="xl" asChild className="max-w-full h-auto min-h-14 py-3 whitespace-normal text-center">
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={18} /></a>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="relative overflow-hidden bg-black text-white rounded-3xl p-10 md:p-16 lg:p-20" style={{ backgroundImage: "radial-gradient(90% 60% at 100% 0%, rgba(255,106,26,0.45) 0%, rgba(0,0,0,0) 60%), radial-gradient(70% 50% at 0% 110%, rgba(255,138,42,0.30) 0%, rgba(0,0,0,0) 60%)" }}>
              <p className="text-brand text-sm tracking-[0.2em] uppercase font-medium mb-10">Claims, documented</p>
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-4xl font-medium leading-[1.35] tracking-[-0.01em] mb-8">
                "What could have been a major financial loss was fully recovered through ElitebnbHosts' structured documentation and claims process. Their attention to detail resulted in an $8,587 reimbursement and protected the integrity of our portfolio."
              </blockquote>
              <p className="text-white/60 text-base tracking-wide mb-12">One of our 39 wins: multi-property investor, $8,587 recovered.</p>
              <div className="flex flex-wrap gap-3">
                {["39 of 40 documented claims approved in 2026 (97.5%)", "$33,860 recovered for hosts"].map((stat) => (
                  <span key={stat} className="text-sm tracking-wide text-white/80 border border-brand/40 bg-brand/10 rounded-full px-5 py-2.5">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Payout Leak Calculator */}
      <section id="payout-leak-calculator" className="py-20 lg:py-28 bg-secondary px-6 scroll-mt-20">
        <div className="container mx-auto max-w-6xl">
          <PayoutLeakCalculator auditUrl="https://calendly.com/usa-elitebnbhosts/30min" />

          <div className="mt-12 border border-border rounded-2xl bg-background p-8 md:p-10">
            <p className="text-foreground text-lg font-semibold mb-2">Want our Review Dispute Checklist too?</p>
            <p className="text-muted-foreground text-base leading-[1.7] mb-6 max-w-2xl">
              The exact 10-step process we use to dispute unfair reviews. 500+ removed so far. Free for any Airbnb host.
            </p>
            <form onSubmit={handleHeroSubmit} className="flex flex-col sm:flex-row gap-3 max-w-xl">
              <input
                name="hero-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="flex h-12 w-full rounded-full border border-border bg-background px-5 py-2 text-base text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
              />
              <Button type="submit" variant="brand" size="lg" disabled={heroSubmitting} className="w-full sm:w-auto whitespace-nowrap">
                {heroSubmitting ? 'Submitting…' : 'Send me the checklist'}
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Audit */}
      <section id="audit" className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <div className="border border-border rounded-2xl p-10 md:p-12 bg-background">
              <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-4">Free Revenue &amp; Review Audit</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-4">
                Get your free Revenue &amp; Review Audit.
              </h2>
              <p className="text-muted-foreground text-lg leading-[1.7] mb-4">
                We go through your portfolio listing by listing and show you exactly where your ratings and payouts are leaking, and what we'd fix first.
              </p>
              <p className="text-foreground text-base font-semibold mb-6">
                For operators with 10+ listings. Send your links and we'll check your ratings. Add the CSV and we'll find the money too.
              </p>
              <div className="space-y-6 mb-6">
                <div>
                  <p className="text-foreground text-base font-semibold mb-3">Your listing links (required) get you:</p>
                  <ul className="space-y-3">
                    {[
                      "Every review that qualifies for removal",
                      "Weak rating categories",
                      "The listings at risk before the next Superhost assessment",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground text-base">
                        <span className="text-brand mt-0.5 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-foreground text-base font-semibold mb-3">Your last 90 days of Airbnb transactions as a CSV (optional) adds:</p>
                  <ul className="space-y-3">
                    {[
                      "Every payout adjustment worth disputing",
                      "Damage still eligible for a claim, turned into a dollar figure",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-3 text-foreground text-base">
                        <span className="text-brand mt-0.5 font-bold">✓</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="text-muted-foreground text-base leading-[1.6] mb-4">
                Your audit is ready within 24 hours for up to 50 listings, or 72 hours for larger portfolios, and we walk you through it on a 30-minute call. No account access required.
              </p>
              <p className="text-muted-foreground/70 text-sm leading-[1.6] mb-1">
                We take two new Operate clients per month. Each 24/7 team is four trained people.
              </p>
              <p className="text-muted-foreground/60 text-sm italic leading-[1.6] mb-8">
                Onboard before the next Superhost assessment ({NEXT_SUPERHOST_ASSESSMENT}).
              </p>
              <Button variant="brand" size="xl" asChild className="w-full sm:w-fit h-auto min-h-14 py-3 whitespace-normal text-center">
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={18} /></a>
              </Button>
              <p className="text-muted-foreground/60 text-xs tracking-wide mt-4">No cost. No obligation. You keep the audit.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">What we protect against</p>
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
              "Bad stays that turn into bad reviews because nobody caught the guest before checkout",
              "Reviews that break Airbnb policy and should have been removed",
              "Damage claims that never get filed, or get filed badly",
              "Refunds and payout adjustments Airbnb support deducts, which most hosts never dispute",
            ].map((item, i) => (
              <ScrollReveal key={item} delay={0.2 + i * 0.05}>
                <div className="flex items-start gap-3">
                  <span className="w-1 h-1 rounded-full bg-foreground shrink-0 mt-2.5" />
                  <p className="text-foreground text-base leading-[1.6] font-medium">
                    {item}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Full-width image break */}
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Who We Are</p>
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
              Real experience. Real results.
            </h2>
            <p className="text-muted-foreground text-xl md:text-2xl leading-[1.6] mb-8">
              Elite BNB Hosts was founded by James Jamaca, a former Airbnb Support Supervisor (TDCX) and subject matter expert with direct experience managing reviews, guest communication, and AirCover claims. We don't guess at what works. We know, because we've worked inside the system that governs your listing.
            </p>
            <ul className="space-y-3 text-foreground text-lg">
              {[
                "Former Airbnb Support Supervisor (TDCX) and subject matter expert",
                "3+ years managing Airbnb operations and property teams",
                "39 of 40 documented claims approved in 2026 (97.5%)",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-brand mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="flex flex-col items-center">
                <FounderPhotos />
                <p className="text-muted-foreground text-sm tracking-wide mt-6 text-center">
                  <a href="https://www.linkedin.com/in/jamesjamaca/" target="_blank" rel="noopener noreferrer" className="underline decoration-brand/60 underline-offset-4 hover:text-foreground transition-colors">James Jamaca</a>, Founder, Elite BNB Hosts
                </p>
              </div>
            </ScrollReveal>
          </div>

          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-y-14 gap-x-10">
            {[
              { metric: "500+", label: "reviews removed through Airbnb's official process" },
              { metric: "39 of 40", label: "documented claims approved in 2026 (97.5%)" },
              { metric: "$33,860", label: "recovered for hosts" },
              { metric: "200+", label: "listings supported across 8 operators" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <p className={`font-heading text-4xl sm:text-5xl lg:text-[2.6rem] xl:text-5xl font-bold tracking-[-0.03em] whitespace-nowrap ${item.metric.startsWith("$") ? "text-brand" : "text-foreground"}`}>{item.metric}</p>
                <p className="text-muted-foreground text-base mt-4 tracking-wide">{item.label}</p>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <p className="text-muted-foreground text-base mt-12">
              8 operators and 200 listings supported, portfolios from 10 to 133 listings.
            </p>
          </ScrollReveal>
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

      {/* How we do it */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
              <div>
                <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">How we do it</p>
                <h2 className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
                  Prevent. Defend.<br />Recover. Report.
                </h2>
              </div>
              <p className="text-muted-foreground text-base max-w-xs leading-[1.6]">
                Delivered through the Elite Ops System: in-stay check-ins, stay documentation and escalation playbooks.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="bg-secondary rounded-2xl p-8 h-full flex flex-col border border-border/50">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 flex items-center justify-center">
                      <p.icon size={18} className="text-foreground" strokeWidth={1.75} />
                    </div>
                    <span className="text-muted-foreground/60 text-xs tracking-[0.2em] font-mono">{p.num}</span>
                  </div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">{p.title}</h3>
                  <p className="text-muted-foreground text-base leading-[1.6]">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-20 lg:py-28 bg-muted px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-6">Who It's For</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-16">
              Built for operators who are busy growing.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.6] max-w-2xl -mt-8 mb-16">
              Operators running 10 to 100 listings in the US and Canada, on Airbnb first, plus VRBO and Booking.com.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-heading text-2xl font-semibold text-foreground mb-3">Arbitrage operators</h3>
                <p className="text-muted-foreground text-base mb-6">10 to 50 listings</p>
                <p className="text-muted-foreground text-lg leading-[1.6] mb-6">
                  You're adding units every month, and every new listing means more messages, more refund requests, and more reviews to watch. You want to keep growing without losing Superhost or money on the listings you already have.
                </p>
                <ul className="space-y-4">
                  {[
                    "Superhost and payouts protected while you scale",
                    "Hand off guests, refunds, and claims in 30 days",
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
                <p className="text-muted-foreground text-base mb-6">50 to 100 listings</p>
                <p className="text-muted-foreground text-lg leading-[1.6] mb-6">
                  You answer to owners. One bad quarter or one refund dispute becomes a hard owner conversation. You want protection and proof across the portfolio, reportable to owners.
                </p>
                <ul className="space-y-4">
                  {[
                    "Every listing's rating tracked weekly",
                    "Monthly report of money recovered and saved, ready for owners",
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
              <Button variant="brand" size="xl" asChild className="max-w-full h-auto min-h-14 py-3 whitespace-normal text-center">
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={18} /></a>
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
              Find out where<br />your Superhost is at risk.
            </h2>
            <p className="text-white/70 text-xl md:text-2xl mb-12 max-w-xl mx-auto leading-[1.5]">
              Send your links and we'll check your ratings. Add the CSV and we'll find the money too. Free, and yours to keep.
            </p>
            <Button variant="brand" size="xl" asChild className="max-w-full h-auto min-h-14 py-3 whitespace-normal text-center">
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={18} /></a>
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
