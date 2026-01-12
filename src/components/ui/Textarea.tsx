import React, { forwardRef } from "react";
import { BaseField } from "./field/BaseField";
import type { BaseFieldProps } from "./field/types";

interface TextareaProps
  extends BaseFieldProps,
    Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
  rows?: number;
  minRows?: number;
  maxRows?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
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
      rows = 4,
      minRows,
      maxRows,
      resize = "none",
      ...props
    },
    ref
  ) => {
    // Determine resize class
    const resizeClass =
      {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      }[resize as string] || "resize-none";

    // Dynamic styles for max-rows (approximate)
    // Assuming padding ~20px total + ~24px line height. This is a rough estimation for native textarea.
    const maxRowsStyle: React.CSSProperties = {};
    if (maxRows) {
      maxRowsStyle.maxHeight = `${maxRows * 1.5 + 1}rem`;
    }

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
        {({ isFocused, onFocus, onBlur, style: baseStyle }) => (
          <textarea
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
            rows={minRows || rows}
            placeholder={isFocused ? props.placeholder || " " : " "}
            className={`
              peer block w-full rounded-md border bg-input py-2 transition-colors
              placeholder:text-transparent focus:placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
              ${resizeClass}
              ${
                error
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                  : "border-border hover:border-surface-300 focus:border-ring"
              }
              ${disabled ? "bg-surface-100 cursor-not-allowed" : ""}
            `}
            style={{ ...baseStyle, ...maxRowsStyle }}
          />
        )}
      </BaseField>
    );
  }
);

Textarea.displayName = "Textarea";
