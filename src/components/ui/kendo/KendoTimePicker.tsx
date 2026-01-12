import { useState } from "react";
import {
  TimePicker,
  type TimePickerChangeEvent,
} from "@progress/kendo-react-dateinputs";
import { BaseField } from "../field/BaseField";
import type { BaseFieldProps } from "../field/types";

import "@progress/kendo-theme-default/dist/all.css";
import "./kendo-overrides.css";

interface KendoTimePickerProps extends BaseFieldProps {
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  min?: Date;
  max?: Date;
  format?: string;
  formats?: string[];
  placeholder?: string;
  steps?: { hour?: number; minute?: number; second?: number };
}

export const KendoTimePicker = ({
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
  format = "HH:mm", // More explicit 24h default or match inputs? let's stick to standard input behavior
  formats,
  placeholder = "",
  steps,
}: KendoTimePickerProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState(false);
  const [hasVisualValue, setHasVisualValue] = useState(false);
console.log(hasVisualValue)
  // Custom Time Icon
  const TimeIcon = (
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
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
      endAdornment={endAdornment || TimeIcon}
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
          <TimePicker
            id={id}
            value={value}
            onChange={(e: TimePickerChangeEvent) => onChange?.(e.value)}
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
            // @ts-expect-error Formats support
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
