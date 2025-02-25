import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer  from "./components/Footer";
import Navbar  from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Bills from "./pages/Bills";
import Landing from './components/Landing'
import "./index.css";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Landing/>}/>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/bills" element={<Bills />} />
          <Route path="/dashboard" element={<Dashboard />} />  {/* ✅ Added dashboard route */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
