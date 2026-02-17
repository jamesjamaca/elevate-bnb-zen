import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, MessageSquare, Star, TrendingUp, Calendar, HeadphonesIcon, ArrowRight, CheckCircle2 } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const benefits = [
  { icon: MessageSquare, title: "Guest Communication", desc: "24/7 professional guest messaging from inquiry to checkout." },
  { icon: Star, title: "Review Management", desc: "Proactive strategies to protect your ratings and remove policy-violating reviews." },
  { icon: TrendingUp, title: "Revenue Optimization", desc: "Data-driven pricing and listing strategies to maximize your earnings." },
  { icon: Shield, title: "Listing Optimization", desc: "SEO-optimized titles, descriptions, and photos that convert." },
  { icon: Calendar, title: "Booking Management", desc: "Calendar sync, booking coordination, and availability optimization." },
  { icon: HeadphonesIcon, title: "Claim & Dispute Support", desc: "Expert handling of damage claims and guest disputes." },
];

const steps = [
  { num: "01", title: "Book a Consultation", desc: "Share your property details and goals in a free strategy call." },
  { num: "02", title: "Custom Strategy", desc: "We build a tailored management plan for your listings." },
  { num: "03", title: "We Manage, You Earn", desc: "Sit back while we handle operations and grow your revenue." },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Luxury rental property" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-primary/75" />
        </div>
        <div className="relative container mx-auto px-4 lg:px-8 py-24">
          <div className="max-w-2xl animate-fade-in-up">
            <p className="text-accent font-body font-semibold text-sm uppercase tracking-widest mb-4">Remote Property Management</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              Scale Your Airbnb Without the Stress
            </h1>
            <p className="text-primary-foreground/80 text-lg md:text-xl leading-relaxed mb-8 max-w-lg">
              Expert remote management that increases revenue, improves reviews, and lets you be completely hands-off.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-1" size={18} /></Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
              Everything You Need to Succeed on Airbnb
            </h2>
            <p className="text-muted-foreground">
              From guest messaging to revenue strategy, we cover every aspect of short-term rental management — remotely.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="group p-8 rounded-xl bg-card border border-border hover:border-accent/40 transition-all hover:shadow-lg">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-5 group-hover:bg-accent/20 transition-colors">
                  <b.icon className="text-accent" size={24} />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{b.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-28 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Why ElitebnbHosts</p>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Built on Experience. Driven by Results.
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We don't just manage properties — we build systems that protect your reputation and grow your income. Our policy-compliant review strategies and proactive guest management set us apart.
              </p>
              <ul className="space-y-4">
                {[
                  "Policy-compliant review removal expertise",
                  "Proactive guest communication to prevent issues",
                  "Data-driven revenue optimization strategies",
                  "Trusted by hosts managing multiple listings",
                  "Ethical, transparent, results-focused approach",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-0.5 shrink-0" size={20} />
                    <span className="text-foreground text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-primary rounded-2xl p-10 lg:p-14">
              <div className="space-y-8">
                <div>
                  <p className="text-5xl font-heading font-bold text-accent">95%</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Guest satisfaction rate</p>
                </div>
                <div>
                  <p className="text-5xl font-heading font-bold text-accent">30%</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Average revenue increase</p>
                </div>
                <div>
                  <p className="text-5xl font-heading font-bold text-accent">24/7</p>
                  <p className="text-primary-foreground/70 text-sm mt-1">Guest communication coverage</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">How It Works</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
              Three Simple Steps to Hands-Off Hosting
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((s) => (
              <div key={s.num} className="text-center p-8">
                <span className="text-5xl font-heading font-bold text-accent/20">{s.num}</span>
                <h3 className="font-heading text-xl font-semibold text-foreground mt-4 mb-3">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-28 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Let Experts Manage Your Property Remotely
          </h2>
          <p className="text-primary-foreground/70 max-w-lg mx-auto mb-8">
            Focus on what matters while we handle your Airbnb operations. Book a free consultation today.
          </p>
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Book a Free Consultation <ArrowRight className="ml-1" size={18} /></Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
