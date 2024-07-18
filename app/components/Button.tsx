"use client";
import React from "react";
import { IconType } from "react-icons";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  medium?: boolean;
  icon?: IconType;
}
const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
  outline,
  disabled,
  small,
  medium,
  icon: Icon,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
  relative disabled:opacity-70 disabled:cursor-not-allowed
  rounded-lg hover:opacity-80 transition w-full
  ${outline ? "bg-white" : "bg-purple-900"}
  ${outline ? "border-black" : "bg-purple-900"}
  ${outline ? "text-black" : "text-white"}
  ${small ? "py-1" : "py-3"}
  ${small ? "text-sm" : "text-md"}
  ${small ? "font-light" : "font-semibold"}
  ${small ? "border-[1px]" : "border-2"}
  
  ${medium ? "py-2" : "py-3"}
  ${medium ? "text-base" : "text-md"}
  ${medium ? "font-light" : "font-semibold"}
  ${medium ? "border-[1px]" : "border-2"}
  `}
    >
      {Icon && <Icon size={24} className="absolute left-4 top-3" />}
      {label}
    </button>
  );
};

export default Button;
