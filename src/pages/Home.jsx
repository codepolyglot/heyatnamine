import React from "react";
import NavBar from "../components/NavBar";
import HeaderContent from "../components/HeaderContent";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <NavBar />
      <HeaderContent />
      <Features />
      <Testimonials />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Home;
