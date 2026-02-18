import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

const plans = [
  {
    name: "Starter",
    desc: "For hosts with 1–2 properties.",
    features: [
      "Guest communication",
      "Listing optimization",
      "Basic review management",
      "Monthly report",
    ],
    featured: false,
  },
  {
    name: "Professional",
    desc: "For hosts looking to scale.",
    features: [
      "Everything in Starter",
      "Revenue optimization",
      "Review removal support",
      "Multi-platform management",
      "Priority support",
      "Weekly reports",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for 5+ properties.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom reporting",
      "Claim & dispute handling",
      "Strategy consultations",
      "Volume pricing",
    ],
    featured: false,
  },
];

const PricingPage = () => (
  <div>
    {/* Hero */}
    <section className="min-h-[70vh] flex items-center justify-center px-6">
      <div className="text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">Pricing</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[0.92] tracking-[-0.03em] mb-8">
            Simple, transparent<br />pricing.
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
            Flexible plans designed around your portfolio. Every plan delivers measurable ROI.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Plans */}
    <section className="pb-40 lg:pb-56 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, i) => (
            <ScrollReveal key={plan.name} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-10 flex flex-col h-full ${
                  plan.featured
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary"
                }`}
              >
                {plan.featured && (
                  <span className="text-xs font-medium uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">Most Popular</span>
                )}
                <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={`text-sm mb-8 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.desc}
                </p>
                <p className="font-heading text-3xl font-bold mb-10">
                  Custom <span className={`text-sm font-body font-normal ${plan.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>/ quote</span>
                </p>
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <Check className={`shrink-0 mt-0.5 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`} size={14} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={plan.featured ? "secondary" : "default"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{plan.featured ? "Get Started" : "Contact Us"}</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal>
          <p className="text-center text-muted-foreground text-sm mt-16 max-w-md mx-auto">
            All plans are customized based on your portfolio. Book a consultation for a personalized quote.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
            Not sure which plan?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
            Book a free consultation. We'll recommend a plan based on your portfolio and goals.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book a Consultation <ArrowRight className="ml-1" size={16} /></Link>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default PricingPage;
