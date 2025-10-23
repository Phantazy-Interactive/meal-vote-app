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
