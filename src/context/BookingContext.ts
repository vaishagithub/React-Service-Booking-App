import { createContext } from "react";

export interface Booking {
  id: number;
  serviceId: number;
  serviceName: string;
  customerName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  address: string;
  notes:string;
  status: string;
}

interface BookingContextType {
  bookings: Booking[];
  addBooking: (booking: Booking) => void;
}

export const BookingContext = createContext<BookingContextType | undefined>(
  undefined,
);
