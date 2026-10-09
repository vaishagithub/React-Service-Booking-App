
import { useNavigate } from "react-router-dom";
import "./BookingSuccess.css";

const BookingSuccess = () => {
  const navigate = useNavigate();

  return (
    <div className="booking-success-page">
      <div className="success-card">

        <div className="success-icon">
          ✓
        </div>

        <h1>Booking Successful!</h1>

        <p className="success-message">
          Your service has been booked successfully.
        </p>

        <p className="success-submessage">
          Thank you for choosing ServiceHub.
          We will contact you soon with the booking details.
        </p>

        <div className="success-buttons">

          <button
            className="view-bookings-btn"
            onClick={() => navigate("/my-bookings")}
          >
            View My Bookings
          </button>

          <button
            className="home-btn"
            onClick={() => navigate("/")}
          >
            Back to Home
          </button>

        </div>

      </div>
    </div>
  );
};

export default BookingSuccess;

