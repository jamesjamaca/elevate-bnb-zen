import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", properties: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.from("contact_submissions").insert({
        name: form.name.trim(),
        email: form.email.trim(),
        properties: form.properties.trim() || null,
        message: form.message.trim(),
      });

      if (error) throw error;

      // Also trigger email notification
      try {
        await supabase.functions.invoke("notify-contact", {
          body: { name: form.name, email: form.email, properties: form.properties, message: form.message },
        });
      } catch {
        // Email notification is best-effort, don't block the user
      }

      toast({
        title: "Message sent.",
        description: "We'll get back to you within 24 hours.",
      });
      setForm({ name: "", email: "", properties: "", message: "" });
    } catch (error) {
      toast({
        title: "Something went wrong.",
        description: "Please try again or email us directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Hero */}
      <section className="pt-32 lg:pt-40 pb-8 px-6">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal>
            <p className="text-muted-foreground text-xs tracking-[0.3em] uppercase mb-8">Contact</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[0.92] tracking-[-0.03em] mb-8">
              Let's talk.
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-lg mx-auto leading-relaxed">
              Tell us about your properties and goals. We'll build a strategy around them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="pb-40 lg:pb-56 px-6">
        <div className="container mx-auto max-w-xl">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-xs font-medium text-foreground tracking-wide uppercase mb-2 block">Full Name</label>
                <Input
                  placeholder="John Doe"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="rounded-xl h-13 bg-secondary border-0 text-base px-5"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground tracking-wide uppercase mb-2 block">Email</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  className="rounded-xl h-13 bg-secondary border-0 text-base px-5"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground tracking-wide uppercase mb-2 block">Number of Properties</label>
                <Input
                  placeholder="e.g. 3"
                  value={form.properties}
                  onChange={(e) => setForm({ ...form, properties: e.target.value })}
                  className="rounded-xl h-13 bg-secondary border-0 text-base px-5"
                />
              </div>
              <div>
                <label className="text-xs font-medium text-foreground tracking-wide uppercase mb-2 block">Message</label>
                <Textarea
                  placeholder="Tell us about your properties and goals..."
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  className="rounded-xl bg-secondary border-0 resize-none text-base px-5 py-4"
                />
              </div>
              <Button variant="hero" size="lg" type="submit" className="w-full mt-4" disabled={isSubmitting}>
                {isSubmitting ? (
                  <><Loader2 className="mr-2 animate-spin" size={16} /> Sending...</>
                ) : (
                  <>Send Message <ArrowRight className="ml-1" size={16} /></>
                )}
              </Button>
            </form>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-muted-foreground text-sm mt-12">
              Or email us directly at usa@elitebnbhosts.com
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
