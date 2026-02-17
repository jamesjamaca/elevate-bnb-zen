import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MessageSquare, Star, TrendingUp, Shield, Calendar, HeadphonesIcon, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Remote Property Management",
    desc: "Complete operational management of your short-term rental properties. We handle the day-to-day so you can be fully hands-off while maintaining quality and profitability.",
    benefits: ["Full operational oversight", "Multi-platform management", "Performance monitoring", "Quality assurance"],
  },
  {
    icon: TrendingUp,
    title: "Airbnb Listing Optimization",
    desc: "We optimize every element of your listing — titles, descriptions, photos, and pricing — to improve search ranking and conversion rates.",
    benefits: ["SEO-optimized copy", "Competitive analysis", "Photo recommendations", "Conversion-focused descriptions"],
  },
  {
    icon: MessageSquare,
    title: "Guest Communication Management",
    desc: "Professional, timely guest communication from the first inquiry through checkout. We ensure every guest feels valued and informed.",
    benefits: ["24/7 response coverage", "Pre-arrival coordination", "In-stay support", "Post-checkout follow-up"],
  },
  {
    icon: Star,
    title: "Review Management & Removal",
    desc: "Proactive strategies to earn 5-star reviews and policy-compliant support for removing reviews that violate platform guidelines.",
    benefits: ["Review prevention strategies", "Policy-compliant removal support", "Guest feedback analysis", "Reputation monitoring"],
  },
  {
    icon: Calendar,
    title: "Revenue Optimization",
    desc: "Data-driven pricing strategies and market analysis to maximize your occupancy and average daily rate throughout the year.",
    benefits: ["Dynamic pricing strategies", "Market trend analysis", "Seasonal adjustments", "Revenue reporting"],
  },
  {
    icon: HeadphonesIcon,
    title: "Claim & Dispute Support",
    desc: "Expert handling of damage claims, refund requests, and guest disputes. We protect your interests while maintaining professionalism.",
    benefits: ["Damage claim filing", "Dispute resolution", "Documentation support", "Platform mediation"],
  },
];

const ServicesPage = () => (
  <div>
    {/* Hero */}
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Our Services</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Comprehensive Remote Management
        </h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Everything you need to run a successful short-term rental business — managed entirely remotely by experienced professionals.
        </p>
      </div>
    </section>

    {/* Services */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8 space-y-16">
        {services.map((s, i) => (
          <div key={s.title} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? "lg:[direction:rtl]" : ""}`}>
            <div className="lg:[direction:ltr]">
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <s.icon className="text-accent" size={28} />
              </div>
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">{s.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{s.desc}</p>
              <ul className="grid grid-cols-2 gap-3">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:[direction:ltr] bg-muted rounded-2xl h-64 flex items-center justify-center">
              <s.icon className="text-muted-foreground/20" size={80} />
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-heading text-3xl font-bold text-primary-foreground mb-4">Ready to Get Started?</h2>
        <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
          Let's discuss how we can help you grow your rental business.
        </p>
        <Button variant="hero" size="lg" asChild>
          <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-1" size={18} /></Link>
        </Button>
      </div>
    </section>
  </div>
);

export default ServicesPage;
