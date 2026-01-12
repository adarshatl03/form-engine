import { useState } from "react";
import {
  DateTimePicker,
  type DateTimePickerChangeEvent,
} from "@progress/kendo-react-dateinputs";
import { BaseField } from "../field/BaseField";
import type { BaseFieldProps } from "../field/types";

import "@progress/kendo-theme-default/dist/all.css";
import "./kendo-overrides.css";

interface KendoDateTimePickerProps extends BaseFieldProps {
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  min?: Date;
  max?: Date;
  format?: string;
  formats?: string[];
  placeholder?: string;
  steps?: { hour?: number; minute?: number; second?: number };
}

export const KendoDateTimePicker = ({
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
  format = "dd/MM/yyyy HH:mm", // More explicit default
  formats = ["dd/MM/yyyy HH:mm", "dd/MM/yyyy", "dd-MMM-yyyy", "d/M/yyyy", "g"], // Parsing formats
  placeholder = "",
  steps,
}: KendoDateTimePickerProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState(false);
  const [hasVisualValue, setHasVisualValue] = useState(false);

  // Custom Calendar+Clock Icon
  const DateTimeIcon = (
    <button
      type="button"
      onClick={() => !disabled && setShow(!show)}
      disabled={disabled}
      className={`focus:outline-none transition-colors ${
        disabled
          ? "text-muted-foreground cursor-not-allowed opacity-50"
          : "hover:text-primary-600 cursor-pointer"
      }`}
      tabIndex={-1}
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
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <path d="M12 14v2l1 1" /> {/* Little clock hand hint */}
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
      endAdornment={endAdornment || DateTimeIcon}
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
          <DateTimePicker
            id={id}
            value={value}
            onChange={(e: DateTimePickerChangeEvent) => onChange?.(e.value)}
            onFocus={() => {
              onFocus();
            }}
            onBlur={() => {
              onBlur();
            }}
            show={show}
            onOpen={() => setShow(true)}
            onClose={() => setShow(false)}
            min={min}
            max={max}
            format={format}
            // @ts-expect-error Formats might be missing in types
            formats={formats}
            steps={steps}
            disabled={disabled}
            placeholder={placeholder || ""}
            className="w-full bg-transparent"
            style={{ width: "100%" }}
          />
          {/* No inline style tag - handled via CSS variables */}
        </div>
      )}
    </BaseField>
  );
};
