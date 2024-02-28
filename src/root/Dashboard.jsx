import React from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from "../pages/Welcome";
import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import OurTeam from "../pages/OurTeam";


const Dashboard = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/ourteam" element={<OurTeam />} />
      </Routes>
    </>
  );
};

export default Dashboard;
