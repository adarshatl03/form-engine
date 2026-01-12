import { useState } from "react";
import {
  DatePicker,
  type DatePickerChangeEvent,
} from "@progress/kendo-react-dateinputs";
import { BaseField } from "../field/BaseField";
import type { BaseFieldProps } from "../field/types";

// Import Kendo Default Theme (must be installed)
// We will override this in CSS
import "@progress/kendo-theme-default/dist/all.css";
import "./kendo-overrides.css";

interface KendoDatePickerProps extends BaseFieldProps {
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  min?: Date;
  max?: Date;
  format?: string; // Display format
  formats?: string[]; // Parsing formats
  placeholder?: string;
}

export const KendoDatePicker = ({
  id,
  label,
  error,
  required,
  disabled,
  className,
  startAdornment,
  endAdornment,
  fullWidth,
  value,
  onChange,
  onClear,
  min,
  max,
  format = "dd/MM/yyyy",
  formats = ["dd/MM/yyyy", "dd-MMM-yyyy", "d/M/yyyy", "g"], // Robust parsing defaults
  placeholder = "",
}: KendoDatePickerProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState(false);
  const [hasVisualValue, setHasVisualValue] = useState(false);

  // Custom Calendar Icon
  const CalendarIcon = (
    <button
      type="button"
      onClick={() => !disabled && setShow(!show)} // Check disabled
      disabled={disabled}
      className={`focus:outline-none transition-colors ${
        disabled
          ? "text-muted-foreground cursor-not-allowed opacity-50"
          : "hover:text-primary-600 cursor-pointer"
      }`}
      tabIndex={-1} // Prevent focus trap issues, let input handle keyboard
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
      </svg>
    </button>
  );

  return (
    <BaseField
      id={id}
      label={label}
      error={error}
      required={required}
      disabled={disabled}
      startAdornment={startAdornment}
      endAdornment={endAdornment || CalendarIcon} // Use custom icon if no override
      onClear={onClear}
      fullWidth={fullWidth}
      className={`kendo-field-wrapper ${className}`}
      value={value}
    >
      {({ isFocused, onFocus, onBlur, style }) => (
        <div
          className={`
            relative w-full rounded-md border transition-all h-10 flex items-center
            ${
              isFocused
                ? "border-ring ring-2 ring-ring ring-offset-0"
                : "border-border hover:border-zinc-400"
            }
            ${
              error ? "border-destructive focus-within:ring-destructive/20" : ""
            }
            ${disabled ? "bg-muted cursor-not-allowed" : "bg-input"}
          `}
          style={
            {
              "--kendo-padding-left": style.paddingLeft,
              "--kendo-padding-right": style.paddingRight,
            } as React.CSSProperties
          }
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            setHasVisualValue(!!input.value);
          }}
        >
          <DatePicker
            id={id}
            value={value}
            onChange={(e: DatePickerChangeEvent) => onChange?.(e.value)}
            onFocus={() => {
              onFocus();
              // setShow(true); // Optional: auto-open on focus? Standard is usually separate.
            }}
            onBlur={() => {
              onBlur();
              // Don't close immediately to allow clicking inside calendar
            }}
            show={show}
            onOpen={() => setShow(true)}
            onClose={() => setShow(false)}
            min={min}
            max={max}
            format={format}
            // @ts-expect-error Kendo definitions might be missing formats but it's supported
            formats={formats} /* Pass parsing formats */
            disabled={disabled}
            placeholder={placeholder || ""}
            className="w-full bg-transparent"
            style={{ width: "100%" }} // Explicit width forcing
          />
          {/* 
               We need to apply the BaseField padding to the Kendo Input.
               We can use a style tag to inject specific padding for this ID.
            */}
          {/* No inline style tag anymore - handled via CSS variables */}
        </div>
      )}
    </BaseField>
  );
};
