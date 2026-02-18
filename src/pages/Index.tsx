import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const capabilities = [
  { title: "Guest Communication", desc: "24/7 professional messaging from inquiry to checkout." },
  { title: "Review Management", desc: "Proactive strategies that protect your ratings." },
  { title: "Revenue Optimization", desc: "Data-driven pricing to maximize earnings." },
  { title: "Listing Optimization", desc: "SEO-optimized listings that convert browsers to bookers." },
  { title: "Booking Management", desc: "Calendar sync and availability optimization." },
  { title: "Claim Support", desc: "Expert handling of damage claims and disputes." },
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
              Scale your Airbnb
              <br />
              <span className="text-muted-foreground">without the stress.</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
              Intelligent remote management that increases revenue, improves reviews, and lets you be completely hands-off.
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

      {/* Statement */}
      <section className="py-32 lg:py-44 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight tracking-tight">
              We don't just manage properties.
              <br />
              <span className="text-muted-foreground">We build systems that grow your income.</span>
            </h2>
          </ScrollReveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-24 lg:py-32 bg-secondary px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Capabilities</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
              Everything you need.
              <br />
              Nothing you don't.
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

      {/* Numbers */}
      <section className="py-32 lg:py-44 px-4">
        <div className="container mx-auto max-w-5xl">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center">
              <div>
                <p className="font-heading text-6xl md:text-7xl font-bold text-foreground">95%</p>
                <p className="text-muted-foreground text-sm mt-3">Guest satisfaction</p>
              </div>
              <div>
                <p className="font-heading text-6xl md:text-7xl font-bold text-foreground">30%</p>
                <p className="text-muted-foreground text-sm mt-3">Revenue increase</p>
              </div>
              <div>
                <p className="font-heading text-6xl md:text-7xl font-bold text-foreground">24/7</p>
                <p className="text-muted-foreground text-sm mt-3">Communication coverage</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-secondary px-4">
        <div className="container mx-auto max-w-3xl">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Process</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">
              Three steps to<br />hands-off hosting.
            </h2>
          </ScrollReveal>
          <div className="space-y-12">
            {[
              { num: "01", title: "Consultation", desc: "Share your property details and goals in a free strategy call." },
              { num: "02", title: "Custom Strategy", desc: "We build a tailored management plan for your listings." },
              { num: "03", title: "We Manage", desc: "Sit back while we handle operations and grow your revenue." },
            ].map((s, i) => (
              <ScrollReveal key={s.num} delay={i * 0.1}>
                <div className="flex gap-8 items-start">
                  <span className="font-heading text-4xl font-bold text-border shrink-0">{s.num}</span>
                  <div>
                    <h3 className="font-heading text-xl font-semibold text-foreground mb-1">{s.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 lg:py-44 px-4">
        <div className="container mx-auto max-w-3xl text-center">
          <ScrollReveal>
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground leading-tight tracking-tight mb-6">
              Remote management,<br />done right.
            </h2>
            <p className="text-muted-foreground text-lg mb-10 max-w-md mx-auto">
              Focus on what matters while we handle your Airbnb operations.
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
