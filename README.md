# 🚀 FormEngine

[![npm version](https://img.shields.io/npm/v/r-form-engine.svg)](https://www.npmjs.com/package/r-form-engine)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue.svg)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.2-61dafb.svg)](https://reactjs.org/)

**A powerful, schema-driven form engine for React with a visual builder, comprehensive validation, and enterprise-grade features.**

## ✨ Features

### 🎨 **Visual Form Builder**

- Drag-and-drop field arrangement
- 60+ configurable properties per field
- Real-time preview
- Schema import/export (JSON)
- Smart field defaults

### 📝 **17 Field Types**

- Text inputs (text, email, url, tel, password)
- Number input with constraints
- Textarea with auto-grow
- Autocomplete with async support
- Native select & multi-select
- Checkbox, Switch, Radio groups
- File upload with preview
- Date, Time, DateTime, DateRange pickers (Native & Custom)

### ✅ **Advanced Validation**

- 20+ validation types
- Zod integration
- Custom validation functions
- Real-time & on-blur validation
- Debounced validation
- Field-specific error messages

### 🎯 **Conditional Logic**

- Show/hide fields based on values
- AND/OR rule combinations
- Reserve space for hidden fields
- Cross-field validation

### 🎨 **Premium UI/UX**

- Floating labels with notch effect
- Error tooltips
- Icon adornments
- Dark mode support
- Fully responsive (12-column grid)
- Tailwind CSS 4.1

### 🌐 **Accessibility**

- ARIA labels
- Keyboard navigation
- Screen reader support
- Semantic HTML

## 📦 Installation

```bash
npm install r-form-engine
```

### Peer Dependencies

```bash
npm install react react-dom tailwindcss zod
```

## 🚀 Quick Start

### 1. Basic Form

```tsx
import { SchemaForm } from "r-form-engine";
import type { FormSchema } from "r-form-engine";

const schema: FormSchema = {
  title: "Contact Form",
  description: "Get in touch with us",
  fields: [
    {
      id: "name",
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "John Doe",
      validation: [{ type: "required", message: "Name is required" }],
      grid: { colSpan: 12, xs: 12, sm: 6 },
    },
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "john@example.com",
      validation: [{ type: "required" }, { type: "email", message: "Invalid email" }],
      grid: { colSpan: 12, xs: 12, sm: 6 },
    },
    {
      id: "message",
      name: "message",
      label: "Message",
      type: "textarea",
      rows: 4,
      grid: { colSpan: 12 },
    },
  ],
};

function App() {
  return (
    <SchemaForm
      schema={schema}
      onSubmit={(values) => {
        console.log("Form submitted:", values);
      }}
    />
  );
}
```

### 2. Form Builder

```tsx
import { FormBuilder } from "r-form-engine";

function App() {
  return <FormBuilder />;
}
```

### 3. Advanced Features

```tsx
import { SchemaForm } from "r-form-engine";
import { useRef } from "react";
import type { SchemaFormHandle } from "r-form-engine";

function App() {
  const formRef = useRef<SchemaFormHandle>(null);

  return (
    <>
      <SchemaForm
        ref={formRef}
        schema={schema}
        debug // Show debug panel
        onValidate={(values) => {
          // Custom cross-field validation
          const errors: Record<string, string> = {};
          if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords don't match";
          }
          return errors;
        }}
        onSubmit={(values) => {
          console.log("Submitted:", values);
        }}
      />

      <button onClick={() => formRef.current?.submit()}>Submit Form</button>
      <button onClick={() => formRef.current?.reset()}>Reset Form</button>
    </>
  );
}
```

## 📚 Documentation

### Field Types

| Type           | Description       | Special Props                                  |
| -------------- | ----------------- | ---------------------------------------------- |
| `text`         | Single-line text  | `minLength`, `maxLength`, `pattern`            |
| `email`        | Email input       | Auto email validation                          |
| `url`          | URL input         | Auto URL validation                            |
| `tel`          | Phone number      | `pattern` for format                           |
| `password`     | Password input    | Masked input                                   |
| `number`       | Numeric input     | `min`, `max`, `step`                           |
| `textarea`     | Multi-line text   | `rows`, `autoGrow`, `showCharCount`            |
| `autocomplete` | Searchable select | `options`, `multiple`, `asyncUrl`, `creatable` |
| `select`       | Native select     | `options`, `multiple`                          |
| `checkbox`     | Checkbox          | `checkboxLabel`                                |
| `switch`       | Toggle switch     | Boolean value                                  |
| `radio`        | Radio group       | `options`, `direction`                         |
| `file`         | File upload       | `accept`, `maxSize`, `maxFiles`                |
| `date`         | Date picker       | `minDate`, `maxDate`, `dateFormat`             |
| `time`         | Time picker       | `timeFormat`                                   |
| `datetime`     | Date + Time       | `dateFormat`, `timeFormat`                     |
| `daterange`    | Date range        | `minDate`, `maxDate`                           |

### Validation Types

```typescript
type ValidationRule =
  | { type: "required"; message?: string }
  | { type: "email"; message?: string }
  | { type: "url"; message?: string }
  | { type: "minLength"; value: number; message?: string }
  | { type: "maxLength"; value: number; message?: string }
  | { type: "min"; value: number; message?: string }
  | { type: "max"; value: number; message?: string }
  | { type: "pattern"; value: string; message?: string }
  | { type: "regex"; value: RegExp; message?: string }
  | { type: "fileSize"; value: number; message?: string }
  | { type: "fileType"; value: string[]; message?: string }
  | { type: "minDate"; value: Date; message?: string }
  | { type: "maxDate"; value: Date; message?: string }
  | { type: "integer"; message?: string }
  | { type: "positive"; message?: string }
  | { type: "negative"; message?: string }
  | { type: "custom"; validate: (value: any) => boolean; message?: string };
```

### Conditional Visibility

```typescript
{
  id: "other-role",
  name: "otherRole",
  label: "Specify Role",
  type: "text",
  visibilityRules: [
    { field: "role", operator: "eq", value: "other" }
  ],
  reserveSpace: true // Keeps layout stable
}
```

### Grid Layout

```typescript
{
  grid: {
    colSpan: 6,    // Desktop (default)
    xs: 12,        // Mobile (<640px)
    sm: 6,         // Tablet (640px+)
    lg: 4          // Large desktop (1024px+)
  }
}
```

## 🎨 Theming

FormEngine uses Tailwind CSS 4.1 with CSS variables for theming:

```css
@theme {
  --color-primary: oklch(0.6 0.2 250);
  --color-background: oklch(1 0 0);
  --color-foreground: oklch(0.2 0 0);
  /* ... more variables */
}
```

Toggle dark mode:

```tsx
import { ThemeProvider, ThemeSwitcher } from "r-form-engine";

function App() {
  return (
    <ThemeProvider defaultTheme="system">
      <ThemeSwitcher />
      {/* Your forms */}
    </ThemeProvider>
  );
}
```

## 🔧 Configuration

### TypeScript

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Tailwind CSS

```js
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/r-form-engine/**/*.{js,ts,jsx,tsx}",
  ],
};
```

## 📖 Examples

Check out the `/examples` directory for:

- Basic form
- Multi-step wizard
- Dynamic fields
- File upload
- Async autocomplete
- Conditional logic
- Custom validation

## 🤝 Contributing

Contributions are welcome! Please read our [Contributing Guide](CONTRIBUTING.md) for details.

## 📄 License

MIT © Adarsh A

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Date pickers powered by Custom Native Components
- Validation with [Zod](https://zod.dev/)

## 🔗 Links

- [Documentation](https://adarshatl03.github.io/form-engine/)
- [GitHub](https://github.com/adarshatl03/form-engine)
- [NPM](https://www.npmjs.com/package/r-form-engine)
- [Demo](https://adarshatl03.github.io/form-engine/)

---

**Made with ❤️ by the FormEngine team**
