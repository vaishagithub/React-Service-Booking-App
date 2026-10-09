
import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Navbar from "../components/Navbar";

interface LocationState {
  from?: {
    pathname: string;
  };
}

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const locationState = location.state as LocationState | null;

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      alert("Please enter email and password.");
      return;
    }

    // Save login status
   localStorage.setItem("isLoggedIn", "true");
   localStorage.setItem(
     "user",
     JSON.stringify({
       email: email,
     }),
   );

   navigate("/");
    alert("Login successful!");

    // Go back to the page user originally wanted
    const from = locationState?.from?.pathname || "/";

    navigate(from, { replace: true });
  };

  return (
    <>
    <Navbar/>
      <div className="login-page">
        <div className="login-card">
          <h1>Welcome Back</h1>

          <p className="login-subtitle">Login to continue to ServiceHub</p>

          <form onSubmit={handleSubmit}>
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
              <label htmlFor="password">Password</label>

              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>

          <p className="signup-text">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;

