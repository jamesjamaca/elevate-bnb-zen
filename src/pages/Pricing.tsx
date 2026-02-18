import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "Is your review management policy-compliant?", a: "Absolutely. Our review management process is built entirely around platform guidelines and ethical guest communication. Unlike operators who rely on risky shortcuts or grey-area tactics, we prioritize account integrity and long-term listing protection above all else. Our structured approach achieves approximately a 90% success rate, depending on case eligibility — without ever compromising your standing on the platform." },
  { q: "Do you communicate directly with Airbnb support?", a: "Our daily operations are guest-facing, focused on delivering exceptional communication and proactive issue resolution. When platform support engagement is necessary, we handle it on a case-by-case basis — using proper documentation, structured escalation protocols, and full compliance with platform processes to protect your account at every step." },
  { q: "How fast do you respond to guests?", a: "During operational coverage hours, most guest messages are responded to within 10 minutes. For portfolios of 21+ listings, 24/7 response coverage is available to ensure no guest inquiry goes unaddressed, regardless of time zone or hour." },
  { q: "Do you handle disputes and damage claims?", a: "Yes. We manage the full claims process — from structured documentation and evidence gathering to strategic, policy-aligned claim submission. Our focus is on protecting legitimate owner costs and ensuring fair resolution, always in alignment with platform guidelines. We never pursue claims in ways that could compromise your reputation or account standing." },
  { q: "Is there a long-term contract?", a: "No long-term lock-ins. We believe our results should be the reason you stay." },
  { q: "What platforms do you support?", a: "We specialize in Airbnb but support multi-platform short-term rental operations when required." },
  { q: "How does pricing scale as I grow?", a: "Pricing decreases per listing as your portfolio grows. We're structured to scale with serious operators." },
];

const plans = [
  {
    name: "Core Management",
    range: "2–5 Listings",
    price: "$150",
    priceLabel: "/listing",
    billing: "per month",
    subRange: null,
    features: [
      "Remote Property Management",
      "Guest Communication",
      "Review Management",
      "Listing Optimization",
      "Revenue Optimization",
      "Claims & Dispute Support",
    ],
    cta: "Book Consultation",
    featured: false,
  },
  {
    name: "Growth Management",
    range: "6–20 Listings",
    price: "Starting at $140",
    priceLabel: "/listing",
    billing: "per month",
    subRange: "6–10: $140 | 11–20: $130",
    features: [
      "Everything in Core",
      "Priority Response Handling",
      "Enhanced Review Monitoring",
      "Advanced Claims Management",
      "Performance Optimization Oversight",
    ],
    cta: "Scale My Listings",
    featured: true,
  },
  {
    name: "Full Remote Operations",
    range: "21+ Listings",
    price: "Starting at $110",
    priceLabel: "/listing",
    billing: "per month",
    subRange: "21–30: $110 | 31–50: $100",
    features: [
      "Everything in Growth",
      "24/7 Guest Communication",
      "Full Review Strategy Implementation",
      "Complete Claims & Dispute Handling",
      "Dedicated Operational Oversight",
    ],
    cta: "Request Enterprise Consultation",
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
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-4 text-muted-foreground text-lg md:text-xl leading-relaxed">
            <p>
              Traditional property management often charges{" "}
              <strong className="text-foreground">15–25% of revenue</strong> or requires hiring in-house staff costing{" "}
              <strong className="text-foreground">$2,000–$3,000+ per month</strong> per property.
            </p>
            <p>
              ElitebnbHosts operates on a predictable flat-rate structure —
              delivering full remote operations without percentage-based costs.
            </p>
          </div>
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
                <p className={`text-sm mb-4 ${plan.featured ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.range}
                </p>
                <p className="font-heading text-3xl font-bold mb-1">
                  {plan.price}<span className={`text-sm font-body font-normal ${plan.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>{plan.priceLabel}</span>
                </p>
                {plan.subRange && (
                  <p className={`text-xs mb-2 ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                    {plan.subRange}
                  </p>
                )}
                <p className={`text-sm mb-10 ${plan.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  {plan.billing}
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
                  <Link to="/contact">{plan.cta}</Link>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-14 text-center">
            Frequently Asked Questions
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border">
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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
