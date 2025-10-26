# Simplified Component APIs

This document demonstrates the simplified APIs for Alert, AlertDialog, and Toast components.

## Alert Component

The Alert component now supports both a simple prop-based API and the traditional composition API.

### Simple API (Recommended for basic use)

```tsx
import { Alert } from '@phantazyinteractive/mealvote-components';

// Success alert with auto icon
<Alert 
  variant="success"
  title="Success!"
  description="Your changes have been saved."
/>

// Warning alert
<Alert 
  variant="warning"
  title="Warning"
  description="This action may have consequences."
/>

// Info alert
<Alert 
  variant="info"
  title="Did you know?"
  description="You can use different variants."
/>

// Error/Destructive alert
<Alert 
  variant="destructive"
  title="Error"
  description="Something went wrong."
/>

// Alert without icon
<Alert 
  variant="default"
  title="Note"
  description="This has no icon."
  icon={false}
/>

// Alert with custom icon
<Alert 
  variant="default"
  title="Featured"
  description="Custom icon alert."
  icon={<Star className="h-4 w-4" />}
/>
```

### Composition API (For advanced customization)

```tsx
import { Alert, AlertTitle, AlertDescription } from '@phantazyinteractive/mealvote-components';
import { Terminal } from 'lucide-react';

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app.
  </AlertDescription>
</Alert>
```

### Available Variants
- `default` - Terminal icon
- `destructive` - AlertCircle icon (red)
- `success` - CheckCircle2 icon (green)
- `warning` - AlertTriangle icon (yellow)
- `info` - Info icon (blue)

---

## AlertDialog Component

The `AlertDialog` component now has a simple prop-based API. For advanced use cases requiring full composition control, use `AlertDialogRoot` with the individual components.

### Simple API (Recommended)

```tsx
import { AlertDialog, Button } from '@phantazyinteractive/mealvote-components';

// Basic confirmation
<AlertDialog
  trigger={<Button variant="outline">Open Alert</Button>}
  title="Are you absolutely sure?"
  description="This action cannot be undone."
  onAction={() => console.log('Confirmed')}
/>

// Delete confirmation (destructive variant)
<AlertDialog
  trigger={<Button variant="destructive">Delete</Button>}
  title="Delete this item?"
  description="This will be permanently deleted."
  variant="destructive"
  actionText="Delete"
  cancelText="Cancel"
  onAction={() => handleDelete()}
/>

// Save changes dialog
<AlertDialog
  trigger={<Button>Save Changes</Button>}
  title="Save your changes?"
  description="You have unsaved changes."
  cancelText="Don't Save"
  actionText="Save Changes"
  onAction={() => handleSave()}
  onCancel={() => handleDiscard()}
/>

// With custom content
<AlertDialog
  trigger={<Button>Show Custom</Button>}
  title="Custom Content"
  description="Dialog with extra content."
>
  <div className="py-4">
    <p>Add any custom content here!</p>
  </div>
</AlertDialog>

// Controlled (programmatic open/close)
const [open, setOpen] = useState(false);

<AlertDialog
  open={open}
  onOpenChange={setOpen}
  title="Controlled Dialog"
  description="This can be opened programmatically."
  onAction={() => {
    handleAction();
    setOpen(false);
  }}
/>
```

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `trigger` | `ReactNode` | - | Button or element that opens the dialog |
| `title` | `ReactNode` | **required** | Dialog title |
| `description` | `ReactNode` | - | Dialog description |
| `cancelText` | `string` | `"Cancel"` | Cancel button text |
| `actionText` | `string` | `"Continue"` | Action button text |
| `onCancel` | `() => void` | - | Cancel button callback |
| `onAction` | `() => void` | - | Action button callback |
| `variant` | `"default" \| "destructive"` | `"default"` | Button styling variant |
| `open` | `boolean` | - | Controlled open state |
| `onOpenChange` | `(open: boolean) => void` | - | Controlled state handler |
| `children` | `ReactNode` | - | Custom content between description and buttons |

### Composition API (For full control)

For advanced use cases where you need full control over the dialog structure, use `AlertDialogRoot` and the individual components:

