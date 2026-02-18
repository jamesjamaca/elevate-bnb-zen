import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="font-heading text-lg font-semibold mb-3">
            elitebnb<span className="font-light">hosts</span>
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
            Remote property management for modern Airbnb hosts. Intelligent systems, exceptional results.
          </p>
        </div>
        <div>
          <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Navigate</h4>
          <ul className="space-y-2.5 text-sm">
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
          <h4 className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-4">Contact</h4>
          <p className="text-sm text-muted-foreground">contact@elitebnbhosts.com</p>
        </div>
      </div>
      <div className="border-t border-border mt-12 pt-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ElitebnbHosts. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
