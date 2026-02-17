import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", properties: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setForm({ name: "", email: "", properties: "", message: "" });
  };

  return (
    <div>
      {/* Hero */}
      <section className="py-24 lg:py-32 bg-primary">
        <div className="container mx-auto px-4 lg:px-8 text-center">
          <p className="text-accent font-semibold text-sm uppercase tracking-widest mb-3">Contact Us</p>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Book a Free Consultation
          </h1>
          <p className="text-primary-foreground/70 max-w-xl mx-auto">
            Tell us about your properties and goals. We'll create a custom strategy to help you succeed.
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div>
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Fill out the form and our team will reach out within 24 hours to schedule your free strategy consultation.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Mail className="text-accent" size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Email Us</p>
                    <p className="text-sm text-muted-foreground">contact@elitebnbhosts.com</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
                <Input
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
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
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Number of Properties</label>
                <Input
                  placeholder="e.g. 3"
                  value={form.properties}
                  onChange={(e) => setForm({ ...form, properties: e.target.value })}
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
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full">
                Send Message <ArrowRight className="ml-1" size={18} />
              </Button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
