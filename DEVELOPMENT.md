# Development Guide

## Getting Started

### Installation

```bash
npm install
```

### Development Modes

#### 1. Demo App Development

Run the demo application to see all components in action:

```bash
npm run dev
```

Open [http://localhost:8080](http://localhost:8080) to view the demo app.

#### 2. Storybook Development

Run Storybook to develop and test components in isolation:

```bash
npm run storybook
```

Open [http://localhost:6006](http://localhost:6006) to view Storybook.

### Building

#### Build Demo App

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

#### Build Component Library

```bash
npm run build:lib
```

This creates the npm package distribution files:
- `dist/index.mjs` - ES modules
- `dist/index.cjs` - CommonJS
- `dist/index.d.ts` - TypeScript types
- `dist/style.css` - Bundled styles

#### Build Storybook (Static)

```bash
npm run build-storybook
```

Creates a static Storybook build in `storybook-static/` for deployment.

## Project Structure

```
mealvote-components/
├── .storybook/              # Storybook configuration
│   ├── main.ts
│   └── preview.ts
├── src/
│   ├── components/
│   │   ├── meal-vote/       # Component library
│   │   │   ├── RecipeCard.tsx
│   │   │   ├── VoteCard.tsx
│   │   │   ├── RankedVoteCard.tsx
│   │   │   ├── TallyBar.tsx
│   │   │   ├── MealSlot.tsx
│   │   │   ├── PlanGrid.tsx
│   │   │   ├── ImportBanner.tsx
│   │   │   └── CookMode.tsx
│   │   └── ui/              # Base UI components (shadcn)
│   ├── stories/             # Storybook stories
│   │   ├── RecipeCard.stories.tsx
│   │   ├── VoteCard.stories.tsx
│   │   └── ...
│   ├── pages/               # Demo app pages
│   │   ├── Index.tsx
│   │   ├── Components.tsx
│   │   ├── VotingDemo.tsx
│   │   └── PlanningDemo.tsx
│   ├── lib/
│   │   ├── index.ts         # Library exports
│   │   └── utils.ts
│   ├── index.css            # Design system
│   └── App.tsx
├── vite.config.ts           # Demo app config
├── vite.config.lib.ts       # Library build config
├── tailwind.config.ts       # Tailwind config
├── LIBRARY_README.md        # NPM package documentation
├── PACKAGE_INFO.md          # Publishing guide
└── DEVELOPMENT.md           # This file
```

## Component Development Workflow

### 1. Create a New Component

Create the component file:

```tsx
// src/components/meal-vote/NewComponent.tsx
import { Card } from "@/components/ui/card";

interface NewComponentProps {
  title: string;
  onAction?: () => void;
}

export const NewComponent = ({ title, onAction }: NewComponentProps) => {
  return (
    <Card className="p-6">
      <h3 className="font-semibold">{title}</h3>
      <button onClick={onAction}>Action</button>
    </Card>
  );
};
```

### 2. Create Stories

Create a story file:

```tsx
// src/stories/NewComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { NewComponent } from "../components/meal-vote/NewComponent";

const meta = {
  title: "Components/NewComponent",
  component: NewComponent,
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
  argTypes: {
    onAction: { action: "action-triggered" },
  },
} satisfies Meta<typeof NewComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Example Title",
  },
};
```

### 3. Export from Library

Add to `src/lib/index.ts`:

```tsx
export { NewComponent } from "../components/meal-vote/NewComponent";
export type { NewComponentProps } from "../components/meal-vote/NewComponent";
```

### 4. Test in Storybook

```bash
npm run storybook
```

### 5. Test in Demo App

Add to a demo page or create a new route to showcase the component.

## Design System

### Colors

All colors are defined in `src/index.css` using HSL values:

```css
:root {
  --primary: 20 88% 55%;      /* Orange */
  --secondary: 142 76% 45%;   /* Green */
  --accent: 15 100% 65%;      /* Red-Orange */
  --success: 142 76% 45%;     /* Green */
  --warning: 45 93% 55%;      /* Yellow */
  /* ... */
}
```

### Using Colors in Components

Always use semantic tokens, never hardcode colors:

```tsx
// ✅ Good
<div className="bg-primary text-primary-foreground" />

// ❌ Bad
<div className="bg-orange-500 text-white" />
```

### Gradients

Use predefined gradients from the design system:

```tsx
<Button className="bg-gradient-primary">Click Me</Button>
```

### Shadows

```tsx
<Card className="shadow-medium hover:shadow-strong" />
```

### Animations

```tsx
<div className="animate-fade-in" />
<div className="animate-scale-in" />
<div className="animate-slide-up" />
```

## Testing Components

### Visual Testing with Storybook

1. Start Storybook: `npm run storybook`
2. Navigate to your component
3. Use Controls panel to test different props
4. Use Actions panel to verify event handlers
5. Test different viewport sizes using toolbar

### Integration Testing in Demo App

1. Start dev server: `npm run dev`
2. Navigate to relevant demo page
3. Test user interactions
4. Verify responsive behavior

## Publishing Workflow

### 1. Development

```bash
# Work on components
npm run storybook

# Test in demo app
npm run dev
```

### 2. Pre-publish Checklist

- [ ] All components have TypeScript types
- [ ] All components have Storybook stories
- [ ] Design system tokens are used consistently
- [ ] Components are exported from `src/lib/index.ts`
- [ ] README is updated with new components
- [ ] Version is bumped in package.json

### 3. Build & Test

```bash
# Build library
npm run build:lib

# Test locally
npm link
cd ../test-project
npm link @mealvote/components
```

### 4. Publish

```bash
# Login to npm
npm login

# Publish
npm publish --access public
```

## Deployment

### Deploy Demo App

The demo app can be deployed to any static hosting:

```bash
npm run build
# Deploy dist/ folder
```

### Deploy Storybook

```bash
npm run build-storybook
# Deploy storybook-static/ folder
```

Popular hosting options:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## Troubleshooting

### Storybook Not Starting

```bash
# Clear cache
rm -rf node_modules/.cache
npm run storybook
```

### Build Errors

```bash
# Clear dist folder
rm -rf dist
npm run build:lib
```

### Type Errors

```bash
# Regenerate types
npx tsc --noEmit
```

### Styling Issues

1. Ensure `index.css` is imported
2. Check Tailwind configuration
3. Verify design tokens are defined
4. Use browser DevTools to inspect computed styles

## Best Practices

### Component Design

1. **Single Responsibility** - Each component should do one thing well
2. **Composition** - Build complex UIs from simple components
3. **Props over State** - Prefer controlled components
4. **TypeScript** - Always use proper types

### Styling

1. **Design Tokens** - Use CSS variables from design system
2. **No Magic Values** - Avoid hardcoded colors/sizes
3. **Responsive** - Mobile-first approach
4. **Semantic HTML** - Use proper HTML elements

### Documentation

1. **JSDoc Comments** - Document props and behavior
2. **Storybook Stories** - Show all variants
3. **README** - Keep examples up-to-date
4. **TypeScript** - Types are documentation

## Resources

- [Storybook Documentation](https://storybook.js.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Radix UI](https://www.radix-ui.com/primitives)
- [Lucide Icons](https://lucide.dev/)
- [Vite](https://vitejs.dev/)
