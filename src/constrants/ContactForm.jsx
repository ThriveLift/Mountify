import React, { useEffect, useState } from "react";
import { CgClose } from "react-icons/cg";
import "./ContactForm.css";

const ContactForm = ({ toggleContactForm }) => {
  const [vh, setVh] = useState(window.innerHeight * 0.01);

  useEffect(() => {
    const updateVh = () => {
      setVh(window.innerHeight * 0.01);
    };

    window.addEventListener("resize", updateVh);
    updateVh(); // Initial call

    return () => window.removeEventListener("resize", updateVh);
  }, []);

  return (
    <div className="mountify__contactForm" style={{ height: `${vh * 100}px` }}>
      <h1 className="mountify__contactForm-title">Contact Us</h1>
      <form method="POST" action="/submit-contact-form">
        <input type="text" name="name" placeholder="Name" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="text"
          name="timeframe"
          placeholder="Date or Time (Optional)"
        />
        <textarea name="comment" placeholder="Comment"></textarea>
        <button
          className="custom_button mountify__contactForm-button"
          type="submit"
        >
          Submit
        </button>
      </form>
      <div className="mountify__contactForm-close_button">
        <CgClose
          className="mobileMenu-icon"
          onClick={toggleContactForm}
          fontSize={42}
        />
      </div>
    </div>
  );
};

export default ContactForm;
