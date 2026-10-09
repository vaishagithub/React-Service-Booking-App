import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetails from "./pages/ServiceDetails";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBooking";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import BookingSuccess from "./pages/BookingSuccess";
import AdminDashboard from "./pages/admin/AdminDashboard";
import ManageServices from "./pages/admin/ManageServices";
import ManageBookings from "./pages/admin/ManageBookings";
import ProtectedRoute from "./components/ProtectedRoute";


function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />

        <Route path="/service/:id" element={<ServiceDetails />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/book/:id" element={<Booking />} />
          <Route path="/my-bookings" element={<MyBookings />} />
          <Route path="/booking-success" element={<BookingSuccess />} />
        </Route>

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/profile" element={<Profile />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        <Route path="/admin/services" element={<ManageServices />} />

        <Route path="/admin/bookings" element={<ManageBookings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
