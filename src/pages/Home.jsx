import React from "react";
import NavBar from "../components/NavBar";
import HeaderContent from "../components/HeaderContent";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderContent />
      <Features />
      <Testimonials />
    </div>
  );
};

export default Home;
