import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", properties: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent.",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", properties: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center px-4">
        <div className="text-center max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="text-muted-foreground text-sm tracking-widest uppercase mb-6">Contact</p>
            <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[0.95] tracking-tight mb-6">
              Let's talk.
            </h1>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto">
              Tell us about your properties and goals. We'll create a custom strategy.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="pb-24 lg:pb-32 px-4">
        <div className="container mx-auto max-w-xl">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-lg h-12 bg-secondary border-0"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-lg h-12 bg-secondary border-0"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Number of Properties</label>
                <Input
                  placeholder="e.g. 3"
                  value={form.properties}
                  onChange={(e) => setForm({ ...form, properties: e.target.value })}
                  className="rounded-lg h-12 bg-secondary border-0"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <Textarea
                  placeholder="Tell us about your properties and goals..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="rounded-lg bg-secondary border-0 resize-none"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Send Message <ArrowRight className="ml-1" size={16} />
              </Button>
            </form>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-muted-foreground text-sm mt-10">
              Or email us directly at contact@elitebnbhosts.com
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
