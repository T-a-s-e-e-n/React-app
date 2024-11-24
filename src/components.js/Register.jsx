import React, { useState } from "react";
import '../Register.css'

const Register = ({ users, setUsers }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault();
  
    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if user already exists
    const userExists = existingUsers.some((user) => user.email === formData.email);
  
    if (userExists) {
      setMessage("Account already exists!");
    } else {
      // Save user to localStorage
      const updatedUsers = [...existingUsers, formData];
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      setMessage("Registration successful! You can now login.");
    }
  };
  

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Register</h2>
      <form onSubmit={handleRegister}>
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
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
