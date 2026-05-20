import { Home, Building2, Sparkles, Truck, Paintbrush } from "lucide-react";
import type { EstimateFormData } from "../EstimateFormSection";

interface Props {
  form: EstimateFormData;
  updateForm: (u: Partial<EstimateFormData>) => void;
}

const services = [
  { label: "Standard Cleaning", icon: Home, desc: "Regular maintenance cleaning" },
  { label: "Deep Cleaning", icon: Sparkles, desc: "Thorough top-to-bottom clean" },
  { label: "Move In/Out Cleaning", icon: Truck, desc: "Empty property deep clean" },
  { label: "Post-Construction", icon: Paintbrush, desc: "Construction debris removal" },
  { label: "Commercial Cleaning", icon: Building2, desc: "Office & retail spaces" },
];

const EstimateStepService = ({ form, updateForm }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        What type of cleaning do you need?
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Select the service that best fits your needs.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {services.map((s) => {
          const Icon = s.icon;
          const selected = form.service === s.label;
          return (
            <button
              key={s.label}
              type="button"
              onClick={() => updateForm({ service: s.label })}
              className={`flex items-start gap-3 p-4 rounded-xl border-2 text-left transition-all ${
                selected
                  ? "border-primary bg-primary/5 shadow-sm"
                  : "border-border hover:border-primary/30 bg-background"
              }`}
            >
              <Icon className={`w-5 h-5 mt-0.5 shrink-0 ${selected ? "text-primary" : "text-muted-foreground"}`} />
              <div>
                <span className={`block text-sm font-body font-semibold ${selected ? "text-primary" : "text-foreground"}`}>
                  {s.label}
                </span>
                <span className="block text-xs text-muted-foreground font-body mt-0.5">{s.desc}</span>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default EstimateStepService;
