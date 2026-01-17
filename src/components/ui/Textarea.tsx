import React, { forwardRef, useState } from "react";
import { useComponentTheme } from "../theme/ThemeContext";
import type { BaseFieldProps } from "./field/types";

interface TextareaProps
  extends BaseFieldProps, Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "id"> {
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
      globalOverRide,
      variant,
      ...props
    },
    ref
  ) => {
    const [focused, setFocused] = useState(false);

    const themeClasses = useComponentTheme(
      "textarea",
      {
        error: !!error,
        disabled,
        focused,
        value: value ?? defaultValue,
        variant,
      },
      undefined,
      globalOverRide
    );

    const isFloating = variant === "floating";

    // Determine resize class
    const resizeClass =
      {
        none: "resize-none",
        vertical: "resize-y",
        horizontal: "resize-x",
        both: "resize",
      }[resize as string] || "resize-none";

    const maxRowsStyle: React.CSSProperties = {};
    if (maxRows) {
      maxRowsStyle.maxHeight = `${maxRows * 1.5 + 1}rem`;
    }

    return (
      <div className={`${themeClasses.root} ${className || ""} ${fullWidth ? "w-full" : ""}`}>
        {!isFloating && label && (
          <label htmlFor={id} className={themeClasses.label}>
            {label} {required && <span className="text-destructive">*</span>}
          </label>
        )}
        <div className="relative">
          {isFloating && label && (
            <label htmlFor={id} className={themeClasses.label}>
              {label} {required && <span className="text-destructive">*</span>}
            </label>
          )}
          <textarea
            {...props}
            ref={ref}
            id={id}
            disabled={disabled}
            value={value}
            onChange={onChange}
            onFocus={(e) => {
              setFocused(true);
              props.onFocus?.(e);
            }}
            onBlur={(e) => {
              setFocused(false);
              props.onBlur?.(e);
            }}
            placeholder={isFloating && !focused ? "" : props.placeholder}
            rows={minRows || rows}
            className={`${themeClasses.input} ${resizeClass}`}
            style={{ ...maxRowsStyle }}
          />
        </div>
        {error && <p className={themeClasses.errorText}>{error}</p>}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";
