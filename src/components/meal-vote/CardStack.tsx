import { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CardStackProps<T> {
  items: T[];
  renderCard: (item: T, index: number) => React.ReactNode;
  onIndexChange?: (index: number) => void;
  className?: string;
}

export function CardStack<T>({ 
  items, 
  renderCard, 
  onIndexChange,
  className 
}: CardStackProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const x = useMotionValue(0);
  const rotate = useTransform(x, [-200, 200], [-15, 15]);
  const opacity = useTransform(x, [-200, -100, 0, 100, 200], [0.5, 1, 1, 1, 0.5]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goToPrevious();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, items.length]);

  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const threshold = 100;
    
    if (info.offset.x > threshold && currentIndex > 0) {
      // Swiped right - go to previous
      goToPrevious();
    } else if (info.offset.x < -threshold && currentIndex < items.length - 1) {
      // Swiped left - go to next
      goToNext();
    }
  };

  const goToNext = () => {
    if (currentIndex < items.length - 1) {
      const newIndex = currentIndex + 1;
      setCurrentIndex(newIndex);
      onIndexChange?.(newIndex);
      x.set(0);
    }
  };

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      setCurrentIndex(newIndex);
      onIndexChange?.(newIndex);
      x.set(0);
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-muted-foreground">
        <p className="text-lg">No items to display</p>
      </div>
    );
  }

  return (
    <div 
      className={cn("relative", className)}
      role="region"
      aria-label="Card stack navigation"
      tabIndex={0}
      aria-live="polite"
      aria-atomic="true"
    >
      <div className="relative h-full min-h-[400px] flex items-center justify-center">
        <motion.div
          className="absolute w-full max-w-2xl"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.7}
          onDragEnd={handleDragEnd}
          style={{ x, rotate, opacity }}
          animate={{ scale: 1 }}
          initial={{ scale: 0.95, opacity: 0 }}
          exit={{ scale: 0.95, opacity: 0 }}
          transition={{ duration: 0.3 }}
          aria-label={`Card ${currentIndex + 1} of ${items.length}`}
        >
          {renderCard(items[currentIndex], currentIndex)}
        </motion.div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          onClick={goToPrevious}
          disabled={currentIndex === 0}
          aria-label="Previous card"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
          onClick={goToNext}
          disabled={currentIndex === items.length - 1}
          aria-label="Next card"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-6">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentIndex(index);
              onIndexChange?.(index);
              x.set(0);
            }}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
            aria-label={`Go to item ${index + 1}`}
            aria-current={index === currentIndex ? "true" : "false"}
          />
        ))}
      </div>

      {/* Keyboard hint */}
      <p className="text-center text-xs text-muted-foreground mt-2">
        Use arrow keys ← → or swipe to navigate
      </p>
    </div>
  );
}
