import { useState, useMemo, useRef } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SchemaForm, type SchemaFormHandle } from "@/components/SchemaForm";
import { FormBuilder } from "@/components/builder/FormBuilder";
import { PlaygroundPage } from "@/components/playground/PlaygroundPage";
import { Documentation } from "@/components/demo/Documentation";
import { Home } from "@/components/pages/Home";
import { ReadmePage } from "@/components/pages/ReadmePage";
import { GuidePage } from "@/components/pages/GuidePage";
import { ChangelogPage } from "@/components/pages/ChangelogPage";
import { TasksPage } from "@/components/pages/TasksPage";
import { ThemeOverridesPage } from "@/components/pages/ThemeOverridesPage";
import type { FormSchema } from "@/types/schema";
import type { FormTheme } from "@/components/theme/types";
import { defaultTheme } from "@/components/theme/defaultTheme";

const App = () => {
  const [view, setView] = useState<
    | "home"
    | "demo"
    | "builder"
    | "design"
    | "docs"
    | "readme"
    | "guide"
    | "changelog"
    | "tasks"
    | "theme"
  >("home");
  const formRef = useRef<SchemaFormHandle>(null);
  const [debugValues, setDebugValues] = useState<any>({});
  const [demoTheme, setDemoTheme] = useState<FormTheme | undefined>(undefined);

  const ultimateSchema = useMemo<FormSchema>(
    () => ({
      title: "Complete Feature Demo",
      description: "A comprehensive showcase of all field types and conditional logic.",
      fields: [
        // Section 1: Basic Inputs
        {
          id: "basic",
          name: "basic",
          label: "Basic Inputs",
          type: "text",
          hidden: true,
          grid: { colSpan: 12 },
        },
        {
          id: "fullname",
          name: "personal.fullname",
          label: "Full Name (Text)",
          type: "text",
          placeholder: "John Doe",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          validation: [{ type: "required", message: "Name is required" }],
        },
        {
          id: "email",
          name: "personal.email",
          label: "Email Address",
          type: "email",
          placeholder: "john@company.com",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          validation: [{ type: "email", message: "Invalid email" }],
        },
        {
          id: "website",
          name: "personal.website",
          label: "Website (URL)",
          type: "url",
          placeholder: "https://example.com",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          validation: [{ type: "url" }],
        },
        {
          id: "phone",
          name: "personal.phone",
          label: "Phone (Tel)",
          type: "tel",
          placeholder: "+1 555 123 4567",
          grid: { colSpan: 6, xs: 12, sm: 6 },
        },
        {
          id: "password",
          name: "security.password",
          label: "Password",
          type: "password",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          validation: [{ type: "minLength", value: 8 }],
        },
        {
          id: "age",
          name: "personal.age",
          label: "Age (Number)",
          type: "number",
          placeholder: "25",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          step: 1,
          validation: [{ type: "min", value: 18, message: "Must be 18+" }],
        },

        // Section 2: Selection Controls
        {
          id: "role",
          name: "job.role",
          label: "Role (Autocomplete)",
          type: "autocomplete",
          options: [
            { label: "Developer", value: "dev" },
            { label: "Designer", value: "design" },
            { label: "Manager", value: "pm" },
            { label: "Other", value: "other" },
          ],
          grid: { colSpan: 6, xs: 12, sm: 6 },
        },
        {
          id: "department",
          name: "job.department",
          label: "Department (Native Select)",
          type: "select",
          options: [
            { label: "Engineering", value: "eng" },
            { label: "Marketing", value: "mkt" },
            { label: "Sales", value: "sales" },
          ],
          grid: { colSpan: 6, xs: 12, sm: 6 },
        },
        {
          id: "skills",
          name: "job.skills",
          label: "Skills (Multi-Select Autocomplete)",
          type: "autocomplete",
          multiple: true,
          options: [
            { label: "React", value: "react" },
            { label: "Vue", value: "vue" },
            { label: "Angular", value: "angular" },
            { label: "Svelte", value: "svelte" },
          ],
          grid: { colSpan: 12 },
        },

        // Section 3: Conditional Logic Example
        {
          id: "other-role",
          name: "job.otherRole",
          label: "Specify Role (Conditionally Visible)",
          type: "text",
          grid: { colSpan: 12 },
          reserveSpace: true,
          visibilityRules: [{ field: "job.role", operator: "eq", value: "other" }],
          validation: [{ type: "required", message: "Please specify your role" }],
          helperText: "Visible only when Role is 'Other'",
        },

        // Section 4: Boolean Controls
        {
          id: "remote",
          name: "job.remote",
          label: "Open to Remote Work? (Switch)",
          type: "switch",
          grid: { colSpan: 6 },
          defaultValue: true,
        },
        {
          id: "relocate",
          name: "job.relocate",
          label: "Willing to relocate? (Checkbox)",
          type: "checkbox",
          checkboxLabel: "Yes, I can relocate",
          grid: { colSpan: 6 },
        },
        {
          id: "employment",
          name: "job.employment",
          label: "Employment Type (Radio)",
          type: "radio",
          options: [
            { label: "Full-time", value: "ft" },
            { label: "Part-time", value: "pt" },
            { label: "Contract", value: "ct" },
          ],
          direction: { xs: "vertical", sm: "horizontal" },
          grid: { colSpan: 12 },
        },

        // Section 5: Date & Time
        {
          id: "dob",
          name: "personal.dob",
          label: "Date of Birth (Date)",
          type: "date",
          grid: { colSpan: 4, xs: 12, sm: 4 },
        },
        {
          id: "interviewTime",
          name: "job.interviewTime",
          label: "Preferred Time (Time)",
          type: "time",
          grid: { colSpan: 4, xs: 12, sm: 4 },
        },
        {
          id: "startDateTime",
          name: "job.startDateTime",
          label: "Start Date & Time (DateTime)",
          type: "datetime",
          grid: { colSpan: 4, xs: 12, sm: 4 },
        },
        {
          id: "availability",
          name: "job.availability",
          label: "Availability Period (DateRange)",
          type: "daterange",
          grid: { colSpan: 12 },
          format: "dd MMM yyyy",
        },

        // Section 6: File & Textarea
        {
          id: "bio",
          name: "personal.bio",
          label: "Bio (Textarea)",
          type: "textarea",
          minRows: 3,
          grid: { colSpan: 12 },
          showCharCount: true,
          validation: [{ type: "maxLength", value: 500 }],
        },
        {
          id: "resume",
          name: "personal.resume",
          label: "Resume (File)",
          type: "file",
          accept: ".pdf,.doc,.docx",
          grid: { colSpan: 12 },
        },
      ],
    }),
    []
  );

  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setView("home")}>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                  <polyline points="14 2 14 8 20 8" />
                  <path d="M9 13h6" />
                  <path d="M9 17h6" />
                </svg>
              </div>
              <h1 className="font-bold text-xl tracking-tight hidden sm:block">
                Form<span className="text-primary">Engine</span>
              </h1>
            </div>

            <div className="flex items-center gap-4">
              <nav className="flex items-center gap-1 overflow-x-auto">
                <button
                  onClick={() => setView("home")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "home"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Home
                </button>
                <button
                  onClick={() => setView("readme")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "readme"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Readme
                </button>
                <div className="h-4 w-px bg-border mx-1" />
                <button
                  onClick={() => setView("demo")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "demo"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Demo
                </button>
                <button
                  onClick={() => setView("builder")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "builder"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Builder
                </button>
                <button
                  onClick={() => setView("design")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "design"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Playground
                </button>
                <div className="h-4 w-px bg-border mx-1" />
                <button
                  onClick={() => setView("docs")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "docs"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  API
                </button>
                <button
                  onClick={() => setView("guide")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "guide"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Guide
                </button>
                <button
                  onClick={() => setView("changelog")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "changelog"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Changes
                </button>
                <button
                  onClick={() => setView("tasks")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "tasks"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Tasks
                </button>
                <div className="h-4 w-px bg-border mx-1" />
                <button
                  onClick={() => setView("theme")}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-all ${
                    view === "theme"
                      ? "text-primary bg-primary/10"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  Theming
                </button>
              </nav>
              <div className="h-6 w-px bg-border mx-2 hidden sm:block" />
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
            {view === "home" && <Home />}
            {view === "readme" && <ReadmePage />}
            {view === "builder" && <FormBuilder />}
            {view === "design" && <PlaygroundPage />}
            {view === "docs" && <Documentation />}
            {view === "guide" && <GuidePage />}
            {view === "changelog" && <ChangelogPage />}
            {view === "tasks" && <TasksPage />}
            {view === "theme" && <ThemeOverridesPage />}
            {view === "demo" && (
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column: Logic Guide */}
                <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-24">
                  <div className="p-6 bg-card border border-border rounded-xl shadow-sm">
                    <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                      <span className="text-blue-500">⚡</span> Active Conditions
                    </h3>
                    <div className="space-y-3">
                      <div
                        className={`p-3 rounded-lg border transition-colors ${
                          debugValues?.job?.role === "other"
                            ? "bg-green-500/10 border-green-500 text-green-700 dark:text-green-300"
                            : "bg-muted/50 border-transparent text-muted-foreground"
                        }`}
                      >
                        <div className="text-xs font-semibold uppercase mb-1">Condition 1</div>
                        <div className="text-sm font-medium">Show "Specify Role" field</div>
                        <div className="text-xs opacity-80 mt-1">Rule: Role == "Other"</div>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-muted-foreground">
                      <p>
                        Interact with the form on the right to see conditions trigger in real-time.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Right Column: The Form */}
                <div className="lg:col-span-2">
                  <div className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-xl relative overflow-hidden">
                    {/* Decorative background gradients */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                    <div className="flex justify-between items-center mb-6">
                      <h2 className="text-xl font-bold">Dynamic Form</h2>
                      <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400">
                          Theme:
                        </label>
                        <select
                          className="text-sm border border-border rounded px-2 py-1 bg-background"
                          onChange={(e) => {
                            const val = e.target.value;
                            if (val === "default") {
                              setDemoTheme(undefined);
                            } else if (val === "ocean") {
                              setDemoTheme({
                                ...defaultTheme,
                                textInput: {
                                  ...defaultTheme.textInput,
                                  // Custom "Ocean" style
                                  input:
                                    "flex h-12 w-full rounded-full border-2 border-blue-200 bg-blue-50/50 px-4 py-2 text-sm text-blue-900 placeholder:text-blue-400 focus:outline-none focus:border-blue-500 transition-all",
                                },
                                // Add more overrides as needed
                              });
                            } else if (val === "forest") {
                              setDemoTheme({
                                ...defaultTheme,
                                textInput: {
                                  ...defaultTheme.textInput,
                                  // Custom "Forest" style
                                  root: "flex flex-col gap-1 mb-4",
                                  input:
                                    "flex h-10 w-full rounded-none border-b-2 border-green-700 bg-green-50/20 px-0 py-2 text-sm text-green-900 placeholder:text-green-700/50 focus:outline-none focus:border-green-500 transition-all",
                                  label:
                                    "text-xs font-bold uppercase text-green-800 tracking-wider",
                                },
                              });
                            }
                          }}
                        >
                          <option value="default">Default</option>
                          <option value="ocean">Ocean (Round)</option>
                          <option value="forest">Forest (Underline)</option>
                        </select>
                      </div>
                    </div>

                    <div className="relative z-10">
                      <SchemaForm
                        debug
                        theme={demoTheme}
                        onValuesChange={(vals) => setDebugValues(vals)}
                        onSubmit={(values) => {
                          console.log("Submitted:", values);
                          alert("Form Submitted!\n\nPayload:\n" + JSON.stringify(values, null, 2));
                        }}
                        schema={ultimateSchema}
                        hideTitle
                        ref={formRef}
                      />

                      {/* External Actions Buttons */}
                      <div className="mt-8 flex justify-end gap-3 pt-6 border-t border-border">
                        <button
                          type="button"
                          className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200 transition-colors"
                          onClick={() => formRef.current?.reset()}
                        >
                          Cancel
                        </button>
                        <button
                          type="button"
                          onClick={() => formRef.current?.submit()}
                          className="px-6 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-colors shadow-sm font-medium"
                        >
                          Submit Form
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
