import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
              Traditional property management often charges a percentage of your revenue, or requires hiring in-house staff — adding headcount, not control.
            </p>
            <p>
              Elite BNB Hosts operates as a done-for-you team instead — full remote operations, without adding a single hire.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* Included Extras */}
    <section className="pb-40 lg:pb-56 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <div className="text-center mb-20">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">Included Extras</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-6">
              Extras that come<br />with the system.
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {extras.map((extra, i) => (
            <ScrollReveal key={extra.title} delay={i * 0.1}>
              <div className="bg-secondary rounded-2xl p-10 h-full">
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{extra.title}</h3>
                <p className="text-muted-foreground text-base leading-[1.7]">{extra.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Guarantee */}
    <section className="pb-40 lg:pb-56 px-6">
      <div className="container mx-auto max-w-4xl">
        <ScrollReveal>
          <div className="text-center mb-16">
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">Guarantee</p>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em]">
              We guarantee what we control.
            </h2>
          </div>
        </ScrollReveal>

        <div className="space-y-6 max-w-3xl mx-auto">
          <ScrollReveal delay={0.1}>
            <div className="bg-secondary rounded-2xl p-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Superhost Guarantee (Full Operations)</h3>
              <p className="text-foreground text-base leading-[1.7] italic mb-4">
                "Keep Superhost at your first full quarterly assessment after handover, or we work for free until you do."
              </p>
              <p className="text-muted-foreground text-sm leading-[1.6]">
                Conditions: maintenance issues fixed within 24–48 hours, no host cancellations above Airbnb's limit, your staff follow the playbook, and our access stays active all quarter.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-secondary rounded-2xl p-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Listing Rescue</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">
                If any listing averages below 4.8 on new reviews in a quarter, we run a free audit, fix what's wrong and give it extra attention the next quarter.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-secondary rounded-2xl p-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">48-Hour Filing</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">
                Every new review that qualifies for dispute is filed within 48 hours, or that month is free for those listings.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <p className="text-muted-foreground/70 text-sm italic leading-[1.6] max-w-2xl mx-auto text-center mt-10">
            We don't promise Airbnb's decisions on reviews or claims. Nobody controls those. Our track record speaks for itself instead.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Button variant="default" size="lg" asChild>
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Review Audit</a>
            </Button>
          </div>
        </ScrollReveal>
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

    {/* Testimonials */}
    <section className="py-40 lg:py-56 px-6">
      <div className="container mx-auto max-w-5xl">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-20 text-center">
            Trusted by Professional Hosts<br />& Portfolio Operators
          </h2>
        </ScrollReveal>

        {/* Featured */}
        <ScrollReveal delay={0.1}>
          <div className="bg-primary text-primary-foreground rounded-2xl p-10 md:p-14 mb-10">
            <p className="text-lg md:text-xl leading-relaxed italic mb-6">
              "What could have been a major financial loss was fully recovered through ElitebnbHosts' structured documentation and claims process. Their attention to detail resulted in an $8,000 reimbursement and protected the integrity of our portfolio."
            </p>
            <span className="text-sm text-primary-foreground/60">— Multi-Property Investor</span>
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
    <section className="py-40 lg:py-56 bg-secondary px-6">
      <div className="container mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em] mb-8">
            Ready to protect your Superhost status?
          </h2>
          <p className="text-muted-foreground text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
            Start with a free Review Audit. We'll show you exactly what we'd fix.
          </p>
          <Button variant="hero" size="lg" asChild>
            <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Review Audit <ArrowRight className="ml-1" size={16} /></a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default PricingPage;
