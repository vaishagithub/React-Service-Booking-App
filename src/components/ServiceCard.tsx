import { Link } from "react-router-dom";

interface ServiceCardProps {
  service: {
    id: number;
    name: string;
    category: string;
    description: string;
    price: number;
    duration: string;
    image: string;
  };
}

const ServiceCard = ({ service }: ServiceCardProps) => {
  return (
    <div className="service-card">
      <div className="service-image">
        <img src={service.image} alt={service.name} />
      </div>

      <div className="service-content">
        <span className="service-category">{service.category}</span>

        <h3>{service.name}</h3>

        <p>{service.description}</p>

        <div className="service-info">
          <span>₹{service.price}</span>

          <span>⏱ {service.duration}</span>
        </div>

        <Link to={`/book/${service.id}`} className="book-btn">
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
