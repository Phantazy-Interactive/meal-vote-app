import { useState } from "react";
import { RecipeCard, Recipe } from "@/components/meal-vote/RecipeCard";
import { VoteCard } from "@/components/meal-vote/VoteCard";
import { RankedVoteCard } from "@/components/meal-vote/RankedVoteCard";
import { TallyBar } from "@/components/meal-vote/TallyBar";
import { MealSlot } from "@/components/meal-vote/MealSlot";
import { ImportBanner } from "@/components/meal-vote/ImportBanner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

const sampleRecipe: Recipe = {
  id: "1",
  title: "Spicy Thai Basil Chicken",
  imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
  timeTotal: 30,
  servings: 4,
  tags: ["quick", "spicy"],
  cuisines: ["Thai", "Asian"],
  difficulty: "medium"
};

const Components = () => {
  const [selectedTab, setSelectedTab] = useState("recipe-card");

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Component Gallery</h1>
            <p className="text-lg text-muted-foreground">
              Explore all MealVote components with live examples
            </p>
          </div>

          <Tabs value={selectedTab} onValueChange={setSelectedTab}>
            <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
              <TabsTrigger value="recipe-card">RecipeCard</TabsTrigger>
              <TabsTrigger value="vote-card">VoteCard</TabsTrigger>
              <TabsTrigger value="ranked-vote">RankedVote</TabsTrigger>
              <TabsTrigger value="tally-bar">TallyBar</TabsTrigger>
              <TabsTrigger value="meal-slot">MealSlot</TabsTrigger>
              <TabsTrigger value="import">ImportBanner</TabsTrigger>
            </TabsList>

            <div className="mt-8">
              <TabsContent value="recipe-card" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">RecipeCard</h2>
                  <p className="text-muted-foreground mb-6">
                    Display recipe information with image, time, servings, and tags
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Default</h3>
                      <RecipeCard recipe={sampleRecipe} />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-3">With Cookbook Action</h3>
                      <RecipeCard 
                        recipe={sampleRecipe} 
                        onAddToCookbook={() => alert("Added to cookbook!")}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-medium mb-3">Compact</h3>
                      <RecipeCard recipe={sampleRecipe} compact />
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-muted/30">
                  <h3 className="font-semibold mb-3">Props</h3>
                  <pre className="text-sm overflow-x-auto">
{`interface RecipeCardProps {
  recipe: Recipe;
  onClick?: () => void;
  selected?: boolean;
  compact?: boolean;
  onAddToCookbook?: () => void;
}`}
                  </pre>
                </Card>
              </TabsContent>

              <TabsContent value="vote-card" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">VoteCard (Approval)</h2>
                  <p className="text-muted-foreground mb-6">
                    Approval voting interface where users can select multiple options
                  </p>
                  <VoteCard
                    candidates={[
                      { id: "1", recipe: sampleRecipe },
                      { id: "2", recipe: { ...sampleRecipe, id: "2", title: "Pad Thai" } },
                      { id: "3", recipe: { ...sampleRecipe, id: "3", title: "Green Curry" } },
                    ]}
                    onVote={(ids) => console.log("Voted for:", ids)}
                    maxSelections={3}
                  />
                </Card>
              </TabsContent>

              <TabsContent value="ranked-vote" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">RankedVoteCard</h2>
                  <p className="text-muted-foreground mb-6">
                    Ranked voting with drag-and-drop reordering
                  </p>
                  <RankedVoteCard
                    candidates={[
                      { id: "1", recipe: sampleRecipe },
                      { id: "2", recipe: { ...sampleRecipe, id: "2", title: "Pad Thai" } },
                      { id: "3", recipe: { ...sampleRecipe, id: "3", title: "Green Curry" } },
                    ]}
                    onVote={(ids) => console.log("Ranked:", ids)}
                  />
                </Card>
              </TabsContent>

              <TabsContent value="tally-bar" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">TallyBar</h2>
                  <p className="text-muted-foreground mb-6">
                    Display voting results with progress bars
                  </p>
                  <TallyBar
                    results={[
                      { candidateId: "1", candidateName: "Spicy Thai Basil Chicken", votes: 8, percentage: 50, isWinner: true },
                      { candidateId: "2", candidateName: "Pad Thai", votes: 5, percentage: 31 },
                      { candidateId: "3", candidateName: "Green Curry", votes: 3, percentage: 19 },
                    ]}
                    totalVoters={8}
                    live
                  />
                </Card>
              </TabsContent>

              <TabsContent value="meal-slot" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">MealSlot</h2>
                  <p className="text-muted-foreground mb-6">
                    Calendar slot for meal planning with different states
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <MealSlot
                      date={new Date()}
                      slotType="dinner"
                      status="planning"
                      onOpenVoting={() => console.log("Open voting")}
                    />
                    <MealSlot
                      date={new Date(Date.now() + 86400000)}
                      slotType="dinner"
                      status="locked"
                      finalRecipe={sampleRecipe}
                      onViewRecipe={() => console.log("View recipe")}
                      onMarkCooked={() => console.log("Mark cooked")}
                    />
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="import" className="space-y-6">
                <Card className="p-6">
                  <h2 className="text-2xl font-semibold mb-4">ImportBanner</h2>
                  <p className="text-muted-foreground mb-6">
                    Recipe URL import with progress tracking and quota display
                  </p>
                  <ImportBanner
                    onImport={async (url) => {
                      console.log("Importing:", url);
                      await new Promise(resolve => setTimeout(resolve, 2000));
                    }}
                    quota={{ used: 7, total: 10 }}
                  />
                </Card>
              </TabsContent>
            </div>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Components;
