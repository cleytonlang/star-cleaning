import type { EstimateFormData } from "../EstimateFormSection";

interface Props {
  form: EstimateFormData;
  updateForm: (u: Partial<EstimateFormData>) => void;
}

const sizes = [
  "Under 1,000 sq ft",
  "1,000 – 2,000 sq ft",
  "2,000 – 3,000 sq ft",
  "3,000+ sq ft",
];

const types = ["Residential", "Office", "Retail", "Warehouse", "Other"];

const OptionButton = ({ label, selected, onClick }: { label: string; selected: boolean; onClick: () => void }) => (
  <button
    type="button"
    onClick={onClick}
    className={`px-4 py-3 rounded-xl border-2 font-body text-sm font-medium transition-all ${
      selected
        ? "border-primary bg-primary/5 text-primary"
        : "border-border bg-background text-foreground hover:border-primary/30"
    }`}
  >
    {label}
  </button>
);

const EstimateStepProperty = ({ form, updateForm }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        Tell us about your property
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        This helps us provide an accurate estimate.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-body font-semibold text-foreground mb-3">
          Approximately how big is the property? *
        </label>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map((s) => (
            <OptionButton key={s} label={s} selected={form.propertySize === s} onClick={() => updateForm({ propertySize: s })} />
          ))}
        </div>
      </div>

      <div>
        <label className="block text-sm font-body font-semibold text-foreground mb-3">
          Property type *
        </label>
        <div className="flex flex-wrap gap-2">
          {types.map((t) => (
            <OptionButton key={t} label={t} selected={form.propertyType === t} onClick={() => updateForm({ propertyType: t })} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EstimateStepProperty;
