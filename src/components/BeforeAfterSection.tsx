import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import beforeKitchenWebp from "@/assets/before-kitchen.webp";
import afterKitchenWebp from "@/assets/after-kitchen.webp";
import beforeBathroomWebp from "@/assets/before-bathroom.webp";
import afterBathroomWebp from "@/assets/after-bathroom.webp";
import beforeDiningWebp from "@/assets/before-dining.webp";
import afterDiningWebp from "@/assets/after-dining.webp";
import beforeLaundryWebp from "@/assets/before-laundry.webp";
import afterLaundryWebp from "@/assets/after-laundry.webp";
import beforePlayroomWebp from "@/assets/before-playroom.webp";
import afterPlayroomWebp from "@/assets/after-playroom.webp";

import beforeKitchenJpg from "@/assets/before-kitchen.jpg";
import afterKitchenJpg from "@/assets/after-kitchen.jpg";
import beforeBathroomJpg from "@/assets/before-bathroom.jpg";
import afterBathroomJpg from "@/assets/after-bathroom.jpg";
import beforeDiningJpg from "@/assets/before-dining.jpg";
import afterDiningJpg from "@/assets/after-dining.jpg";
import beforeLaundryJpg from "@/assets/before-laundry.jpg";
import afterLaundryJpg from "@/assets/after-laundry.jpg";
import beforePlayroomJpg from "@/assets/before-playroom.jpg";
import afterPlayroomJpg from "@/assets/after-playroom.jpg";

const slides = [
  { beforeWebp: beforeKitchenWebp.src, beforeJpg: beforeKitchenJpg.src, afterWebp: afterKitchenWebp.src, afterJpg: afterKitchenJpg.src, label: "Kitchen" },
  { beforeWebp: beforeBathroomWebp.src, beforeJpg: beforeBathroomJpg.src, afterWebp: afterBathroomWebp.src, afterJpg: afterBathroomJpg.src, label: "Bathroom" },
  { beforeWebp: beforeDiningWebp.src, beforeJpg: beforeDiningJpg.src, afterWebp: afterDiningWebp.src, afterJpg: afterDiningJpg.src, label: "Dining Room" },
  { beforeWebp: beforeLaundryWebp.src, beforeJpg: beforeLaundryJpg.src, afterWebp: afterLaundryWebp.src, afterJpg: afterLaundryJpg.src, label: "Laundry" },
  { beforeWebp: beforePlayroomWebp.src, beforeJpg: beforePlayroomJpg.src, afterWebp: afterPlayroomWebp.src, afterJpg: afterPlayroomJpg.src, label: "Playroom" },
];

const BeforeAfterSection = () => {
  const [current, setCurrent] = useState(0);
  const [showAfter, setShowAfter] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowAfter((prev) => {
        if (prev) {
          setCurrent((c) => (c + 1) % slides.length);
          return false;
        }
        return true;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const slide = slides[current];

  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">
            Our Results
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            See the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Real transformations from our professional cleaning services.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-elevated)] aspect-[4/3]">
            <picture>
              <source srcSet={slide.beforeWebp} type="image/webp" />
              <img
                src={slide.beforeJpg}
                alt={`${slide.label} before cleaning`}
                className="absolute inset-0 w-full h-full object-cover"
                loading="lazy"
                width={800}
                height={600}
              />
            </picture>

            <motion.div
              key={`${current}-after`}
              className="absolute inset-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: showAfter ? 1 : 0 }}
              transition={{ duration: 0.8 }}
            >
              <picture>
                <source srcSet={slide.afterWebp} type="image/webp" />
                <img
                  src={slide.afterJpg}
                  alt={`${slide.label} after cleaning`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width={800}
                  height={600}
                />
              </picture>
            </motion.div>

            <div className="absolute top-4 left-4 z-10">
              <span className="bg-card/90 backdrop-blur-sm text-foreground font-body font-bold text-sm px-4 py-2 rounded-full border border-border">
                {slide.label}
              </span>
            </div>

            <motion.div
              className="absolute bottom-4 right-4 z-10"
              key={`${current}-${showAfter}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <span
                className={`font-body font-black text-sm px-5 py-2.5 rounded-full ${
                  showAfter
                    ? "bg-secondary text-secondary-foreground"
                    : "bg-destructive text-destructive-foreground"
                }`}
              >
                {showAfter ? "✨ AFTER" : "BEFORE"}
              </span>
            </motion.div>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {slides.map((s, i) => (
              <button
                key={s.label}
                onClick={() => {
                  setCurrent(i);
                  setShowAfter(false);
                }}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current
                    ? "bg-primary w-8"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                aria-label={`Go to ${s.label}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSection;
