import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Remote Property Management",
    desc: "Complete operational oversight of your short-term rental properties. We handle the day-to-day so you can be fully hands-off — without sacrificing quality or performance.",
    details: ["Full operational management", "Multi-platform coordination", "Performance monitoring", "Quality assurance systems"],
  },
  {
    title: "Guest Communication Management",
    desc: "Professional, timely guest communication from first inquiry through checkout. Every interaction is designed to shape positive experiences and prevent issues before they arise.",
    details: ["24/7 response coverage", "Pre-arrival coordination", "In-stay support", "Post-checkout follow-up"],
  },
  {
    title: "Review Management & Reputation Protection",
    desc: "Strategic, policy-compliant review management integrated into your overall property operations. Reviews directly impact search ranking, booking conversion, and trust — we protect all three.",
    details: ["Proactive guest experience management", "Policy-compliant review processes", "Reputation monitoring & analysis", "Listing performance protection"],
  },
  {
    title: "Listing Optimization",
    desc: "Every element of your listing — titles, descriptions, photos, and positioning — optimized for search visibility and booking conversion.",
    details: ["SEO-optimized copy", "Competitive positioning analysis", "Photo strategy recommendations", "Conversion-focused descriptions"],
  },
  {
    title: "Revenue Optimization",
    desc: "Data-driven pricing strategies and market analysis to maximize occupancy and average daily rate throughout every season.",
    details: ["Dynamic pricing strategies", "Market trend analysis", "Seasonal adjustments", "Revenue performance reporting"],
  },
  {
    title: "Claims & Dispute Support",
    desc: "Expert handling of damage claims, refund requests, and guest disputes. We protect your interests while maintaining professionalism and platform compliance.",
    details: ["Damage claim documentation & filing", "Dispute resolution management", "Platform mediation support", "Risk mitigation strategies"],
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
            One integrated system.<br />Complete management.
          </h1>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto">
            Everything you need to run a high-performing short-term rental business — managed remotely, built around results.
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to protect your performance?</h2>
          <p className="text-muted-foreground max-w-md mx-auto mb-10">
            Let's build a management strategy around your properties and goals.
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
