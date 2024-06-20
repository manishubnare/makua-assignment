import clsx from "clsx";

type Props = {
  type?: "button" | "submit" | undefined;
  fullWidth?: boolean;
  children?: React.ReactNode;
  onClick?: () => void;
  secondary?: boolean;
  danger?: boolean;
  disabled?: boolean;
  className?: string;
};

function Button({
  type,
  fullWidth,
  children,
  onClick,
  secondary,
  danger,
  disabled,
  className = "",
}: Props) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        `flex justify-center rounded-full px-3 py-2 bg-makua-red text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${className}`,
        disabled && "opacity-40 cursor-default",
        fullWidth && "w-full",
        secondary
          ? "text-makua-red border-makua-red border bg-transparent"
          : "text-white",
        danger &&
          "bg-rose-500",
        !secondary &&
          !danger &&
          "bg-white-500 hover:bg-red-600"
      )}
    >
      {children}
    </button>
  );
}

export default Button;