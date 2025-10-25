# MealVote Components

A beautiful, fully-typed React component library for building collaborative meal planning and voting applications. Perfect for family meal planning apps, recipe sharing platforms, and cooking communities.

## ✨ Features

- 🗳️ **Voting Components** - Approval and ranked choice voting with real-time tallies
- 📅 **Meal Planning** - Weekly calendar views and meal slot management
- 👨‍🍳 **Cook Mode** - Large-type instructions with timers and step tracking
- 🍳 **Recipe Cards** - Beautiful recipe display with images, time, and metadata
- 📥 **Import Tools** - Recipe URL import with progress tracking
- 🎨 **Fully Themed** - Customizable design system with CSS variables
- ♿ **Accessible** - Built with ARIA labels and keyboard navigation
- 📱 **Responsive** - Mobile-first design that works everywhere
- 🔷 **TypeScript** - Complete type safety out of the box

## 📦 Installation

```bash
npm install @phantazyinteractive/mealvote-components
```

### Required Peer Dependencies

This package requires several peer dependencies that must be installed in your project:

```bash
# Core React dependencies
npm install react react-dom lucide-react

# Utility libraries
npm install class-variance-authority clsx tailwind-merge

# Radix UI components (install only the ones you use)
npm install @radix-ui/react-tabs @radix-ui/react-progress @radix-ui/react-slot
# ... add other @radix-ui packages as needed based on which components you use
```

### Import Styles

Import the component styles in your app entry point:

```tsx
import '@phantazyinteractive/mealvote-components/style.css';

function App() {
  return (
    <div>
      <RecipeCard recipe={recipe} />
      <VoteCard votes={votes} />
    </div>
  );
}
```

### Peer Dependencies

Ensure you have these installed:

```bash
npm install react react-dom lucide-react
```

## 📦 Components

### Meal Voting Components
- **RecipeCard** - Display recipe information with image, title, description, and metadata
- **VoteCard** - Approval voting interface for recipe selection
- **RankedVoteCard** - Ranked choice voting with drag-and-drop reordering
- **TallyBar** - Visual representation of voting results with progress bars
- **MealSlot** - Individual meal slot for weekly planning
- **PlanGrid** - Weekly meal planning grid interface
- **ImportBanner** - Recipe import interface with external recipe management
- **CookMode** - Step-by-step cooking mode with timer and progress tracking

### UI Components
- **Button** - Versatile button component with multiple variants (default, outline, destructive, ghost, link) and sizes
- **Card** - Container component with header, content, and footer sections
- **Badge** - Small label component for tags and status indicators
- **Input** - Text input field with consistent styling
- **Label** - Form label component for accessibility
- **Checkbox** - Checkbox input with label integration
- **Alert** - Notification component for important messages with default and destructive variants
- **Accordion** - Collapsible content sections with smooth animations
- **Progress** - Progress bar for tracking completion
- **Tabs** - Tabbed interface for organizing content
- **Toggle** - Toggle button for binary states
- **Popover** - Floating content container
- **HoverCard** - Content that appears on hover
- **Collapsible** - Expandable/collapsible content
- **Separator** - Visual divider between sections

## 🚀 Quick Start

### Recipe Card

Display recipe information with images, cooking time, and tags:

```tsx
import { RecipeCard } from '@phantazyinteractive/mealvote-components';

const recipe = {
  id: '1',
  title: 'Spicy Thai Basil Chicken',
  imageUrl: 'https://example.com/thai-chicken.jpg',
  timeTotal: 30,
  servings: 4,
  cuisines: ['Thai', 'Asian'],
  difficulty: 'medium',
};

function App() {
  return (
    <RecipeCard 
      recipe={recipe}
      onClick={() => console.log('Recipe clicked')}
      selected={false}
    />
  );
}
```

### Vote Card (Approval Voting)

Let users vote on multiple recipe options:

