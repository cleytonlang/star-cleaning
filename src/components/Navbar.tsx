import { useState } from "react";
import { Star, Menu, X } from "lucide-react";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-foreground/95 backdrop-blur-md border-b border-primary-foreground/10">
      <div className="section-container flex items-center justify-between h-16">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 text-accent fill-accent" />
          <span className="text-xl font-heading font-bold text-primary-foreground">Star Cleaning</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-sm font-body font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">Services</a>
          <a href="#" className="text-sm font-body font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors">About</a>
          <a
            href="#estimate"
            className="gradient-cta inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-body font-bold text-sm text-foreground hover:scale-105 transition-transform"
          >
            Free Estimate
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-primary-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-foreground border-t border-primary-foreground/10 pb-4">
          <div className="section-container flex flex-col gap-3 pt-3">
            <a href="#services" onClick={() => setMobileOpen(false)} className="text-primary-foreground/70 font-body py-2">Services</a>
            <a href="#" onClick={() => setMobileOpen(false)} className="text-primary-foreground/70 font-body py-2">About</a>
            <a href="#estimate" onClick={() => setMobileOpen(false)} className="gradient-cta text-center py-3 rounded-lg font-body font-bold text-foreground">
              Free Estimate
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
