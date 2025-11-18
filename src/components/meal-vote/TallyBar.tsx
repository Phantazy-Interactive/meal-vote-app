import { TrendingUp } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

interface TallyResult {
  candidateId: string;
  candidateName: string;
  votes: number;
  percentage: number;
  isWinner?: boolean;
}

interface TallyBarProps {
  results: TallyResult[];
  totalVoters: number;
  mode?: "approval" | "ranked";
  live?: boolean;
}

export const TallyBar = ({ results, totalVoters, mode = "approval", live }: TallyBarProps) => {
  const sortedResults = [...results].sort((a, b) => b.votes - a.votes);
  const maxVotes = sortedResults[0]?.votes || 0;

  return (
    <Card className="p-6 space-y-4">
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 min-w-0">
          <h3 className="text-base sm:text-lg font-semibold text-foreground">
            {live ? "Live Results" : "Final Results"}
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground truncate">
            {totalVoters} voter{totalVoters !== 1 ? "s" : ""} • {mode === "ranked" ? "Borda count" : "Approval voting"}
          </p>
        </div>
        {live && (
          <Badge variant="default" className="bg-success animate-pulse-soft flex-shrink-0">
            <div className="w-2 h-2 rounded-full bg-white mr-2" />
            Live
          </Badge>
        )}
      </div>

      <div className="space-y-5">
        {sortedResults.map((result, index) => (
          <div
            key={result.candidateId}
            className={`space-y-3 p-4 rounded-2xl ${
              result.isWinner ? "bg-primary/5 ring-2 ring-primary/20" : ""
            }`}
            style={{ animationDelay: `${index * 50}ms` }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                {result.isWinner && (
                  <div className="bg-gradient-primary text-primary-foreground rounded-full p-2 shadow-colored-primary animate-bounce-in">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                )}
                <span className={`font-bold text-foreground ${result.isWinner ? "text-lg" : "text-base"}`}>
                  {result.candidateName}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-muted-foreground font-medium">
                  {result.votes} {mode === "ranked" ? "points" : "votes"}
                </span>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full font-bold min-w-[3.5rem] text-center">
                  {result.percentage}%
                </div>
              </div>
            </div>
            <Progress
              value={(result.votes / maxVotes) * 100}
              className={`h-4 ${result.isWinner ? "[&>div]:bg-gradient-primary shadow-playful" : "[&>div]:bg-gradient-secondary"}`}
            />
          </div>
        ))}
      </div>

      {sortedResults.length === 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4 animate-float">🗳️</div>
          <p className="text-lg font-semibold text-foreground mb-2">No votes yet!</p>
          <p className="text-muted-foreground">Be the first to cast your vote</p>
        </div>
      )}
    </Card>
  );
};
