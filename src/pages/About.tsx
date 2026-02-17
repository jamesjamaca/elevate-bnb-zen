import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Target, Eye, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  { icon: Target, title: "Results-Driven", desc: "Every strategy is built around measurable outcomes — more revenue, better reviews, and less stress for you." },
  { icon: Eye, title: "Transparency", desc: "No hidden fees, no surprise charges. We believe in open communication and honest partnerships." },
  { icon: Lightbulb, title: "Innovation", desc: "We leverage modern tools, data insights, and creative strategies to stay ahead of the market." },
];

const AboutPage = () => (
  <div>
    {/* Hero */}
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">About Us</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Built by Hosts, for Hosts
        </h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          We understand the challenges of short-term rental management because we've been there. That experience drives everything we do.
        </p>
      </div>
    </section>

    {/* Story */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            ElitebnbHosts was founded with a clear mission: to help Airbnb hosts and property owners achieve better results without being tied to daily operations. We believe that professional management shouldn't require a physical presence — it requires the right systems, expertise, and dedication.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Our team brings deep experience in short-term rental operations, guest relations, and platform management. We've developed proprietary systems for guest communication, review management, and revenue optimization that deliver consistent results across diverse property types and markets.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in what many companies overlook — the guest experience and review management. Our policy-compliant approach to review removal, combined with proactive guest communication, helps protect and enhance your listing's reputation over time.
          </p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Values</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">What We Stand For</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="bg-card rounded-xl p-8 border border-border text-center">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-5">
                <v.icon className="text-accent" size={28} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Work With Us</h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Let's build a strategy that works for your properties and your goals.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-1" size={18} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default AboutPage;
