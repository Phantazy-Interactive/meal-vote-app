import type { Meta, StoryObj } from "@storybook/react";
import { CookMode } from "../components/meal-vote/CookMode";

const meta = {
  title: "Components/CookMode",
  component: CookMode,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
  argTypes: {
    onComplete: { action: "completed" },
    onExit: { action: "exited" },
  },
} satisfies Meta<typeof CookMode>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleSteps = [
  {
    id: "1",
    instruction: "Heat 2 tablespoons of oil in a large wok or skillet over high heat until shimmering.",
    duration: 2,
  },
  {
    id: "2",
    instruction: "Add minced garlic and sliced chilies. Stir-fry for 30 seconds until fragrant.",
    duration: 1,
  },
  {
    id: "3",
    instruction: "Add chicken pieces and stir-fry for 5-7 minutes until cooked through and golden brown.",
    duration: 7,
  },
  {
    id: "4",
    instruction: "Add sliced bell peppers and onions. Stir-fry for 2-3 minutes until vegetables are tender-crisp.",
    duration: 3,
  },
  {
    id: "5",
    instruction: "Add soy sauce, oyster sauce, and a splash of fish sauce. Stir to coat everything evenly.",
  },
  {
    id: "6",
    instruction: "Turn off heat and fold in fresh Thai basil leaves. Stir until wilted.",
  },
  {
    id: "7",
    instruction: "Serve immediately over steamed jasmine rice. Garnish with extra basil leaves and sliced chilies if desired.",
  },
];

export const Default: Story = {
  args: {
    recipeName: "Spicy Thai Basil Chicken",
    steps: sampleSteps,
    totalTime: 30,
  },
};

export const QuickRecipe: Story = {
  args: {
    recipeName: "5-Minute Avocado Toast",
    steps: [
      {
        id: "1",
        instruction: "Toast 2 slices of bread until golden brown.",
        duration: 3,
      },
      {
        id: "2",
        instruction: "Mash one ripe avocado with a fork. Add salt, pepper, and a squeeze of lemon juice.",
      },
      {
        id: "3",
        instruction: "Spread the avocado mixture generously on the toasted bread. Top with cherry tomatoes, red pepper flakes, and a drizzle of olive oil.",
      },
    ],
    totalTime: 5,
  },
};

export const ComplexRecipe: Story = {
  args: {
    recipeName: "Homemade Pasta Carbonara",
    steps: [
      {
        id: "1",
        instruction: "Bring a large pot of salted water to a boil.",
        duration: 10,
      },
      {
        id: "2",
        instruction: "Cut guanciale or pancetta into small strips and cook in a large pan over medium heat until crispy, about 5 minutes.",
        duration: 5,
      },
      {
        id: "3",
        instruction: "In a bowl, whisk together 4 egg yolks, 1 whole egg, and 1 cup of grated Pecorino Romano cheese.",
      },
      {
        id: "4",
        instruction: "Cook 1 pound of spaghetti according to package directions until al dente. Reserve 1 cup of pasta water before draining.",
        duration: 10,
      },
      {
        id: "5",
        instruction: "Remove the pan with guanciale from heat. Add the drained pasta and toss to coat with the rendered fat.",
      },
      {
        id: "6",
        instruction: "Pour the egg mixture over the pasta, tossing quickly and constantly. Add pasta water a little at a time to create a creamy sauce.",
      },
      {
        id: "7",
        instruction: "Season with freshly ground black pepper. Serve immediately with extra Pecorino Romano on top.",
      },
    ],
    totalTime: 45,
  },
};

export const BakingRecipe: Story = {
  args: {
    recipeName: "Chocolate Chip Cookies",
    steps: [
      {
        id: "1",
        instruction: "Preheat oven to 375°F (190°C). Line baking sheets with parchment paper.",
        duration: 10,
      },
      {
        id: "2",
        instruction: "In a large bowl, cream together softened butter and sugars until fluffy, about 3-4 minutes.",
        duration: 4,
      },
      {
        id: "3",
        instruction: "Beat in eggs one at a time, then add vanilla extract.",
      },
      {
        id: "4",
        instruction: "In a separate bowl, whisk together flour, baking soda, and salt.",
      },
      {
        id: "5",
        instruction: "Gradually mix the dry ingredients into the wet ingredients until just combined. Fold in chocolate chips.",
      },
      {
        id: "6",
        instruction: "Drop rounded tablespoons of dough onto prepared baking sheets, spacing them 2 inches apart.",
      },
      {
        id: "7",
        instruction: "Bake for 9-11 minutes until edges are golden but centers are still soft. Let cool on the baking sheet for 5 minutes.",
        duration: 11,
      },
      {
        id: "8",
        instruction: "Transfer cookies to a wire rack to cool completely. Enjoy warm or store in an airtight container.",
        duration: 5,
      },
    ],
    totalTime: 25,
  },
};
