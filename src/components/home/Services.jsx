import { SERVICES } from "../../constants";
import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <section className="w-full h-fit py-3 bg-white">
      <div className="container flex justify-around items-center gap-2 flex-wrap">
        {SERVICES.map((service) => {
          return <ServiceCard key={service.title} {...service} />;
        })}
      </div>
    </section>
  );
};

export default Services;
