import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
}

const Button = ({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles =
    "rounded-lg cursor-pointer font-semibold shadow-2xl transition-all duration-200";

  const variants = {
    primary:
      "bg-gray-700 border-2 border-gray-700 bg-linear-to-b from-[#5f5f5f] via-[#474747] to-[#1f1f1f] text-white shadow-gray-200",
    secondary:
      "bg-gray-200 border-2 border-gray-300 bg-linear-to-b from-[#e5e5e5] via-[#d4d4d4] to-[#a3a3a3] text-gray-800 shadow-gray-100",
    danger:
      "bg-red-600 border-2 border-red-700 bg-linear-to-b from-[#ef4444] via-[#dc2626] to-[#b91c1c] text-white shadow-red-200",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-[10px]",
    md: "px-4 py-2 text-[11px]",
    lg: "px-6 py-3 text-[13px]",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${
        fullWidth ? "w-full" : ""
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
