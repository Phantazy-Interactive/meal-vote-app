import { Clock, Users, ChefHat } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export interface Recipe {
  id: string;
  title: string;
  imageUrl: string;
  timeTotal: number;
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
      className={`overflow-hidden cursor-pointer group ${
        selected ? "ring-4 ring-primary shadow-colored-primary scale-[1.02]" : ""
      } ${compact ? "flex flex-row" : ""}`}
      onClick={onClick}
    >
      <div className={`relative ${compact ? "w-24 h-24 rounded-l-2xl" : "w-full h-48"} overflow-hidden bg-muted`}>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {recipe.difficulty && !compact && (
          <Badge className={`absolute top-3 right-3 rounded-full shadow-medium animate-bounce-in ${difficultyColors[recipe.difficulty]}`}>
            {recipe.difficulty}
          </Badge>
        )}
      </div>

      <div className={`p-5 ${compact ? "flex-1" : ""}`}>
        <h3 className={`font-bold text-foreground mb-2 ${compact ? "text-sm" : "text-lg"} line-clamp-2 group-hover:text-primary transition-colors`}>
          {recipe.title}
        </h3>

        <div className={`flex items-center gap-4 text-muted-foreground ${compact ? "text-xs" : "text-sm"}`}>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{recipe.timeTotal} min</span>
          </div>
          {recipe.servings && (
            <div className="flex items-center gap-1">
              <Users className="w-4 h-4" />
              <span>{recipe.servings}</span>
            </div>
          )}
        </div>

        {!compact && recipe.cuisines && recipe.cuisines.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {recipe.cuisines.slice(0, 3).map((cuisine) => (
              <Badge key={cuisine} variant="secondary" className="text-xs rounded-full px-3 py-1 transition-transform">
                {cuisine}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
