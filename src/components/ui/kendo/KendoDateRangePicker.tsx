import { useState } from "react";
import {
  DateRangePicker,
  DateInput,
  type DateRangePickerChangeEvent,
} from "@progress/kendo-react-dateinputs";
import { BaseField } from "../field/BaseField";
import type { BaseFieldProps } from "../field/types";

import "@progress/kendo-theme-default/dist/all.css";
import "./kendo-overrides.css";

interface DateRangeValue {
  start: Date | null;
  end: Date | null;
}

interface KendoDateRangePickerProps
  extends Omit<BaseFieldProps, "value" | "onChange"> {
  value?: DateRangeValue;
  onChange?: (value: DateRangeValue) => void;
  min?: Date;
  max?: Date;
  format?: string;
  formats?: string[];
  placeholder?: string;
  allowReverse?: boolean;
}

export const KendoDateRangePicker = ({
  id,
  label,
  error,
  required,
  disabled,
  className,
  startAdornment,
  endAdornment,
  fullWidth,
  value = { start: null, end: null },
  onChange,
  min,
  max,
  format = "dd/MM/yyyy",
  formats = ["dd/MM/yyyy", "dd-MMM-yyyy", "d/M/yyyy", "g"],
  allowReverse = false,
}: KendoDateRangePickerProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [show, setShow] = useState(false);
  const [hasVisualValue, setHasVisualValue] = useState(false);

  // Custom Range Icon
  const RangeIcon = (
    <button
      type="button"
      onClick={() => !disabled && setShow(!show)} // Note: Simple toggle might not work perfectly with range picker which has complex internal focus
      disabled={disabled}
      className={`focus:outline-none transition-colors mr-2 ${
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
        <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
        <line x1="16" x2="16" y1="2" y2="6" />
        <line x1="8" x2="8" y1="2" y2="6" />
        <line x1="3" x2="21" y1="10" y2="10" />
        <path d="M7 14h.01" />
        <path d="M17 14h.01" />
        <path d="M12 14h.01" />
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
      endAdornment={endAdornment || RangeIcon}
      fullWidth={fullWidth}
      className={`kendo-field-wrapper kendo-range-wrapper ${className}`}
      value={value}
    >
      {({ isFocused, onFocus, onBlur, style }) => {
        const showValue =
          isFocused || !!value.start || !!value.end || hasVisualValue;

        return (
          <div
            className={`
            relative w-full rounded-md border transition-all h-10 flex items-center
            ${
              disabled
                ? "bg-muted cursor-not-allowed"
                : "bg-input hover:border-zinc-400 border-border"
            }
            ${
              error ? "border-destructive focus-within:ring-destructive/20" : ""
            }
          `}
            style={
              {
                "--range-separator-opacity": showValue ? 1 : 0,
                "--range-text-color": showValue
                  ? "var(--color-foreground)"
                  : "transparent",
                "--kendo-padding-left": style.paddingLeft,
              } as React.CSSProperties
            }
            onInput={(e) => {
              const container = e.currentTarget;
              const inputs = container.querySelectorAll("input");
              let anyText = false;
              inputs.forEach((i) => {
                if (i.value) anyText = true;
              });
              setHasVisualValue(anyText);
            }}
            onClick={(e) => {
              // Ensure clicking anywhere in the box focuses the first input
              const target = e.target as HTMLElement;
              if (target.tagName !== "INPUT") {
                const inputs = e.currentTarget.querySelectorAll("input");
                if (inputs.length > 0) {
                  (inputs[0] as HTMLElement).focus();
                  onFocus(); // Manually trigger focus state in case native focus doesn't bubble immediately
                }
              }
            }}
          >
            <DateRangePicker
              id={id}
              value={value}
              onChange={(e: DateRangePickerChangeEvent) => {
                onChange?.(e.value);
                if (e.value.start && e.value.end) {
                  setShow(false);
                }
              }}
              onFocus={onFocus}
              onBlur={onBlur}
              calendarSettings={{
                views: 1,
              }}
              show={show}
              onOpen={() => setShow(true)}
              onClose={() => setShow(false)}
              min={min}
              max={max}
              format={format}
              // @ts-expect-error Formats support
              formats={formats}
              disabled={disabled}
              allowReverse={allowReverse}
              className="bg-transparent flex justify-start items-center"
              // Remove internal labels
              startDateInput={(props) => (
                <DateInput {...props} label={undefined} />
              )}
              endDateInput={(props) => (
                <DateInput {...props} label={undefined} />
              )}
            />
            {/* No inline style tag - handled via kendo-overrides.css and CSS variables */}
          </div>
        );
      }}
    </BaseField>
  );
};
