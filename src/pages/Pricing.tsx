import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Starter",
    desc: "For hosts with 1–2 properties getting started.",
    features: [
      "Guest communication management",
      "Listing optimization review",
      "Basic review management",
      "Monthly performance report",
    ],
    cta: "Get Started",
    featured: false,
  },
  {
    name: "Professional",
    desc: "For serious hosts looking to scale their portfolio.",
    features: [
      "Everything in Starter",
      "Full revenue optimization",
      "Policy-based review removal support",
      "Multi-platform management",
      "Priority support",
      "Weekly performance reports",
    ],
    cta: "Most Popular",
    featured: true,
  },
  {
    name: "Enterprise",
    desc: "Custom solutions for portfolios of 5+ properties.",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "Custom reporting dashboard",
      "Claim & dispute handling",
      "Strategy consultations",
      "Volume pricing",
    ],
    cta: "Contact Us",
    featured: false,
  },
];

const PricingPage = () => (
  <div>
    {/* Hero */}
    <section className="py-24 lg:py-32 bg-primary">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Pricing</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
          Transparent, Value-Driven Pricing
        </h1>
        <p className="text-primary-foreground/70 max-w-xl mx-auto">
          Flexible plans designed around your portfolio size and goals. Every plan delivers measurable ROI.
        </p>
      </div>
    </section>

    {/* Plans */}
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-2xl p-8 border flex flex-col ${
                plan.featured
                  ? "bg-primary text-primary-foreground border-accent shadow-2xl scale-105"
                  : "bg-card text-foreground border-border"
              }`}
            >
              {plan.featured && (
                <span className="text-xs font-semibold uppercase tracking-wider text-accent mb-4">Most Popular</span>
              )}
              <h3 className="font-heading text-2xl font-bold mb-2">{plan.name}</h3>
              <p className={`text-sm mb-6 ${plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <p className="font-heading text-3xl font-bold mb-6">
                Custom <span className={`text-sm font-body font-normal ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>/ quote</span>
              </p>
              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className={`shrink-0 mt-0.5 ${plan.featured ? "text-accent" : "text-accent"}`} size={16} />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                variant={plan.featured ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/contact">{plan.cta}</Link>
              </Button>
            </div>
          ))}
        </div>
        <p className="text-center text-muted-foreground text-sm mt-12 max-w-lg mx-auto">
          All plans are customized based on the number of properties, locations, and specific requirements. Book a consultation for a personalized quote.
        </p>
      </div>
    </section>
  </div>
);

export default PricingPage;
