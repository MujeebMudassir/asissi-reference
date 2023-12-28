import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import BookingServices from "./components/BookingServices";
import CareGivers from "./components/CareGivers";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";
const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <Services></Services>
      <BookingServices></BookingServices>
      <CareGivers></CareGivers>
      <Testimonials></Testimonials>
      <Footer></Footer>
      <Footer2></Footer2>
    </>
  );
};

export default App;
