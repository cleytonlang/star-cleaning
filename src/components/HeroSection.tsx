import { MessageSquare, Star, Shield, Clock } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background image — simple img, no picture wrapper, eager load */}
      <div className="absolute inset-0">
        <img
          src="/hero-cleaning.webp"
          alt="Professional cleaning team in Toronto"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      </div>

      <div className="section-container relative z-10 py-20">
        <div className="max-w-2xl">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-accent/20 border border-accent/30 px-4 py-2 mb-6">
            <Star className="w-4 h-4 text-accent fill-accent" />
            <span className="text-sm font-body font-semibold text-accent">
              Rated #1 Cleaning Service in Toronto
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-black text-primary-foreground leading-tight mb-6">
            Your Home Deserves a{" "}
            <span className="text-accent">Sparkling Clean</span> You Can Feel
          </h1>

          <p className="text-lg sm:text-xl text-primary-foreground/80 font-body mb-8 leading-relaxed">
            Toronto's most trusted cleaning professionals. We don't just clean — we create healthy,
            stress-free spaces so you can enjoy what matters most.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a
              href="#estimate"
              className="gradient-cta inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-bold text-lg text-foreground shadow-lg hover:scale-105 transition-transform"
            >
              Get Free Estimate
            </a>
            <a
              href="sms:6476411479"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-body font-semibold text-lg text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10 transition-colors"
            >
              <MessageSquare className="w-5 h-5" />
              Text Us — (647) 641-1479
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap gap-6 text-primary-foreground/70">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-body">Insured & Bonded</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-sm font-body">Same-Day Available</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-accent fill-accent" />
              <span className="text-sm font-body">500+ Happy Clients</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
