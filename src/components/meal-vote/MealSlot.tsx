import { Calendar, Clock, Users, CheckCircle2, Vote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Recipe } from "./RecipeCard";

interface MealSlotProps {
  date: Date;
  slotType: "breakfast" | "lunch" | "dinner";
  status: "planning" | "voting" | "locked" | "cooked";
  finalRecipe?: Recipe;
  voteCount?: number;
  onOpenVoting?: () => void;
  onViewRecipe?: () => void;
  onMarkCooked?: () => void;
}

export const MealSlot = ({
  date,
  slotType,
  status,
  finalRecipe,
  voteCount,
  onOpenVoting,
  onViewRecipe,
  onMarkCooked
}: MealSlotProps) => {
  const statusConfig = {
    planning: { color: "bg-muted text-muted-foreground", icon: Calendar, label: "Planning" },
    voting: { color: "bg-info/10 text-info", icon: Vote, label: "Voting Open" },
    locked: { color: "bg-primary/10 text-primary", icon: CheckCircle2, label: "Decided" },
    cooked: { color: "bg-success/10 text-success", icon: CheckCircle2, label: "Cooked" }
  };

  const config = statusConfig[status];
  const StatusIcon = config.icon;

  const dateStr = date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });

  return (
    <Card className="p-4 hover:shadow-medium transition-smooth">
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-sm text-muted-foreground">{dateStr}</p>
          <h3 className="font-semibold text-foreground capitalize">{slotType}</h3>
        </div>
        <Badge className={config.color}>
          <StatusIcon className="w-3 h-3 mr-1" />
          {config.label}
        </Badge>
      </div>

      {finalRecipe ? (
        <div className="space-y-3">
          <div className="flex items-start gap-3">
            {finalRecipe.imageUrl && (
              <img
                src={finalRecipe.imageUrl}
                alt={finalRecipe.title}
                className="w-20 h-20 object-cover rounded-md"
              />
            )}
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-foreground line-clamp-2">{finalRecipe.title}</h4>
              <div className="flex items-center gap-3 mt-1 text-xs text-muted-foreground">
                {finalRecipe.timeTotal && (
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {finalRecipe.timeTotal}m
                  </span>
                )}
                {finalRecipe.servings && (
                  <span className="flex items-center gap-1">
                    <Users className="w-3 h-3" />
                    {finalRecipe.servings}
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="flex-1" onClick={onViewRecipe}>
              View Recipe
            </Button>
            {status === "locked" && (
              <Button variant="default" size="sm" className="flex-1" onClick={onMarkCooked}>
                Mark Cooked
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="space-y-3">
          <div className="h-20 bg-muted rounded-md flex items-center justify-center">
            <p className="text-sm text-muted-foreground">No meal planned</p>
          </div>

          {status === "planning" && (
            <Button variant="outline" size="sm" className="w-full" onClick={onOpenVoting}>
              <Vote className="w-4 h-4 mr-2" />
              Start Voting
            </Button>
          )}

          {status === "voting" && voteCount !== undefined && (
            <div className="text-center">
              <p className="text-sm text-muted-foreground">
                {voteCount} vote{voteCount !== 1 ? "s" : ""} cast
              </p>
              <Button variant="link" size="sm" onClick={onOpenVoting}>
                View & Vote
              </Button>
            </div>
          )}
        </div>
      )}
    </Card>
  );
};
