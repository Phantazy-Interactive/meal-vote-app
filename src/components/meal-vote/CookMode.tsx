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

interface CookModeProps {
  recipeName: string;
  steps: CookStep[];
  totalTime: number;
  onComplete?: () => void;
  onExit?: () => void;
}

export const CookMode = ({ recipeName, steps, totalTime, onComplete, onExit }: CookModeProps) => {
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
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl md:text-3xl font-bold text-foreground">{recipeName}</h1>
            <p className="text-muted-foreground">Total time: {totalTime} minutes</p>
          </div>
          <Button variant="ghost" onClick={onExit}>
            Exit Cook Mode
          </Button>
        </div>

        {/* Progress */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm">
            <span className="text-muted-foreground">
              Step {currentStep + 1} of {steps.length}
            </span>
            <span className="font-medium text-foreground">{Math.round(progress)}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {/* Current Step */}
        <Card className="p-8 md:p-12 min-h-[400px] flex flex-col justify-between">
          <div className="space-y-6">
            <Badge variant="outline" className="text-lg px-4 py-2">
              Step {currentStep + 1}
            </Badge>

            <p className="text-2xl md:text-4xl leading-relaxed text-foreground font-medium">
              {step.instruction}
            </p>

            {step.duration && (
              <div className="flex items-center gap-4 pt-4">
                <Timer className="w-6 h-6 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Recommended time</p>
                  <p className="text-xl font-semibold text-foreground">{step.duration} minutes</p>
                </div>
                {!timerActive ? (
                  <Button variant="outline" onClick={startTimer}>
                    Start Timer
                  </Button>
                ) : (
                  <Badge className="bg-primary animate-pulse-soft">
                    Timer Active
                  </Badge>
                )}
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between pt-8 border-t mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={handlePrevious}
              disabled={currentStep === 0}
            >
              <ChevronLeft className="w-5 h-5 mr-2" />
              Previous
            </Button>

            <Button
              size="lg"
              onClick={handleNext}
              className={isLastStep ? "bg-success" : "bg-gradient-primary"}
            >
              {isLastStep ? (
                <>
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Complete
                </>
              ) : (
                <>
                  Next
                  <ChevronRight className="w-5 h-5 ml-2" />
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
