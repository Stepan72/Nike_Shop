interface ButtonProps {
  label: string;
  iconUrl?: string;
  className?: string;
}

function Button({ label, iconUrl, className }: ButtonProps) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full  border-coral-red ${className}`}
    >
      {label}
      {iconUrl && (
        <img
          src={iconUrl}
          alt="arrow_right_icon"
          className="ml-2 rounded-full w-5 h-5 "
        />
      )}
    </button>
  );
}

export default Button;
