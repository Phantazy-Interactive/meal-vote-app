import { Clock, Users, ChefHat } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Recipe {
  id: string;
  title: string;
  imageUrl?: string;
  timeTotal?: number;
  servings?: number;
  tags?: string[];
  cuisines?: string[];
  difficulty?: "easy" | "medium" | "hard";
}

interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
  selected?: boolean;
  compact?: boolean;
}

export const RecipeCard = ({ recipe, onClick, selected, compact }: RecipeCardProps) => {
  const difficultyColors = {
    easy: "bg-success/10 text-success",
    medium: "bg-warning/10 text-warning",
    hard: "bg-destructive/10 text-destructive"
  };

  return (
    <Card
      className={`overflow-hidden transition-smooth cursor-pointer hover:shadow-medium ${
        selected ? "ring-2 ring-primary shadow-medium" : ""
      } ${compact ? "flex flex-row" : ""}`}
      onClick={onClick}
    >
      {recipe.imageUrl && (
        <div className={`relative ${compact ? "w-24 h-24" : "w-full h-48"} overflow-hidden bg-muted`}>
          <img
            src={recipe.imageUrl}
            alt={recipe.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          {recipe.difficulty && !compact && (
            <Badge className={`absolute top-2 right-2 ${difficultyColors[recipe.difficulty]}`}>
              {recipe.difficulty}
            </Badge>
          )}
        </div>
      )}

      <div className={`p-4 ${compact ? "flex-1" : ""}`}>
        <h3 className={`font-semibold text-foreground mb-2 ${compact ? "text-sm" : "text-lg"} line-clamp-2`}>
          {recipe.title}
        </h3>

        <div className={`flex items-center gap-4 text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
          {recipe.timeTotal && (
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{recipe.timeTotal} min</span>
            </div>
          )}
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          )}
        </div>

        {!compact && recipe.cuisines && recipe.cuisines.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {recipe.cuisines.slice(0, 3).map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="text-xs">
                {cuisine}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
