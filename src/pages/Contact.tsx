import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ScrollReveal from "@/components/ScrollReveal";
import { supabase } from "@/integrations/supabase/client";
import PhoneInput, { guessCountry } from "@/components/PhoneInput";
import { countries } from "@/lib/countries";

const ContactPage = () => {
  const { toast } = useToast();
  const emptyForm = { name: "", company: "", location: "", email: "", phoneCountry: guessCountry(), phone: "", properties: "", message: "" };
  const [form, setForm] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const phoneDigits = form.phone.replace(/\D/g, "");
    if (form.phone.trim() && (phoneDigits.length < 5 || phoneDigits.length > 14)) {
      toast({
        title: "Check your phone number.",
        description: "Enter your number without the country code (it's selected on the left).",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    const dial = countries.find((c) => c.iso === form.phoneCountry)?.dial ?? "";
    const fullPhone = form.phone.trim() ? `${dial} ${form.phone.trim()}` : null;
    const payload = {
      name: form.name.trim(),
      email: form.email.trim(),
      properties: form.properties.trim() || null,
      message: form.message.trim(),
    };
    const extras = {
      company: form.company.trim() || null,
      location: form.location.trim() || null,
      phone: fullPhone,
    };

    try {
      let { error } = await supabase.from("contact_submissions").insert({ ...payload, ...extras });

      // If the database doesn't have the new columns yet, still save the lead:
      // fold the extra details into the message so nothing is ever lost.
      if (error && (error.code === "PGRST204" || /column/i.test(error.message ?? ""))) {
        const details = [
          extras.company && `Company: ${extras.company}`,
          extras.location && `Location: ${extras.location}`,
          extras.phone && `Phone: ${extras.phone}`,
        ].filter(Boolean).join("\n");
        ({ error } = await supabase.from("contact_submissions").insert({
          ...payload,
          message: details ? `${payload.message}\n\n---\n${details}` : payload.message,
        }));
      }

      if (error) throw error;

      // Also trigger email notification
      try {
        await supabase.functions.invoke("notify-contact", {
          body: { ...payload, ...extras },
        });
      } catch {
        // Email notification is best-effort, don't block the user
      }

      toast({
        title: "Message sent.",
        description: "We'll get back to you within 24 hours.",
      });
      setForm({ ...emptyForm, phoneCountry: form.phoneCountry });
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
            <p className="text-muted-foreground text-sm tracking-[0.2em] uppercase font-medium mb-8">Contact</p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-[5rem] font-bold text-foreground leading-[0.92] tracking-[-0.03em] mb-8">
              Let's talk.
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl max-w-xl mx-auto leading-relaxed">
              Tell us about your listings and goals. We'll build a strategy around them.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Form */}
      <section className="pb-40 lg:pb-56 px-6">
        <div className="container mx-auto max-w-2xl">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Full Name</label>
                <Input id="name" autoComplete="name" placeholder="John Doe" maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required className="rounded-xl h-14 bg-secondary border-0 text-base px-5" />
              </div>
              <div>
                <label htmlFor="company" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Company Name <span className="text-muted-foreground normal-case font-normal">(optional)</span></label>
                <Input id="company" autoComplete="organization" placeholder="Your company" maxLength={120} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="rounded-xl h-14 bg-secondary border-0 text-base px-5" />
              </div>
              <div>
                <label htmlFor="location" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Where You Operate</label>
                <Input id="location" autoComplete="address-level2" placeholder="City, State / Country" maxLength={120} value={form.location} onChange={(e) => setForm({ ...form, location: e.target.value })} className="rounded-xl h-14 bg-secondary border-0 text-base px-5" />
              </div>
              <div>
                <label htmlFor="properties" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Number of Listings</label>
                <Input id="properties" inputMode="numeric" placeholder="e.g. 12" maxLength={10} value={form.properties} onChange={(e) => setForm({ ...form, properties: e.target.value })} className="rounded-xl h-14 bg-secondary border-0 text-base px-5" />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Email</label>
                <Input id="email" type="email" autoComplete="email" placeholder="john@example.com" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required className="rounded-xl h-14 bg-secondary border-0 text-base px-5" />
              </div>
              <div>
                <label htmlFor="phone" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Phone <span className="text-muted-foreground normal-case font-normal">(optional)</span></label>
                <PhoneInput
                  country={form.phoneCountry}
                  number={form.phone}
                  onCountryChange={(iso) => setForm({ ...form, phoneCountry: iso })}
                  onNumberChange={(v) => setForm({ ...form, phone: v })}
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground tracking-wide uppercase mb-2 block">Message</label>
                <Textarea id="message" placeholder="Tell us about your listings and goals..." rows={5} maxLength={2000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} required className="rounded-xl bg-secondary border-0 resize-none text-base px-5 py-4" />
              </div>
              <div className="sm:col-span-2">
                <Button variant="brand" size="xl" type="submit" className="w-full mt-2" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="mr-2 animate-spin" size={18} /> Sending...</>
                  ) : (
                    <>Send Message <ArrowRight className="ml-1" size={18} /></>
                  )}
                </Button>
              </div>
            </form>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-center text-muted-foreground text-base mt-12">
              Or email us directly at usa@elitebnbhosts.com
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
