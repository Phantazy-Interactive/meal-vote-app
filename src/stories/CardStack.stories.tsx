import type { Meta, StoryObj } from "@storybook/react";
import { CardStack } from "../components/meal-vote/CardStack";
import { RecipeCard, Recipe } from "../components/meal-vote/RecipeCard";
import { Card } from "../components/ui/card";

const meta = {
  title: "Components/CardStack",
  component: CardStack,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof CardStack>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRecipes: Recipe[] = [
  {
    id: "1",
    title: "Spicy Thai Basil Chicken",
    imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
    timeTotal: 30,
    servings: 4,
    cuisines: ["Thai"],
    difficulty: "medium" as const
  },
  {
    id: "2",
    title: "Grilled Salmon with Vegetables",
    imageUrl: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800",
    timeTotal: 35,
    servings: 4,
    cuisines: ["Mediterranean"],
    difficulty: "medium" as const
  },
  {
    id: "3",
    title: "Vegetarian Buddha Bowl",
    imageUrl: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800",
    timeTotal: 25,
    servings: 2,
    cuisines: ["Asian", "Healthy"],
    difficulty: "easy" as const
  },
  {
    id: "4",
    title: "Classic Beef Tacos",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800",
    timeTotal: 20,
    servings: 4,
    cuisines: ["Mexican"],
    difficulty: "easy" as const
  },
];

export const RecipeCards: Story = {
  args: {
    items: sampleRecipes,
    renderCard: (recipe: Recipe) => (
      <RecipeCard recipe={recipe} />
    ),
  },
};

type DayCard = { title: string; description: string };

export const SimpleCards: Story = {
  args: {
    items: [
      { title: "Monday", description: "Start your week strong" },
      { title: "Tuesday", description: "Keep the momentum going" },
      { title: "Wednesday", description: "Midweek motivation" },
      { title: "Thursday", description: "Almost there!" },
      { title: "Friday", description: "Finish strong" },
    ] as DayCard[],
    renderCard: (item: DayCard) => (
      <Card className="p-8 text-center">
        <h2 className="text-3xl font-bold mb-4">{item.title}</h2>
        <p className="text-muted-foreground">{item.description}</p>
      </Card>
    ),
  },
};

export const WithCallback: Story = {
  args: {
    items: sampleRecipes,
    renderCard: (recipe: Recipe) => (
      <RecipeCard recipe={recipe} />
    ),
    onIndexChange: (index) => {
      console.log("Current index:", index);
    },
  },
};
