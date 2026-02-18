import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Remote Property Management",
    desc: "Complete operational management of your short-term rental properties. We handle the day-to-day so you can be fully hands-off.",
    details: ["Full operational oversight", "Multi-platform management", "Performance monitoring", "Quality assurance"],
  },
  {
    title: "Listing Optimization",
    desc: "We optimize every element of your listing — titles, descriptions, photos, and pricing — to improve search ranking and conversion.",
    details: ["SEO-optimized copy", "Competitive analysis", "Photo recommendations", "Conversion-focused descriptions"],
  },
  {
    title: "Guest Communication",
    desc: "Professional, timely guest communication from the first inquiry through checkout. Every guest feels valued and informed.",
    details: ["24/7 response coverage", "Pre-arrival coordination", "In-stay support", "Post-checkout follow-up"],
  },
  {
    title: "Review Management",
    desc: "Proactive strategies to earn 5-star reviews and policy-compliant support for removing reviews that violate platform guidelines.",
    details: ["Review prevention strategies", "Policy-compliant removal", "Guest feedback analysis", "Reputation monitoring"],
  },
  {
    title: "Revenue Optimization",
    desc: "Data-driven pricing strategies and market analysis to maximize your occupancy and average daily rate throughout the year.",
    details: ["Dynamic pricing strategies", "Market trend analysis", "Seasonal adjustments", "Revenue reporting"],
  },
  {
    title: "Claim & Dispute Support",
    desc: "Expert handling of damage claims, refund requests, and guest disputes. We protect your interests while maintaining professionalism.",
    details: ["Damage claim filing", "Dispute resolution", "Documentation support", "Platform mediation"],
  },
];

const ServicesPage = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="text-center max-w-3xl mx-auto">
        <ScrollReveal>
          <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Services</p>
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
            Comprehensive<br />remote management.
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Everything you need to run a successful short-term rental business — managed entirely remotely.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Services */}
    <section className="pb-24 lg:pb-32 px-4">
      <div className="container mx-auto max-w-4xl space-y-24">
        {services.map((s, i) => (
          <ScrollReveal key={s.title} delay={0}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <span className="text-muted-foreground/30 font-heading text-5xl font-bold">0{i + 1}</span>
                <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
              <ul className="space-y-3 lg:pt-16">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1 h-1 rounded-full bg-foreground shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-32 lg:py-44 bg-secondary px-4">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to get started?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Let's discuss how we can help you grow your rental business.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book a Consultation <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default ServicesPage;
