import React from "react";

const Switch = ({
  label,
  name,
  checked = false,
  onChange,
  description,
  disabled = false,
}) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div>
        {label && (
          <label
            htmlFor={name}
            className="text-sm font-medium text-slate-800"
          >
            {label}
          </label>
        )}

        {description && (
          <p className="mt-1 text-xs text-slate-500">
            {description}
          </p>
        )}
      </div>

      <button
        type="button"
        id={name}
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() =>
          onChange({
            target: {
              name,
              type: "switch",
              checked: !checked,
            },
          })
        }
        className={`
          relative inline-flex h-6 w-11 shrink-0
          items-center rounded-full
          transition-colors duration-200
          focus:outline-none focus:ring-2
          focus:ring-slate-400 focus:ring-offset-2
          disabled:cursor-not-allowed
          disabled:opacity-50
          ${checked ? "bg-slate-900" : "bg-slate-300"}
        `}
      >
        <span
          className={`
            inline-block h-5 w-5 rounded-full bg-white
            shadow-sm transition-transform duration-200
            ${checked ? "translate-x-5" : "translate-x-0.5"}
          `}
        />
      </button>
    </div>
  );
};

export default Switch;