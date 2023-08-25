import { services } from "../constants";
import { ServiceCard } from "../components";

function Services() {
  return (
    <section className="padding-x py-10 max-container flex flex-wrap gap-9 justify-center">
      {services.map((service) => {
        return <ServiceCard key={service.label} {...service} />;
      })}
    </section>
  );
}

export default Services;
