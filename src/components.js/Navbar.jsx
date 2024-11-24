import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#007bff", color: "white" }}>
      <Link to="/" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Home</Link>
      <Link to="/login" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Login</Link>
      <Link to="/register" style={{ margin: "10px", color: "white", textDecoration: "none" }}>Register</Link>
    </nav>
  );
};

export default Navbar;
