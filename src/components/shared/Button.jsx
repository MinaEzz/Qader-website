const LandingButton = ({ label, icon, url, width, backgroundColor }) => {
  return (
    <button
      className={`${width ? width : "w-full"} ${
        backgroundColor ? backgroundColor : "bg-primary"
      } rounded-xl h-14`}
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
