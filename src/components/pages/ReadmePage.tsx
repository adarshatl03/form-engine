export const ReadmePage = () => {
  return (
    <div className="max-w-4xl mx-auto pb-20 space-y-8">
      {/* Header */}
      <div className="border-b border-border pb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <img src="https://img.shields.io/npm/v/r-form-engine.svg" alt="npm version" />
          <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License" />
          <img src="https://img.shields.io/badge/TypeScript-5.0-blue.svg" alt="TypeScript" />
          <img src="https://img.shields.io/badge/React-18-61dafb.svg" alt="React" />
        </div>
        <h1 className="text-4xl font-extrabold mb-4">FormEngine</h1>
        <p className="text-xl text-muted-foreground">
          A powerful, schema-driven form engine for React with a visual builder, comprehensive
          validation, and enterprise-grade features.
        </p>
      </div>

      {/* Features */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b border-border pb-2">✨ Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          <div className="p-4 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">🎨 Visual Form Builder</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Drag-and-drop field arrangement</li>
              <li>60+ configurable properties per field</li>
              <li>Real-time preview</li>
              <li>Schema import/export (JSON)</li>
              <li>Smart field defaults</li>
            </ul>
          </div>

          <div className="p-4 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">📝 17 Field Types</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Text inputs (text, email, url, tel, password)</li>
              <li>Number with constraints</li>
              <li>Textarea with auto-grow</li>
              <li>Autocomplete (Async support)</li>
              <li>Native select & Multi-select</li>
              <li>Checkbox, Switch, Radio</li>
              <li>File upload with preview</li>
              <li>
                <strong>Date, Time, DateTime, Range (Native)</strong>
              </li>
            </ul>
          </div>

          <div className="p-4 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">✅ Advanced Validation</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>20+ validation types (Zod integration)</li>
              <li>Custom functions</li>
              <li>Real-time & on-blur</li>
              <li>Debounced validation</li>
              <li>Field-specific error messages</li>
            </ul>
          </div>
          <div className="p-4 bg-card rounded-xl border border-border">
            <h3 className="font-semibold text-lg mb-2">🎯 Conditional Logic</h3>
            <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
              <li>Show/hide based on values</li>
              <li>AND/OR rule combinations</li>
              <li>Reserve space for hidden fields</li>
              <li>Cross-field validation</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b border-border pb-2">📦 Installation</h2>
        <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          npm install r-form-engine
        </div>

        <h3 className="text-lg font-semibold mt-4">Peer Dependencies</h3>
        <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          npm install react react-dom tailwindcss zod
        </div>
      </section>

      {/* Quick Start */}
      <section className="space-y-4">
        <h2 className="text-2xl font-bold border-b border-border pb-2">🚀 Quick Start</h2>
        <p className="text-muted-foreground">Basic usage example:</p>
        <div className="bg-slate-950 text-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
          {`import { SchemaForm } from "r-form-engine";
import type { FormSchema } from "r-form-engine";

const schema: FormSchema = {
  title: "Contact Form",
  description: "Get in touch with us",
  fields: [
    {
      id: "email",
      name: "email",
      label: "Email",
      type: "email",
      validation: [{ type: "required" }, { type: "email" }],
      grid: { colSpan: 12 }
    }
  ],
};

function App() {
  return (
    <SchemaForm
      schema={schema}
      onSubmit={(values) => console.log(values)}
    />
  );
}`}
        </div>
      </section>
    </div>
  );
};
