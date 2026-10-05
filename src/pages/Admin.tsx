import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, Mail, Calendar, Building, Loader2, Lock, MapPin, Phone } from "lucide-react";

interface Submission {
  id: string;
  name: string;
  email: string;
  properties: string | null;
  company?: string | null;
  location?: string | null;
  phone?: string | null;
  message: string;
  read: boolean;
  created_at: string;
}

const ADMIN_PASSWORD = "elitebnb2024"; // Simple password protection

const AdminPage = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [selected, setSelected] = useState<Submission | null>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
      setError("");
      fetchSubmissions();
    } else {
      setError("Incorrect password");
    }
  };

  const fetchSubmissions = async () => {
    setLoading(true);
    // Use edge function to fetch with service role (bypasses RLS)
    const { data, error } = await supabase.functions.invoke("admin-submissions", {
      body: { action: "list" },
    });
    if (!error && data?.submissions) {
      setSubmissions(data.submissions);
    }
    setLoading(false);
  };

  const markAsRead = async (id: string) => {
    await supabase.functions.invoke("admin-submissions", {
      body: { action: "mark_read", id },
    });
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, read: true } : s))
    );
    if (selected?.id === id) setSelected({ ...selected, read: true });
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <form onSubmit={handleLogin} className="w-full max-w-sm space-y-4">
          <div className="text-center mb-8">
            <Lock className="mx-auto mb-4 text-muted-foreground" size={32} />
            <h1 className="text-2xl font-heading font-bold text-foreground">Admin Access</h1>
            <p className="text-muted-foreground text-sm mt-2">Enter password to view submissions</p>
          </div>
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="rounded-xl h-13 bg-secondary border-0 text-base px-5"
          />
          {error && <p className="text-destructive text-sm">{error}</p>}
          <Button type="submit" className="w-full">Sign In</Button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen px-6 py-20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-heading font-bold text-foreground">Submissions</h1>
            <p className="text-muted-foreground text-sm mt-1">
              {submissions.filter((s) => !s.read).length} unread
            </p>
          </div>
          <Button variant="outline" onClick={fetchSubmissions} disabled={loading}>
            {loading ? <Loader2 className="animate-spin" size={16} /> : "Refresh"}
          </Button>
        </div>

        {loading && submissions.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            <Loader2 className="mx-auto animate-spin mb-4" size={24} />
            Loading submissions...
          </div>
        ) : submissions.length === 0 ? (
          <div className="text-center py-20 text-muted-foreground">
            No submissions yet.
          </div>
        ) : (
          <div className="grid lg:grid-cols-[1fr_1.5fr] gap-6">
            {/* List */}
            <div className="space-y-2 max-h-[70vh] overflow-y-auto pr-2">
              {submissions.map((s) => (
                <button
                  key={s.id}
                  onClick={() => {
                    setSelected(s);
                    if (!s.read) markAsRead(s.id);
                  }}
                  className={`w-full text-left p-4 rounded-xl transition-colors ${
                    selected?.id === s.id
                      ? "bg-primary/10 border border-primary/20"
                      : "bg-secondary hover:bg-secondary/80"
                  } ${!s.read ? "border-l-4 border-l-primary" : ""}`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-foreground text-sm">{s.name}</span>
                    {!s.read && <Badge variant="default" className="text-[10px] px-1.5 py-0">New</Badge>}
                  </div>
                  <p className="text-muted-foreground text-xs truncate">{s.message}</p>
                  <p className="text-muted-foreground/60 text-[10px] mt-1">
                    {new Date(s.created_at).toLocaleDateString()}
                  </p>
                </button>
              ))}
            </div>

            {/* Detail */}
            {selected ? (
              <div className="bg-secondary rounded-2xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <h2 className="text-xl font-heading font-bold text-foreground">{selected.name}</h2>
                  {selected.read ? (
                    <Badge variant="secondary"><Eye size={12} className="mr-1" /> Read</Badge>
                  ) : (
                    <Badge variant="default">New</Badge>
                  )}
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Mail size={14} /> <a href={`mailto:${selected.email}`} className="hover:text-foreground transition-colors">{selected.email}</a>
                  </div>
                  {selected.company && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building size={14} /> {selected.company}
                    </div>
                  )}
                  {selected.location && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin size={14} /> {selected.location}
                    </div>
                  )}
                  {selected.phone && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Phone size={14} /> <a href={`tel:${selected.phone.replace(/[^\d+]/g, "")}`} className="hover:text-foreground transition-colors">{selected.phone}</a>
                    </div>
                  )}
                  {selected.properties && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Building size={14} /> {selected.properties} listings
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={14} /> {new Date(selected.created_at).toLocaleString()}
                  </div>
                  <div className="pt-4 border-t border-border">
                    <p className="text-foreground whitespace-pre-wrap leading-relaxed">{selected.message}</p>
                  </div>
                  <div className="pt-4">
                    <Button asChild variant="outline" size="sm">
                      <a href={`mailto:${selected.email}?subject=Re: Your inquiry to Elite BnB Hosts`}>
                        Reply via Email
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-secondary rounded-2xl p-8 flex items-center justify-center text-muted-foreground">
                Select a submission to view details
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPage;
