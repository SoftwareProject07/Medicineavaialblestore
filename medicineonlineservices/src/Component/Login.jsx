import React, {useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import    "./styles/logins.css";   // ✅ Correct CSS import

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSave = () => {
    if (email.trim() === "" || password.trim() === "") {
      prompt("Please enter Email and Password!");
      return;
    }

    const data = {
      Email: email,
      Password: password,
    };

    axios
      .post(
        "http://localhost:5256/api/USERMEDICINE/LOGINUserMedicine",
        data,
        { headers: { "Content-Type": "application/json" } }
      )
      .then((response) => {
        alert("Login Successful!");
        navigate("/header");
      })
      .catch((error) => {
        if (error.response) {
          alert("Error: " + error.response.data.responseMessage);
        } else if (error.request) {
          alert("No response from server!");
        } else {
          alert("Request Error: " + error.message);
        }
      });
  };

  return (
      
        <div className="login-container">

          <div className="login-box">
            <h2 className="login-title">Login</h2>

            <div className="input-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Password</label>
              <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <button className="login-btn" onClick={handleSave}>
              Login
            </button>

            <p className="register-text">
              Don't have an account?
              <Link to="/registeration"> Register </Link>
            </p>

          </div>
        </div>
  );
}
