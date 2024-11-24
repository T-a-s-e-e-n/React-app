import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components.js/Navbar.jsx";
import Login from "./components.js/Login.jsx";
import Register from "./components.js/Register.jsx";

function App() {
  const [users, setUsers] = useState([]);  

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/register" element={<Register users={users} setUsers={setUsers} />} />
        <Route
          path="/"
          element={<h1 style={{ textAlign: "center" }}>Welcome to the Auth Website!</h1>}
        />
      </Routes>
    </Router>
  );
}

export default App;
