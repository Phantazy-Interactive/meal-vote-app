import { Clock, Users, BookmarkPlus } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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
  onAddToCookbook?: () => void;
}

export const RecipeCard = ({ recipe, onClick, selected, compact, onAddToCookbook }: RecipeCardProps) => {
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
          className="w-full h-full object-cover transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {onAddToCookbook && !compact && (
          <Button
            size="icon"
            variant="secondary"
            className="absolute top-3 right-3 h-9 w-9 rounded-full shadow-medium bg-primary/90 text-primary-foreground backdrop-blur-sm hover:bg-primary hover:scale-110 transition-all"
            onClick={(e) => {
              e.stopPropagation();
              onAddToCookbook();
            }}
          >
            <BookmarkPlus className="h-4 w-4" />
          </Button>
        )}
      </div>

      <div className={`p-5 ${compact ? "flex-1" : ""}`}>
        <h3 className={`font-bold text-foreground mb-2 ${compact ? "text-sm" : "text-lg"} line-clamp-2 group-hover:text-primary transition-colors`}>
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
          {recipe.difficulty && (
            <Badge className={`text-xs rounded-full px-2 py-0.5 ${difficultyColors[recipe.difficulty]}`}>
              {recipe.difficulty}
            </Badge>
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

        {!compact && recipe.tags && recipe.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2">
            {recipe.tags.slice(0, 4).map((tag) => (
              <span 
                key={tag} 
                className="text-xs text-muted-foreground/70 bg-muted/50 px-2 py-0.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};
