# MealVote Components

A React component library for collaborative meal planning and voting applications.

## 📦 NPM Package

Install the component library:

```bash
npm install @phantazyinteractive/mealvote-components
```

```tsx
import { RecipeCard, VoteCard, CookMode } from '@phantazyinteractive/mealvote-components';
import '@phantazyinteractive/mealvote-components/style.css';
```

## 🌐 Live Demo

**Interactive Demo**: https://phantazy-interactive.github.io/meal-vote-app/

Explore all components in action with live examples of voting, planning, and cooking modes.

## 📚 Additional Documentation

For detailed component documentation and isolated examples, run Storybook locally:

```bash
npm run storybook
```

## 🚀 Components

- **RecipeCard** - Display recipe information with images and details
- **VoteCard** - Interactive voting interface for recipes
- **RankedVoteCard** - Ranked choice voting component
- **CookMode** - Step-by-step cooking instructions interface
- **MealSlot** - Time-based meal planning slots
- **TallyBar** - Visual vote tallying and results
- **ImportBanner** - Recipe import interface
- **PlanGrid** - Weekly meal planning grid

Plus all shadcn/ui components included.

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
