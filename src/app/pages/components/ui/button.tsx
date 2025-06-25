import React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button: React.FC<ButtonProps> = ({ children, className = '', ...props }) => {
  return (
    <button
      className={`rounded-lg bg-[purple] hover:bg-blue-700 text-white font-semibold px-4 py-2 transition ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
