const Input = ({
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  width,
  height,
}) => {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      value={value}
      required
      className={`${width ? width : "w-full"} ${
        height ? height : "h-10"
      } bg-transparent flex-1 outline-none text-base text-neutral-700 font-medium placeholder:text-neutral-500 p-2 placeholder:text-base placeholder:font-medium border border-primary-600 rounded-xl`}
      onChange={onChange}
      aria-labelledby={name}
    />
  );
};

export default Input;
