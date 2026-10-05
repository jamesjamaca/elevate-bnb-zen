import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";

const navItems = [
  { label: "Services", path: "/services" },
  { label: "About", path: "/about" },
  { label: "Pricing", path: "/pricing" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname !== "/admin"; // dark nav on every public page

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b ${isHome ? "bg-black/70 border-white/10 text-white" : "bg-background/60 border-border/40"}`}>
      <nav className="container mx-auto flex items-center justify-between h-14 px-4 lg:px-8">
        <Link to="/" className={`font-heading text-xl font-semibold tracking-tight ${isHome ? "text-white" : "text-foreground"}`}>
          elitebnb<span className="font-light">hosts</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.path}>
              <Link
                to={item.path}
                className={`text-[15px] font-medium transition-colors ${
                  isHome
                    ? location.pathname === item.path ? "text-white" : "text-white/70 hover:text-white"
                    : `hover:text-foreground ${location.pathname === item.path ? "text-foreground" : "text-muted-foreground"}`
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <ThemeToggle />
          <Button variant={isHome ? "on-dark" : "default"} size="sm" asChild>
            <Link to="/contact">Get Started</Link>
          </Button>
        </div>

        <button
          className={`md:hidden ${isHome ? "text-white" : "text-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {mobileOpen && (
        <div className={`md:hidden backdrop-blur-xl border-b ${isHome ? "bg-black/95 border-white/10" : "bg-background/95 border-border"}`}>
          <ul className="flex flex-col py-6 px-4 gap-1">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  onClick={() => setMobileOpen(false)}
                  className={`block py-3 text-base font-medium transition-colors ${
                    isHome
                      ? location.pathname === item.path ? "text-white" : "text-white/70"
                      : location.pathname === item.path ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center justify-between pt-4">
              <ThemeToggle />
              <Button variant="default" size="sm" asChild>
                <Link to="/contact" onClick={() => setMobileOpen(false)}>Get Started</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
