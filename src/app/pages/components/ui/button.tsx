import { ButtonHTMLAttributes } from "react";

export function Button({
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`px-4 py-2 rounded bg-indigo-600 hover:bg-indigo-500 text-white font-semibold ${className}`}
      {...props}
    />
  );
}
