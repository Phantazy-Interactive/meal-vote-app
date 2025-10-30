import { useState } from "react";
import { Check, ThumbsUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RecipeCard, Recipe } from "./RecipeCard";

interface Candidate {
  id: string;
  recipe?: Recipe;
  suggestion?: {
    text: string;
    imageUrl?: string;
  };
}

interface VoteCardProps {
  candidates: Candidate[];
  onVote: (candidateIds: string[]) => void;
  maxSelections?: number;
  title?: string;
  description?: string;
}

export const VoteCard = ({
  candidates,
  onVote,
  maxSelections = 999,
  title = "Vote for tonight's dinner",
  description = "Select all options you'd be happy with"
}: VoteCardProps) => {
  const [selected, setSelected] = useState<Set<string>>(new Set());

  const toggleSelection = (candidateId: string) => {
    const newSelected = new Set(selected);
    if (newSelected.has(candidateId)) {
      newSelected.delete(candidateId);
    } else {
      if (newSelected.size < maxSelections) {
        newSelected.add(candidateId);
      }
    }
    setSelected(newSelected);
  };

  const handleSubmit = () => {
    onVote(Array.from(selected));
  };

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
        {maxSelections < 999 && (
          <p className="text-sm text-muted-foreground mt-1">
            Select up to {maxSelections} option{maxSelections !== 1 ? "s" : ""}
          </p>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((candidate) => {
          // Skip candidates with no recipe and no suggestion text
          if (!candidate.recipe && !candidate.suggestion?.text) {
            return null;
          }

          return (
            <div key={candidate.id} className="relative">
              {candidate.recipe ? (
                <RecipeCard
                  recipe={candidate.recipe}
                  onClick={() => toggleSelection(candidate.id)}
                  selected={selected.has(candidate.id)}
                />
              ) : candidate.suggestion?.text ? (
                <Card
                  className={`p-4 cursor-pointer transition-smooth hover:shadow-medium ${
                    selected.has(candidate.id) ? "ring-2 ring-primary shadow-medium" : ""
                  }`}
                  onClick={() => toggleSelection(candidate.id)}
                >
                  {candidate.suggestion.imageUrl && (
                    <img
                      src={candidate.suggestion.imageUrl}
                      alt={candidate.suggestion.text}
                      className="w-full h-32 object-cover rounded-md mb-3"
                    />
                  )}
                  <p className="text-foreground font-medium">{candidate.suggestion.text}</p>
                </Card>
              ) : null}

              {selected.has(candidate.id) && (
                <div className="absolute top-2 left-2 bg-primary text-primary-foreground rounded-full p-2 shadow-medium animate-scale-in">
                  <Check className="w-4 h-4" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-between items-center pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          {selected.size} selected
        </p>
        <Button
          onClick={handleSubmit}
          disabled={selected.size === 0}
          size="lg"
          className="bg-gradient-primary hover:opacity-90"
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          Submit Vote
        </Button>
      </div>
    </Card>
  );
};
