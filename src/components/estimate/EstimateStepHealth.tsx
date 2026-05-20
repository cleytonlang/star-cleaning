import { Dog, Cat, AlertTriangle, ShieldAlert } from "lucide-react";
import type { EstimateFormData } from "../EstimateFormSection";

interface Props {
  form: EstimateFormData;
  updateForm: (u: Partial<EstimateFormData>) => void;
}

const petTypes = ["Dog", "Cat", "Both", "Other", "None"];

const EstimateStepHealth = ({ form, updateForm }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        Health & Safety Information
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        This helps us choose the right products and take extra care for your well-being.
      </p>

      <div className="space-y-6">
        {/* Pets */}
        <div>
          <label className="block text-sm font-body font-semibold text-foreground mb-3">
            Do you have pets?
          </label>
          <div className="flex gap-3 mb-3">
            <button
              type="button"
              onClick={() => updateForm({ hasPets: true })}
              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border-2 transition-all ${
                form.hasPets ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-foreground hover:border-primary/30"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => updateForm({ hasPets: false, petType: "" })}
              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border-2 transition-all ${
                !form.hasPets ? "border-primary bg-primary/5 text-primary" : "border-border bg-background text-foreground hover:border-primary/30"
              }`}
            >
              No
            </button>
          </div>
          {form.hasPets && (
            <div className="flex flex-wrap gap-2">
              {petTypes.map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => updateForm({ petType: p })}
                  className={`px-4 py-2 rounded-lg font-body text-sm font-medium border-2 transition-all ${
                    form.petType === p
                      ? "border-primary bg-primary/5 text-primary"
                      : "border-border bg-background text-foreground hover:border-primary/30"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Allergies */}
        <div className="p-4 rounded-xl bg-accent/10 border border-accent/30">
          <div className="flex items-center gap-2 mb-3">
            <AlertTriangle className="w-5 h-5 text-accent" />
            <label className="text-sm font-body font-semibold text-foreground">
              Does anyone in the household have allergies?
            </label>
          </div>
          <div className="flex gap-3 mb-3">
            <button
              type="button"
              onClick={() => updateForm({ hasAllergies: true })}
              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border-2 transition-all ${
                form.hasAllergies ? "border-accent bg-accent/10 text-accent-foreground" : "border-border bg-background text-foreground hover:border-accent/30"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => updateForm({ hasAllergies: false, allergiesDetail: "" })}
              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border-2 transition-all ${
                !form.hasAllergies ? "border-accent bg-accent/10 text-accent-foreground" : "border-border bg-background text-foreground hover:border-accent/30"
              }`}
            >
              No
            </button>
          </div>
          {form.hasAllergies && (
            <textarea
              value={form.allergiesDetail}
              onChange={(e) => updateForm({ allergiesDetail: e.target.value })}
              placeholder="Please describe any allergies (e.g., dust, specific chemicals, fragrances...)"
              rows={2}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/30 focus:border-accent transition-colors resize-none"
            />
          )}
        </div>

        {/* Restrictions */}
        <div className="p-4 rounded-xl bg-destructive/5 border border-destructive/20">
          <div className="flex items-center gap-2 mb-3">
            <ShieldAlert className="w-5 h-5 text-destructive" />
            <label className="text-sm font-body font-semibold text-foreground">
              Any product restrictions or special instructions?
            </label>
          </div>
          <div className="flex gap-3 mb-3">
            <button
              type="button"
              onClick={() => updateForm({ hasRestrictions: true })}
              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border-2 transition-all ${
                form.hasRestrictions ? "border-destructive/60 bg-destructive/5 text-foreground" : "border-border bg-background text-foreground hover:border-destructive/20"
              }`}
            >
              Yes
            </button>
            <button
              type="button"
              onClick={() => updateForm({ hasRestrictions: false, restrictionsDetail: "" })}
              className={`px-5 py-2.5 rounded-xl font-body text-sm font-medium border-2 transition-all ${
                !form.hasRestrictions ? "border-destructive/60 bg-destructive/5 text-foreground" : "border-border bg-background text-foreground hover:border-destructive/20"
              }`}
            >
              No
            </button>
          </div>
          {form.hasRestrictions && (
            <textarea
              value={form.restrictionsDetail}
              onChange={(e) => updateForm({ restrictionsDetail: e.target.value })}
              placeholder="E.g., no bleach, eco-friendly products only, avoid certain rooms..."
              rows={2}
              className="w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-destructive/20 focus:border-destructive/40 transition-colors resize-none"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default EstimateStepHealth;
