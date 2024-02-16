const UsTitle = ({ title }) => {
  return (
    <h2 className="w-fit mx-auto text-4xl font-bold uppercase text-slate-700 after:w-1/2 after:h-[2px] after:block after:mx-auto after:mt-[1px] after:bg-slate-700 hover:after:w-full hover:after:transition-all hover:after:duration-500 hover:after:ease-in-out after:duration-500">
      {title} <span className="text-primary">us</span>
    </h2>
  );
};

export default UsTitle;
