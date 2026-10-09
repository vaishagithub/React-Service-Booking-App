
import { useState, type FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../data/services";
import { useBooking } from "../context/useBooking";
import "./Booking.css";
import Navbar from "../components/Navbar";

const timeSlots = [
  "09:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "02:00 PM",
  "03:00 PM",
  "04:00 PM",
  "05:00 PM",
  "06:00 PM",
];

const getToday = () => {
  const now = new Date();

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

const Booking = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { addBooking } = useBooking();

  const service = services.find(
    (item) => item.id === Number(id)
  );

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");

  if (!service) {
    return (
      <>
        <Navbar />

        <div className="booking-not-found">
          <h2>Service not found</h2>

          <button
            type="button"
            onClick={() => navigate("/services")}
          >
            Back to Services
          </button>
        </div>
      </>
    );
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // Required field validation
    if (
      !name.trim() ||
      !phone.trim() ||
      !email.trim() ||
      !date ||
      !time ||
      !address.trim()
    ) {
      alert("Please fill all required fields.");
      return;
    }

    // Phone validation
    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    // Email validation
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    // Add booking
    addBooking({
      id: Date.now(),
      serviceId: service.id,
      serviceName: service.name,
      customerName: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      date,
      time,
      address: address.trim(),
      notes: notes.trim(),
      status: "Pending",
    });

    // Go to success page
    navigate("/booking-success");
  };

  return (
    <>
      <Navbar />

      <div className="booking-page">
        <div className="booking-container">

          {/* Back Button */}
          <button
            type="button"
            className="back-button"
            onClick={() =>
              navigate(`/service/${service.id}`)
            }
          >
            ← Back to Service
          </button>

          <div className="booking-layout">

            {/* =========================
                SERVICE SUMMARY
            ========================= */}

            <div className="booking-summary">

              <img
                src={service.image}
                alt={service.name}
              />

              <div className="summary-content">

                <span>{service.category}</span>

                <h2>{service.name}</h2>

                <p>{service.description}</p>

                <div className="summary-info">
                  <strong>
                    ₹{service.price}
                  </strong>

                  <span>
                    ⏱ {service.duration}
                  </span>
                </div>

              </div>
            </div>

            {/* =========================
                BOOKING FORM
            ========================= */}

            <div className="booking-form-container">

              <h1>Book Your Service</h1>

              <p>
                Enter your details to schedule
                the service.
              </p>

              <form onSubmit={handleSubmit}>

                {/* Full Name */}

                <div className="form-group">

                  <label htmlFor="name">
                    Full Name *
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) =>
                      setName(e.target.value)
                    }
                  />

                </div>

                {/* Phone */}

                <div className="form-group">

                  <label htmlFor="phone">
                    Phone Number *
                  </label>

                  <input
                    id="phone"
                    type="tel"
                    inputMode="numeric"
                    placeholder="Enter 10-digit phone number"
                    value={phone}
                    maxLength={10}
                    onChange={(e) =>
                      setPhone(
                        e.target.value.replace(
                          /\D/g,
                          ""
                        )
                      )
                    }
                  />

                </div>

                {/* Email */}

                <div className="form-group">

                  <label htmlFor="email">
                    Email *
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />

                </div>

                {/* Date + Time */}

                <div className="form-row">

                  <div className="form-group">

                    <label htmlFor="date">
                      Select Date *
                    </label>

                    <input
                      id="date"
                      type="date"
                      value={date}
                      min={getToday()}
                      onChange={(e) =>
                        setDate(e.target.value)
                      }
                    />

                  </div>

                  <div className="form-group">

                    <label htmlFor="time">
                      Select Time *
                    </label>

                    <select
                      id="time"
                      value={time}
                      onChange={(e) =>
                        setTime(e.target.value)
                      }
                    >
                      <option value="">
                        Select Time
                      </option>

                      {timeSlots.map((slot) => (
                        <option
                          key={slot}
                          value={slot}
                        >
                          {slot}
                        </option>
                      ))}
                    </select>

                  </div>

                </div>

                {/* =========================
                    SERVICE ADDRESS
                ========================= */}

                <div className="form-group">

                  <label htmlFor="address">
                    Service Address *
                  </label>

                  <textarea
                    id="address"
                    placeholder="Enter your complete address"
                    rows={4}
                    value={address}
                    onChange={(e) =>
                      setAddress(e.target.value)
                    }
                  />

                </div>

                {/* =========================
                    GOOGLE MAP
                ========================= */}

                <div className="map-section">

                  <h3>
                    📍 Service Location
                  </h3>

                  <p>
                    View the service location on
                    Google Maps.
                  </p>

                  <iframe
                    title="Google Map"
                    src={`https://www.google.com/maps?q=${encodeURIComponent(
                      address || "Chennai, Tamil Nadu"
                    )}&output=embed`}
                    width="100%"
                    height="350"
                    style={{
                      border: 0,
                    }}
                    loading="lazy"
                    allowFullScreen
                  ></iframe>

                </div>

                {/* Additional Notes */}

                <div className="form-group">

                  <label htmlFor="notes">
                    Additional Notes
                  </label>

                  <textarea
                    id="notes"
                    placeholder="Any additional instructions?"
                    rows={3}
                    value={notes}
                    onChange={(e) =>
                      setNotes(e.target.value)
                    }
                  />

                </div>

                {/* Confirm Booking */}

                <button
                  type="submit"
                  className="confirm-booking-btn"
                >
                  Confirm Booking
                </button>

              </form>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;

