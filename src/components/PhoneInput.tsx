import { useMemo, useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Command, CommandEmpty, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { countries, flagEmoji } from "@/lib/countries";
import { cn } from "@/lib/utils";

interface PhoneInputProps {
  country: string; // ISO code, e.g. "US"
  number: string;
  onCountryChange: (iso: string) => void;
  onNumberChange: (value: string) => void;
}

/** Best-guess default country from the visitor's browser language (falls back to US). */
export const guessCountry = (): string => {
  try {
    const region = new Intl.Locale(navigator.language).region;
    if (region && countries.some((c) => c.iso === region)) return region;
  } catch {
    /* ignore */
  }
  return "US";
};

const PhoneInput = ({ country, number, onCountryChange, onNumberChange }: PhoneInputProps) => {
  const [open, setOpen] = useState(false);
  const selected = useMemo(() => countries.find((c) => c.iso === country) ?? countries[0], [country]);

  return (
    <div className="flex gap-2">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            type="button"
            aria-label={`Country code: ${selected.name} ${selected.dial}`}
            className="flex h-14 shrink-0 items-center gap-2 rounded-xl bg-secondary px-4 text-base text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
          >
            <span className="text-xl leading-none">{flagEmoji(selected.iso)}</span>
            <span className="tabular-nums">{selected.dial}</span>
            <ChevronDown size={16} className="text-muted-foreground" />
          </button>
        </PopoverTrigger>
        <PopoverContent align="start" className="w-[320px] max-w-[90vw] p-0">
          <Command>
            <CommandInput placeholder="Search country or code…" />
            <CommandList className="max-h-72">
              <CommandEmpty>No country found.</CommandEmpty>
              {countries.map((c) => (
                <CommandItem
                  key={c.iso}
                  value={`${c.name} ${c.dial} ${c.iso}`}
                  onSelect={() => {
                    onCountryChange(c.iso);
                    setOpen(false);
                  }}
                  className="gap-3 text-base"
                >
                  <span className="text-xl leading-none">{flagEmoji(c.iso)}</span>
                  <span className="flex-1 truncate">{c.name}</span>
                  <span className="text-muted-foreground tabular-nums">{c.dial}</span>
                  <Check size={16} className={cn("shrink-0", c.iso === selected.iso ? "opacity-100" : "opacity-0")} />
                </CommandItem>
              ))}
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
      <Input
        type="tel"
        inputMode="tel"
        autoComplete="tel-national"
        placeholder="Phone number"
        value={number}
        onChange={(e) => onNumberChange(e.target.value.replace(/[^\d\s\-().]/g, ""))}
        maxLength={20}
        className="rounded-xl h-14 bg-secondary border-0 text-base px-5"
      />
    </div>
  );
};

export default PhoneInput;
