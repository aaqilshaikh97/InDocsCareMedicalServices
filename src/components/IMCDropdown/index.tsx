import React, { useState } from "react";
import { borders } from "../../constants/borders";
import { borderRadius } from "../../constants/borderRadius";
import { spacing } from "../../constants/spacing";
import { colors } from "../../constants/colors";
import { Icons } from "../../constants/icons";

interface DropdownOption {
  label: string;
  value: string | number;
}

interface DropdownButtonProps {
  options: DropdownOption[];
  onSelect: (value: string | number) => void;
  placeholder?: string;
  defaultValue?: string | number;
  buttonStyle?: React.CSSProperties;
  menuStyle?: React.CSSProperties;
}

const IMCDropDown: React.FC<DropdownButtonProps> = ({
  options,
  onSelect,
  placeholder = "Select...",
  defaultValue,
  buttonStyle,
  menuStyle,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string | number | undefined>(
    defaultValue
  );

  const handleSelect = (value: string | number) => {
    setSelected(value);
    setIsOpen(false);
    onSelect(value);
  };

  const IconComponent = isOpen ? Icons.ArrowDropUp : Icons.ArrowDropDown;

  return (
    <div style={{ position: "relative", display: "inline-block" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          padding: "10px 16px",
          borderRadius: borderRadius.lg,
          border: borders.thin,
          background: colors.transparent,
          cursor: "pointer",
          minWidth: "140px",
          textAlign: "left",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "8px",
          ...buttonStyle,
        }}
      >
        <span>
          {options.find((opt) => opt.value === selected)?.label || placeholder}
        </span>
        <IconComponent />
      </button>

      {isOpen && (
        <ul
          style={{
            position: "absolute",
            top: "100%",
            right: 10,

            zIndex: 10,
            background: colors.teal,
            borderRadius: borderRadius.lg,
            border: borders.thin,
            padding: spacing.sm,
            margin: spacing.lg,
            listStyle: "none",
            minWidth: "100%",
            maxWidth: "200px",
            overflow: "hidden",

            ...menuStyle,
          }}
        >
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => handleSelect(option.value)}
              style={{
                padding: "8px 12px",
                cursor: "pointer",
                backgroundColor:
                  selected === option.value ? colors.lightGray : "transparent",
                color:
                  selected === option.value ? colors.primary : colors.white,
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default IMCDropDown;
