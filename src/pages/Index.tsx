import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ambientCoastal from "@/assets/ambient-coastal.jpg";
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
  { title: "Account-Safe Processes", desc: "Every action we take is fully compliant with platform policies. No shortcuts, no risk." },
  { title: "Data-Backed Results", desc: "Decisions driven by performance data, market trends, and guest behavior analysis." },
  { title: "Guest-First Approach", desc: "Proactive communication that prevents issues before they become negative reviews." },
  { title: "Integrated Systems", desc: "Review management, guest communication, and claims handling work together as one system." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Remote Property Management</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-foreground leading-[0.95] tracking-tight mb-8">
              Protect your reviews.
              <br />
              <span className="text-muted-foreground">Protect your revenue.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Structured remote management that safeguards your listing performance, guest experience, and long-term profitability.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Consultation <ArrowRight className="ml-1" size={16} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Introduction — Why Reviews Matter */}
      <section className="py-32 lg:py-44 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">The Reality</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight mb-8">
              Reviews define your listing's future.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
              <p>
                Your reviews directly influence search ranking, booking conversion, and guest trust. A single negative experience can cascade — lowering visibility, reducing bookings, and eroding revenue over time.
              </p>
              <p>
                ElitebnbHosts provides structured management to prevent this. Through proactive guest communication, operational systems, and strategic review management, we protect the performance your listing depends on.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-24 lg:py-32 bg-secondary px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Who We Are</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on real operational experience.
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mb-16">
              ElitebnbHosts was founded on hands-on experience managing reviews, guest communication, and claims. We understand the challenges because we've been there — and we built systems to solve them.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold text-foreground">500+</p>
                <p className="text-muted-foreground text-sm mt-2">Reviews managed</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold text-foreground">50+</p>
                <p className="text-muted-foreground text-sm mt-2">Happy clients</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold text-foreground">95%</p>
                <p className="text-muted-foreground text-sm mt-2">Superhost improvements</p>
              </div>
              <div>
                <p className="font-heading text-5xl md:text-6xl font-bold text-foreground">100+</p>
                <p className="text-muted-foreground text-sm mt-2">Properties supported</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Full-width image break */}
      <ScrollReveal>
        <section className="w-full">
          <div className="aspect-[21/9] w-full overflow-hidden">
            <img
              src={ambientCoastal}
              alt="Modern coastal property with clean architecture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </section>
      </ScrollReveal>

      {/* Mission */}
      <section className="py-32 lg:py-44 px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Our Mission</p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              Leveling the playing field for property owners.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-muted-foreground text-lg leading-relaxed mt-8 max-w-2xl">
              We exist to protect your digital reputation and ensure your listings reflect the true quality of the guest experience. Through structured management and intelligent systems, every host can compete at the highest level.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-24 lg:py-32 bg-secondary px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Why Trust Us</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
              Built on compliance,<br />driven by results.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
            {trustPillars.map((p, i) => (
              <ScrollReveal key={p.title} delay={i * 0.08}>
                <div>
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-32 lg:py-44 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Capabilities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
              One system.<br />Complete management.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
            {capabilities.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 0.08}>
                <div className="group">
                  <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{c.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{c.desc}</p>
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

      {/* CTA */}
      <section className="py-32 lg:py-44 bg-secondary px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Management built<br />around performance.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
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
