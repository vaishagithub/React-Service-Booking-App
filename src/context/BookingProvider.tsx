import { useState, type ReactNode } from "react";
import { BookingContext, type Booking } from "./BookingContext";

interface BookingProviderProps {
  children: ReactNode;
}

export const BookingProvider = ({ children }: BookingProviderProps) => {
  const [bookings, setBookings] = useState<Booking[]>(() => {
    const savedBookings = localStorage.getItem("bookings");

    return savedBookings ? JSON.parse(savedBookings) : [];
  });

  const addBooking = (booking: Booking) => {
    setBookings((prev) => {
      const updatedBookings = [...prev, booking];

      localStorage.setItem("bookings", JSON.stringify(updatedBookings));

      return updatedBookings;
    });
  };

  return (
    <BookingContext.Provider
      value={{
        bookings,
        addBooking,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
