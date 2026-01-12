import React, { forwardRef } from "react";
import type { FieldDirection, ResponsiveDirection } from "../../types/schema";
import type { BaseFieldProps } from "./field/types";

interface RadioOption {
  label: string;
  value: string | number;
}

interface RadioGroupProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange" | "id">,
    BaseFieldProps {
  name: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  options: RadioOption[];
  direction?: FieldDirection | ResponsiveDirection;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  (
    {
      name,
      value,
      onChange,
      options,
      label,
      error,
      direction = "vertical",
      disabled,
      className,
      startAdornment,
      endAdornment,
      fullWidth,
      required,
      ...props
    },
    ref
  ) => {
    const getDirectionClasses = () => {
      if (typeof direction === "string") {
        return direction === "horizontal" ? "flex-row gap-4" : "flex-col gap-2";
      }

      const classes = [];
      const d = direction as ResponsiveDirection;

      // XS / Base
      const baseDir = d.xs || "vertical";
      classes.push(
        baseDir === "horizontal" ? "flex-row gap-4" : "flex-col gap-2"
      );

      // Breakpoints
      if (d.sm) {
        classes.push(
          d.sm === "horizontal"
            ? "sm:flex-row sm:gap-4"
            : "sm:flex-col sm:gap-2"
        );
      }
      if (d.md) {
        classes.push(
          d.md === "horizontal"
            ? "md:flex-row md:gap-4"
            : "md:flex-col md:gap-2"
        );
      }
      if (d.lg) {
        classes.push(
          d.lg === "horizontal"
            ? "lg:flex-row lg:gap-4"
            : "lg:flex-col lg:gap-2"
        );
      }

      return classes.join(" ");
    };

    return (
      <div ref={ref} className={`flex flex-col ${className}`} {...props}>
        {label && (
          <span className="text-sm font-medium text-foreground mb-2">
            {label}
          </span>
        )}

        <div className={`flex ${getDirectionClasses()}`} role="radiogroup">
          {options.map((option) => {
            const isChecked = value == option.value;
            const optionId = `${name}-${option.value}`;

            return (
              <label
                key={option.value}
                htmlFor={optionId}
                className={`
                  flex items-center space-x-2 cursor-pointer 
                  ${disabled ? "opacity-50 cursor-not-allowed" : ""}
                `}
              >
                <div className="relative flex items-center justify-center">
                  <input
                    type="radio"
                    id={optionId}
                    name={name}
                    value={option.value}
                    checked={isChecked}
                    onChange={() => !disabled && onChange?.(option.value)}
                    disabled={disabled}
                    className="
                      peer appearance-none w-4 h-4 rounded-full border border-border 
                      checked:border-control-checked checked:bg-control-checked
                      focus:outline-none focus:ring-2 focus:ring-ring/20 focus:ring-offset-0
                    "
                  />
                  {/* Dot */}
                  <div className="absolute w-1.5 h-1.5 bg-white rounded-full opacity-0 peer-checked:opacity-100 pointer-events-none transition-opacity" />
                </div>
                <span className="text-sm">{option.label}</span>
              </label>
            );
          })}
        </div>

        {error && <p className="text-xs text-error mt-1">{error}</p>}
      </div>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
