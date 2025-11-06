# Dark Mode Styling Guide

This app uses a variable-driven approach for consistent light/dark rendering.

## Semantic utility classes

Use these classes for text and surfaces:

- `app-text-strong` — primary text (headings, key numbers)
- `app-text-subtle` — secondary text (descriptions, body copy)
- `app-text-muted` — tertiary text (captions, timestamps, helper notes)
- `app-bg-surface` — default card/surface background
- `app-bg-surface-alt` — alternate surface
- `app-border-default` — standard border color

These are backed by CSS custom properties defined in `src/styles.css` and are dark-mode aware.

## Legacy Tailwind utilities

Common Tailwind color utilities like `text-zinc-600` or `bg-zinc-50` still work. In dark mode, we map them to theme variables to preserve readability. Prefer semantic classes for new code.

## Examples

```tsx
<Card>
  <CardHeader>
    <CardTitle className="app-text-strong">Daily Performance Log</CardTitle>
    <CardDescription className="app-text-subtle">
      Record your daily goals, execution, and reflections
    </CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-xs app-text-muted">
      💡 Tips render clearly in dark mode
    </p>
  </CardContent>
</Card>
```

## Migration tips

- Replace `text-zinc-900 dark:text-zinc-100` with `app-text-strong`
- Replace `text-zinc-700 dark:text-zinc-300` with `app-text-subtle`
- Replace `text-zinc-500 dark:text-zinc-500` with `app-text-muted`

If you spot unreadable text in dark mode, convert it to a semantic class.
