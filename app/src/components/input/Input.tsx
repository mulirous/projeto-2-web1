import React from "react";
import "./Input.css";

interface InputProps {
  label: string;
  placeholder: string;
  isObrigatorio: boolean;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  label,
  placeholder,
  isObrigatorio,
  name,
  value,
  onChange,
}: InputProps) {
  return (
    <div className="input">
      <label htmlFor={name} className="inputLabel">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={isObrigatorio}
        className="inputInput"
      />
      {isObrigatorio ? (
        <span className="inputObrigatorio">Obrigatório</span>
      ) : (
        <span className="inputOpcional">Opcional</span>
      )}
    </div>
  );
}
