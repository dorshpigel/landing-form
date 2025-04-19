import clsx from "clsx";

type LabeledInputProps = {
  label: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  placeholder?: string;
  type?: string;
  className?: string;
  textArea?: boolean;
};

export default function LabeledInput(props: LabeledInputProps) {
  const {
    label,
    value,
    onChange,
    placeholder = "",
    type = "text",
    className,
    textArea,
  } = props;

  const inputStyles = clsx(
    "px-4 py-2 rounded-2xl border border-gray-300 bg-white/70",
    "shadow-sm backdrop-blur-md transition-all duration-300",
    "focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
    "hover:border-blue-300 hover:ring-1 hover:ring-blue-200"
  );

  return (
    <div className={clsx("flex flex-col gap-1", className)}>
      <label className="text-sm font-medium text-gray-700">{label}</label>
      {!textArea ? (
        <input
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={inputStyles}
        />
      ) : (
        <textarea
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className={inputStyles}
        />
      )}
    </div>
  );
}
