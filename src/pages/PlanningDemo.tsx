import { useState } from "react";
import { PlanGrid } from "@/components/meal-vote/PlanGrid";
import { ImportBanner } from "@/components/meal-vote/ImportBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const getNextWeek = () => {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  return dates;
};

const sampleRecipes = [
  {
    id: "1",
    title: "Spicy Thai Basil Chicken",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
    timeTotal: 30,
    servings: 4,
    cuisines: ["Thai"],
    difficulty: "medium" as const
  },
  {
    id: "2",
    title: "Grilled Salmon with Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    timeTotal: 35,
    servings: 4,
    cuisines: ["Mediterranean"],
    difficulty: "medium" as const
  }
];

const PlanningDemo = () => {
  const { toast } = useToast();
  const [weekDates] = useState(getNextWeek());
  
  type SlotData = {
    id: string;
    date: Date;
    slotType: "dinner";
    status: "planning" | "voting" | "locked" | "cooked";
    finalRecipe?: typeof sampleRecipes[0];
    voteCount?: number;
  };

  const [slots, setSlots] = useState<SlotData[]>(
    weekDates.map((date, index) => ({
      id: `slot-${index}`,
      date,
      slotType: "dinner" as const,
      status: (index === 0 ? "voting" : index === 1 ? "locked" : "planning") as SlotData["status"],
      finalRecipe: index === 1 ? sampleRecipes[1] : undefined,
      voteCount: index === 0 ? 3 : undefined
    }))
  );

  const handleOpenVoting = (slotId: string) => {
    toast({
      title: "Opening voting session",
      description: "Household members can now vote on this meal",
    });
    
    setSlots(slots.map(slot => 
      slot.id === slotId ? { ...slot, status: "voting" as const, voteCount: 0 } : slot
    ));
  };

  const handleViewRecipe = (slotId: string) => {
    toast({
      title: "Recipe details",
      description: "Opening full recipe view",
    });
  };

  const handleMarkCooked = (slotId: string) => {
    toast({
      title: "Meal completed!",
      description: "Great job cooking tonight",
    });
    
    setSlots(slots.map(slot => 
      slot.id === slotId ? { ...slot, status: "cooked" as const } : slot
    ));
  };

  const handleImport = async (url: string) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    toast({
      title: "Recipe imported!",
      description: "New recipe added to your collection",
    });
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-2">Weekly Meal Plan</h1>
              <p className="text-lg text-muted-foreground">
                Plan, vote, and track your household's meals
              </p>
            </div>
            <Button size="lg" className="bg-gradient-primary">
              <Plus className="w-5 h-5 mr-2" />
              Add Meal Slot
            </Button>
          </div>

          <ImportBanner
            onImport={handleImport}
            quota={{ used: 7, total: 10 }}
          />

          <Card className="p-6 bg-muted/30">
            <div className="flex items-start gap-4">
              <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-2">How Planning Works</h3>
                <p className="text-sm text-muted-foreground">
                  Each meal slot goes through states: <strong>Planning</strong> → <strong>Voting</strong> → <strong>Locked</strong> → <strong>Cooked</strong>.
                  Click on a slot to manage it, start voting sessions, or mark meals as complete.
                </p>
              </div>
            </div>
          </Card>

          <PlanGrid
            slots={slots}
            onOpenVoting={handleOpenVoting}
            onViewRecipe={handleViewRecipe}
            onMarkCooked={handleMarkCooked}
          />
        </div>
      </div>
    </div>
  );
};

export default PlanningDemo;
