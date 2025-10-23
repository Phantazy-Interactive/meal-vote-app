import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const meta = {
  title: 'UI/Typography',
  component: Card,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headings: Story = {
  render: () => (
    <div className="space-y-4">
      <h1 className="text-4xl font-bold tracking-tight">Heading 1</h1>
      <h2 className="text-3xl font-semibold tracking-tight">Heading 2</h2>
      <h3 className="text-2xl font-semibold tracking-tight">Heading 3</h3>
      <h4 className="text-xl font-semibold tracking-tight">Heading 4</h4>
      <h5 className="text-lg font-semibold">Heading 5</h5>
      <h6 className="text-base font-semibold">Heading 6</h6>
    </div>
  ),
};

export const Paragraphs: Story = {
  render: () => (
    <div className="space-y-4 max-w-2xl">
      <p className="text-lg text-foreground">
        This is a large paragraph with <strong>bold text</strong> and <em>italic text</em>. 
        It demonstrates how text flows naturally in a larger size.
      </p>
      <p className="text-base text-foreground">
        This is a regular paragraph. It's the default size for body text and is 
        optimized for readability across different screen sizes.
      </p>
      <p className="text-sm text-muted-foreground">
        This is a small paragraph, often used for secondary information or captions.
        The muted foreground color makes it visually subordinate to primary content.
      </p>
      <p className="text-xs text-muted-foreground">
        This is extra small text, typically used for footnotes or fine print.
      </p>
    </div>
  ),
};

export const Lists: Story = {
  render: () => (
    <div className="space-y-6 max-w-2xl">
      <div>
        <h3 className="text-lg font-semibold mb-2">Unordered List</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground">
          <li>First item in the list</li>
          <li>Second item with more details</li>
          <li>Third item to show spacing</li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-2">Ordered List</h3>
        <ol className="list-decimal list-inside space-y-1 text-foreground">
          <li>Preheat the oven to 350°F</li>
          <li>Mix dry ingredients together</li>
          <li>Add wet ingredients and stir</li>
          <li>Bake for 30 minutes</li>
        </ol>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-2">Nested List</h3>
        <ul className="list-disc list-inside space-y-1 text-foreground">
          <li>Main ingredient category
            <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
              <li>Sub-ingredient 1</li>
              <li>Sub-ingredient 2</li>
            </ul>
          </li>
          <li>Another category</li>
        </ul>
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-foreground">Default foreground text</p>
      <p className="text-muted-foreground">Muted foreground text</p>
      <p className="text-primary">Primary colored text</p>
      <p className="text-secondary">Secondary colored text</p>
      <p className="text-destructive">Destructive/error text</p>
    </div>
  ),
};

export const InlineCode: Story = {
  render: () => (
    <div className="space-y-2 max-w-2xl">
      <p className="text-foreground">
        Use the <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">RecipeCard</code> component 
        to display recipe information.
      </p>
      <p className="text-foreground">
        Import it like this: <code className="px-1.5 py-0.5 rounded bg-muted text-sm font-mono">
          import &#123; RecipeCard &#125; from '@phantazyinteractive/mealvote-components'
        </code>
      </p>
    </div>
  ),
};

export const Blockquote: Story = {
  render: () => (
    <blockquote className="border-l-4 border-primary pl-4 italic text-muted-foreground">
      "The only way to do great work is to love what you do." - Steve Jobs
    </blockquote>
  ),
};
