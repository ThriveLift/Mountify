import React, { useState } from "react";
import { Navbar } from "./components";
import { Header } from "./containers";
import ContactForm from "./constrants/ContactForm";
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
      </div>
    </>
  );
};

export default App;
