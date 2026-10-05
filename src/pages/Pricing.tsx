import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";

const faqs = [
  { q: "Can't I just hire a VA for less?", a: "You can. A VA answers messages. We protect the rating behind every listing: guest messaging, review disputes, claims and Superhost tracking, run by specialists. One lost badge costs more than the difference." },
  { q: "How do you remove reviews?", a: "Only through Airbnb's official dispute process. We challenge reviews that break Airbnb's own policies. That's how we've removed 500+ so far." },
  { q: "What access do you need?", a: "Co-host access to your listings. It stays under your control, and you can see everything we do." },
  { q: "What happens to my current team?", a: "They keep handling guests until handover on day 30. After that, they can focus on cleaning, maintenance and growth." },
  { q: "My properties are different. Will this work?", a: "We build a playbook for your properties in week one, with ready-made guides for villas, condos and penthouses." },
];

const extras = [
  { title: "Free Review Audit", desc: "See every removable review across your portfolio before you commit." },
  { title: "Property playbooks", desc: "Ready-made guides for villas, condos and penthouses." },
  { title: "Owner-ready reports", desc: "A monthly report property managers can send straight to owners." },
  { title: "Superhost Risk Report", desc: "Every quarter, listings at risk are flagged before the assessment." },
];

const tiers = [
  {
    name: "Defend",
    sub: "Review & Account Defense",
    who: "You run guests in-house and need your rating and account protected.",
    items: [
      "Every listing's rating tracked weekly",
      "Qualifying reviews disputed within 48 hours",
      "Damage and reimbursement claims handled",
      "Listing Rescue if one slips below 4.8",
      "Quarterly Superhost Risk Report",
    ],
  },
  {
    name: "Operate",
    sub: "Full Operations",
    who: "You want guests and reviews handed off completely.",
    featured: true,
    items: [
      "Everything in Defend",
      "24/7 guest messaging, inquiry to checkout",
      "A playbook so every reply sounds like you",
      "Full handover by day 30",
      "Superhost Guarantee (conditions apply)",
    ],
  },
  {
    name: "Scale",
    sub: "Dedicated Portfolio Team",
    who: "Your portfolio needs its own team behind it.",
    items: [
      "Everything in Operate",
      "A dedicated team assigned to your portfolio",
      "Every listing tracked one by one",
      "Owner-ready monthly reports",
      "Risk flagged before every assessment",
    ],
  },
];

