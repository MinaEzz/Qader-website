const LandingButton = ({ label, icon }) => {
  return (
    <a href="#shop-now">
      <button className="flex items-center justify-center space-x-2 px-7 py-4 text-xl capitalize border rounded-xl bg-primary border-primary text-white w-full">
        <span>{label}</span>
        {icon && icon}
      </button>
    </a>
  );
};

export default LandingButton;
