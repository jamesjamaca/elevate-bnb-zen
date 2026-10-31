import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import ambientWorkspace from "@/assets/ambient-workspace.jpg";

const services = [
  {
    title: "Payout Protection",
    plain: "Revenue Protection",
    desc: "Airbnb support can refund a guest straight out of your payout. We catch those adjustments and dispute the ones you didn't owe.",
    included: "Defend, Operate, Scale",
    details: ["Payout adjustments caught and disputed", "Refund requests handled before they become deductions", "Support errors escalated and corrected", "Monthly report of money recovered and saved"],
  },
  {
    title: "Claims Recovery",
    plain: "Damage & Reimbursement Claims",
    desc: "Claims built the way Airbnb needs to see them: itemized, documented, and filed on time. 39 of 40 won in 2026.",
    included: "Defend, Operate, Scale",
    details: ["AirCover damage claims filed and followed through", "Itemized invoices and photo evidence prepared", "Guest disputes and platform mediation", "Every claim tracked to payout"],
  },
  {
    title: "Review Defense",
    plain: "Review Removal & Protection",
    desc: "Reviews that break Airbnb's policy get disputed through the official process. 500+ removed so far, with no workarounds that put your account at risk.",
    included: "Defend, Operate, Scale",
    details: ["Qualifying reviews disputed within 48 hours", "Public responses that protect your listing", "Every listing's rating tracked weekly", "Listing Rescue if one slips below 4.8"],
  },
  {
    title: "Guest Experience",
    plain: "Guest Communication & Prevention",
    desc: "The best review defense is a guest who never wanted to write a bad one. We catch problems mid-stay and fix them while they can still be fixed.",
    included: "Operate, Scale",
    details: ["24/7 guest messaging, inquiry to checkout", "In-stay check-ins that catch problems before the review", "Every stay documented, so you have the stronger case", "A playbook so every reply sounds like you"],
  },
  {
    title: "Operations & Pricing",
    plain: "Day-to-Day Portfolio Management",
    desc: "The daily work of running your listings, handed off in 30 days.",
    included: "Operate, Scale",
    details: ["Cleaning and maintenance coordination", "Pricing run on your rules", "Multi-platform coordination (Airbnb, VRBO, Booking.com)", "Quality checks on every listing"],
  },
  {
    title: "Bookkeeping & Finance",
    plain: "Optional add-on",
    desc: "Clean books for every property, so you always know where each one stands.",
    addon: true,
    details: ["Monthly bookkeeping and reconciliation", "Income and expense tracking per property", "Payout and claims reimbursement tracking", "Monthly financial reports"],
  },
] as { title: string; plain: string; desc: string; details: string[]; included?: string; addon?: boolean }[];

const ServicesPage = () => (
  <div>
    {/* Hero */}
    <section className="relative -mt-14 overflow-hidden min-h-[60vh] flex items-center justify-center px-6 pt-40 pb-24" style={{ background: "radial-gradient(70% 30% at 50% 120%, #ff9a3a 0%, #d2400d 42%, #5a1304 68%, rgba(0,0,0,0) 78%), #000" }}>
      <div className="relative text-center max-w-4xl mx-auto">
        <ScrollReveal>
          <p className="text-brand text-sm font-semibold tracking-[0.3em] uppercase mb-8">Services</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-white leading-[0.92] tracking-[-0.03em] mb-8">
            Everything we do protects your money or your ratings.
          </h1>
          <p className="text-white/70 text-lg md:text-xl lg:text-2xl max-w-lg mx-auto leading-relaxed">
            Five services, one team, all built on how Airbnb support actually decides.
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
                <span className={`text-brand/25 font-heading font-bold leading-none block ${s.addon ? "text-5xl lg:text-6xl uppercase" : "text-7xl lg:text-8xl"}`}>{s.addon ? "Add-on" : `0${i + 1}`}</span>
                <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mt-6 mb-2 tracking-[-0.02em]">{s.title}</h2>
                <p className="text-[#c2410c] text-xs font-semibold tracking-[0.2em] uppercase mb-6">{s.plain}</p>
                <p className="text-muted-foreground text-base leading-[1.7]">{s.desc}</p>
                {s.included && (
                  <p className="text-foreground text-sm font-semibold mt-6">
                    Included in: <span className="font-normal text-muted-foreground">{s.included}</span>
                  </p>
                )}
              </div>
              <ul className="space-y-5 lg:pt-28">
                {s.details.map((d) => (
                  <li key={d} className="flex items-center gap-3 text-base text-foreground">
                    <span className="w-1 h-1 rounded-full bg-brand shrink-0" />
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
    <section className="relative overflow-hidden py-32 lg:py-44 px-6" style={{ background: "radial-gradient(60% 45% at 50% 125%, #ff7a1f 0%, #c2310a 45%, #4a1003 70%, rgba(0,0,0,0) 80%), #000" }}>
      <div className="container relative mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white leading-[1.05] tracking-[-0.02em] mb-8">
            Not sure which services you need?
          </h2>
          <p className="text-white/70 text-lg md:text-xl max-w-md mx-auto mb-14 leading-[1.7]">
            Start with a free audit. We'll show you where money and ratings are leaking, and what we'd fix first.
          </p>
          <Button variant="brand" size="xl" asChild>
            <a href="https://calendly.com/usa-elitebnbhosts/30min" target="_blank" rel="noopener noreferrer">Get my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={16} /></a>
          </Button>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default ServicesPage;
