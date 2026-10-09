
import { useNavigate } from "react-router-dom";
import BookingCard from "../components/BookingCard";
import { useBooking } from "../context/useBooking";
import "./MyBooking.css";
import Navbar from "../components/Navbar";

const MyBooking = () => {
  const navigate = useNavigate();
  const { bookings } = useBooking();

  return (
    <>
    <Navbar/>
      <div className="my-bookings-page">
        <div className="my-bookings-container">
          <div className="my-bookings-header">
            <div>
              <h1>My Bookings</h1>
              <p>View and manage your service bookings.</p>
            </div>

            <button
              className="book-service-btn"
              onClick={() => navigate("/services")}
            >
              + Book a Service
            </button>
          </div>

          {bookings.length === 0 ? (
            <div className="no-bookings">
              <div className="empty-icon">📅</div>

              <h2>No Bookings Yet</h2>

              <p>You haven't booked any services yet.</p>

              <button
                className="browse-services-btn"
                onClick={() => navigate("/services")}
              >
                Browse Services
              </button>
            </div>
          ) : (
            <div className="bookings-list">
              {bookings.map((booking) => (
                <BookingCard
                  key={booking.id}
                  serviceName={booking.serviceName}
                  customerName={booking.customerName}
                  phone={booking.phone}
                  date={booking.date}
                  time={booking.time}
                  address={booking.address}
                  status={booking.status}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default MyBooking;

