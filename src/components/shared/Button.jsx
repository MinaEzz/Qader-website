const LandingButton = ({
  label,
  icon,
  url,
  width,
  height,
  fontSize,
  backgroundColor,
  hoverBgColor,
  activeBgColor,
}) => {
  return (
    <button
      className={`${width ? width : "w-full"} 
      ${height ? height : "h-14"}
      ${
        backgroundColor
          ? backgroundColor
          : "bg-primary-600 hover:bg-primary-700 active:bg-primary-800"
      } ${hoverBgColor ? hoverBgColor : null} ${
        activeBgColor ? activeBgColor : null
      } rounded-xl px-2 transition-all`}
    >
      <a
        className={`flex items-center justify-center space-x-2 ${
          fontSize ? fontSize : "text-2xl"
        } capitalize rounded-3xl text-white w-full h-full`}
        href={url}
      >
        <span>{label}</span>
        {icon && icon}
      </a>
    </button>
  );
};

export default LandingButton;
