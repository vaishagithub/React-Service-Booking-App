
import { useState } from "react";
import "./ManageBooking.css";

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

const ManageBooking = () => {
  // Load bookings directly from localStorage
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const storedBookings = localStorage.getItem("bookings");

    if (storedBookings) {
      return JSON.parse(storedBookings);
    }

    return [];
  });

  // Update booking status
  const updateStatus = (id: number, newStatus: string) => {
    const updatedBookings = bookings.map((booking) =>
      booking.id === id
        ? { ...booking, status: newStatus }
        : booking
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  // Delete booking
  const deleteBooking = (id: number) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) {
      return;
    }

    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    setBookings(updatedBookings);

    localStorage.setItem(
      "bookings",
      JSON.stringify(updatedBookings)
    );
  };

  return (
    <div className="manage-booking-page">

      {/* Page Header */}
      <div className="page-header">
        <h1>Manage Bookings</h1>
        <p>View and manage customer bookings</p>
      </div>

      {/* No Bookings */}
      {bookings.length === 0 ? (
        <div className="no-bookings">
          <h2>No Bookings Found</h2>
          <p>
            There are no customer bookings available.
          </p>
        </div>
      ) : (
        <div className="booking-table-container">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Service</th>
                <th>Customer</th>
                <th>Phone</th>
                <th>Date</th>
                <th>Time</th>
                <th>Address</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {bookings.map((booking) => (
                <tr key={booking.id}>
                  <td>{booking.id}</td>

                  <td>{booking.serviceName}</td>

                  <td>{booking.customerName}</td>

                  <td>{booking.phone}</td>

                  <td>{booking.date}</td>

                  <td>{booking.time}</td>

                  <td>{booking.address}</td>

                  <td>
                    <select
                      value={booking.status}
                      onChange={(e) =>
                        updateStatus(
                          booking.id,
                          e.target.value
                        )
                      }
                    >
                      <option value="Pending">
                        Pending
                      </option>

                      <option value="Confirmed">
                        Confirmed
                      </option>

                      <option value="Completed">
                        Completed
                      </option>

                      <option value="Cancelled">
                        Cancelled
                      </option>
                    </select>
                  </td>

                  <td>
                    <button
                      className="delete-btn"
                      onClick={() =>
                        deleteBooking(booking.id)
                      }
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ManageBooking;

