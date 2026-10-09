import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";
import Navbar from "../components/Navbar";

const Profile = () => {
  const navigate = useNavigate();

  const [name, setName] = useState(localStorage.getItem("userName") || "");
  const [email, setEmail] = useState(localStorage.getItem("userEmail") || "");
  const [phone, setPhone] = useState(localStorage.getItem("userPhone") || "");

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPhone", phone);

    alert("Profile updated successfully!");
  };

  return (
    <>
    <Navbar/>
      <div className="profile-page">
        <div className="profile-card">
          <h1>My Profile</h1>
          <p>Update your personal information</p>

          <form onSubmit={handleSave}>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Enter your phone number"
                required
              />
            </div>

            <button type="submit">Save Changes</button>
          </form>

          <button className="back-btn" onClick={() => navigate("/")}>
            Back to Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
