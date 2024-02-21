const LandingButton = ({
  label,
  icon,
  url,
  width,
  backgroundColor,
  hoverBgColor,
  activeBgColor,
}) => {
  return (
    <button
      className={`${width ? width : "w-full"} ${
        backgroundColor
          ? backgroundColor
          : "bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
      } ${hoverBgColor ? hoverBgColor : null} ${
        activeBgColor ? activeBgColor : null
      } rounded-xl h-14 transition-all`}
    >
      <a
        className={`flex items-center justify-center space-x-2 text-2xl capitalize rounded-3xl text-white w-full h-full`}
        href={url}
      >
        <span>{label}</span>
        {icon && icon}
      </a>
    </button>
  );
};

export default LandingButton;
