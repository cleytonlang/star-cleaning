import { motion } from "framer-motion";
import { MessageSquare, Clock } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 gradient-primary relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="section-container relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-4 py-2 mb-8">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-sm font-body font-semibold text-accent">
              Limited Slots Available This Week
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-primary-foreground mb-6">
            Ready for a Home You'll Love Coming Back To?
          </h2>
          <p className="text-xl text-primary-foreground/80 font-body max-w-2xl mx-auto mb-10">
            Join 500+ Toronto families who already enjoy a cleaner, healthier home. 
            Your first clean is backed by our 100% satisfaction guarantee.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#estimate"
              className="gradient-cta inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl font-body font-bold text-lg text-foreground shadow-lg hover:scale-105 transition-transform"
            >
              Get Free Estimate
            </a>
            <a
              href="sms:6476411479"
              className="inline-flex items-center gap-2 text-primary-foreground/90 font-body font-semibold text-lg hover:text-primary-foreground transition-colors"
            >
              <MessageSquare className="w-5 h-5" /> Or Text Us — (647) 641-1479
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
