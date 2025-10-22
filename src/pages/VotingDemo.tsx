import { useState } from "react";
import { VoteCard } from "@/components/meal-vote/VoteCard";
import { RankedVoteCard } from "@/components/meal-vote/RankedVoteCard";
import { TallyBar } from "@/components/meal-vote/TallyBar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const sampleCandidates = [
  {
    id: "1",
    recipe: {
      id: "1",
      title: "Spicy Thai Basil Chicken",
      imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
      timeTotal: 30,
      servings: 4,
      cuisines: ["Thai"],
      difficulty: "medium" as const
    }
  },
  {
    id: "2",
    recipe: {
      id: "2",
      title: "Classic Margherita Pizza",
      imageUrl: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800",
      timeTotal: 45,
      servings: 4,
      cuisines: ["Italian"],
      difficulty: "easy" as const
    }
  },
  {
    id: "3",
    recipe: {
      id: "3",
      title: "Beef Tacos",
      imageUrl: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800",
      timeTotal: 25,
      servings: 6,
      cuisines: ["Mexican"],
      difficulty: "easy" as const
    }
  },
  {
    id: "4",
    recipe: {
      id: "4",
      title: "Grilled Salmon with Vegetables",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
      timeTotal: 35,
      servings: 4,
      cuisines: ["Mediterranean"],
      difficulty: "medium" as const
    }
  }
];

const VotingDemo = () => {
  const { toast } = useToast();
  const [approvalVotes, setApprovalVotes] = useState<Record<string, number>>({});
  const [rankedVotes, setRankedVotes] = useState<Record<string, number>>({});

  const handleApprovalVote = (candidateIds: string[]) => {
    const newVotes = { ...approvalVotes };
    candidateIds.forEach(id => {
      newVotes[id] = (newVotes[id] || 0) + 1;
    });
    setApprovalVotes(newVotes);
    
    toast({
      title: "Vote submitted!",
      description: `You voted for ${candidateIds.length} option(s)`,
    });
  };

  const handleRankedVote = (rankedIds: string[]) => {
    const newVotes = { ...rankedVotes };
    rankedIds.forEach((id, index) => {
      const points = rankedIds.length - index;
      newVotes[id] = (newVotes[id] || 0) + points;
    });
    setRankedVotes(newVotes);
    
    toast({
      title: "Rankings submitted!",
      description: `You ranked ${rankedIds.length} option(s)`,
    });
  };

  const getApprovalResults = () => {
    const total = Object.values(approvalVotes).reduce((sum, v) => sum + v, 0);
    return sampleCandidates.map(c => {
      const votes = approvalVotes[c.id] || 0;
      return {
        candidateId: c.id,
        candidateName: c.recipe?.title || "",
        votes,
        percentage: total > 0 ? Math.round((votes / total) * 100) : 0
      };
    }).sort((a, b) => b.votes - a.votes);
  };

  const getRankedResults = () => {
    const total = Object.values(rankedVotes).reduce((sum, v) => sum + v, 0);
    return sampleCandidates.map(c => {
      const votes = rankedVotes[c.id] || 0;
      return {
        candidateId: c.id,
        candidateName: c.recipe?.title || "",
        votes,
        percentage: total > 0 ? Math.round((votes / total) * 100) : 0
      };
    }).sort((a, b) => b.votes - a.votes);
  };

  const approvalResults = getApprovalResults();
  const rankedResults = getRankedResults();

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Voting Demos</h1>
            <p className="text-lg text-muted-foreground">
              Try both approval and ranked voting systems
            </p>
          </div>

          <Tabs defaultValue="approval" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="approval">Approval Voting</TabsTrigger>
              <TabsTrigger value="ranked">Ranked Voting</TabsTrigger>
            </TabsList>

            <TabsContent value="approval" className="space-y-6">
              <Card className="p-6 bg-muted/30">
                <h3 className="font-semibold mb-2">How Approval Voting Works</h3>
                <p className="text-sm text-muted-foreground">
                  Select all the options you'd be happy with. The option with the most approvals wins.
                  This is great for finding consensus in a group.
                </p>
              </Card>

              <VoteCard
                candidates={sampleCandidates}
                onVote={handleApprovalVote}
                title="What should we have for dinner tonight?"
                description="Select all meals you'd enjoy"
              />

              {approvalResults.some(r => r.votes > 0) && (
                <TallyBar
                  results={approvalResults.map((r, i) => ({ ...r, isWinner: i === 0 }))}
                  totalVoters={Math.max(...approvalResults.map(r => r.votes))}
                  mode="approval"
                  live
                />
              )}
            </TabsContent>

            <TabsContent value="ranked" className="space-y-6">
              <Card className="p-6 bg-muted/30">
                <h3 className="font-semibold mb-2">How Ranked Voting Works</h3>
                <p className="text-sm text-muted-foreground">
                  Drag options to rank them from most to least preferred. Points are awarded based on ranking
                  (Borda count method). The option with the most points wins.
                </p>
              </Card>

              <RankedVoteCard
                candidates={sampleCandidates}
                onVote={handleRankedVote}
                title="Rank your meal preferences"
                description="Drag to reorder from favorite to least favorite"
              />

              {rankedResults.some(r => r.votes > 0) && (
                <TallyBar
                  results={rankedResults.map((r, i) => ({ ...r, isWinner: i === 0 }))}
                  totalVoters={Math.max(...rankedResults.map(r => r.votes))}
                  mode="ranked"
                  live
                />
              )}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default VotingDemo;
