import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Vote, Calendar, Users, ChefHat, Package, Layers } from "lucide-react";
import { CardStack } from "@/components/meal-vote/CardStack";
import { RecipeCard, Recipe } from "@/components/meal-vote/RecipeCard";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const sampleRecipes: Recipe[] = [
    {
      id: "1",
      title: "Spicy Thai Basil Chicken",
      imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
      timeTotal: 30,
      servings: 4,
      cuisines: ["Thai"],
      difficulty: "medium"
    },
    {
      id: "2",
      title: "Grilled Salmon with Vegetables",
      imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
      timeTotal: 35,
      servings: 4,
      cuisines: ["Mediterranean"],
      difficulty: "medium"
    },
    {
      id: "3",
      title: "Vegetarian Buddha Bowl",
      imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
      timeTotal: 25,
      servings: 2,
      cuisines: ["Asian", "Healthy"],
      difficulty: "easy"
    },
    {
      id: "4",
      title: "Classic Beef Tacos",
      imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
      timeTotal: 20,
      servings: 4,
      cuisines: ["Mexican"],
      difficulty: "easy"
    },
  ];

  const handleAddToCookbook = (recipeName: string) => {
    toast({
      title: "Added to cookbook!",
      description: `${recipeName} has been saved to your collection`,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-warm">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground">
            <span className="bg-gradient-primary bg-clip-text text-transparent">MealVote</span>
            <br />
            Component Library
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Beautiful, reusable React components for collaborative meal planning and voting
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Link to="/components">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 text-lg px-8">
                <Package className="w-5 h-5 mr-2" />
                View Components
              </Button>
            </Link>
            <Link to="/demo/voting">
              <Button size="lg" variant="outline" className="text-lg px-8">
                Live Demos
              </Button>
            </Link>
            <a href="/meal-vote-app/storybook/" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                📚 Storybook Docs
              </Button>
            </a>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <Card className="p-6 hover:shadow-medium transition-smooth">
            <Vote className="w-12 h-12 text-primary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Voting Components</h3>
            <p className="text-muted-foreground">
              Approval and ranked voting interfaces with real-time tallies
            </p>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-smooth">
            <Calendar className="w-12 h-12 text-secondary mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Meal Planning</h3>
            <p className="text-muted-foreground">
              Weekly calendar views and meal slot management
            </p>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-smooth">
            <Layers className="w-12 h-12 text-warning mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Card Stack</h3>
            <p className="text-muted-foreground">
              Swipeable card navigation with smooth animations
            </p>
          </Card>

          <Card className="p-6 hover:shadow-medium transition-smooth">
            <ChefHat className="w-12 h-12 text-accent mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Cook Mode</h3>
            <p className="text-muted-foreground">
              Large-type instructions with timers and step tracking
            </p>
          </Card>
        </div>
      </div>

      {/* CardStack Demo */}
      <div className="container mx-auto px-4 py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Interactive Card Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Swipe or click to navigate through recipes. Try it yourself!
            </p>
          </div>
          
          <CardStack
            items={sampleRecipes}
            renderCard={(recipe) => (
              <RecipeCard 
                recipe={recipe} 
                onAddToCookbook={() => handleAddToCookbook(recipe.title)}
              />
            )}
            className="mb-8"
          />
        </div>
      </div>

      {/* Quick Links */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground text-center mb-8">
            Explore the Library
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link to="/components">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">Component Gallery</h3>
                <p className="text-sm text-muted-foreground">
                  Browse all available components with props and examples
                </p>
              </Card>
            </Link>

            <Link to="/demo/voting">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">Voting Demo</h3>
                <p className="text-sm text-muted-foreground">
                  Try approval and ranked voting in action
                </p>
              </Card>
            </Link>

            <Link to="/demo/planning">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">Planning Demo</h3>
                <p className="text-sm text-muted-foreground">
                  See weekly meal planning and scheduling
                </p>
              </Card>
            </Link>

            <a href="/meal-vote-app/storybook/" target="_blank" rel="noopener noreferrer">
              <Card className="p-6 hover:shadow-medium transition-smooth cursor-pointer">
                <h3 className="font-semibold text-foreground mb-2">Storybook Docs</h3>
                <p className="text-sm text-muted-foreground">
                  Detailed component documentation and API reference
                </p>
              </Card>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
