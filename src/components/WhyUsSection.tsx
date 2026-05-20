import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Heart, Leaf, DollarSign, Users } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "100% Satisfaction Guarantee", description: "Not happy? We'll re-clean for free. No questions asked." },
  { icon: Heart, title: "Trusted by 500+ Families", description: "Toronto homeowners trust us with their keys and their homes." },
  { icon: Leaf, title: "Eco-Friendly Products", description: "Safe for your kids, pets, and the planet. Always." },
  { icon: DollarSign, title: "Transparent Pricing", description: "No hidden fees. You know the price before we start." },
  { icon: Users, title: "Vetted Professionals", description: "Background-checked, trained, and uniformed team members." },
  { icon: CheckCircle2, title: "Flexible Scheduling", description: "Book online 24/7. Evenings and weekends available." },
];

const WhyUsSection = () => {
  return (
    <section className="py-20 bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">
            Why Star Cleaning
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Why <span className="text-gradient">500+ Toronto Families</span> Choose Us
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            We don't just clean. We give you back your time, your peace of mind, and a home you're proud of.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/15 flex items-center justify-center">
                <reason.icon className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-foreground mb-1">{reason.title}</h3>
                <p className="text-muted-foreground font-body">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
