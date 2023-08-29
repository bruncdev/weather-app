import { Spin } from "../Spin";
import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}

export function Input({ isLoading = false, ...rest }: InputProps) {
  return (
    <div className="flex items-center justify-center">
      <input
        className="bg-[#22222f] text-gray-100 px-6 h-14 w-504 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
        placeholder="Buscar local"
        type="text"
        {...rest}
      />

      {isLoading && <Spin />}
    </div>
  );
}
