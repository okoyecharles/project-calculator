import React from "react";

type CalculatorButtonProps = {
  variant?: "operation" | "default" | "clear";
  label: React.ReactElement | string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  style?: React.CSSProperties;
};

export default function CalculatorButton({
  label,
  onClick,
  variant = "default",
  style,
}: CalculatorButtonProps) {
  const buttonColor: Record<typeof variant, string> = {
    default:
      "bg-gray-100 text-gray-700 hover:bg-gray-200 active:bg-gray-300 sm:ring-1 sm:ring-gray-200",
    operation: "bg-blue-500 text-blue-50 hover:bg-blue-600",
    clear: "bg-gray-200 text-gray-700 hover:bg-gray-300 sm:ring-1 sm:ring-gray-200",
  };

  return (
    <button
      onClick={onClick}
      className={`h-[64px] md:h-[85px] w-full text-[42px] grid place-items-center font-medium rounded-full transition-colors ${buttonColor[variant]}`}
      style={style}
    >
      {label}
    </button>
  );
}
