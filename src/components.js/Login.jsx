import React, { useState } from "react";
import '../Register.css'

const Login = ({ users }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
  
    // Get users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check credentials
    const user = existingUsers.find(
      (user) => user.email === formData.email && user.password === formData.password
    );
  
    if (user) {
      setMessage("Login successful!");
    } else {
      setMessage("Invalid email or password.");
    }
  };
  

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;
