# MealVote Component Library

Beautiful, reusable React components for collaborative meal planning and voting applications.

## 🚀 Features

- **Voting Components** - Approval and ranked voting interfaces with real-time tallies
- **Meal Planning** - Weekly calendar views and meal slot management
- **Cook Mode** - Large-type instructions with timers and step tracking
- **Recipe Cards** - Beautiful recipe display with images, time, and metadata
- **Import Tools** - Recipe URL import with progress tracking
- **Fully Typed** - Complete TypeScript support
- **Accessible** - Built with accessibility in mind
- **Customizable** - Uses design tokens for easy theming

## 📦 Installation

```bash
npm install @mealvote/components
# or
yarn add @mealvote/components
# or
pnpm add @mealvote/components
```

### Peer Dependencies

This library requires the following peer dependencies:

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0",
  "lucide-react": "^0.462.0"
}
```

## 🎨 Usage

### Basic Example

```tsx
import { RecipeCard, VoteCard } from '@mealvote/components';
import '@mealvote/components/styles.css';

function App() {
  const recipe = {
    id: '1',
    title: 'Spicy Thai Basil Chicken',
    imageUrl: 'https://example.com/image.jpg',
    timeTotal: 30,
    servings: 4,
    cuisines: ['Thai'],
    difficulty: 'medium',
  };

  return (
    <div>
      <RecipeCard recipe={recipe} />
      
      <VoteCard
        candidates={[{ id: '1', recipe }]}
        onVote={(ids) => console.log('Voted:', ids)}
        title="What's for dinner?"
      />
    </div>
  );
}
```

### Components

#### RecipeCard

Display recipe information with image, time, servings, and tags.

```tsx
<RecipeCard
  recipe={recipe}
  onClick={() => {}}
  selected={false}
  compact={false}
/>
```

#### VoteCard (Approval Voting)

Approval voting interface where users can select multiple options.

```tsx
<VoteCard
  candidates={candidates}
  onVote={(selectedIds) => console.log(selectedIds)}
  maxSelections={3}
  title="Vote for dinner"
  description="Select all you'd enjoy"
/>
```

#### RankedVoteCard

Ranked voting with drag-and-drop reordering.

```tsx
<RankedVoteCard
  candidates={candidates}
  onVote={(rankedIds) => console.log(rankedIds)}
  title="Rank your preferences"
/>
```

#### TallyBar

Display voting results with progress bars.

```tsx
<TallyBar
  results={results}
  totalVoters={10}
  mode="approval" // or "ranked"
  live={true}
/>
```

#### MealSlot

Calendar slot for meal planning with different states.

```tsx
<MealSlot
  date={new Date()}
  slotType="dinner"
  status="voting"
  voteCount={3}
  onOpenVoting={() => {}}
/>
```

#### PlanGrid

Weekly meal schedule grid.

```tsx
<PlanGrid
  slots={mealSlots}
  onOpenVoting={(slotId) => {}}
  onViewRecipe={(slotId) => {}}
  onMarkCooked={(slotId) => {}}
/>
```

#### ImportBanner

Recipe URL import with progress tracking.

```tsx
<ImportBanner
  onImport={async (url) => {
    // Import logic
  }}
  quota={{ used: 7, total: 10 }}
/>
```

#### CookMode

Large-type cooking instructions with timers.

```tsx
<CookMode
  recipeName="Thai Chicken"
  steps={steps}
  totalTime={30}
  onComplete={() => {}}
  onExit={() => {}}
/>
```

## 🎨 Theming

The library uses CSS custom properties for theming. You can customize colors by overriding these variables:

```css
:root {
  --primary: 20 88% 55%;
  --secondary: 142 76% 45%;
  --accent: 15 100% 65%;
  --background: 45 20% 98%;
  --foreground: 24 24% 15%;
  /* ... more variables */
}
```

## 📚 Storybook

View all components with interactive examples:

```bash
npm run storybook
```

## 🛠️ Development

```bash
# Install dependencies
npm install

# Run demo app
npm run dev

# Run Storybook
npm run storybook

# Build library
npm run build:lib

# Build for production
npm run build
```

## 📝 TypeScript

All components are fully typed. Import types as needed:

```tsx
import type { Recipe } from '@mealvote/components';
```

## 🤝 Contributing

Contributions are welcome! Please read our contributing guide for details.

## 📄 License

MIT © MealVote

## 🔗 Links

- [Documentation](https://mealvote.com/docs)
- [Storybook](https://mealvote.com/storybook)
- [GitHub](https://github.com/mealvote/components)
- [NPM](https://npmjs.com/package/@mealvote/components)
