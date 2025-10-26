import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/ui/button';
import { Toaster } from '../components/ui/toaster';
import { useToast } from '../hooks/use-toast';
import { Star } from 'lucide-react';

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
    function SuccessToastDemo() {
      const { toast } = useToast();
      return (
        <div className="space-y-4">
          <Button
            onClick={() => {
              toast({
                variant: "success",
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
    }
    return <SuccessToastDemo />;
  },
};

export const Warning: Story = {
  render: () => {
    function WarningToastDemo() {
      const { toast } = useToast();
      return (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                variant: "warning",
                title: "Warning!",
                description: "This action may have unintended consequences.",
              });
            }}
          >
            Warning Toast
          </Button>
          <Toaster />
        </div>
      );
    }
    return <WarningToastDemo />;
  },
};

export const Info: Story = {
  render: () => {
    function InfoToastDemo() {
      const { toast } = useToast();
      return (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                variant: "info",
                title: "Did you know?",
                description: "You can customize these toasts with different variants.",
              });
            }}
          >
            Info Toast
          </Button>
          <Toaster />
        </div>
      );
    }
    return <InfoToastDemo />;
  },
};

export const Error: Story = {
  render: () => {
    function ErrorToastDemo() {
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
    }
    return <ErrorToastDemo />;
  },
};

export const CustomIcon: Story = {
  render: () => {
    function CustomIconToastDemo() {
      const { toast } = useToast();
      return (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Featured!",
                description: "This toast has a custom icon.",
                icon: <Star className="h-5 w-5" />,
              });
            }}
          >
            Custom Icon Toast
          </Button>
          <Toaster />
        </div>
      );
    }
    return <CustomIconToastDemo />;
  },
};

export const NoIcon: Story = {
  render: () => {
    function NoIconToastDemo() {
      const { toast } = useToast();
      return (
        <div className="space-y-4">
          <Button
            variant="outline"
            onClick={() => {
              toast({
                title: "Simple message",
                description: "This toast has no icon.",
                icon: null,
              });
            }}
          >
            No Icon Toast
          </Button>
          <Toaster />
        </div>
      );
    }
    return <NoIconToastDemo />;
  },
};

export const WithAction: Story = {
  render: () => {
    function ActionToastDemo() {
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
    }
    return <ActionToastDemo />;
  },
};
