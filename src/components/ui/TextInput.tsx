import React, { forwardRef } from "react";
import { BaseField } from "./field/BaseField";
import type { BaseFieldProps } from "./field/types";

interface TextInputProps
  extends BaseFieldProps,
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "id"> {
  // Omit id from HTML attributes because it comes from BaseFieldProps
}

export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
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
        {({ isFocused, onFocus, onBlur, style }) => (
          <input
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
            placeholder={isFocused ? props.placeholder || " " : " "}
            className={`
              peer block w-full rounded-md border bg-input h-10 transition-colors
              placeholder:text-transparent focus:placeholder:text-slate-400
              focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-0
              ${
                error
                  ? "border-destructive focus:border-destructive focus:ring-destructive/20"
                  : "border-border hover:border-surface-300 focus:border-ring"
              }
              ${disabled ? "bg-surface-100 cursor-not-allowed" : ""}
            `}
            style={style}
          />
        )}
      </BaseField>
    );
  }
);

TextInput.displayName = "TextInput";
