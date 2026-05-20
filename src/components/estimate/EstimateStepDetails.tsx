import type { EstimateFormData } from "../EstimateFormSection";

interface Props {
  form: EstimateFormData;
  updateForm: (u: Partial<EstimateFormData>) => void;
}

const bedroomOptions = ["Studio", "1", "2", "3", "4", "5+"];
const bathroomOptions = ["1", "2", "3", "4", "5+"];
const floorOptions = ["1", "2", "3+"];
const frequencyOptions = ["One-time", "Weekly", "Bi-weekly", "Monthly"];

const Chips = ({ options, value, onChange }: { options: string[]; value: string; onChange: (v: string) => void }) => (
  <div className="flex flex-wrap gap-2">
    {options.map((o) => (
      <button
        key={o}
        type="button"
        onClick={() => onChange(o)}
        className={`px-4 py-2 rounded-lg font-body text-sm font-medium border-2 transition-all ${
          value === o
            ? "border-primary bg-primary/5 text-primary"
            : "border-border bg-background text-foreground hover:border-primary/30"
        }`}
      >
        {o}
      </button>
    ))}
  </div>
);

const EstimateStepDetails = ({ form, updateForm }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        Property details
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        Help us understand the scope of work.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm font-body font-semibold text-foreground mb-2">Bedrooms *</label>
          <Chips options={bedroomOptions} value={form.bedrooms} onChange={(v) => updateForm({ bedrooms: v })} />
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-foreground mb-2">Bathrooms *</label>
          <Chips options={bathroomOptions} value={form.bathrooms} onChange={(v) => updateForm({ bathrooms: v })} />
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-foreground mb-2">Floors</label>
          <Chips options={floorOptions} value={form.floors} onChange={(v) => updateForm({ floors: v })} />
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-foreground mb-2">Frequency</label>
          <Chips options={frequencyOptions} value={form.frequency} onChange={(v) => updateForm({ frequency: v })} />
        </div>
      </div>
    </div>
  );
};

export default EstimateStepDetails;
