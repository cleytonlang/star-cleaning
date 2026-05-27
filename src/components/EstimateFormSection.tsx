import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send, CheckCircle, Home, Building2, Sparkles, Truck, Paintbrush,
  ChevronRight, ChevronLeft, Dog, Cat, AlertTriangle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import EstimateStepIndicator from "./estimate/EstimateStepIndicator";
import EstimateStepService from "./estimate/EstimateStepService";
import EstimateStepProperty from "./estimate/EstimateStepProperty";
import EstimateStepDetails from "./estimate/EstimateStepDetails";
import EstimateStepHealth from "./estimate/EstimateStepHealth";
import EstimateStepContact from "./estimate/EstimateStepContact";

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export interface EstimateFormData {
  service: string;
  propertySize: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  floors: string;
  frequency: string;
  hasPets: boolean;
  petType: string;
  hasAllergies: boolean;
  allergiesDetail: string;
  hasRestrictions: boolean;
  restrictionsDetail: string;
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

const initialForm: EstimateFormData = {
  service: "",
  propertySize: "",
  propertyType: "",
  bedrooms: "",
  bathrooms: "",
  floors: "",
  frequency: "",
  hasPets: false,
  petType: "",
  hasAllergies: false,
  allergiesDetail: "",
  hasRestrictions: false,
  restrictionsDetail: "",
  name: "",
  email: "",
  phone: "",
  city: "",
  message: "",
};

const TOTAL_STEPS = 5;

const EstimateFormSection = () => {
  const { toast } = useToast();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<EstimateFormData>(initialForm);

  const updateForm = (updates: Partial<EstimateFormData>) => {
    setForm((prev) => ({ ...prev, ...updates }));
  };

  const canProceed = () => {
    switch (step) {
      case 1: return !!form.service;
      case 2: return !!form.propertySize && !!form.propertyType;
      case 3: return !!form.bedrooms && !!form.bathrooms;
      case 4: return true;
      case 5: return !!form.name && !!form.email;
      default: return false;
    }
  };

  const handleNext = () => {
    if (step < TOTAL_STEPS) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const emailBody = {
        _subject: `New Estimate Request - ${form.service}`,
        "Service": form.service,
        "Property Size": form.propertySize,
        "Property Type": form.propertyType,
        "Bedrooms": form.bedrooms,
        "Bathrooms": form.bathrooms,
        "Floors": form.floors || "Not specified",
        "Frequency": form.frequency || "Not specified",
        "Has Pets": form.hasPets ? `Yes - ${form.petType}` : "No",
        "Has Allergies": form.hasAllergies ? `Yes - ${form.allergiesDetail}` : "No",
        "Product Restrictions": form.hasRestrictions ? `Yes - ${form.restrictionsDetail}` : "No",
        "Client Name": form.name,
        "Email": form.email,
        "Phone": form.phone || "Not provided",
        "City": form.city || "Not provided",
        "Additional Details": form.message || "None",
      };

      await fetch("https://formsubmit.co/ajax/cleanservices2025@hotmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(emailBody),
      });

      // Meta Pixel — Lead event
      if (typeof window !== "undefined" && window.fbq) {
        window.fbq("track", "Lead", {
          content_name: form.service,
          content_category: "cleaning_service",
        });
      }

      setSubmitted(true);
      toast({
        title: "Estimate request received!",
        description: "We'll get back to you within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  if (submitted) {
    return (
      <section id="estimate" className="py-20 bg-muted">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center py-16"
          >
            <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
            <h2 className="text-3xl font-heading font-black text-foreground mb-4">
              Thank You!
            </h2>
            <p className="text-lg text-muted-foreground font-body">
              We've received your request and will get back to you within 24 hours with your free estimate.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="estimate" className="py-20 bg-muted">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-body font-semibold text-secondary uppercase tracking-widest">
            Free Estimate
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-foreground mt-3 mb-4">
            Get Your <span className="text-gradient">Free Quote</span> Today
          </h2>
          <p className="text-muted-foreground font-body max-w-2xl mx-auto text-lg">
            Answer a few questions and we'll send you a detailed estimate — no obligation, no pressure.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">
          <EstimateStepIndicator currentStep={step} totalSteps={TOTAL_STEPS} />

          <div className="bg-card rounded-2xl p-8 sm:p-10 border border-border shadow-[var(--shadow-elevated)] min-h-[400px] flex flex-col">
            <AnimatePresence mode="wait">
              <motion.div
                key={step}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.25 }}
                className="flex-1"
              >
                {step === 1 && <EstimateStepService form={form} updateForm={updateForm} />}
                {step === 2 && <EstimateStepProperty form={form} updateForm={updateForm} />}
                {step === 3 && <EstimateStepDetails form={form} updateForm={updateForm} />}
                {step === 4 && <EstimateStepHealth form={form} updateForm={updateForm} />}
                {step === 5 && <EstimateStepContact form={form} updateForm={updateForm} />}
              </motion.div>
            </AnimatePresence>

            <div className="flex justify-between items-center mt-8 pt-6 border-t border-border">
              <button
                type="button"
                onClick={handleBack}
                disabled={step === 1}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-body font-semibold text-muted-foreground hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Back
              </button>

              {step < TOTAL_STEPS ? (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-body font-bold bg-primary text-primary-foreground hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  Next
                  <ChevronRight className="w-4 h-4" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!canProceed()}
                  className="inline-flex items-center gap-2 gradient-cta px-8 py-3 rounded-xl font-body font-bold text-foreground shadow-lg hover:scale-[1.02] disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                >
                  <Send className="w-5 h-5" />
                  Get My Free Estimate
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EstimateFormSection;
