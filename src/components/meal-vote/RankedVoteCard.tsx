import { useState } from "react";
import { GripVertical, Award } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { RecipeCard, Recipe } from "./RecipeCard";

interface Candidate {
  id: string;
  recipe?: Recipe;
  suggestion?: {
    text: string;
    imageUrl?: string;
  };
}

interface RankedVoteCardProps {
  candidates: Candidate[];
  onVote: (rankedIds: string[]) => void;
  title?: string;
  description?: string;
}

export const RankedVoteCard = ({
  candidates,
  onVote,
  title = "Rank your preferences",
  description = "Drag to reorder from most to least preferred"
}: RankedVoteCardProps) => {
  const [ranked, setRanked] = useState<string[]>([]);
  const [draggedItem, setDraggedItem] = useState<string | null>(null);

  const unranked = candidates.filter(c => !ranked.includes(c.id));

  const handleDragStart = (candidateId: string) => {
    setDraggedItem(candidateId);
  };

  const handleDragOver = (e: React.DragEvent, candidateId: string) => {
    e.preventDefault();
    if (!draggedItem || draggedItem === candidateId) return;

    const newRanked = [...ranked];
    const draggedIndex = newRanked.indexOf(draggedItem);
    const targetIndex = newRanked.indexOf(candidateId);

    if (draggedIndex !== -1 && targetIndex !== -1) {
      newRanked.splice(draggedIndex, 1);
      newRanked.splice(targetIndex, 0, draggedItem);
      setRanked(newRanked);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDraggedItem(null);
  };

  const addToRanked = (candidateId: string) => {
    setRanked([...ranked, candidateId]);
  };

  const removeFromRanked = (candidateId: string) => {
    setRanked(ranked.filter(id => id !== candidateId));
  };

  const handleSubmit = () => {
    onVote(ranked);
  };

  const getCandidate = (id: string) => candidates.find(c => c.id === id);

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-2">{title}</h2>
        <p className="text-muted-foreground">{description}</p>
      </div>

      {ranked.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground flex items-center gap-2">
            <Award className="w-5 h-5 text-primary" />
            Your Rankings
          </h3>
          {ranked.map((candidateId, index) => {
            const candidate = getCandidate(candidateId);
            if (!candidate) return null;

            return (
              <div
                key={candidateId}
                draggable
                onDragStart={() => handleDragStart(candidateId)}
                onDragOver={(e) => handleDragOver(e, candidateId)}
                onDrop={handleDrop}
                className="flex items-center gap-3 bg-card border rounded-lg p-3 cursor-move hover:shadow-medium transition-smooth"
              >
                <Badge variant="default" className="w-8 h-8 flex items-center justify-center rounded-full">
                  {index + 1}
                </Badge>
                <GripVertical className="w-5 h-5 text-muted-foreground" />
                <div className="flex-1">
                  {candidate.recipe ? (
                    <RecipeCard recipe={candidate.recipe} compact />
                  ) : (
                    <p className="font-medium">{candidate.suggestion?.text}</p>
                  )}
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => removeFromRanked(candidateId)}
                >
                  Remove
                </Button>
              </div>
            );
          })}
        </div>
      )}

      {unranked.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-foreground">Available Options</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {unranked.map((candidate) => (
              <div key={candidate.id} onClick={() => addToRanked(candidate.id)}>
                {candidate.recipe ? (
                  <RecipeCard recipe={candidate.recipe} />
                ) : (
                  <Card className="p-4 cursor-pointer hover:shadow-medium transition-smooth">
                    {candidate.suggestion?.imageUrl && (
                      <img
                        src={candidate.suggestion.imageUrl}
                        alt={candidate.suggestion.text}
                        className="w-full h-32 object-cover rounded-md mb-3"
                      />
                    )}
                    <p className="text-foreground font-medium">{candidate.suggestion?.text}</p>
                  </Card>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="flex justify-between items-center pt-4 border-t">
        <p className="text-sm text-muted-foreground">
          {ranked.length} ranked
        </p>
        <Button
          onClick={handleSubmit}
          disabled={ranked.length === 0}
          size="lg"
          className="bg-gradient-primary hover:opacity-90"
        >
          <Award className="w-4 h-4 mr-2" />
          Submit Rankings
        </Button>
      </div>
    </Card>
  );
};
