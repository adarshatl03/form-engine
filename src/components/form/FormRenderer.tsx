import { useState, useCallback } from "react";
import type { FormSchema, FieldSchema } from "@/types/schema";
import { GridContainer } from "@/components/layout/GridContainer";
import { GridItem } from "@/components/layout/GridItem";
import { TextInput } from "@/components/ui/TextInput";
import { Textarea } from "@/components/ui/Textarea";
import { Select } from "@/components/ui/Select";
import { generateZodSchema } from "@/utils/validation";
import { evaluateVisibility } from "@/utils/dependencies";
import { z } from "zod";

interface FormRendererProps {
  schema: FormSchema;
  initialData?: Record<string, any>;
  onSubmit?: (data: Record<string, any>) => void;
  className?: string;
}

export const FormRenderer = ({
  schema,
  initialData = {},
  onSubmit,
  className = "",
}: FormRendererProps) => {
  // Centralized Form State
  const [formData, setFormData] = useState<Record<string, any>>(() => {
    // Hydrate default values
    const defaults: Record<string, any> = { ...initialData };
    schema.fields.forEach((field) => {
      if (
        defaults[field.name] === undefined &&
        field.defaultValue !== undefined
      ) {
        defaults[field.name] = field.defaultValue;
      }
    });
    return defaults;
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  // Validation Logic
  const validateField = (name: string, value: any) => {
    try {
      const zodSchema = generateZodSchema(schema);
      // Pick only this field to validate
      const fieldValidator =
        zodSchema.shape[name as keyof typeof zodSchema.shape];
      if (fieldValidator) {
        fieldValidator.parse(value);
      }
      return null;
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        return err.issues[0].message;
      }
      return "Invalid value";
    }
  };

  const handleChange = useCallback(
    (name: string, value: any) => {
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Validate on change (real-time)
      // In production we might debounce this
      setTimeout(() => {
        const error = validateField(name, value);
        setErrors((prev) => {
          const newErrors = { ...prev };
          if (error) {
            newErrors[name] = error;
          } else {
            delete newErrors[name];
          }
          return newErrors;
        });
      }, 0);
    },
    [schema]
  );

  // Full Form Evaluation on Submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const zodSchema = generateZodSchema(schema);
      const validData = zodSchema.parse(formData);
      setErrors({});
      onSubmit?.(validData);
      alert("Form Submitted Valid! Check console.");
      console.log(validData);
    } catch (err: any) {
      if (err instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        err.issues.forEach((issue) => {
          if (issue.path[0]) {
            fieldErrors[issue.path[0] as string] = issue.message;
          }
        });
        setErrors(fieldErrors);
      }
    }
  };

  // Component Mapper
  const renderField = (field: FieldSchema) => {
    // Check Visibility
    const isVisible = evaluateVisibility(field, formData);
    if (!isVisible) return null;

    const isRequired = field.validation?.some((v) => v.type === "required");

    const commonProps = {
      id: field.id,
      label: field.label,
      value: field.type === "file" ? undefined : formData[field.name] || "", // File input cannot be controlled with value usually (except empty string), safe to leave undefined or manage specifically
      onChange: (e: any) => {
        const value = field.type === "file" ? e.target.files : e.target.value;
        handleChange(field.name, value);
      },
      error: errors[field.name],
      required: isRequired,
      disabled: field.disabled,
      readOnly: field.readOnly, // Add readOnly support
      placeholder: field.placeholder,
      startAdornment: field.startAdornment,
      endAdornment: field.endAdornment,
      accept: field.accept, // Pass accept for files
      multiple: field.multiple, // Pass multiple for selects/files
    };

    let component = null;

    switch (field.type) {
      case "text":
      case "email":
      case "url":
      case "tel":
      case "password":
      case "number":
      case "file": // Support file input
        component = <TextInput type={field.type} {...commonProps} />;
        break;

      case "textarea":
        component = <Textarea rows={field.rows} {...commonProps} />;
        break;

      case "select":
        component = <Select options={field.options} {...commonProps} />;
        break;

      default:
        // Fallback to text for unknown types during dev, or null
        component = <TextInput {...commonProps} />;
    }

    return (
      <GridItem key={field.id} colSpan={field.grid?.colSpan || 12}>
        {component}
      </GridItem>
    );
  };

  return (
    <form className={className} onSubmit={handleSubmit} noValidate>
      <GridContainer>
        {schema.fields.map((field) => renderField(field))}
      </GridContainer>

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          Submit Form
        </button>
      </div>
    </form>
  );
};
