# 🛠️ FormEngine CLI Guide

The `r-form-engine` CLI is a powerful tool designed to streamline the setup, management, and expansion of your form-driven applications.

## 📋 Prerequisites

Before using the CLI, ensure your project meets the following requirements:

- **Node.js**: v18.0.0 or higher.
- **React**: v18.0.0 or higher.
- **Tailwind CSS**: v4.0.0+ (Recommended) or v3.0.0+.
- **TypeScript**: Highly recommended for the best developer experience.

## 🚀 Quick Start

You can run the CLI without installing it globally using `npx`:

```bash
npx r-form-engine init
```

## ⌨️ Commands

### `init`

Initializes `r-form-engine` in your project. It will ask whether you want to use it as a library or copy the source code (shadcn-style).

```bash
npx r-form-engine init
```

### `create`

Scaffolds a complete new project with React (Vite or Next.js), Tailwind CSS, and your choice of validation (Zod/Yup) and state management (Formik/RHF).

```bash
npx r-form-engine create [project-name]
```

### `add`

Adds specific UI components to your project. This is used in "Copy Code" mode.

```bash
npx r-form-engine add [component-name]
```

### `update`

Updates your locally copied components to the latest versions from the registry.

```bash
npx r-form-engine update [component-name]
```

---

## ✅ Do's and ❌ Don'ts

### ✅ Do's

- **Run `init` first**: Always run `init` before trying to `add` components. It creates the required `r-form.json` config file.
- **Use TypeScript**: The CLI generates TypeScript components. Ensuring your project is TS-ready will prevent most integration issues.
- **Commit changes**: Before running `update`, commit your current work. The CLI may overwrite files if you confirm the prompt.
- **Check `r-form.json`**: You can manually adjust the paths in this file if you want components to be installed in a different directory.

### ❌ Don'ts

- **Don't delete `r-form.json`**: This file tracks your configuration and installed components. Deleting it will break the `add` and `update` commands.
- **Don't ignore Peer Dependencies**: If the CLI installs a component that requires `zod` or `lucide-react`, ensure they are present in your `package.json`.
- **Don't mix versions**: Try to keep your `r-form-engine` package version in sync with the components you've added locally.
- **Don't forget Tailwind**: Most components rely on Tailwind CSS for styling. Ensure your Tailwind configuration includes the paths where components are installed.

---

## 🛠️ Configuration (`r-form.json`)

When you run `init`, a configuration file is created. Example:

```json
{
  "mode": "library",
  "packageName": "r-form-engine",
  "tailwind": true,
  "validation": "zod",
  "formState": "standard",
  "paths": {
    "components": "src/components/ui",
    "core": "src/components/r-form"
  }
}
```
