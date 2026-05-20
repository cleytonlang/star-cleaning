import { motion } from "framer-motion";
import { Home, Building2, Sparkles, CalendarCheck, Paintbrush, Truck } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Cleaning",
    description: "Deep cleaning for homes and condos. Every corner, every surface — spotless guaranteed.",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Professional office and retail cleaning that keeps your business looking its best.",
  },
  {
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "Intensive top-to-bottom cleaning that reaches places regular cleaning can't.",
  },
  {
    icon: Truck,
    title: "Move In/Out Cleaning",
    description: "Get your full deposit back. We make sure every inch is move-out ready.",
  },
  {
    icon: Paintbrush,
    title: "Post-Construction",
    description: "Dust, debris, and residue removed. We make new spaces feel brand new.",
  },
  {
    icon: CalendarCheck,
    title: "Recurring Service",
    description: "Weekly, bi-weekly, or monthly plans. Consistent quality every single visit.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Cleaning Solutions That <span className="text-gradient">Fit Your Life</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            From weekly touch-ups to deep transformations — we handle it all so you don't have to.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--shadow-elevated)]"
            >
              <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground font-body leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
