import React, { forwardRef } from "react";

import type { BaseFieldProps } from "./field/types";

interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "id">,
    BaseFieldProps {}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      id,
      label,
      error,
      className,
      disabled,
      // Filter out standard field props that don't apply to native checkbox
      startAdornment,
      endAdornment,
      fullWidth,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`group flex flex-col ${className}`}>
        <label className="flex items-center space-x-2 cursor-pointer relative">
          <input
            ref={ref}
            type="checkbox"
            id={id}
            disabled={disabled}
            className="
              peer appearance-none h-5 w-5 border border-border rounded shadow-sm bg-input
              checked:bg-control-checked checked:border-control-checked
              focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-0
              disabled:opacity-50 disabled:cursor-not-allowed
              transition-colors
            "
            {...props}
          />
          {/* Checkmark Icon using peer-checked */}
          <svg
            className="
              absolute left-0.5 w-4 h-4 text-white pointer-events-none 
              opacity-0 peer-checked:opacity-100 transition-opacity
            "
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M20 6 9 17l-5-5" />
          </svg>

          <span className={`text-sm ${disabled ? "opacity-50" : ""}`}>
            {label}
          </span>
        </label>

        {error && <p className="text-xs text-error mt-1 ml-7">{error}</p>}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
