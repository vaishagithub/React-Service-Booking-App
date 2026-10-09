
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AdminDashboard.css";

interface Booking {
  id: number;
  serviceId: number;
  serviceName: string;
  customerName: string;
  phone: string;
  date: string;
  time: string;
  address: string;
  status: string;
}

const AdminDashboard = () => {
  const navigate = useNavigate();

  // Load bookings directly from localStorage
  const [bookings] = useState<Booking[]>(() => {
    const storedBookings = localStorage.getItem("bookings");

    if (storedBookings) {
      return JSON.parse(storedBookings);
    }

    return [];
  });

  // Booking statistics
  const totalBookings = bookings.length;

  const pendingBookings = bookings.filter(
    (booking) => booking.status === "Pending"
  ).length;

  const confirmedBookings = bookings.filter(
    (booking) => booking.status === "Confirmed"
  ).length;

  const completedBookings = bookings.filter(
    (booking) => booking.status === "Completed"
  ).length;

  return (
    <div className="admin-dashboard">

      {/* Header */}
      <div className="admin-header">
        <div>
          <h1>Admin Dashboard</h1>
          <p>Manage your service booking system</p>
        </div>

        <button onClick={() => navigate("/")}>
          Back to Home
        </button>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">

        <div className="dashboard-card">
          <h3>Total Bookings</h3>
          <h2>{totalBookings}</h2>
        </div>

        <div className="dashboard-card">
          <h3>Pending</h3>
          <h2>{pendingBookings}</h2>
        </div>

        <div className="dashboard-card">
          <h3>Confirmed</h3>
          <h2>{confirmedBookings}</h2>
        </div>

        <div className="dashboard-card">
          <h3>Completed</h3>
          <h2>{completedBookings}</h2>
        </div>

      </div>

      {/* Admin Actions */}
      <div className="admin-actions">

        <button
          onClick={() => navigate("/admin/bookings")}
        >
          Manage Bookings
        </button>

        <button
          onClick={() => navigate("/admin/services")}
        >
          Manage Services
        </button>

      </div>

      {/* Recent Bookings */}
      <div className="recent-bookings">

        <h2>Recent Bookings</h2>

        {bookings.length === 0 ? (
          <p>No bookings available.</p>
        ) : (
          <div className="booking-list">

            {bookings
              .slice(-5)
              .reverse()
              .map((booking) => (
                <div
                  className="booking-item"
                  key={booking.id}
                >

                  <div>
                    <h3>{booking.serviceName}</h3>

                    <p>
                      Customer: {booking.customerName}
                    </p>

                    <p>
                      Date: {booking.date}
                    </p>

                    <p>
                      Time: {booking.time}
                    </p>
                  </div>

                  <span
                    className={`status ${booking.status.toLowerCase()}`}
                  >
                    {booking.status}
                  </span>

                </div>
              ))}

          </div>
        )}

      </div>

    </div>
  );
};

export default AdminDashboard;

