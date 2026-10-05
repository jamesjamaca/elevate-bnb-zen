import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-5">
            elitebnb<span className="font-light">hosts</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-[1.7] max-w-xs">
            Remote property management for modern Airbnb hosts. Intelligent systems, exceptional results.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">Navigate</h4>
          <ul className="space-y-4 text-sm">
            {[
              { label: "Services", path: "/services" },
              { label: "About", path: "/about" },
              { label: "Pricing", path: "/pricing" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-muted-foreground hover:text-foreground transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">Contact</h4>
          <p className="text-sm text-muted-foreground">usa@elitebnbhosts.com</p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/elite_bnbhosts/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://www.linkedin.com/company/110911848"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border mt-20 pt-10 text-center text-xs text-muted-foreground space-y-2">
        <p>© {new Date().getFullYear()} ElitebnbHosts. All rights reserved.</p>
        <p>Elite BNB Hosts is an independent service and is not affiliated with Airbnb.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
