import type { Meta, StoryObj } from '@storybook/react';
import {
  AlertDialog,
  AlertDialogRoot,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';
import { Button } from '../components/ui/button';

const meta = {
  title: 'UI/AlertDialog',
  component: AlertDialogRoot,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof AlertDialogRoot>;

export default meta;
type Story = StoryObj<typeof meta>;

// Simple prop-based API examples
export const Default: Story = {
  render: () => (
    <AlertDialog
      trigger={<Button variant="outline">Open Alert</Button>}
      title="Are you absolutely sure?"
      description="This action cannot be undone. This will permanently delete your account and remove your data from our servers."
      onAction={() => console.log('Action confirmed')}
    />
  ),
};

export const Delete: Story = {
  render: () => (
    <AlertDialog
      trigger={<Button variant="destructive">Delete Item</Button>}
      title="Delete this item?"
      description="This item will be permanently deleted. This action cannot be undone."
      variant="destructive"
      actionText="Delete"
      onAction={() => console.log('Item deleted')}
    />
  ),
};

export const SaveChanges: Story = {
  render: () => (
    <AlertDialog
      trigger={<Button>Save Changes</Button>}
      title="Save your changes?"
      description="You have unsaved changes. Do you want to save them before leaving?"
      cancelText="Don't Save"
      actionText="Save Changes"
      onAction={() => console.log('Changes saved')}
      onCancel={() => console.log('Changes discarded')}
    />
  ),
};

export const CustomContent: Story = {
  render: () => (
    <AlertDialog
      trigger={<Button variant="outline">Show Custom</Button>}
      title="Custom Content"
      description="This dialog includes custom content below."
    >
      <div className="py-4">
        <p className="text-sm text-muted-foreground">
          You can add any custom content here between the description and the footer buttons.
        </p>
      </div>
    </AlertDialog>
  ),
};

// Composition API examples (for advanced use cases)
export const CompositionDefault: Story = {
  render: () => (
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <Button variant="outline">Open Alert</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  ),
};

export const CompositionDelete: Story = {
  render: () => (
    <AlertDialogRoot>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete this item?</AlertDialogTitle>
          <AlertDialogDescription>
            This item will be permanently deleted. This action cannot be undone.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction className="bg-destructive text-destructive-foreground hover:bg-destructive/90">
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialogRoot>
  ),
};
