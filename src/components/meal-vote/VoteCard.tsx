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
    <Card className="p-8 space-y-6 animate-fade-in">
      <div className="space-y-2">
        <h2 className="text-3xl font-bold text-foreground bg-gradient-primary bg-clip-text">{title}</h2>
        <p className="text-muted-foreground text-lg">{description}</p>
        {maxSelections < 999 && (
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            <span className="text-lg">✨</span>
            Select up to {maxSelections} option{maxSelections !== 1 ? "s" : ""}
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {candidates.map((candidate) => (
          <div key={candidate.id} className="relative">
            {candidate.recipe ? (
              <RecipeCard
                recipe={candidate.recipe}
                onClick={() => toggleSelection(candidate.id)}
                selected={selected.has(candidate.id)}
              />
            ) : (
              <Card
                className={`p-5 cursor-pointer group ${
                  selected.has(candidate.id) ? "ring-4 ring-primary shadow-colored-primary scale-[1.02]" : ""
                }`}
                onClick={() => toggleSelection(candidate.id)}
              >
                {candidate.suggestion?.imageUrl && (
                  <div className="relative overflow-hidden rounded-xl mb-4">
                    <img
                      src={candidate.suggestion.imageUrl}
                      alt={candidate.suggestion.text}
                      className="w-full h-32 object-cover transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <p className="text-foreground font-bold group-hover:text-primary transition-colors">{candidate.suggestion?.text}</p>
              </Card>
            )}

            {selected.has(candidate.id) && (
              <div className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground rounded-full p-2.5 shadow-colored-primary animate-bounce-in">
                <Check className="w-5 h-5" />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="flex justify-between items-center pt-6 border-t-2 border-border/50">
        <div className="flex items-center gap-2">
          <div className="bg-primary/10 text-primary px-4 py-2 rounded-full font-bold">
            {selected.size}
          </div>
          <span className="text-sm text-muted-foreground font-medium">
            {selected.size === 1 ? "option" : "options"} selected
          </span>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={selected.size === 0}
          size="lg"
          className="gap-2"
        >
          <ThumbsUp className="w-5 h-5" />
          Submit Vote
        </Button>
      </div>
    </Card>
  );
};
