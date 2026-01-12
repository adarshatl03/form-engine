import { useState, useMemo, useRef } from "react";
import { ThemeProvider } from "@/context/ThemeContext";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { SchemaForm, type SchemaFormHandle } from "@/components/SchemaForm";
import { FormBuilder } from "@/components/builder/FormBuilder";
import { StatesGallery } from "@/components/demo/StatesGallery";
import { Documentation } from "@/components/demo/Documentation";
import type { FormSchema } from "@/types/schema";

const App = () => {
  const [view, setView] = useState<"demo" | "builder" | "design" | "docs">(
    "demo"
  );
  const formRef = useRef<SchemaFormHandle>(null);

  const ultimateSchema = useMemo<FormSchema>(
    () => ({
      title: "Global Summit Registration",
      description:
        "Please provide your professional details for the 2026 Summit.",
      fields: [
        // Section: Basic Info
        {
          id: "fullname",
          name: "personal.fullname",
          label: "Full Name",
          type: "text",
          placeholder: "John Doe",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          validation: [{ type: "required", message: "Name is required" }],
        },
        {
          id: "email",
          name: "personal.email",
          label: "Business Email",
          type: "email",
          placeholder: "john@company.com",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          validation: [
            { type: "required" },
            { type: "email", message: "Enter a valid business email" },
          ],
        },
        // Section: Professional Details
        {
          id: "role",
          name: "job.role",
          label: "Professional Role",
          type: "autocomplete",
          options: [
            { label: "Developer", value: "dev" },
            { label: "Designer", value: "design" },
            { label: "Product Manager", value: "pm" },
            { label: "Architect", value: "arch" },
            { label: "Other", value: "other" },
          ],
          grid: { colSpan: 6, xs: 12, sm: 6 },
        },
        {
          id: "other-role",
          name: "job.otherRole",
          label: "Specify Role",
          type: "text",
          grid: { colSpan: 6, xs: 12, sm: 6 },
          reserveSpace: true,
          visibilityRules: [
            { field: "job.role", operator: "eq", value: "other" },
          ],
          validation: [
            { type: "required", message: "Please specify your role" },
          ],
        },
        // Section: Logistics
        {
          id: "travel-needed",
          name: "logistics.travelNeeded",
          label: "Require Travel Assistance?",
          type: "switch",
          grid: { colSpan: 12 },
          defaultValue: false,
        },
        {
          id: "dates",
          name: "logistics.stayDuration",
          label: "Stay Duration",
          type: "daterange",
          grid: { colSpan: 12 },
          visibilityRules: [
            { field: "logistics.travelNeeded", operator: "eq", value: true },
          ],
          validation: [
            { type: "required", message: "Stay dates are required" },
          ],
        },
        // Section: Preferences
        {
          id: "tracks",
          name: "interests.tracks",
          label: "Interested Tracks",
          type: "autocomplete",
          multiple: true,
          options: [
            { label: "AI & ML", value: "ai" },
            { label: "Web Performance", value: "web" },
            { label: "Cybersecurity", value: "sec" },
            { label: "Cloud Native", value: "cloud" },
          ],
          grid: { colSpan: 12 },
        },
        {
          id: "bio",
          name: "personal.bio",
          label: "Short Bio",
          type: "textarea",
          placeholder: "Tell us about yourself...",
          minRows: 3,
          maxRows: 6,
          resize: "vertical",
          grid: { colSpan: 12 },
          validateOnChange: true,
          validation: [{ type: "maxLength", value: 200 }],
        },
        {
          id: "pref-comm",
          name: "personal.preferredCommunication",
          label: "Preferred Communication",
          type: "radio",
          options: [
            { label: "Email", value: "email" },
            { label: "Phone", value: "phone" },
            { label: "Slack", value: "slack" },
            { label: "WhatsApp", value: "whatsapp" },
          ],
          direction: { xs: "vertical", sm: "horizontal" },
          grid: { colSpan: 12 },
        },
        {
          id: "resume",
          name: "personal.resume",
          label: "Speaker Resume / Profile (PDF)",
          type: "file",
          accept: ".pdf",
          maxSize: 2 * 1024 * 1024, // 2MB
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
            <div className="flex items-center gap-2">
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
              <nav className="flex items-center bg-muted p-1 rounded-md">
                <button
                  onClick={() => setView("demo")}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    view === "demo"
                      ? "bg-background shadow text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  DEMO
                </button>
                <button
                  onClick={() => setView("builder")}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    view === "builder"
                      ? "bg-background shadow text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Builder
                </button>
                <button
                  onClick={() => setView("design")}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    view === "design"
                      ? "bg-background shadow text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Gallery
                </button>
                <button
                  onClick={() => setView("docs")}
                  className={`px-3 py-1.5 text-sm font-medium rounded transition-all ${
                    view === "docs"
                      ? "bg-background shadow text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Docs
                </button>
              </nav>
              <div className="h-6 w-px bg-border mx-2" />
              <ThemeSwitcher />
            </div>
          </div>
        </header>

        <main className="container mx-auto px-4 py-8">
          {view === "builder" ? (
            <FormBuilder />
          ) : view === "design" ? (
            <StatesGallery />
          ) : view === "docs" ? (
            <Documentation />
          ) : (
            <div className="max-w-4xl mx-auto">
              {/* Premium Header */}
              {/* Premium Header - Removed */}

              {/* The Form */}
              <div className="p-8 md:p-10 rounded-3xl border border-border bg-card shadow-2xl relative overflow-hidden">
                {/* Decorative background gradients */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-secondary/10 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

                <div className="relative z-10">
                  <SchemaForm
                    debug
                    onValidate={(values) => {
                      const errors: Record<string, string> = {};
                      // Example: Cross-field validation (Date Range comparison)
                      if (values.logistics?.stayDuration) {
                        const { start, end } = values.logistics.stayDuration;
                        if (start && end && start > end) {
                          errors["logistics.stayDuration"] =
                            "End date must be after start date";
                        }
                      }
                      return errors;
                    }}
                    onSubmit={(values) => {
                      // APPEND EXTRA VALUES (Side effect after valid submit)
                      const finalPayload = {
                        ...values,
                        meta: {
                          submittedAt: new Date().toISOString(),
                          apiVersion: "v1",
                          source: "web-demo",
                        },
                      };

                      console.log("Registration Submitted:", finalPayload);
                      alert(
                        "Registration Successful!\n\nAdded Metadata:\n" +
                          JSON.stringify(finalPayload.meta, null, 2) +
                          "\n\nWelcome to the Summit."
                      );
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
                      className="px-6 py-2 bg-[var(--brand-secondary-orange)] text-white rounded hover:opacity-90 transition-colors shadow-sm font-medium"
                    >
                      Submit Registration
                    </button>
                  </div>
                </div>
              </div>

              {/* Documentation / Logic Hint */}
            </div>
          )}
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;
