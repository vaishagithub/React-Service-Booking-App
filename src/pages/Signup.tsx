
import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import Navbar from "../components/Navbar";

const Signup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (!/^[6-9]\d{9}$/.test(phone)) {
      alert("Enter a valid 10-digit phone number.");
      return;
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      alert("Enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      alert("Password must contain at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Save user information
    const user = {
      name: name.trim(),
      email: email.trim(),
      phone,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Account created successfully!");

    navigate("/login");
  };

  return (
    <>
    <Navbar/>
      <div className="signup-page">
        <div className="signup-card">
          <h1>Create Account</h1>

          <p className="signup-subtitle">Create your ServiceHub account</p>

          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>

              <input
                id="name"
                type="text"
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>

              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>

              <input
                id="phone"
                type="tel"
                inputMode="numeric"
                maxLength={10}
                placeholder="Enter 10-digit phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>

              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="signup-btn">
              Create Account
            </button>
          </form>

          <p className="login-text">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Signup;

