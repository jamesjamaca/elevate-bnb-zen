import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ambientWorkspace from "@/assets/ambient-workspace.jpg";

const services = [
  {
    title: "Remote Property Management",
    desc: "Complete operational oversight of your short-term rental — managed entirely remotely without sacrificing quality.",
    details: ["Full operational management", "Multi-platform coordination", "Performance monitoring", "Quality assurance systems"],
  },
  {
    title: "Guest Communication",
    desc: "Professional messaging from inquiry through checkout. Every interaction shapes positive experiences and prevents issues.",
    details: ["24/7 response coverage", "Pre-arrival coordination", "In-stay support", "Post-checkout follow-up"],
  },
  {
    title: "Review Management",
    desc: "Strategic, policy-compliant review management that protects search ranking, booking conversion, and guest trust.",
    details: ["Proactive guest experience management", "Policy-compliant processes", "Reputation monitoring", "Listing performance protection"],
  },
  {
    title: "Listing Optimization",
    desc: "Every element of your listing optimized for search visibility and booking conversion.",
    details: ["SEO-optimized copy", "Competitive positioning", "Photo strategy", "Conversion-focused descriptions"],
  },
  {
    title: "Revenue Optimization",
    desc: "Data-driven pricing strategies to maximize occupancy and daily rate throughout every season.",
    details: ["Dynamic pricing strategies", "Market trend analysis", "Seasonal adjustments", "Revenue reporting"],
  },
  {
    title: "Claims & Dispute Support",
    desc: "Expert handling of damage claims, refund requests, and platform disputes with full compliance.",
    details: ["Damage claim documentation", "Dispute resolution", "Platform mediation support", "Risk mitigation"],
  },
];

const ServicesPage = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">Services</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[0.92] tracking-[-0.03em] mb-8">
            One integrated system.<br />Complete management.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Everything you need to run a high-performing rental business — managed remotely, built around results.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Services */}
    <section className="pb-40 lg:pb-56 px-6">
      <div className="container mx-auto max-w-4xl space-y-40">
        {services.map((s, i) => (
          <ScrollReveal key={s.title}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-muted-foreground/15 font-heading text-7xl lg:text-8xl font-bold leading-none block">0{i + 1}</span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-6 mb-6 tracking-[-0.02em]">{s.title}</h2>
                <p className="text-muted-foreground text-base leading-[1.7]">{s.desc}</p>
              </div>
              <ul className="space-y-5 lg:pt-28">
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

    {/* Full-width image break */}
    <ScrollReveal>
      <section className="w-full">
        <div className="aspect-[21/9] w-full overflow-hidden">
          <img
            src={ambientWorkspace}
            alt="Professional remote workspace"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </section>
    </ScrollReveal>

    {/* CTA */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
            Ready to protect your performance?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
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
