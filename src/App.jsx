import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Footer from "./components/Footer"
import ViewBills from "./pages/ViewBills";
import MakePayment from "./pages/MakePayment";
import TransactionHistory from "./pages/TransactionHistory";
import ProfileSettings from "./pages/ProfileSettings";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Register from "./pages/Register";
import BillManagement from "./components/BillManagement";
import Landing from "./components/Landing";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/view-bills" element={<ViewBills />} />
        <Route path="/make-payment" element={<MakePayment />} />
        <Route path="/transaction-history" element={<TransactionHistory />} />
        <Route path="/profile-settings" element={<ProfileSettings />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;
