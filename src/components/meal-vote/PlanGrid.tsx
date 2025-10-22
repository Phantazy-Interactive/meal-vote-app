import { MealSlot } from "./MealSlot";
import { Recipe } from "./RecipeCard";

interface MealSlotData {
  id: string;
  date: Date;
  slotType: "breakfast" | "lunch" | "dinner";
  status: "planning" | "voting" | "locked" | "cooked";
  finalRecipe?: Recipe;
  voteCount?: number;
}

interface PlanGridProps {
  slots: MealSlotData[];
  onOpenVoting?: (slotId: string) => void;
  onViewRecipe?: (slotId: string) => void;
  onMarkCooked?: (slotId: string) => void;
}

export const PlanGrid = ({ slots, onOpenVoting, onViewRecipe, onMarkCooked }: PlanGridProps) => {
  // Group slots by date
  const slotsByDate = slots.reduce((acc, slot) => {
    const dateKey = slot.date.toDateString();
    if (!acc[dateKey]) {
      acc[dateKey] = [];
    }
    acc[dateKey].push(slot);
    return acc;
  }, {} as Record<string, MealSlotData[]>);

  const dates = Object.keys(slotsByDate).sort((a, b) => 
    new Date(a).getTime() - new Date(b).getTime()
  );

  return (
    <div className="space-y-6">
      {dates.map((dateKey) => {
        const dateSlots = slotsByDate[dateKey];
        const date = new Date(dateKey);
        
        return (
          <div key={dateKey} className="space-y-3">
            <h3 className="text-lg font-semibold text-foreground">
              {date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dateSlots.map((slot) => (
                <MealSlot
                  key={slot.id}
                  date={slot.date}
                  slotType={slot.slotType}
                  status={slot.status}
                  finalRecipe={slot.finalRecipe}
                  voteCount={slot.voteCount}
                  onOpenVoting={() => onOpenVoting?.(slot.id)}
                  onViewRecipe={() => onViewRecipe?.(slot.id)}
                  onMarkCooked={() => onMarkCooked?.(slot.id)}
                />
              ))}
            </div>
          </div>
        );
      })}

      {dates.length === 0 && (
        <div className="text-center py-12 text-muted-foreground">
          <p className="text-lg">No meals planned yet</p>
          <p className="text-sm mt-2">Start by planning your week!</p>
        </div>
      )}
    </div>
  );
};