```tsx
import { VoteCard } from '@phantazyinteractive/mealvote-components';

const candidates = [
  { 
    id: '1', 
    recipe: {
      id: '1',
      title: 'Thai Basil Chicken',
      imageUrl: 'https://example.com/thai.jpg',
      timeTotal: 30,
      servings: 4,
    }
  },
  { 
    id: '2', 
    recipe: {
      id: '2',
      title: 'Margherita Pizza',
      imageUrl: 'https://example.com/pizza.jpg',
      timeTotal: 45,
      servings: 4,
    }
  },
];

function VotingPage() {
  return (
    <VoteCard
      candidates={candidates}
      onVote={(selectedIds) => {
        console.log('User voted for:', selectedIds);
      }}
      maxSelections={3}
      title="What's for dinner tonight?"
      description="Select all options you'd enjoy eating"
    />
  );
}
```

### Ranked Vote Card

Enable ranked-choice voting with drag-and-drop:

```tsx
import { RankedVoteCard } from '@phantazyinteractive/mealvote-components';

function RankedVoting() {
  return (
    <RankedVoteCard
      candidates={candidates}
      onVote={(rankedIds) => {
        console.log('User ranked:', rankedIds);
      }}
      title="Rank your preferences"
      description="Drag to reorder your top choices"
    />
  );
}
```

### Tally Bar

Display voting results with progress bars:

```tsx
import { TallyBar } from '@phantazyinteractive/mealvote-components';

const results = [
  {
    candidateId: '1',
    recipe: { title: 'Thai Chicken', imageUrl: '...', timeTotal: 30 },
    approvals: 8,
    score: 85,
  },
  {
    candidateId: '2',
    recipe: { title: 'Pizza', imageUrl: '...', timeTotal: 45 },
    approvals: 6,
    score: 65,
  },
];

function Results() {
  return (
    <TallyBar
      results={results}
      totalVoters={10}
      mode="approval"
      live={true}
    />
  );
}
```

### Cook Mode

Full-screen cooking interface with step-by-step instructions:

```tsx
import { CookMode } from '@phantazyinteractive/mealvote-components';

const steps = [
  {
    id: '1',
    instruction: 'Heat oil in a large wok over high heat',
    duration: 2,
  },
  {
    id: '2',
    instruction: 'Add garlic and chilies, stir-fry for 30 seconds',
    duration: 1,
  },
];

function Cooking() {
  return (
    <CookMode
      recipeName="Spicy Thai Basil Chicken"
      steps={steps}
      totalTime={30}
      onComplete={() => console.log('Done cooking!')}
      onExit={() => console.log('Exited cook mode')}
    />
  );
}
```

### Meal Planning

Plan meals for the week:

```tsx
import { PlanGrid, MealSlot } from '@phantazyinteractive/mealvote-components';

const slots = [
  {
    id: '1',
    date: new Date('2024-01-15'),
    slotType: 'dinner',
    status: 'voting',
    voteCount: 3,
  },
  {
    id: '2',
    date: new Date('2024-01-16'),
    slotType: 'dinner',
    status: 'locked',
    recipe: { title: 'Pizza Night', imageUrl: '...', timeTotal: 45 },
  },
];

function WeeklyPlan() {
  return (
    <PlanGrid
      slots={slots}
      onOpenVoting={(slotId) => console.log('Open voting:', slotId)}
      onViewRecipe={(slotId) => console.log('View recipe:', slotId)}
      onMarkCooked={(slotId) => console.log('Mark cooked:', slotId)}
    />
  );
}
```

### Import Banner

Add recipe import functionality:

```tsx
import { ImportBanner } from '@phantazyinteractive/mealvote-components';

function ImportRecipes() {
  return (
    <ImportBanner
      onImport={async (url) => {
        // Your import logic here
        await fetch('/api/import', { 
          method: 'POST', 
          body: JSON.stringify({ url }) 
        });
      }}
      quota={{ used: 7, total: 10 }}
    />
  );
}
```

## 🧩 UI Components Usage

### Buttons

```tsx
import { Button } from '@phantazyinteractive/mealvote-components';
import { Mail } from 'lucide-react';

function MyComponent() {
  return (
    <div className="flex gap-4">
      <Button variant="default">Primary Action</Button>
      <Button variant="outline">Secondary Action</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="ghost">Ghost Button</Button>
      <Button variant="link">Link Button</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button size="icon"><Mail /></Button>
    </div>
  );
}
```

### Alert

Display important messages and notifications.

