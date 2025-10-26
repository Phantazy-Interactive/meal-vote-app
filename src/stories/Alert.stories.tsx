import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert';
import { Terminal, AlertCircle, Star } from 'lucide-react';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning', 'info'],
    },
  },
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple prop-based API examples
export const SimpleDefault: Story = {
  args: {
    variant: 'default',
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
  },
};

export const SimpleSuccess: Story = {
  args: {
    variant: 'success',
    title: 'Success!',
    description: 'Your changes have been saved successfully.',
  },
};

export const SimpleWarning: Story = {
  args: {
    variant: 'warning',
    title: 'Warning',
    description: 'This action may have unintended consequences.',
  },
};

export const SimpleInfo: Story = {
  args: {
    variant: 'info',
    title: 'Did you know?',
    description: 'You can customize these alerts with different variants.',
  },
};

export const SimpleDestructive: Story = {
  args: {
    variant: 'destructive',
    title: 'Error',
    description: 'Your session has expired. Please log in again.',
  },
};

export const SimpleWithoutIcon: Story = {
  args: {
    variant: 'default',
    title: 'Note',
    description: 'This is a simple alert without an icon.',
    icon: false,
  },
};

export const SimpleCustomIcon: Story = {
  args: {
    variant: 'default',
    title: 'Featured',
    description: 'This alert has a custom icon.',
    icon: <Star className="h-4 w-4" />,
  },
};

// Composition API examples (backwards compatible)
export const CompositionDefault: Story = {
  render: () => (
    <Alert>
      <Terminal className="h-4 w-4" />
      <AlertTitle>Heads up!</AlertTitle>
      <AlertDescription>
        You can add components to your app using the cli.
      </AlertDescription>
    </Alert>
  ),
};

export const CompositionDestructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Your session has expired. Please log in again.
      </AlertDescription>
    </Alert>
  ),
};

export const CompositionWithoutIcon: Story = {
  render: () => (
    <Alert>
      <AlertTitle>Note</AlertTitle>
      <AlertDescription>
        This is a simple alert without an icon.
      </AlertDescription>
    </Alert>
  ),
};
