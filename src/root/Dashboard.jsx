import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";

const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
      </Routes>
    </>
  );
};

export default Dashboard;
