export interface Service {
  id: number;
  name: string;
  category: string;
  description: string;
  price: number;
  duration: string;
  image: string;
}

export interface Booking {
  id: number;
  serviceId: number;
  serviceName: string;
  customerName: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  address: string;
  notes?: string;
  status: "Pending" | "Confirmed" | "Completed" | "Cancelled";
}
