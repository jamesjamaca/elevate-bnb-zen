import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import ambientInterior from "@/assets/ambient-interior.jpg";
import founderPhoto from "@/assets/founder.jpg";

const capabilities = [
  { title: "Remote Property Management", desc: "Full operational oversight of your short-term rental — managed entirely remotely." },
  { title: "Guest Communication", desc: "24/7 professional messaging that shapes the guest experience from inquiry to checkout." },
  { title: "Review Management & Reputation Protection", desc: "Strategic, policy-compliant review management that protects rankings and revenue." },
  { title: "Listing Optimization", desc: "SEO-driven listing improvements that increase visibility and booking conversion." },
  { title: "Revenue Optimization", desc: "Data-backed pricing strategies to maximize occupancy and daily rate." },
  { title: "Claims & Dispute Support", desc: "Expert handling of damage claims, refund requests, and platform disputes." },
];

const trustPillars = [
  { num: "01", title: "Account-Safe Processes", desc: "Every action is fully compliant with platform policies. No shortcuts, no risk to your account." },
  { num: "02", title: "Policy-Compliant Reviews", desc: "Strategic review management that works within platform guidelines to protect your ranking." },
  { num: "03", title: "Proven Experience", desc: "Hundreds of reviews managed across dozens of properties with measurable results." },
  { num: "04", title: "Data-Backed Decisions", desc: "Performance data, market trends, and guest behavior analysis drive every strategy." },
];

const CHECKLIST_URL = "https://drive.google.com/file/d/1DJHIDicuIE0S8hocA2RTp9CLtDUcjYfB/view?usp=sharing";

