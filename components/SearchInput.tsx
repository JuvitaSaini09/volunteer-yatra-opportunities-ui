import React from "react";

interface SearchInputProps {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  inputClassName?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  label,
  value,
  onChange,
  className = "",
  inputClassName = "",
}) => (
  <div className={`flex flex-col ${className}`}>
    <label className="font-bold text-[10px] leading-[11px] tracking-[0.01em] text-font-primary">
      {label}
    </label>
    <input
      type="text"
      className={`text-sm max-w-[218px] h-[21px] outline-none font-normal leading-normal w-full ${inputClassName}`}
      value={value}
      onChange={onChange}
    />
  </div>
);

export default SearchInput;
