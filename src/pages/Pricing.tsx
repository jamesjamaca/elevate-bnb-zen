import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Building2 } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import ScrollReveal from "@/components/ScrollReveal";
import jacobPhoto from "@/assets/jacob-nostrant.jpg";
import sikanderPhoto from "@/assets/sikander-zafar.jpg";
import estivenPhoto from "@/assets/estiven-gomez.jpg";
import regalLogo from "@/assets/dharmesh-logo.png";

const faqs = [
  { q: "My ratings are fine.", a: "Today. At 30 listings, one bad stay per week is enough to slip before the next assessment. The audit shows which listings are closest." },
  { q: "How do you remove reviews?", a: "Airbnb's official process, policy violations only. No workarounds. Most of our work is stopping the bad review before it's written." },
  { q: "Airbnb's decisions are final.", a: "Most adjustments and policy-breaking reviews are never disputed at all. We know how support decides because we've supervised those cases." },
  { q: "I check my payouts myself.", a: "At 10 listings, maybe. At 30, you're watching new acquisitions, not old payouts." },
  { q: "A VA is cheaper.", a: "A VA answers messages. We protect Superhost and get money back. Run the audit and compare." },
  { q: "I already have a VA.", a: "Keep them. That's Defend: we protect the reviews and the money, and QA their work." },
  { q: "What access do you need?", a: "Co-host access to your listings. It stays under your control, and you can see everything we do." },
  { q: "What happens to my current team?", a: "They keep handling guests until handover on day 30. After that, they can focus on cleaning, maintenance and growth." },
];

const extras = [
  { title: "Quarterly Superhost Risk Report", desc: "Every quarter, listings at risk are flagged before the assessment." },
  { title: "Listing Rescue", desc: "Any listing under 4.8 gets a free audit and fixes." },
  { title: "Money Recovered & Saved report", desc: "An owner-ready monthly report property managers can send straight to owners." },
  { title: "The Elite Ops System playbooks", desc: "In-stay check-ins, stay documentation and escalation playbooks, built around your properties." },
];

