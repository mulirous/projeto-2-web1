interface InputProps {
  label: string;
  placeholder: string;
  isObrigatorio: boolean;
  name: string;
  value: string | File | null;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

export default function Input({
  label,
  placeholder,
  isObrigatorio,
  name,
  value,
  onChange,
  type = "text",
}: InputProps) {
  return (
    <div className="flex flex-col w-full">
      <label htmlFor={name} className="text-lg font-bold mb-1">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        id={name}
        name={name}
        value={type === "file" ? undefined : value}
        onChange={onChange}
        required={isObrigatorio}
        className="p-2 pl-3 pr-16 w-full max-w-[500px] text-xs box-border"
      />
      {isObrigatorio ? (
        <span className="text-xs text-red-500 mt-1">Obrigatório</span>
      ) : (
        <span className="text-xs text-gray-500 mt-1">Opcional</span>
      )}
    </div>
  );
}
