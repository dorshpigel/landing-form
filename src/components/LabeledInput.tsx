import clsx from "clsx";

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  className?: string;
};

export default function LabeledInput(props: LabeledInputProps) {
  const {
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
    className,
  } = props;
  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <label className="text-sm font-medium">{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
