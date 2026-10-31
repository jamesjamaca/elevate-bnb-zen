import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Payout Leak Calculator. Estimates are based only on what the visitor enters.

const money = (n: number) =>
  new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
    Math.max(0, Math.round(n)),
  );

type FieldProps = {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  prefix?: string;
  suffix?: string;
};

function Field({ label, hint, value, onChange, min, max, step = 1, prefix = "", suffix = "" }: FieldProps) {
  const id = "leak-" + label.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  return (
    <div className="py-4 border-b border-border last:border-0">
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[15px] font-medium text-foreground">
          {label}
        </label>
        <div className="flex items-baseline gap-1 tabular-nums">
          {prefix && <span className="text-muted-foreground">{prefix}</span>}
          <input
            id={id}
            type="number"
            inputMode="numeric"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={(e) => onChange(Math.min(max, Math.max(min, Number(e.target.value) || 0)))}
            className="w-20 text-right text-[17px] font-semibold text-foreground bg-transparent border-b border-border focus:border-brand focus:outline-none"
          />
          {suffix && <span className="text-muted-foreground">{suffix}</span>}
        </div>
      </div>
      <input
        aria-label={`${label} slider`}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 w-full accent-[hsl(var(--brand))]"
      />
      {hint && <p className="mt-1 text-[13px] text-muted-foreground">{hint}</p>}
    </div>
  );
}

function Group({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <fieldset className="bg-background rounded-2xl border border-border px-5 py-2 mb-5">
      <legend className="sr-only">{title}</legend>
      <h3 className="pt-4 text-[17px] font-semibold text-foreground">{title}</h3>
      {children}
    </fieldset>
  );
}

export default function PayoutLeakCalculator({ auditUrl = "#audit" }: { auditUrl?: string }) {
  const [refundCases, setRefundCases] = useState(3);
  const [avgRefund, setAvgRefund] = useState(120);
  const [damageIncidents, setDamageIncidents] = useState(2);
  const [avgDamage, setAvgDamage] = useState(250);
  const [claimedPct, setClaimedPct] = useState(30);
  const [atRisk, setAtRisk] = useState(3);
  const [nightly, setNightly] = useState(180);
  const [occupancy, setOccupancy] = useState(70);
  const [bookingLoss, setBookingLoss] = useState(10);

  const refunds = refundCases * avgRefund * 12;
  const claims = damageIncidents * avgDamage * (1 - claimedPct / 100) * 12;
  const ratings = atRisk * nightly * 30 * (occupancy / 100) * (bookingLoss / 100) * 12;
  const total = refunds + claims + ratings;

  const lines = [
    { label: "Refunds and payout adjustments", note: "Taken from payouts by guests or Airbnb Support", value: refunds },
    { label: "Damage you never recovered", note: "Claims not filed, filed late, or denied", value: claims },
    { label: "Bookings lost on at-risk listings", note: "Listings under 4.8 or close to losing Superhost", value: ratings },
  ];

  return (
    <div aria-labelledby="leak-title">
      <div className="max-w-2xl mb-10">
        <h2
          id="leak-title"
          className="font-heading text-4xl md:text-5xl font-bold text-foreground leading-[1.05] tracking-[-0.02em]"
        >
          How much is Airbnb taking out of your payouts?
        </h2>
        <p className="mt-4 text-lg leading-[1.6] text-muted-foreground">
          Answer a few questions about the last month. You'll see where money is leaking across your portfolio, and how
          much it adds up to in a year.
        </p>
      </div>

      <div className="grid lg:grid-cols-[1fr_420px] gap-8 items-start">
        <div>
          <Group title="Refunds and payout adjustments">
            <Field
              label="Refund cases per month"
              hint="Guest refunds you gave, plus any Airbnb took from your payout"
              value={refundCases}
              onChange={setRefundCases}
              min={0}
              max={50}
            />
            <Field label="Average refund" value={avgRefund} onChange={setAvgRefund} min={0} max={1500} step={10} prefix="$" />
          </Group>

          <Group title="Damage claims">
            <Field label="Damage incidents per month" value={damageIncidents} onChange={setDamageIncidents} min={0} max={30} />
            <Field label="Average damage cost" value={avgDamage} onChange={setAvgDamage} min={0} max={3000} step={25} prefix="$" />
            <Field
              label="Share you actually recover"
              hint="Filed on time, approved, and paid"
              value={claimedPct}
              onChange={setClaimedPct}
              min={0}
              max={100}
              step={5}
              suffix="%"
            />
          </Group>

          <Group title="Ratings">
            <Field label="Listings under 4.8 or at risk" value={atRisk} onChange={setAtRisk} min={0} max={100} />
            <Field label="Average nightly rate" value={nightly} onChange={setNightly} min={0} max={2000} step={10} prefix="$" />
            <Field label="Average occupancy" value={occupancy} onChange={setOccupancy} min={0} max={100} step={5} suffix="%" />
            <Field
              label="Bookings lost on those listings"
              hint="Lower ratings mean lower search ranking and fewer bookings"
              value={bookingLoss}
              onChange={setBookingLoss}
              min={0}
              max={50}
              suffix="%"
            />
          </Group>
        </div>

        <aside className="lg:sticky lg:top-24 bg-black text-white rounded-2xl overflow-hidden">
          <div className="px-6 pt-6 pb-4 border-b border-dashed border-white/20">
            <p className="text-[14px] text-white/80">Your estimated payout leak</p>
            <p className="text-[13px] text-white/50">Next 12 months, based on your answers</p>
          </div>

          <ul className="px-6 divide-y divide-white/10">
            {lines.map((l) => (
              <li key={l.label} className="py-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[15px] font-medium">{l.label}</p>
                  <p className="text-[13px] text-white/50">{l.note}</p>
                </div>
                <p className="text-[16px] font-semibold tabular-nums text-brand whitespace-nowrap">−{money(l.value)}</p>
              </li>
            ))}
          </ul>

          <div className="mx-6 py-5 border-t-2 border-white/80 flex items-baseline justify-between gap-4">
            <p className="text-[15px] font-semibold">Total per year</p>
            <p className="text-[34px] leading-none font-bold tabular-nums text-brand" aria-live="polite">
              −{money(total)}
            </p>
          </div>
          <p className="px-6 -mt-2 pb-5 text-[13px] text-white/50 tabular-nums">That's about {money(total / 12)} a month.</p>

          <div className="px-6 pb-6">
            <Button variant="brand" size="xl" asChild className="w-full h-auto min-h-14 py-3 whitespace-normal text-center">
              <a href={auditUrl} target="_blank" rel="noopener noreferrer">
                Get my free Revenue &amp; Review Audit <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <p className="mt-3 text-[13px] leading-relaxed text-white/60">
              We'll go through your portfolio and show you which of these losses we can recover or prevent. No cost, and
              you keep the audit.
            </p>
            <p className="mt-4 text-[12px] text-white/40">
              Estimates are based only on the numbers you enter. Actual results vary by portfolio.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
