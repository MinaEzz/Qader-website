import { Link } from "react-router-dom";

const Button = ({
  label,
  icon,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <Link to="#products">
      <button
        className={`flex items-center justify-center space-x-2 px-7 py-4 text-lg capitalize border rounded-xl ${
          backgroundColor ? backgroundColor : "bg-primary"
        } ${borderColor ? borderColor : "border-primary"}
        ${textColor ? textColor : "text-white"}
        ${fullWidth && "w-full"}
        `}
      >
        <span>{label}</span>
        {icon && icon}
      </button>
    </Link>
  );
};

export default Button;
