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
            Built by hosts,<br />for hosts.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            We understand the challenges because we've been there. That experience drives everything we build.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Our Mission</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-10">
            Leveling the playing field.
          </h2>
          <div className="space-y-8 text-muted-foreground leading-[1.7] text-lg md:text-xl">
            <p>
              ElitebnbHosts exists to protect the digital reputation of property owners and ensure listings reflect the true quality of the guest experience.
            </p>
            <p>
              Founded on real operational experience managing reviews, guest communication, and claims — we built systems that solve the problems hosts face every day.
            </p>
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
            alt="Modern coastal property"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </ScrollReveal>

    {/* Why Trust Us */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Why Trust Us</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-20">
            Compliance first.<br />Results always.
          </h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-16">
          {[
            { title: "Account-Safe Processes", desc: "Every action is fully compliant with platform policies. We never take shortcuts that put your account at risk." },
            { title: "Proven Experience", desc: "Hundreds of reviews managed, dozens of properties supported, and real results delivered for hosts and investors." },
            { title: "Guest-First Communication", desc: "Proactive messaging that shapes positive experiences and prevents issues before they become negative reviews." },
            { title: "Integrated Systems", desc: "Review management, guest communication, and claims handling work together as one cohesive system — not isolated services." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">{v.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-6">Values</p>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-20">What we stand for.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-20 gap-y-16">
          {[
            { title: "Results-Driven", desc: "Every strategy is built around measurable outcomes — stronger reviews, higher revenue, less stress." },
            { title: "Transparency", desc: "No hidden fees, no surprises. Open communication and honest partnerships." },
            { title: "Innovation", desc: "Modern tools, data insights, and intelligent systems to stay ahead of the market." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">{v.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">Work with us.</h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
            Let's build a strategy that protects your listings and grows your business.
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
