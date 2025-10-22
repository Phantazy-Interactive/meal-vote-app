import type { Meta, StoryObj } from "@storybook/react";
import { RankedVoteCard } from "../components/meal-vote/RankedVoteCard";

const meta = {
  title: "Components/RankedVoteCard",
  component: RankedVoteCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onVote: { action: "ranked" },
  },
} satisfies Meta<typeof RankedVoteCard>;

export default meta;
type Story = StoryObj<typeof meta>;

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
      difficulty: "medium" as const,
    },
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
      difficulty: "easy" as const,
    },
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
      difficulty: "easy" as const,
    },
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
      difficulty: "medium" as const,
    },
  },
];

export const Default: Story = {
  args: {
    candidates: sampleCandidates,
    onVote: (ids) => console.log("Ranked:", ids),
    title: "Rank your meal preferences",
    description: "Drag to reorder from most to least preferred",
  },
};

export const FewOptions: Story = {
  args: {
    candidates: sampleCandidates.slice(0, 2),
    onVote: (ids) => console.log("Ranked:", ids),
    title: "Which would you prefer?",
    description: "Rank these two options",
  },
};

export const ManyOptions: Story = {
  args: {
    candidates: [
      ...sampleCandidates,
      {
        id: "5",
        recipe: {
          id: "5",
          title: "Chicken Parmesan",
          imageUrl: "https://images.unsplash.com/photo-1632778149955-e80f8ceca2e8?w=800",
          timeTotal: 50,
          servings: 4,
          cuisines: ["Italian"],
          difficulty: "medium" as const,
        },
      },
      {
        id: "6",
        recipe: {
          id: "6",
          title: "Stir-Fry Vegetables",
          imageUrl: "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=800",
          timeTotal: 20,
          servings: 4,
          cuisines: ["Asian"],
          difficulty: "easy" as const,
        },
      },
    ],
    onVote: (ids) => console.log("Ranked:", ids),
    title: "Weekly meal preferences",
  },
};