const tiers = [
  {
    name: "Defend",
    sub: "Revenue & Review Defense",
    who: "For operators who run guests in-house or already have a VA. 10+ listings.",
    items: [
      "Reviews disputed within 48 hours",
      "Weekly rating tracking",
      "Listing Rescue",
      "Damage and reimbursement claims",
      "Payout adjustments caught and disputed",
      "Weekly QA of your VA",
      "Monthly Money Recovered & Saved report",
      "Includes the 48-Hour Filing Guarantee",
    ],
  },
  {
    name: "Operate",
    sub: "30-Day Operations Takeover",
    who: "For arbitrage operators scaling past 15 listings.",
    featured: true,
    items: [
      "Everything in Defend",
      "24/7 guest messaging",
      "In-stay check-ins",
      "Every stay documented",
      "Cleaning and maintenance coordination",
      "Pricing run on your rules",
      "Full handover by day 30",
      "Includes the Superhost Guarantee",
    ],
  },
  {
    name: "Scale",
    sub: "Portfolio Protection Program",
    who: "For property managers with 50+ listings.",
    items: [
      "Everything in Operate",
      "A dedicated team and account manager",
      "Priority escalations",
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
              Traditional property management often charges a percentage of your revenue, or requires hiring in-house staff. That adds headcount, not control.
            </p>
            <p>
              Elite BNB Hosts operates as a done-for-you team instead, with full remote operations and without adding a single hire.
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
              Priced per listing. Quote after your free audit.
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
                    Get my free audit <ArrowRight className="ml-1" size={16} />
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
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Superhost Guarantee (Operate & Scale)</h3>
              <p className="text-foreground text-base leading-[1.7] italic mb-4">
                "Keep Superhost at the first full quarterly assessment after handover, or we work for free until you do."
              </p>
              <p className="text-muted-foreground text-sm leading-[1.6]">
                Conditions: maintenance fixed within 24 to 48 hours, no host cancellations above Airbnb's limit, your staff follow the playbook, access stays active.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div className="bg-secondary rounded-2xl p-10 border-l-4 border-brand">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">48-Hour Filing Guarantee (Defend)</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">
                Every qualifying review and every disputable payout adjustment is filed within 48 hours of being caught, or that month is free for those listings.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="bg-secondary rounded-2xl p-10 border-l-4 border-brand">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">Listing Rescue</h3>
              <p className="text-muted-foreground text-base leading-[1.7]">
                If any listing averages below 4.8 on new reviews in a quarter, we run a free audit, fix what's wrong and give it extra attention the next quarter.
              </p>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={0.25}>
          <p className="text-muted-foreground text-base italic leading-[1.6] max-w-2xl mx-auto text-center mt-10">
            We guarantee our actions, never Airbnb's decisions.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="text-center mt-10">
            <Button variant="brand" size="xl" asChild className="max-w-full h-auto min-h-14 py-3 whitespace-normal text-center">
              <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Revenue & Review Audit</a>
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
              "What could have been a major financial loss was fully recovered through ElitebnbHosts' structured documentation and claims process. Their attention to detail resulted in an $8,587 reimbursement and protected the integrity of our portfolio."
            </p>
            <span className="text-sm text-white/60">Multi-Property Investor</span>
          </div>
        </ScrollReveal>

        {/* Client testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              photo: jacobPhoto,
              name: "Jacob Nostrant",
              role: "Crew Housing · 100+ properties",
              quote: "Working with James was a game changer! We kept Superhost every single quarter, and a few times it was a nail-biter. His team stepped in and saved it! We've won multiple claims, too many to count, and James was an absolute BEAST with reviews.",
            },
            {
              photo: sikanderPhoto,
              name: "Sikander Zafar",
              role: "Airbnb host",
              quote: "Having Elite BNB Hosts handle our Airbnb has taken a huge load off my plate. They helped us win back our Superhost status, removed 30+ low rating, ineligible reviews, and filed 26 claims for us, which adds up to $7,000+ in reimbursements.",
            },
            {
              photo: estivenPhoto,
              name: "Estiven Gomez",
              role: "Airbnb Property Manager · 36 listings",
              quote: "Partnering with James has been a transformative experience. He and his team helped us regain our Superhost status, boosting our rating from 4.76 to 4.89. Magnificent work. I honestly didn't think a comeback like this was possible in the Airbnb world.",
            },
            {
              photo: regalLogo,
              logo: true,
              name: "Regal Bricks",
              role: "Superhost · 324 reviews · 4.8 rating",
              quote: "The EliteBNB team have been nothing short of heaven sent. We have had a myriad of guests attend our homes and try to manipulate the BNB system with untrue reviews, and the team's success rate with getting them removed properly has been very successful! Highly recommend!",
            },
            {
              icon: true,
              name: "Short-Term Rental Operator",
              role: "Florida · 50+ listings",
              quote: "Elite BNB Hosts removed the unfair reviews that were dragging us down, stepped in on guest issues before they turned into bad ratings, and flagged the real problems in our units every month. Since moving to our new account we're at a 5.0 rating and Superhost. Their team is doing a fantastic job of protecting our ratings!",
            },
          ].map((t, i) => (
            <ScrollReveal key={i} delay={0.1 + i * 0.05} className={i === 4 ? "md:col-span-2" : ""}>
              <div className="bg-secondary rounded-2xl p-8 h-full flex flex-col justify-between">
                <p className="text-foreground text-base leading-relaxed mb-8">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-4">
                  {t.icon ? (
                    <div className="w-14 h-14 rounded-full bg-black flex items-center justify-center ring-2 ring-brand ring-offset-2 ring-offset-secondary shrink-0">
                      <Building2 className="text-brand w-6 h-6" strokeWidth={1.5} aria-hidden="true" />
                    </div>
                  ) : t.logo ? (
                    <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center ring-2 ring-brand ring-offset-2 ring-offset-secondary overflow-hidden shrink-0">
                      <img src={t.photo} alt={`${t.name} logo`} className="w-4/5 h-4/5 object-contain" loading="lazy" />
                    </div>
                  ) : (
                    <img src={t.photo} alt={t.name} className="w-14 h-14 rounded-full object-cover object-top ring-2 ring-brand ring-offset-2 ring-offset-secondary shrink-0" loading="lazy" />
                  )}
                  <div>
                    <p className="font-heading text-lg font-bold text-foreground leading-tight">{t.name}</p>
                    <p className="text-sm text-muted-foreground">{t.role}</p>
                  </div>
                </div>
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
            Start with a free Revenue & Review Audit. We'll show you exactly what we'd fix.
          </p>
          <Button variant="brand" size="xl" asChild className="max-w-full h-auto min-h-14 py-3 whitespace-normal text-center">
            <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Book my free Revenue & Review Audit <ArrowRight className="ml-1" size={16} /></a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default PricingPage;
