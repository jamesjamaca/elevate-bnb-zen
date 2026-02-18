import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">About</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
            Built by hosts,<br />for hosts.
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            We understand the challenges because we've been there. That experience drives everything we do.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 lg:py-32 bg-secondary px-4">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-8">Our Mission</h2>
          <div className="space-y-6 text-muted-foreground leading-relaxed text-lg">
            <p>
              ElitebnbHosts was founded with a clear mission: to help Airbnb hosts achieve better results without being tied to daily operations.
            </p>
            <p>
              Professional management doesn't require a physical presence — it requires the right systems, expertise, and dedication.
            </p>
            <p>
              We specialize in what many overlook — the guest experience and review management. Our policy-compliant approach to review removal, combined with proactive communication, protects and enhances your listing's reputation.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="py-32 lg:py-44 px-4">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-4">Values</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-16">What we stand for.</h2>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {[
            { title: "Results-Driven", desc: "Every strategy is built around measurable outcomes — more revenue, better reviews, less stress." },
            { title: "Transparency", desc: "No hidden fees, no surprises. Open communication and honest partnerships." },
            { title: "Innovation", desc: "Modern tools, data insights, and creative strategies to stay ahead of the market." },
          ].map((v, i) => (
            <ScrollReveal key={v.title} delay={i * 0.1}>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 lg:py-44 bg-secondary px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Work with us.</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Let's build a strategy that works for your properties and your goals.
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
