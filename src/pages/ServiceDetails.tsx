import { useParams, useNavigate } from "react-router-dom";
import { services } from "../data/services";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const service = services.find((item) => item.id === Number(id));

  if (!service) {
    return (
      <div className="service-not-found">
        <h2>Service Not Found</h2>
        <button onClick={() => navigate("/services")}>Back to Services</button>
      </div>
    );
  }

  return (
    <div className="service-details-page">
      <div className="service-details-container">
        <button className="back-button" onClick={() => navigate("/services")}>
          ← Back to Services
        </button>

        <div className="details-card">
          <div className="details-image">
            <img src={service.image} alt={service.name} />
          </div>

          <div className="details-content">
            <span className="details-category">{service.category}</span>

            <h1>{service.name}</h1>

            <p className="details-description">{service.description}</p>

            <div className="details-info">
              <div>
                <span>Price</span>
                <strong>₹{service.price}</strong>
              </div>

              <div>
                <span>Duration</span>
                <strong>{service.duration}</strong>
              </div>
            </div>

            <div className="service-features">
              <h3>What's Included?</h3>

              <ul>
                <li>✓ Professional service</li>
                <li>✓ Experienced professionals</li>
                <li>✓ Quality service</li>
                <li>✓ Convenient home service</li>
              </ul>
            </div>

            <button
              className="continue-booking"
              onClick={() => navigate(`/book/${service.id}`)}
            >
              Continue to Booking →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceDetails;
