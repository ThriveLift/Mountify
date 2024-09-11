import React, { useState } from "react";
import { Navbar, WhyUs, Reviews } from "./components";
import { Header, Services } from "./containers";
import ContactForm from "./constrants/ContactForm";
import TvGraphic from "./constrants/TvGraphic";
import "./styles/App.css";

const App = () => {
  const [isContactFormVisible, setIsContactFormVisible] = useState(false);

  const toggleContactForm = () => {
    setIsContactFormVisible(!isContactFormVisible);
  };

  return (
    <>
      {isContactFormVisible && (
        <ContactForm toggleContactForm={toggleContactForm} />
      )}
      <div className="gradient-bg">
        <Navbar toggleContactForm={toggleContactForm} />
        <Header toggleContactForm={toggleContactForm} />
        <TvGraphic />
      </div>
      <WhyUs />
      <Reviews />
      <Services />
    </>
  );
};

export default App;
