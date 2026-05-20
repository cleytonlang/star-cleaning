import { MessageSquare, Mail, MapPin, Star } from "lucide-react";


const FooterSection = () => {
  return (
    <footer className="bg-foreground py-16">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <span className="text-2xl font-heading font-bold text-primary-foreground">
                Star Cleaning
              </span>
            </div>
            <p className="text-primary-foreground/60 font-body leading-relaxed">
              Toronto's most trusted cleaning service. Making homes and businesses sparkle since day one.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-bold text-primary-foreground mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="sms:6476411479" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors font-body">
                <MessageSquare className="w-5 h-5" />
                Text: (647) 641-1479
              </a>
              <a href="mailto:starcleaningbr@hotmail.com" className="flex items-center gap-3 text-primary-foreground/70 hover:text-accent transition-colors font-body">
                <Mail className="w-5 h-5" />
                starcleaningbr@hotmail.com
              </a>
              <div className="flex items-center gap-3 text-primary-foreground/70 font-body">
                <MapPin className="w-5 h-5 flex-shrink-0" />
                Serving Toronto, Ontario & GTA
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-heading font-bold text-primary-foreground mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/70 font-body">
              <li>Residential Cleaning</li>
              <li>Commercial Cleaning</li>
              <li>Deep Cleaning</li>
              <li>Move In/Out Cleaning</li>
              <li>Post-Construction</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/40 font-body text-sm">
            © {new Date().getFullYear()} Star Cleaning. All rights reserved. Proudly serving the Greater Toronto Area.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
