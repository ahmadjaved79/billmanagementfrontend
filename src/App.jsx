import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar  from "./components/Navbar";
import Footer  from "./components/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bills from "./pages/Bills";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bills" element={<Bills />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
