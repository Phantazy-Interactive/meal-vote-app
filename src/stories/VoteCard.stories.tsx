import type { Meta, StoryObj } from "@storybook/react";
import { VoteCard } from "../components/meal-vote/VoteCard";

const meta = {
  title: "Components/VoteCard",
  component: VoteCard,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onVote: { action: "voted" },
    maxSelections: { control: { type: "number", min: 1, max: 10 } },
  },
} satisfies Meta<typeof VoteCard>;

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
];

export const Default: Story = {
  args: {
    candidates: sampleCandidates,
    onVote: (ids) => console.log("Voted for:", ids),
    title: "What should we have for dinner?",
    description: "Select all options you'd be happy with",
  },
};

export const Limited: Story = {
  args: {
    candidates: sampleCandidates,
    onVote: (ids) => console.log("Voted for:", ids),
    maxSelections: 2,
    title: "Vote for your top 2 choices",
    description: "Pick up to 2 meals",
  },
};

export const WithSuggestions: Story = {
  args: {
    candidates: [
      ...sampleCandidates.slice(0, 2),
      {
        id: "4",
        suggestion: {
          text: "Let's order pizza tonight!",
          imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800",
        },
      },
      {
        id: "5",
        suggestion: {
          text: "Homemade burgers on the grill",
        },
      },
    ],
    onVote: (ids) => console.log("Voted for:", ids),
    title: "Tonight's dinner options",
  },
};

export const SingleOption: Story = {
  args: {
    candidates: [sampleCandidates[0]],
    onVote: (ids) => console.log("Voted for:", ids),
    maxSelections: 1,
    title: "Approve or pass?",
  },
};
