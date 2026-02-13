import React from "react";

interface InputFieldProps {
  label?: string;
  value?: string | number;
  onChange?: (value: string | number) => void;
  placeholder?: string;
  type?: "text" | "number" | "select";
  options?: { value: string | number; label: string }[];
  className?: string;
  inputClassName?: string;
  required?: boolean;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  options,
  className = "",
  inputClassName = "",
  required = false
}) => {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="text-sm text-gray-500">{label}</label>}

      {type === "select" ? (
        <select
          value={value ?? ""}
          onChange={(e) => onChange?.(e.target.value)}
          className={`border border-gray-200 mt-1 rounded-xl p-2 ${inputClassName}`}
          required={required}
        >
          {options?.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type={type}
          value={value ?? ""}
          placeholder={placeholder}
          required={required}
          onChange={(e) => onChange?.(type === "number" ? Number(e.target.value) : e.target.value)}
          className={`border border-gray-200 mt-1 rounded-xl p-2 ${inputClassName}`}
        />
      )}
    </div>
  );
};
