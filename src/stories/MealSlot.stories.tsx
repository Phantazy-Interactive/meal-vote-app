import type { Meta, StoryObj } from "@storybook/react";
import { MealSlot } from "../components/meal-vote/MealSlot";

const meta = {
  title: "Components/MealSlot",
  component: MealSlot,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onOpenVoting: { action: "open-voting" },
    onViewRecipe: { action: "view-recipe" },
    onMarkCooked: { action: "mark-cooked" },
    status: {
      control: "select",
      options: ["planning", "voting", "locked", "cooked"],
    },
    slotType: {
      control: "select",
      options: ["breakfast", "lunch", "dinner"],
    },
  },
} satisfies Meta<typeof MealSlot>;

export default meta;
type Story = StoryObj<typeof meta>;

const today = new Date();
const sampleRecipe = {
  id: "1",
  title: "Spicy Thai Basil Chicken",
  imageUrl: "https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?w=800",
  timeTotal: 30,
  servings: 4,
  cuisines: ["Thai"],
  difficulty: "medium" as const,
};

export const Planning: Story = {
  args: {
    date: today,
    slotType: "dinner",
    status: "planning",
  },
};

export const Voting: Story = {
  args: {
    date: today,
    slotType: "dinner",
    status: "voting",
    voteCount: 3,
  },
};

export const Locked: Story = {
  args: {
    date: today,
    slotType: "dinner",
    status: "locked",
    finalRecipe: sampleRecipe,
  },
};

export const Cooked: Story = {
  args: {
    date: today,
    slotType: "dinner",
    status: "cooked",
    finalRecipe: sampleRecipe,
  },
};

export const BreakfastSlot: Story = {
  args: {
    date: today,
    slotType: "breakfast",
    status: "planning",
  },
};

export const LunchSlot: Story = {
  args: {
    date: today,
    slotType: "lunch",
    status: "locked",
    finalRecipe: {
      ...sampleRecipe,
      title: "Caesar Salad",
      timeTotal: 15,
    },
  },
};
