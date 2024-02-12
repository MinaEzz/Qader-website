const ServiceCard = ({ title, icon }) => {
  return (
    <div className="flex flex-1 items-center gap-2 p-4" key={title}>
      <i className="text-neutral-600">{icon}</i>
      <p className="capitalize text-slate-700 font-medium text-lg">{title}</p>
    </div>
  );
};

export default ServiceCard;
