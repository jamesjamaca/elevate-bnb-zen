import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <h3 className="font-heading text-2xl font-bold mb-4">
            Elite<span className="text-accent">bnb</span>Hosts
          </h3>
          <p className="text-primary-foreground/70 max-w-sm text-sm leading-relaxed">
            Professional remote property management for Airbnb hosts. We help you scale your rental business without the stress.
          </p>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {[
              { label: "Services", path: "/services" },
              { label: "About Us", path: "/about" },
              { label: "Pricing", path: "/pricing" },
              { label: "Contact", path: "/contact" },
            ].map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-primary-foreground/60 hover:text-accent transition-colors">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-heading text-sm font-semibold uppercase tracking-wider mb-4 text-primary-foreground/80">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/60">
            <li>Property Management</li>
            <li>Listing Optimization</li>
            <li>Review Management</li>
            <li>Revenue Optimization</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center text-xs text-primary-foreground/40">
        © {new Date().getFullYear()} ElitebnbHosts. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