```tsx
import {
  AlertDialogRoot,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
  Button
} from '@phantazyinteractive/mealvote-components';

<AlertDialogRoot>
  <AlertDialogTrigger asChild>
    <Button variant="outline">Open</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialogRoot>
```

---

## Toast Component

The toast system now supports more variants and automatic icons.

### Setup

Add the `Toaster` component once in your app root:

```tsx
import { Toaster } from '@phantazyinteractive/mealvote-components';

function App() {
  return (
    <>
      {/* Your app content */}
      <Toaster />
    </>
  );
}
```

### Usage

```tsx
import { useToast } from '@phantazyinteractive/mealvote-components';

function MyComponent() {
  const { toast } = useToast();

  // Success toast (auto green check icon)
  toast({
    variant: "success",
    title: "Success!",
    description: "Your changes have been saved.",
  });

  // Warning toast (auto yellow warning icon)
  toast({
    variant: "warning",
    title: "Warning!",
    description: "This action may have consequences.",
  });

  // Info toast (auto blue info icon)
  toast({
    variant: "info",
    title: "Did you know?",
    description: "You can customize these toasts.",
  });

  // Error toast (auto red error icon)
  toast({
    variant: "destructive",
    title: "Error!",
    description: "Something went wrong.",
  });

  // Default toast (no auto icon)
  toast({
    title: "Notification",
    description: "This is a default toast.",
  });

  // Toast with custom icon
  toast({
    title: "Featured!",
    description: "Custom icon toast.",
    icon: <Star className="h-5 w-5" />,
  });

  // Toast without icon
  toast({
    title: "Simple message",
    description: "No icon here.",
    icon: null,
  });

  // Toast with action button
  toast({
    title: "Undo action",
    description: "You can undo this.",
    action: (
      <Button variant="outline" size="sm" onClick={() => handleUndo()}>
        Undo
      </Button>
    ),
  });
}
```

### Available Variants
- `default` - No auto icon (white background)
- `destructive` - AlertCircle icon (red background)
- `success` - CheckCircle2 icon (green tint)
- `warning` - AlertTriangle icon (yellow tint)
- `info` - Info icon (blue tint)

### Props

All toast options from the previous API, plus:

| Prop | Type | Description |
|------|------|-------------|
| `variant` | `"default" \| "destructive" \| "success" \| "warning" \| "info"` | Toast style variant |
| `icon` | `ReactNode \| null` | Custom icon or `null` to hide auto icon |
| `title` | `ReactNode` | Toast title |
| `description` | `ReactNode` | Toast description |
| `action` | `ReactElement` | Action button element |

---

## Migration Guide

### Alert

**Before:**
```tsx
<Alert variant="destructive">
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>Something went wrong</AlertDescription>
</Alert>
```

**After (simple):**
```tsx
<Alert 
  variant="destructive"
  title="Error"
  description="Something went wrong"
/>
```

### AlertDialog

**Before:**
```tsx
<AlertDialog>
  <AlertDialogTrigger asChild>
    <Button>Delete</Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Delete item?</AlertDialogTitle>
      <AlertDialogDescription>This cannot be undone.</AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction>Delete</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
```

**After (simple):**
```tsx
<AlertDialog
  trigger={<Button>Delete</Button>}
  title="Delete item?"
  description="This cannot be undone."
  actionText="Delete"
  variant="destructive"
  onAction={handleDelete}
/>
```

> **Note:** For advanced use cases requiring full composition control, use `AlertDialogRoot` instead of `AlertDialog`.

### Toast

**Before:**
```tsx
toast({
  title: "Success",
  description: "Saved successfully",
});
```

**After (with auto icon):**
```tsx
toast({
  variant: "success",
  title: "Success",
  description: "Saved successfully",
});
```

## Benefits

1. **Less code** - Fewer imports and lines of code for common cases
2. **Auto icons** - Appropriate icons selected based on variant
3. **Type safety** - Full TypeScript support with exported types
4. **Backwards compatible** - All old composition APIs still work
5. **Flexible** - Use simple API for common cases, composition for advanced needs