const PricingPage = () => (
  <div>
    {/* Hero */}
    <section className="relative -mt-14 overflow-hidden min-h-[60vh] flex items-center justify-center px-6 pt-40 pb-24" style={{ background: "radial-gradient(70% 30% at 50% 120%, #ff9a3a 0%, #d2400d 42%, #5a1304 68%, rgba(0,0,0,0) 78%), #000" }}>
      <div className="relative text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-brand text-sm font-semibold tracking-[0.3em] uppercase mb-8">Pricing</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[0.92] tracking-[-0.03em] mb-8">
            Pricing built around<br />your portfolio.
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <div className="max-w-2xl mx-auto space-y-4 text-white/70 text-lg md:text-xl lg:text-2xl leading-relaxed">
            <p>
              Traditional property management often charges a percentage of your revenue, or requires hiring in-house staff — adding headcount, not control.
            </p>
            <p>
              Elite BNB Hosts operates as a done-for-you team instead — full remote operations, without adding a single hire.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Tiers */}
    <section className="py-24 lg:py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[#c2410c] text-sm font-semibold tracking-[0.3em] uppercase mb-6">Choose your level</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
              Three ways to work with us.
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-[1.6]">
              Priced per listing, not as a percentage of your revenue. You get a custom quote after your free Review Audit.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {tiers.map((t, i) => (
            <ScrollReveal key={t.name} delay={i * 0.1}>
              <div
                className={`h-full flex flex-col rounded-3xl p-8 md:p-10 border ${
                  t.featured
                    ? "bg-black text-white border-brand/50 shadow-[0_0_60px_-20px_hsl(var(--brand)/0.8)]"
                    : "bg-secondary text-foreground border-border"
                }`}
              >
                <p className={`text-sm font-semibold tracking-[0.25em] uppercase mb-4 ${t.featured ? "text-brand" : "text-[#c2410c]"}`}>
                  Tier {i + 1}
                </p>
                <h3 className="font-heading text-4xl font-bold tracking-[-0.02em] mb-1">{t.name}</h3>
                <p className={`text-lg font-medium mb-5 ${t.featured ? "text-white/90" : "text-foreground"}`}>{t.sub}</p>
                <p className={`text-base leading-[1.6] mb-8 ${t.featured ? "text-white/70" : "text-muted-foreground"}`}>{t.who}</p>
                <ul className="space-y-4 mb-10 flex-1">
                  {t.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base leading-[1.5]">
                      <Check size={18} className="text-brand mt-0.5 shrink-0" strokeWidth={3} />
                      <span className={t.featured ? "text-white/90" : "text-foreground"}>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button variant={t.featured ? "brand" : "default"} size="lg" className="w-full" asChild>
                  <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">
                    Get a quote <ArrowRight className="ml-1" size={16} />
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Included Extras */}
    <section className="relative overflow-hidden py-24 lg:py-32 px-6" style={{ background: "radial-gradient(70% 40% at 50% -15%, rgba(255,106,26,0.55) 0%, rgba(0,0,0,0) 65%), #000" }}>
      <div className="container relative mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-brand text-sm font-semibold tracking-[0.3em] uppercase mb-8">Included Extras</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-6">
              Extras that come<br />with the system.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((extra, i) => (
            <ScrollReveal key={extra.title} delay={i * 0.1}>
              <div className="bg-white/5 border border-white/10 rounded-2xl p-10 h-full">
                <h3 className="font-heading text-xl font-semibold text-white mb-3">{extra.title}</h3>
                <p className="text-white/70 text-base leading-[1.7]">{extra.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Guarantee */}
    <section className="py-24 lg:py-32 px-6">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-[#c2410c] text-sm font-semibold tracking-[0.3em] uppercase mb-8">Guarantee</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
              We guarantee what we control.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-secondary rounded-2xl p-10 border-l-4 border-brand">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Superhost Guarantee (Operate tier)</h3>
              <p className="text-foreground text-base leading-[1.7] italic mb-4">
                "Keep Superhost at your first full quarterly assessment after handover, or we work for free until you do."
              </p>
              <p className="text-muted-foreground text-sm leading-[1.6]">
                Conditions: maintenance issues fixed within 24–48 hours, no host cancellations above Airbnb's limit, your staff follow the playbook, and our access stays active all quarter.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-secondary rounded-2xl p-10 border-l-4 border-brand">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Listing Rescue</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">
                If any listing averages below 4.8 on new reviews in a quarter, we run a free audit, fix what's wrong and give it extra attention the next quarter.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-secondary rounded-2xl p-10 border-l-4 border-brand">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">48-Hour Filing</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">
                Every new review that qualifies for dispute is filed within 48 hours, or that month is free for those listings.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <p className="text-muted-foreground text-base italic leading-[1.6] max-w-2xl mx-auto text-center mt-10">
            We don't promise Airbnb's decisions on reviews or claims. Nobody controls those. Our track record speaks for itself instead.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Button variant="brand" size="xl" asChild>
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Review Audit</a>
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
    {/* FAQ */}
    <section className="py-24 lg:py-32 bg-secondary px-6">
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

    {/* Testimonials */}
    <section className="py-24 lg:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-20 text-center">
            Trusted by Professional Hosts<br />& Portfolio Operators
          </h2>
        </ScrollReveal>

        {/* Featured */}
        <ScrollReveal delay={0.1}>
          <div className="bg-black text-white rounded-3xl p-10 md:p-14 mb-10 border border-brand/30">
            <p className="text-xl md:text-2xl leading-relaxed italic mb-6">
              "What could have been a major financial loss was fully recovered through ElitebnbHosts' structured documentation and claims process. Their attention to detail resulted in an $8,000 reimbursement and protected the integrity of our portfolio."
            </p>
            <span className="text-sm text-white/60">— Multi-Property Investor</span>
          </div>
        </ScrollReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { quote: "Thank you so much for your excellent work. The results speak for themselves — truly outstanding execution.", author: "Portfolio Host" },
            { quote: "Review successfully removed. Amazing work as always.", author: "Multi-Listing Operator" },
            { quote: "Keep giving us excellent results. We're grateful for the consistency.", author: "Short-Term Rental Investor" },
            { quote: "Great work, team. Fast turnaround and handled professionally.", author: "Property Manager" },
          ].map((t, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.05}>
              <div className="bg-secondary rounded-2xl p-8 h-full flex flex-col justify-between">
                <p className="text-foreground text-base leading-relaxed italic mb-6">"{t.quote}"</p>
                <span className="text-sm text-muted-foreground">— {t.author}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="relative overflow-hidden py-32 lg:py-44 px-6" style={{ background: "radial-gradient(60% 45% at 50% 125%, #ff7a1f 0%, #c2310a 45%, #4a1003 70%, rgba(0,0,0,0) 80%), #000" }}>
      <div className="container relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-8">
            Ready to protect your Superhost status?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
            Start with a free Review Audit. We'll show you exactly what we'd fix.
          </p>
          <Button variant="brand" size="xl" asChild>
            <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Review Audit <ArrowRight className="ml-1" size={16} /></a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default PricingPage;
