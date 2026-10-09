import "./BookingCard.css";

interface BookingCardProps {
  serviceName: string;
  customerName: string;
  phone: string;
  date: string;
  time: string;
  address: string;
  status: string;
}

const BookingCard = ({
  serviceName,
  customerName,
  phone,
  date,
  time,
  address,
  status,
}: BookingCardProps) => {
  return (
    <div className="booking-card">
      <div className="booking-card-header">
        <h3>{serviceName}</h3>
        <span className={`booking-status ${status.toLowerCase()}`}>
          {status}
        </span>
      </div>

      <div className="booking-details">
        <p>
          <strong>Customer:</strong> {customerName}
        </p>

        <p>
          <strong>Phone:</strong> {phone}
        </p>

        <p>
          <strong>Date:</strong> {date}
        </p>

        <p>
          <strong>Time:</strong> {time}
        </p>

        <p>
          <strong>Address:</strong> {address}
        </p>
      </div>
    </div>
  );
};

export default BookingCard;
