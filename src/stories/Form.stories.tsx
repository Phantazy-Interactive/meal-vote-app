import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../components/ui/label';
import { Input } from '../components/ui/input';
import { Checkbox } from '../components/ui/checkbox';
import { Button } from '../components/ui/button';

const meta = {
  title: 'UI/Form Elements',
  component: Label,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const InputWithLabel: Story = {
  render: () => (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="email">Email</Label>
      <Input type="email" id="email" placeholder="Email" />
    </div>
  ),
};

export const CheckboxWithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="terms" />
      <Label htmlFor="terms" className="cursor-pointer">
        Accept terms and conditions
      </Label>
    </div>
  ),
};

export const CompleteForm: Story = {
  render: () => (
    <form className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input id="name" placeholder="Enter your name" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="email-form">Email</Label>
        <Input type="email" id="email-form" placeholder="your@email.com" />
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Input id="message" placeholder="Your message" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="newsletter" />
        <Label htmlFor="newsletter" className="cursor-pointer">
          Subscribe to newsletter
        </Label>
      </div>
      
      <Button type="submit" className="w-full">Submit</Button>
    </form>
  ),
};
