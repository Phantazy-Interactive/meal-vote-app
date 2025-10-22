import type { Meta, StoryObj } from "@storybook/react";
import { TallyBar } from "../components/meal-vote/TallyBar";

const meta = {
  title: "Components/TallyBar",
  component: TallyBar,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    live: { control: "boolean" },
    mode: {
      control: "select",
      options: ["approval", "ranked"],
    },
  },
} satisfies Meta<typeof TallyBar>;

export default meta;
type Story = StoryObj<typeof meta>;

const sampleResults = [
  {
    candidateId: "1",
    candidateName: "Spicy Thai Basil Chicken",
    votes: 8,
    percentage: 50,
    isWinner: true,
  },
  {
    candidateId: "2",
    candidateName: "Classic Margherita Pizza",
    votes: 5,
    percentage: 31,
  },
  {
    candidateId: "3",
    candidateName: "Beef Tacos",
    votes: 3,
    percentage: 19,
  },
];

export const ApprovalVoting: Story = {
  args: {
    results: sampleResults,
    totalVoters: 8,
    mode: "approval",
    live: false,
  },
};

export const RankedVoting: Story = {
  args: {
    results: [
      {
        candidateId: "1",
        candidateName: "Spicy Thai Basil Chicken",
        votes: 24,
        percentage: 45,
        isWinner: true,
      },
      {
        candidateId: "2",
        candidateName: "Classic Margherita Pizza",
        votes: 18,
        percentage: 34,
      },
      {
        candidateId: "3",
        candidateName: "Beef Tacos",
        votes: 11,
        percentage: 21,
      },
    ],
    totalVoters: 6,
    mode: "ranked",
    live: false,
  },
};

export const LiveResults: Story = {
  args: {
    results: sampleResults,
    totalVoters: 8,
    mode: "approval",
    live: true,
  },
};

export const CloseTie: Story = {
  args: {
    results: [
      {
        candidateId: "1",
        candidateName: "Spicy Thai Basil Chicken",
        votes: 7,
        percentage: 35,
        isWinner: true,
      },
      {
        candidateId: "2",
        candidateName: "Classic Margherita Pizza",
        votes: 7,
        percentage: 35,
      },
      {
        candidateId: "3",
        candidateName: "Beef Tacos",
        votes: 6,
        percentage: 30,
      },
    ],
    totalVoters: 10,
    mode: "approval",
  },
};

export const NoVotes: Story = {
  args: {
    results: [],
    totalVoters: 0,
    mode: "approval",
  },
};

export const SingleVoter: Story = {
  args: {
    results: [
      {
        candidateId: "1",
        candidateName: "Spicy Thai Basil Chicken",
        votes: 1,
        percentage: 100,
        isWinner: true,
      },
    ],
    totalVoters: 1,
    mode: "approval",
  },
};
