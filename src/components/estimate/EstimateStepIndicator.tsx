import { Check } from "lucide-react";

interface Props {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Service", "Property", "Details", "Health", "Contact"];

const EstimateStepIndicator = ({ currentStep, totalSteps }: Props) => {
  return (
    <div className="flex items-center justify-between mb-8 px-4">
      {stepLabels.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isDone = stepNum < currentStep;
        return (
          <div key={label} className="flex flex-col items-center gap-1.5 flex-1">
            <div className="flex items-center w-full">
              {i > 0 && (
                <div className={`flex-1 h-0.5 transition-colors ${isDone ? "bg-secondary" : "bg-border"}`} />
              )}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-body font-bold shrink-0 transition-all ${
                  isDone
                    ? "bg-secondary text-secondary-foreground"
                    : isActive
                    ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                    : "bg-muted text-muted-foreground border border-border"
                }`}
              >
                {isDone ? <Check className="w-4 h-4" /> : stepNum}
              </div>
              {i < totalSteps - 1 && (
                <div className={`flex-1 h-0.5 transition-colors ${isDone ? "bg-secondary" : "bg-border"}`} />
              )}
            </div>
            <span className={`text-[10px] sm:text-xs font-body font-medium ${isActive ? "text-primary" : "text-muted-foreground"}`}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default EstimateStepIndicator;