```tsx
import { Alert, AlertTitle, AlertDescription } from '@phantazyinteractive/mealvote-components';
import { AlertCircle, Terminal } from 'lucide-react';

function MyComponent() {
  return (
    <>
      <Alert>
        <Terminal className="h-4 w-4" />
        <AlertTitle>Heads up!</AlertTitle>
        <AlertDescription>
          You can add components to your app using the cli.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Your session has expired. Please log in again.
        </AlertDescription>
      </Alert>
    </>
  );
}
```

### Alert Dialog

Show confirmation dialogs and important alerts that require user action.

```tsx
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@phantazyinteractive/mealvote-components';
import { Button } from '@phantazyinteractive/mealvote-components';

function DeleteConfirmation() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Item</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your item.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
```

### Toast Notifications

Display temporary status messages and notifications.

```tsx
import { Button, useToast, Toaster } from '@phantazyinteractive/mealvote-components';

function App() {
  const { toast } = useToast();

  return (
    <>
      <Button
        onClick={() => {
          toast({
            title: "Success!",
            description: "Your changes have been saved.",
          });
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </>
  );
}
```

Error toast:
```tsx
toast({
  variant: "destructive",
  title: "Error",
  description: "Something went wrong.",
});
```

Toast with action button:
```tsx
toast({
  title: "Undo action",
  description: "You can undo this action.",
  action: <Button variant="outline" size="sm">Undo</Button>,
});
```

### Accordion

```tsx
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from '@phantazyinteractive/mealvote-components';

function FAQ() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>How do I vote?</AccordionTrigger>
        <AccordionContent>
          Click on recipes you'd like to vote for!
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>Can I change my vote?</AccordionTrigger>
        <AccordionContent>
          Yes, you can change your vote anytime before the voting closes.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
```

### Form Elements

```tsx
import { Label, Input, Checkbox, Button } from '@phantazyinteractive/mealvote-components';

function FormExample() {
  return (
    <form className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="your@email.com" />
      </div>
      
      <div className="flex items-center space-x-2">
        <Checkbox id="terms" />
        <Label htmlFor="terms" className="cursor-pointer">
          I agree to the terms and conditions
        </Label>
      </div>
      
      <Button type="submit">Submit</Button>
    </form>
  );
}
```

### Card Components

```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter, Button } from '@phantazyinteractive/mealvote-components';

function CardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Weekly Meal Plan</CardTitle>
        <CardDescription>Plan your meals for the week</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Your meal planning content goes here.</p>
      </CardContent>
      <CardFooter>
        <Button>Save Plan</Button>
      </CardFooter>
    </Card>
  );
}
```

### Badges

```tsx
import { Badge } from '@phantazyinteractive/mealvote-components';

function BadgeExample() {
  return (
    <div className="flex gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="outline">Outline</Badge>
    </div>
  );
}
```

## 🎨 Customization

The library uses CSS custom properties for theming. Override these in your global CSS:

```css
:root {
  /* Primary color (orange-red) */
  --primary: 20 88% 55%;
  
  /* Secondary color (green) */
  --secondary: 142 76% 45%;
  
  /* Accent color (warm orange) */
  --accent: 15 100% 65%;
  
  /* Background colors */
  --background: 45 20% 98%;
  --card: 45 20% 100%;
  
  /* Text colors */
  --foreground: 24 24% 15%;
  --muted-foreground: 24 15% 40%;
}
```

## 🌐 Live Demo

**Interactive Demo**: https://phantazy-interactive.github.io/meal-vote-app/

Explore all components in action with live examples.

## 📚 Documentation

**Storybook**: https://phantazy-interactive.github.io/meal-vote-app/storybook/

Complete component documentation with interactive examples, props tables, and API reference.

## 🛠 Development

### Local Setup

```sh
# Clone the repository
git clone https://github.com/Phantazy-Interactive/meal-vote-app.git
cd meal-vote-app

# Install dependencies
npm install

# Start development server
npm run dev

# Start Storybook
npm run storybook
```

### Building & Publishing

```sh
# Build component library
npm run build:lib

# Build Storybook
npm run build-storybook

# Publish to npm
npm publish
```

## 🏗 Built With

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI component foundation
- **Radix UI** - Accessible primitives
- **Storybook** - Component documentation
- **Lucide React** - Icons

## 📄 License

MIT License - see LICENSE file for details.
