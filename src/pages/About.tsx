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

    {/* How It Works */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">How It Works</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-20">
            Wins in week one.<br />Full operations by day 30.
          </h2>
        </ScrollReveal>
        <div className="space-y-16">
          {[
            { num: "01", title: "Day 0: Book your audit.", desc: "We record each listing's rating, Superhost status and next assessment date." },
            { num: "02", title: "Day 1: Audit delivered.", desc: "We walk you through it on a call. Portfolios over 50 listings get it within 72 hours." },
            { num: "03", title: "Days 2–3: First disputes filed.", desc: "Review disputes and open claims start right away." },
            { num: "04", title: "Week 1: Your playbook.", desc: "We document how your properties run so every agent handles guests your way." },
            { num: "05", title: "Day 30: Full handover.", desc: "Your dedicated team takes over guest operations. Your current team covers until then." },
          ].map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 0.08}>
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-start">
                <span className="text-muted-foreground/20 font-heading text-6xl md:text-7xl font-bold leading-none">{step.num}</span>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-[1.7]">{step.desc}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Compliance Philosophy */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Our Commitment</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
            Our Compliance Philosophy
          </h2>
          <p className="text-foreground text-lg md:text-xl leading-[1.7] max-w-2xl mb-8">
            Reputation management should never compromise account integrity.
          </p>
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-[1.7] max-w-2xl">
            <p>
              ElitebnbHosts operates on a policy-aligned framework designed to protect long-term account health. Every review strategy, guest interaction, and claims process is structured around platform compliance and documented precision.
            </p>
            <p>
              While short-term shortcuts may produce temporary results, we prioritize sustainable performance — ensuring that growth never comes at the expense of platform stability.
            </p>
            <p>
              Our goal is simple: protect visibility, protect revenue, and protect the integrity of every portfolio we manage.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
            Your Portfolio Deserves Structured Support.
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto mb-14 leading-[1.7]">
            Let's have a conversation about your listings, your goals, and how ElitebnbHosts can help protect your performance and reputation long-term.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Let's Talk About Your Portfolio <ArrowRight className="ml-1" size={16} /></Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/services">See How We Can Support You</Link>
            </Button>
          </div>
          <p className="text-muted-foreground text-sm">
            No long-term contracts. Clear communication. Structured onboarding.
          </p>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default AboutPage;
