import React, { forwardRef } from "react";

import type { BaseFieldProps } from "./field/types";

interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "id">,
    BaseFieldProps {}

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      id,
      label,
      error,
      className,
      disabled,
      startAdornment,
      endAdornment,
      fullWidth,
      required,
      ...props
    },
    ref
  ) => {
    return (
      <div className={`flex flex-col ${className}`}>
        <label className="flex items-center space-x-2 cursor-pointer relative">
          <div className="relative">
            <input
              ref={ref}
              type="checkbox"
              id={id}
              disabled={disabled}
              className="sr-only peer"
              {...props}
            />
            {/* Track */}
            <div
              className={`
              w-9 h-5 rounded-full transition-colors 
              bg-surface-200 border border-surface-300
              peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-ring
              peer-checked:bg-control-checked peer-checked:border-control-checked
              ${disabled ? "opacity-50 cursor-not-allowed" : ""}
            `}
            ></div>

            {/* Thumb */}
            <div
              className={`
              absolute top-0.5 left-0.5 w-4 h-4 rounded-full bg-white shadow-sm transition-transform border border-surface-300
              peer-checked:translate-x-4 peer-checked:border-transparent
            `}
            ></div>
          </div>

          {label && (
            <span className={`text-sm ${disabled ? "opacity-50" : ""}`}>
              {label}
            </span>
          )}
        </label>

        {error && <p className="text-xs text-error mt-1">{error}</p>}
      </div>
    );
  }
);

Switch.displayName = "Switch";
