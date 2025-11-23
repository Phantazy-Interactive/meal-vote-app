import { useState } from "react";
import { ChevronLeft, ChevronRight, Timer, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface CookStep {
  id: string;
  instruction: string;
  duration?: number;
}

export interface CookModeLabels {
  exitButton?: string;
  totalTimeLabel?: string;
  minutesLabel?: string;
  stepLabel?: string;
  ofLabel?: string;
  recommendedTimeLabel?: string;
  startTimerButton?: string;
  timerActiveLabel?: string;
  previousButton?: string;
  nextButton?: string;
  completeButton?: string;
}

interface CookModeProps {
  recipeName: string;
  steps: CookStep[];
  totalTime?: number;
  onComplete?: () => void;
  onExit?: () => void;
  labels?: CookModeLabels;
}

const defaultLabels: CookModeLabels = {
  exitButton: "Exit Cook Mode",
  totalTimeLabel: "Total time",
  minutesLabel: "minutes",
  stepLabel: "Step",
  ofLabel: "of",
  recommendedTimeLabel: "Recommended time",
  startTimerButton: "Start Timer",
  timerActiveLabel: "Timer Active",
  previousButton: "Previous",
  nextButton: "Next",
  completeButton: "Complete",
};

export const CookMode = ({ recipeName, steps, totalTime, onComplete, onExit, labels = {} }: CookModeProps) => {
  const text = { ...defaultLabels, ...labels };
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<Set<number>>(new Set());
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  const progress = ((currentStep + 1) / steps.length) * 100;
  const isLastStep = currentStep === steps.length - 1;
  const step = steps[currentStep];

  const handleNext = () => {
    setCompletedSteps(new Set(completedSteps).add(currentStep));
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      setTimerActive(false);
      setTimeLeft(null);
    } else {
      onComplete?.();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      setTimerActive(false);
      setTimeLeft(null);
    }
  };

  const startTimer = () => {
    if (step.duration) {
      setTimeLeft(step.duration * 60);
      setTimerActive(true);
      // In a real app, this would use setInterval
    }
  };

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl md:text-3xl font-bold text-foreground break-words">{recipeName}</h1>
            {totalTime && <p className="text-sm md:text-base text-muted-foreground">{text.totalTimeLabel}: {totalTime} {text.minutesLabel}</p>}
          </div>
          {onExit && (
            <Button variant="ghost" onClick={onExit} className="shrink-0 text-sm md:text-base">
              {text.exitButton}
            </Button>
          )}
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs md:text-sm">
            <span className="text-muted-foreground">
              {text.stepLabel} {currentStep + 1} {text.ofLabel} {steps.length}
            </span>
            <span className="font-medium text-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Current Step */}
        <Card className="p-4 sm:p-6 md:p-12 min-h-[300px] md:min-h-[400px] flex flex-col justify-between">
          <div className="space-y-4 md:space-y-6">
            <Badge variant="outline" className="text-sm md:text-lg px-3 py-1 md:px-4 md:py-2">
              {text.stepLabel} {currentStep + 1}
            </Badge>

            <p className="text-lg sm:text-xl md:text-4xl leading-relaxed text-foreground font-medium">
              {step.instruction}
            </p>

            {step.duration && (
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 pt-4">
                <Timer className="w-5 h-5 md:w-6 md:h-6 text-primary shrink-0" />
                <div className="flex-1">
                  <p className="text-xs md:text-sm text-muted-foreground">{text.recommendedTimeLabel}</p>
                  <p className="text-lg md:text-xl font-semibold text-foreground">{step.duration} {text.minutesLabel}</p>
                </div>
                {!timerActive ? (
                  <Button variant="outline" onClick={startTimer} size="sm" className="text-sm shrink-0">
                    {text.startTimerButton}
                  </Button>
                ) : (
                  <Badge className="bg-primary animate-pulse-soft text-xs md:text-sm shrink-0">
                    {text.timerActiveLabel}
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between gap-2 sm:gap-4 pt-6 md:pt-8 border-t mt-6 md:mt-8">
            <Button
              variant="outline"
              size="default"
              onClick={handlePrevious}
              disabled={currentStep === 0}
              className="text-sm md:text-base"
            >
              <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
              <span className="hidden sm:inline">{text.previousButton}</span>
            </Button>

            <Button
              size="default"
              onClick={handleNext}
              className={`text-sm md:text-base ${isLastStep ? "bg-success" : "bg-gradient-primary"}`}
            >
              {isLastStep ? (
                <>
                  <CheckCircle2 className="w-4 h-4 md:w-5 md:h-5 mr-1 md:mr-2" />
                  {text.completeButton}
                </>
              ) : (
                <>
                  {text.nextButton}
                  <ChevronRight className="w-4 h-4 md:w-5 md:h-5 ml-1 md:ml-2" />
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Step Overview */}
        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {steps.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentStep(index)}
              className={`h-2 rounded-full transition-smooth ${
                index === currentStep
                  ? "bg-primary"
                  : completedSteps.has(index)
                  ? "bg-success"
                  : "bg-muted"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
