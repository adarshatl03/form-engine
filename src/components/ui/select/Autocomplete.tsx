import { useState, useRef, useEffect, useMemo, useId } from "react";
import { BaseField } from "../field/BaseField";
import type { BaseFieldProps } from "../field/types";
import { useDebounce } from "@/hooks/useDebounce";

import { Chip } from "./Chip";
import type { Option } from "./types";

interface AutocompleteProps extends Omit<BaseFieldProps, "value" | "onChange"> {
  options: Option[];
  value?: string | number | (string | number)[]; // Single or Array of values
  onChange?: (value: string | number | (string | number)[] | null) => void;
  multiple?: boolean;
  limitTags?: number;
  placeholder?: string;
  loading?: boolean;
  loadOptions?: (query: string) => Promise<Option[]>; // Async support
  onClear?: () => void;
}

export const Autocomplete = ({
  id,
  label,
  error,
  required,
  disabled,
  className,
  startAdornment,
  endAdornment,
  fullWidth,
  options: initialOptions = [],
  value,
  onChange,
  multiple = false,
  limitTags,
  placeholder = "",
  loading: externalLoading = false,
  loadOptions,
  onClear,
}: AutocompleteProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);

  const uniqueId = useId();
  const listboxId = `${uniqueId}-listbox`;
  const getOptionId = (index: number) => `${uniqueId}-option-${index}`;

  // Async State
  const [asyncOptions, setAsyncOptions] = useState<Option[]>([]);
  const [internalLoading, setInternalLoading] = useState(false);

  const debouncedSearch = useDebounce(inputValue, 500);

  const isLoading = externalLoading || internalLoading;

  // Decide which options to use
  const currentOptions = loadOptions ? asyncOptions : initialOptions;

  // Filter options based on input (CLIENT SIDE ONLY)
  const filteredOptions = useMemo(() => {
    if (loadOptions) return currentOptions; // Server filtered
    if (!inputValue) return currentOptions;
    return currentOptions.filter((opt) =>
      opt.label.toLowerCase().includes(inputValue.toLowerCase())
    );
  }, [currentOptions, inputValue, loadOptions]);

  // Handle Async Search via Effect on Debounced Value
  useEffect(() => {
    if (!loadOptions) return;

    let active = true;

    const fetchOptions = async () => {
      setInternalLoading(true);
      try {
        const results = await loadOptions(debouncedSearch);
        if (active) {
          setAsyncOptions(results);
        }
      } catch (err) {
        console.error("Failed to load options", err);
        if (active) setAsyncOptions([]);
      } finally {
        if (active) setInternalLoading(false);
      }
    };

    fetchOptions();

    return () => {
      active = false;
    };
  }, [debouncedSearch, loadOptions]);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
        if (!multiple && value) {
          const selected = currentOptions.find((o) => o.value === value);
          if (selected) setInputValue(selected.label);
          else setInputValue("");
        } else {
          setInputValue("");
        }
        setActiveIndex(-1);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [multiple, value, currentOptions]);

  // Reset active index when options change
  useEffect(() => {
    setActiveIndex(-1);
  }, [filteredOptions]);

  // Derived selected options objects
  const selectedOptions = useMemo(() => {
    if (multiple) {
      if (!Array.isArray(value)) return [];
      return currentOptions.filter((opt) => value.includes(opt.value));
    } else {
      return currentOptions.find((opt) => opt.value === value) || null;
    }
  }, [currentOptions, value, multiple]);

  const handleSelect = (option: Option) => {
    if (multiple) {
      const currentValues = Array.isArray(value) ? value : [];
      if (!currentValues.includes(option.value)) {
        onChange?.([...currentValues, option.value]);
      }
      setInputValue(""); // Clear search
      inputRef.current?.focus(); // Keep focus
    } else {
      onChange?.(option.value);
      setIsOpen(false);
      setInputValue(option.label); // Set input to label
    }
    setActiveIndex(-1);
  };

  const handleRemove = (valToRemove: string | number) => {
    if (multiple && Array.isArray(value)) {
      onChange?.(value.filter((v) => v !== valToRemove));
    } else {
      onChange?.(null);
      setInputValue("");
    }
  };

  const scrollIntoView = (index: number) => {
    if (listRef.current) {
      const item = listRef.current.children[index] as HTMLElement;
      if (item) {
        item.scrollIntoView({ block: "nearest", behavior: "smooth" });
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setActiveIndex((prev) =>
          prev < filteredOptions.length - 1 ? prev + 1 : prev
        );
        scrollIntoView(activeIndex + 1);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (!isOpen) {
        setIsOpen(true);
      } else {
        setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
        scrollIntoView(activeIndex - 1);
      }
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (isOpen && activeIndex >= 0 && activeIndex < filteredOptions.length) {
        handleSelect(filteredOptions[activeIndex]);
      } else if (!isOpen) {
        setIsOpen(true);
      }
    } else if (e.key === "Escape") {
      e.preventDefault();
      setIsOpen(false);
      inputRef.current?.blur();
    } else if (
      e.key === "Backspace" &&
      !inputValue &&
      multiple &&
      Array.isArray(value) &&
      value.length > 0
    ) {
      const lastValue = value[value.length - 1];
      handleRemove(lastValue);
    }
  };

  // Sync single select input value with selected option label when not typing
  useEffect(() => {
    if (!multiple && !isOpen) {
      if (selectedOptions) {
        setInputValue((selectedOptions as Option).label);
      } else {
        setInputValue("");
      }
    }
  }, [selectedOptions, multiple, isOpen]);

  return (
    <div ref={containerRef} className="relative">
      <BaseField
        id={id}
        label={label}
        error={error}
        required={required}
        disabled={disabled}
        startAdornment={startAdornment}
        endAdornment={
          endAdornment || (
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
              className={`transition-transform duration-200 ${
                isOpen ? "rotate-180" : ""
              }`}
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          )
        }
        onClear={onClear}
        fullWidth={fullWidth}
        className={className}
        value={value}
      >
        {({ isFocused, onFocus, onBlur, style }) => (
          <div
            className={`
              peer flex flex-wrap items-center gap-1 min-h-10 w-full rounded-md border transition-all
              ${
                isFocused
                  ? "border-ring ring-2 ring-ring ring-offset-0"
                  : "border-border hover:border-surface-300"
              }
              ${
                error
                  ? "border-destructive focus-within:ring-destructive/20"
                  : ""
              }
              ${disabled ? "bg-surface-100 cursor-not-allowed" : "bg-input"}
            `}
            style={style}
          >
            {/* Render Chips for Multi-select */}
            {multiple &&
              (selectedOptions as Option[])
                .slice(0, limitTags ? limitTags : undefined)
                .map((opt) => (
                  <div key={opt.value} className="z-10 my-1">
                    <Chip
                      label={opt.label}
                      onRemove={() => handleRemove(opt.value)}
                      disabled={disabled}
                    />
                  </div>
                ))}
            {multiple &&
              limitTags &&
              (selectedOptions as Option[]).length > limitTags && (
                <div className="z-10 my-1">
                  <span className="text-xs font-medium px-2 py-1 rounded bg-surface-200 dark:bg-surface-700 text-foreground border border-border">
                    +{(selectedOptions as Option[]).length - limitTags}
                  </span>
                </div>
              )}

            <input
              ref={inputRef}
              id={id}
              role="combobox"
              aria-autocomplete="list"
              aria-expanded={isOpen}
              aria-controls={listboxId}
              aria-activedescendant={
                activeIndex >= 0 ? getOptionId(activeIndex) : undefined
              }
              disabled={disabled}
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
                setIsOpen(true);
              }}
              onFocus={(_e) => {
                onFocus();
                setIsOpen(true);
              }}
              onKeyDown={handleKeyDown}
              onBlur={onBlur} // Let outside click handle this
              placeholder={
                isFocused &&
                (!multiple || (selectedOptions as Option[]).length === 0)
                  ? placeholder
                  : ""
              }
              className={`
                flex-1 bg-transparent h-10 transition-colors bg-none
                focus:outline-none
                ${disabled ? "cursor-not-allowed" : ""}
              `}
              autoComplete="off"
            />
          </div>
        )}
      </BaseField>

      {/* Dropdown Menu */}
      {isOpen && !disabled && (
        <div className="absolute top-full left-0 mt-1 w-full bg-white dark:bg-zinc-900 border border-border rounded-md shadow-lg z-50 max-h-60 overflow-auto">
          {isLoading ? (
            <div className="p-2 text-sm text-center text-slate-500">
              Loading...
            </div>
          ) : filteredOptions.length === 0 ? (
            <div className="p-2 text-sm text-center text-slate-500">
              No options found.
            </div>
          ) : (
            <ul className="py-1" ref={listRef} role="listbox" id={listboxId}>
              {filteredOptions.map((option, index) => {
                const isSelected = multiple
                  ? Array.isArray(value) && value.includes(option.value)
                  : value === option.value;
                const isHighlighted = index === activeIndex;

                return (
                  <li
                    key={option.value}
                    id={getOptionId(index)}
                    role="option"
                    aria-selected={isSelected}
                    onClick={() => handleSelect(option)}
                    className={`
                      px-3 py-2 text-sm cursor-pointer transition-colors
                      ${
                        isSelected
                          ? "bg-primary-50 dark:bg-primary-900 text-primary-700 dark:text-primary-300"
                          : isHighlighted
                          ? "bg-surface-100 dark:bg-surface-800"
                          : "hover:bg-surface-200 dark:hover:bg-surface-800"
                      }
                    `}
                  >
                    {option.label}
                    {isSelected && <span className="float-right">✓</span>}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};
