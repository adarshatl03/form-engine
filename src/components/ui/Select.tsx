import React, { forwardRef } from "react";
import { BaseField } from "./field/BaseField";
import type { BaseFieldProps } from "./field/types";
import type { SelectOption } from "@/types/schema";

interface SelectProps
  extends BaseFieldProps,
    Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "id"> {
  options?: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  (
    {
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
      defaultValue,
      onChange,
      onClear,
      options = [],
      placeholder,
      ...props
    },
    ref
  ) => {
    return (
      <BaseField
        id={id}
        label={label}
        error={error}
        required={required}
        disabled={disabled}
        startAdornment={startAdornment}
        endAdornment={endAdornment}
        fullWidth={fullWidth}
        value={value}
        defaultValue={defaultValue}
        onClear={onClear}
        className={className}
      >
        {({ onFocus, onBlur, style }) => (
          <select
            {...props}
            ref={ref}
            id={id}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onFocus={(e) => {
              onFocus();
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              onBlur();
              props.onBlur?.(e);
            }}
            className={`
              peer block w-full rounded-md border bg-input h-10 px-3 py-2 transition-colors
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
              ${
                error
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                  : "border-border hover:border-surface-300 focus:border-ring"
              }
              ${disabled ? "bg-surface-100 cursor-not-allowed" : ""}
              ${value === "" ? "text-slate-500" : ""}
            `}
            style={style}
          >
            {placeholder && (
              <option value="" disabled hidden>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        )}
      </BaseField>
    );
  }
);

Select.displayName = "Select";
