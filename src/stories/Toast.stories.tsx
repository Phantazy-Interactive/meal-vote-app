import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { Toaster } from '../components/ui/toaster';
import { useToast } from '../hooks/use-toast';

const ToastDemo = () => {
  const { toast } = useToast();

  return (
    <div className="space-y-4">
      <Button
        variant="outline"
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  );
};

const meta = {
  title: 'UI/Toast',
  component: ToastDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <ToastDemo />,
};

export const Success: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className="space-y-4">
        <Button
          onClick={() => {
            toast({
              title: "Success!",
              description: "Your changes have been saved successfully.",
            });
          }}
        >
          Success Toast
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const Error: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className="space-y-4">
        <Button
          variant="destructive"
          onClick={() => {
            toast({
              variant: "destructive",
              title: "Uh oh! Something went wrong.",
              description: "There was a problem with your request.",
            });
          }}
        >
          Error Toast
        </Button>
        <Toaster />
      </div>
    );
  },
};

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast();
    return (
      <div className="space-y-4">
        <Button
          variant="outline"
          onClick={() => {
            toast({
              title: "Undo action",
              description: "You can undo this action.",
              action: (
                <Button variant="outline" size="sm">
                  Undo
                </Button>
              ),
            });
          }}
        >
          Toast with Action
        </Button>
        <Toaster />
      </div>
    );
  },
};
