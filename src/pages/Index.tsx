import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ambientInterior from "@/assets/ambient-interior.jpg";

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

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[100svh] flex flex-col items-center justify-center px-6">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-10">Remote Property Management</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-[2.75rem] md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6.5rem] font-bold text-foreground leading-[0.93] tracking-[-0.035em] mb-12">
              Guest communication.<br />
              Review oversight.<br />
              <span className="text-muted-foreground">Revenue secured.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-md leading-[1.6] mb-4">
              Structured systems designed to protect visibility, reputation, and long-term performance.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.25}>
            <p className="text-muted-foreground/60 text-sm tracking-wide mb-14">
              Designed for growing multi-listing operators.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Request a Consultation <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* The Reality */}
      <section className="py-40 lg:py-56 bg-secondary px-6">
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
      <section className="py-40 lg:py-56 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Who We Are</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
              Built on real operational experience.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-xl">
              Founded by hosts who've managed reviews, guest communication, and claims firsthand.
            </p>
          </ScrollReveal>

          <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-y-20 gap-x-12">
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
      <section className="py-48 lg:py-64 bg-secondary px-6">
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
      <section className="py-48 lg:py-64 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Why Trust Us</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-24">
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
      <section className="py-40 lg:py-56 px-6">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Capabilities</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-24">
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

      {/* CTA */}
      <section className="py-40 lg:py-56 bg-secondary px-6">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-[3.5rem] font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
              Management built<br />around performance.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl mb-14 max-w-md mx-auto leading-[1.7]">
              Scale your Airbnb without the stress. Let's build a strategy that works.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book a Consultation <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Index;
