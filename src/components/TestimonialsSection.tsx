import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    location: "North York",
    text: "Star Cleaning transformed my condo! I've tried 4 other services and nothing compares. They're thorough, professional, and always on time.",
    rating: 5,
  },
  {
    name: "David & Lisa T.",
    location: "Scarborough",
    text: "We've been using them bi-weekly for 8 months. Our home has never looked better. The team is incredibly respectful and detail-oriented.",
    rating: 5,
  },
  {
    name: "Michael R.",
    location: "Mississauga",
    text: "Hired them for a post-renovation clean. They made our new kitchen sparkle! Fast, efficient, and fairly priced. Highly recommended.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Real Results from <span className="text-gradient">Real Clients</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-card rounded-2xl p-8 border border-border shadow-[var(--shadow-card)] relative"
            >
              <Quote className="w-10 h-10 text-primary/10 absolute top-6 right-6" />
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-accent fill-accent" />
                ))}
              </div>
              <p className="text-foreground font-body leading-relaxed mb-6">"{t.text}"</p>
              <div>
                <p className="font-body font-bold text-foreground">{t.name}</p>
                <p className="text-sm text-muted-foreground font-body">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
