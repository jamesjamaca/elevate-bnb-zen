import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ambientCoastal from "@/assets/ambient-coastal.jpg";

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">About</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[0.92] tracking-[-0.03em] mb-8">
            We don't just manage listings.<br />We protect performance.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            ElitebnbHosts was built to bring structured, policy-compliant operational management to serious short-term rental operators.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* The Industry Reality */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">The Industry Reality</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
            Scale demands structure.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-2xl">
            The short-term rental industry rewards visibility, responsiveness, and reputation. As portfolios grow, operational complexity increases. Guest communication, reviews, claims, and performance monitoring must be structured — not reactive.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Full-width image break */}
    <ScrollReveal>
      <section className="w-full">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={ambientCoastal}
            alt="Modern coastal property"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </ScrollReveal>

    {/* Our Difference */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Our Difference</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
            Compliance first.<br />Results always.
          </h2>
          <div className="space-y-6 text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-2xl">
            <p>
              ElitebnbHosts was designed around compliance, documentation, and long-term platform integrity. While many operators rely on shortcuts, we focus on strategic guest communication, performance oversight, and policy-aligned review management.
            </p>
            <p>
              Our priority is sustainable account health and protected revenue — not temporary results.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Operational Philosophy */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Operational Philosophy</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
            We operate like an internal team.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl leading-[1.7] max-w-2xl mb-20">
            Without the overhead.
          </p>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-20 gap-y-16">
          {[
            "Structured communication workflows",
            "Performance monitoring systems",
            "Policy-compliant review management",
            "Strategic claims documentation",
            "Scalable operational coverage",
          ].map((item, i) => (
            <ScrollReveal key={item} delay={i * 0.08}>
              <div className="flex items-center gap-3 text-foreground text-base">
                <span className="w-1 h-1 rounded-full bg-foreground shrink-0" />
                {item}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
            Built for operators who take their portfolio seriously.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
            We build structure where others rely on reaction.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book a Consultation <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default AboutPage;
