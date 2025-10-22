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
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {live ? "Live Results" : "Final Results"}
          </h3>
          <p className="text-sm text-muted-foreground">
            {totalVoters} voter{totalVoters !== 1 ? "s" : ""} • {mode === "ranked" ? "Borda count" : "Approval voting"}
          </p>
        </div>
        {live && (
          <Badge variant="default" className="bg-success animate-pulse-soft">
            <div className="w-2 h-2 rounded-full bg-white mr-2" />
            Live
          </Badge>
        )}
      </div>

      <div className="space-y-4">
        {sortedResults.map((result, index) => (
          <div key={result.candidateId} className="space-y-2 animate-fade-in" style={{ animationDelay: `${index * 50}ms` }}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {result.isWinner && (
                  <TrendingUp className="w-5 h-5 text-primary" />
                )}
                <span className="font-medium text-foreground">
                  {result.candidateName}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">
                  {result.votes} {mode === "ranked" ? "points" : "votes"}
                </span>
                <span className="text-sm font-semibold text-foreground min-w-[3rem] text-right">
                  {result.percentage}%
                </span>
              </div>
            </div>
            <Progress
              value={(result.votes / maxVotes) * 100}
              className={`h-3 ${result.isWinner ? "[&>div]:bg-gradient-primary" : "[&>div]:bg-secondary"}`}
            />
          </div>
        ))}
      </div>

      {sortedResults.length === 0 && (
        <div className="text-center py-8 text-muted-foreground">
          No votes yet. Be the first to vote!
        </div>
      )}
    </Card>
  );
};
