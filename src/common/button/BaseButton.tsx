import ButtonProps from './interface_button';

export default function BaseButton({
  textButton,
  icon,
  className,
  reverse = false,
  ...rest
}: ButtonProps) {
  return (
    <div>
      <button
        {...rest}
        className={`py-3 px-6 rounded-xl cursor-pointer flex gap-2 items-center justify-center hover:opacity-40 ${className}`}
      >
        {reverse ? (
          <>
            {icon}
            {textButton}
          </>
        ) : (
          <>
            {textButton}
            {icon}
          </>
        )}
      </button>
    </div>
  );
}