const Index = () => {
  const [heroSubmitting, setHeroSubmitting] = useState(false);

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
      <section className="min-h-[85svh] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Airbnb Review Management Specialists</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[5.5rem] font-bold text-foreground leading-[0.93] tracking-[-0.035em] mb-8">
              90% Review Dispute<br />
              Success Rate.<br />
              <span className="text-muted-foreground">Revenue protected.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg leading-[1.6] mb-3">
              We specialize in protecting Airbnb hosts from unfair reviews — using a policy-aligned process that wins 9 out of 10 disputes. Structured systems for guest communication, reputation management, and long-term performance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-muted-foreground/60 text-sm tracking-wide mb-8">
              Built for growing multi-listing operators.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.28}>
            <form
              onSubmit={handleHeroSubmit}
              className="flex flex-col sm:flex-row items-center gap-3 max-w-xl mb-2"
            >
              <input
                name="hero-email"
                type="email"
                required
                placeholder="Enter your email address"
                className="flex h-12 w-full sm:min-w-[280px] rounded-full border border-input bg-background px-5 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
              <Button type="submit" size="lg" disabled={heroSubmitting} className="h-12 rounded-full bg-success text-success-foreground hover:bg-success/90 font-medium whitespace-nowrap">
                {heroSubmitting ? 'Submitting…' : 'Get the Free Checklist'} <ArrowRight className="ml-1" size={16} />
              </Button>
            </form>
            <p className="text-muted-foreground/50 text-xs tracking-wide mb-8">Free instant download. No spam, ever.</p>
          </ScrollReveal>
          <ScrollReveal delay={0.35}>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Request a Consultation <ArrowRight className="ml-1" size={16} /></a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get Your Free Review Audit <ArrowRight className="ml-1" size={16} /></a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-16 lg:p-20">
              <p className="text-primary-foreground/50 text-xs tracking-[0.3em] uppercase mb-10">Client Result</p>
              <blockquote className="font-heading text-2xl md:text-3xl lg:text-[2rem] font-medium leading-[1.4] tracking-[-0.01em] mb-8">
                "What could have been a major financial loss was fully recovered through ElitebnbHosts' structured documentation and claims process. Their attention to detail resulted in an $8,000 reimbursement and protected the integrity of our portfolio."
              </blockquote>
              <p className="text-primary-foreground/60 text-sm tracking-wide mb-12">— Multi-Property Investor</p>
              <div className="flex flex-wrap gap-3">
                {["90% Review Dispute Success Rate", "$8,000+ Claims Recovered", "Multi-Platform Support"].map((stat) => (
                  <span key={stat} className="text-xs tracking-wide text-primary-foreground/70 border border-primary-foreground/15 rounded-full px-5 py-2">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ScrollReveal>
              <div className="border border-border rounded-2xl p-10 md:p-12 h-full flex flex-col bg-background">
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">Free Download</p>
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
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-4">Free Review Audit</p>
                <h3 className="font-heading text-2xl md:text-3xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-4">
                  Is your listing at risk?
                </h3>
                <p className="text-muted-foreground text-base leading-[1.7] mb-4 flex-1">
                  We'll analyze your current reviews and flag anything that could hurt your search ranking or bookings — completely free, no obligation.
                </p>
                <p className="text-muted-foreground/50 text-sm italic leading-[1.6] mb-8">
                  Heads up: if your reviews are already in great shape, this service may not be the right fit for you. We only work with hosts where we can make a real difference.
                </p>
                <Button size="lg" asChild className="w-fit rounded-full bg-success text-success-foreground hover:bg-success/90 font-medium tracking-wide">
                  <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Request Your Free Audit <ArrowRight className="ml-1" size={16} /></a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">The Reality</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
              Reviews define your listing's future.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-2xl">
              Your reviews directly influence search ranking, booking conversion, and guest trust. A single negative experience can cascade — lowering visibility, reducing bookings, and eroding revenue.
            </p>
          </ScrollReveal>
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
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Who We Are</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
              Real experience. Real results.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-xl mb-8">
              Elite BNB Hosts was founded by James Jamaca — a former Airbnb support supervisor and subject matter expert with direct experience managing reviews, guest communication, and AirCover claims. We don't guess at what works. We know — because we've worked inside the system that governs your listing.
            </p>
            <ul className="space-y-3 text-foreground text-base">
              {[
                "Former Airbnb support supervisor & SME",
                "3+ years managing Airbnb operations & property teams",
                "Proprietary review dispute process — 90% success rate",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-success mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-12">
            {[
              { metric: "500+", label: "Reviews managed" },
              { metric: "50+", label: "Clients supported" },
              { metric: "95%", label: "Superhost rate" },
              { metric: "100+", label: "Properties" },
            ].map((item, i) => (
              <ScrollReveal key={item.label} delay={i * 0.08}>
                <p className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-[-0.03em]">{item.metric}</p>
                <p className="text-muted-foreground text-sm mt-4 tracking-wide">{item.label}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-10">Our Mission</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[4rem] font-bold text-foreground leading-[1.08] tracking-[-0.025em]">
              Every host deserves a listing that reflects the quality of their work.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-xl md:text-2xl leading-[1.5] mt-14 max-w-xl font-light">
              We exist to make that possible.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 lg:py-28 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Why Trust Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-16">
              Compliance first.<br />Results always.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {trustPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div className="bg-secondary rounded-2xl p-10 md:p-12 h-full">
                  <span className="text-muted-foreground text-xs tracking-[0.2em] font-medium">{p.num}</span>
                  <h3 className="font-heading text-xl font-semibold text-foreground mt-6 mb-4">{p.title}</h3>
                  <p className="text-muted-foreground text-base leading-[1.7]">{p.desc}</p>
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
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Capabilities</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-16">
              One system.<br />Complete management.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-foreground mb-4">{c.title}</h3>
                  <p className="text-muted-foreground text-base leading-[1.7]">{c.desc}</p>
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
                <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Who We Are</p>
                <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-6">
                  Built by someone who's been in your corner.
                </h2>
                <p className="text-muted-foreground text-base md:text-lg leading-[1.7] mb-8">
                  James Jamaca spent years inside Airbnb's support and operations teams — as a supervisor, subject matter expert, and property manager. He's seen exactly how the platform works from the inside. Elite BNB Hosts was built on that experience.
                </p>
                <ul className="space-y-4">
                  {[
                    "Former Airbnb support supervisor & SME",
                    "3+ years managing Airbnb operations & property teams",
                    "Proprietary review dispute process — 90% success rate",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-base leading-[1.6]">
                      <span className="text-success mt-0.5 font-bold">✓</span>
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
                    alt="James Jamaca — Founder, Elite BNB Hosts"
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-muted-foreground text-sm tracking-wide mt-6 text-center">
                  James Jamaca — Founder, Elite BNB Hosts
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Qualification */}
      <section className="py-20 lg:py-28 bg-muted px-6">
        <div className="container mx-auto max-w-4xl">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-[1.1] tracking-[-0.02em] mb-8">
              Honestly? This might not be for you.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-3xl mb-16">
              If your reviews are consistently strong, your guests are happy, and your listing is performing well — you probably don't need us. ElitebnbHosts is built specifically for hosts dealing with unfair reviews, difficult guests, or reputation challenges that are costing them bookings and ranking. If that sounds like you, let's talk.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16">
            <ScrollReveal delay={0.15}>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-6">This IS for you if:</h3>
                <ul className="space-y-4">
                  {[
                    "You've received an unfair or retaliatory review",
                    "A bad review is hurting your search ranking",
                    "You're managing 2+ listings and can't keep up with guest comms",
                    "You've had a damage claim go unresolved",
                    "You want a professional team protecting your reputation 24/7",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-base leading-[1.6]">
                      <span className="text-success mt-0.5 font-bold">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-6">This is NOT for you if:</h3>
                <ul className="space-y-4">
                  {[
                    "Your reviews are consistently 4.8+ with no issues",
                    "You have a full in-house team already managing everything",
                    "You're only managing 1 listing with occasional guests",
                    "You're not open to a structured, process-driven approach",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-muted-foreground text-base leading-[1.6]">
                      <span className="mt-0.5 font-bold">✗</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
          <ScrollReveal delay={0.25}>
            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">See If We're a Good Fit <ArrowRight className="ml-1" size={16} /></a>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-secondary px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
              Management built<br />around performance.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-14 max-w-md mx-auto leading-[1.7]">
              Scale your Airbnb without the stress. Let's build a strategy that works.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book a Consultation <ArrowRight className="ml-1" size={16} /></a>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
