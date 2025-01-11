import type React from "react";

interface ButtonProps {
  label: React.ReactNode;
  onClick: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className }) => {
  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;
