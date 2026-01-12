import { useRef, useState, useEffect } from "react";
import { BaseField } from "./field/BaseField";
import type { BaseFieldProps } from "./field/types";

interface FileInputProps
  extends Omit<
      React.InputHTMLAttributes<HTMLInputElement>,
      "value" | "onChange" | "id"
    >,
    BaseFieldProps {
  value?: File | null;
  onChange?: (file: File | null) => void;
  maxSize?: number;
}

export const FileInput = ({
  id,
  label,
  error,
  required,
  disabled,
  className,
  fullWidth,
  value,
  onChange,
  // BaseField props we want to filter out from input
  startAdornment,
  endAdornment,
  accept,
  multiple,
  maxSize,
  ...props
}: FileInputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");

  // Sync props to local state for display
  useEffect(() => {
    if (value) {
      setFileName(value.name);
    } else {
      setFileName("");
    }
  }, [value]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    if (file) {
      setFileName(file.name);
      onChange?.(file);
    } else {
      // Don't clear if user just clicked cancel?
      // Actually standard behavior is if you cancel, value usually doesn't change unless you select empty?
      // Browser input behavior: if you open and cancel, it retains old value usually.
      // But if you select nothing (script), it clears.
      // We'll trust onChange.
    }
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setFileName("");
    onChange?.(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const renderEndAdornment = () => {
    if (fileName) {
      return (
        <button
          type="button"
          onClick={handleClear}
          className="p-1 hover:bg-surface-100 rounded-full text-slate-400 hover:text-error transition-colors focus:outline-none"
          title="Remove file"
          disabled={disabled}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </button>
      );
    }
    return (
      <div className="pointer-events-none">
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
          className="text-slate-400"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" x2="12" y1="3" y2="15" />
        </svg>
      </div>
    );
  };

  return (
    <BaseField
      id={id}
      label={label}
      error={error}
      required={required}
      disabled={disabled}
      fullWidth={fullWidth}
      className={className}
      value={fileName} // Triggers floating label
      endAdornment={renderEndAdornment()}
    >
      {({ isFocused, onFocus, onBlur, style }) => (
        <div className="relative w-full h-10 flex items-center">
          {/* Actual Input */}
          <input
            ref={inputRef}
            type="file"
            id={id}
            className={`
                absolute inset-0 w-full h-full opacity-0 z-0
                ${disabled ? "cursor-not-allowed" : "cursor-pointer"}
            `}
            onChange={handleFileChange}
            onFocus={onFocus}
            onBlur={onBlur}
            disabled={disabled}
            accept={accept}
            multiple={multiple}
            {...props}
          />

          {/* Display Text */}
          <div
            className={`
                w-full truncate text-sm transition-colors
                ${fileName ? "text-foreground" : "text-slate-400"}
            `}
            style={{
              paddingLeft: style.paddingLeft,
              paddingRight: style.paddingRight,
            }}
          >
            {fileName || (isFocused ? "Choose a file..." : "")}
          </div>
        </div>
      )}
    </BaseField>
  );
};
