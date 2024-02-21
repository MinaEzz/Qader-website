const ServiceCard = ({ title, icon }) => {
  return (
    <div
      className="flex flex-1 w-full items-center justify-center max-md:justify-start gap-2 p-4"
      key={title}
    >
      <i className="text-neutral-600">{icon}</i>
      <p className="capitalize text-slate-700 font-medium text-xl">{title}</p>
    </div>
  );
};

export default ServiceCard;
