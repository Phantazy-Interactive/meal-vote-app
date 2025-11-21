import type { Meta, StoryObj } from "@storybook/react";
import { RecipeCard } from "../components/meal-vote/RecipeCard";

const meta = {
  title: "Components/RecipeCard",
  component: RecipeCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
    onAddToCookbook: { action: "added to cookbook" },
    selected: { control: "boolean" },
    compact: { control: "boolean" },
  },
} satisfies Meta<typeof RecipeCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleRecipe = {
  id: "1",
  title: "Spicy Thai Basil Chicken",
  imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
  timeTotal: 30,
  servings: 4,
  tags: ["quick", "spicy"],
  cuisines: ["Thai", "Asian"],
  difficulty: "medium" as const,
};

export const Default: Story = {
  args: {
    recipe: sampleRecipe,
    onAddToCookbook: () => console.log("Added to cookbook"),
  },
};

export const WithoutCookbookAction: Story = {
  args: {
    recipe: sampleRecipe,
  },
};

export const Selected: Story = {
  args: {
    recipe: sampleRecipe,
    selected: true,
  },
};

export const Compact: Story = {
  args: {
    recipe: sampleRecipe,
    compact: true,
  },
};

export const EasyDifficulty: Story = {
  args: {
    recipe: {
      ...sampleRecipe,
      difficulty: "easy",
      title: "Simple Pasta Salad",
      timeTotal: 15,
    },
  },
};

export const HardDifficulty: Story = {
  args: {
    recipe: {
      ...sampleRecipe,
      difficulty: "hard",
      title: "Beef Wellington",
      timeTotal: 120,
      servings: 6,
    },
  },
};

export const NoServings: Story = {
  args: {
    recipe: {
      id: "2",
      title: "Homemade Bread",
      imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800",
      timeTotal: 180,
      cuisines: ["Bakery"],
    },
  },
};
