import type { Meta, StoryObj } from "@storybook/react";
import { ImportBanner } from "../components/meal-vote/ImportBanner";

const meta = {
  title: "Components/ImportBanner",
  component: ImportBanner,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onImport: { action: "import" },
  },
} satisfies Meta<typeof ImportBanner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
  },
};

export const WithQuota: Story = {
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
    quota: { used: 7, total: 10 },
  },
};

export const QuotaNearLimit: Story = {
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
    quota: { used: 9, total: 10 },
  },
};

export const QuotaExceeded: Story = {
  args: {
    onImport: async (url: string) => {
      throw new Error("Monthly quota exceeded. Upgrade to Pro for more imports.");
    },
    quota: { used: 10, total: 10 },
  },
};

export const FreeUser: Story = {
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
    quota: { used: 3, total: 10 },
  },
};

export const ProUser: Story = {
  args: {
    onImport: async (url: string) => {
      console.log("Importing:", url);
      await new Promise((resolve) => setTimeout(resolve, 2000));
    },
    quota: { used: 45, total: 300 },
  },
};
