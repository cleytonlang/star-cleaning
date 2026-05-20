import type { EstimateFormData } from "../EstimateFormSection";

interface Props {
  form: EstimateFormData;
  updateForm: (u: Partial<EstimateFormData>) => void;
}

const inputClass =
  "w-full px-4 py-3 rounded-xl border border-border bg-background font-body text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors";

const EstimateStepContact = ({ form, updateForm }: Props) => {
  return (
    <div>
      <h3 className="text-xl font-heading font-bold text-foreground mb-2">
        How can we reach you?
      </h3>
      <p className="text-sm text-muted-foreground font-body mb-6">
        We'll send your free estimate to the email below.
      </p>

      <div className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Full Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => updateForm({ name: e.target.value })}
              placeholder="Your name"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Email *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => updateForm({ email: e.target.value })}
              placeholder="you@email.com"
              className={inputClass}
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Phone</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => updateForm({ phone: e.target.value })}
              placeholder="(647) 000-0000"
              className={inputClass}
            />
          </div>
          <div>
            <label className="block text-sm font-body font-semibold text-foreground mb-1.5">City</label>
            <input
              type="text"
              value={form.city}
              onChange={(e) => updateForm({ city: e.target.value })}
              placeholder="Toronto"
              className={inputClass}
            />
          </div>
        </div>
        <div>
          <label className="block text-sm font-body font-semibold text-foreground mb-1.5">Additional Details</label>
          <textarea
            value={form.message}
            onChange={(e) => updateForm({ message: e.target.value })}
            placeholder="Any additional context about your space or requests..."
            rows={3}
            className={`${inputClass} resize-none`}
          />
        </div>
      </div>

      <p className="text-center text-xs text-muted-foreground font-body mt-4">
        No spam, no obligation. We'll respond within 24 hours.
      </p>
    </div>
  );
};

export default EstimateStepContact;
