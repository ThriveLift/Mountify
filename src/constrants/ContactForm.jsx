import React from "react";
import { CgClose } from "react-icons/cg";
import "./ContactForm.css";

const ContactForm = ({ toggleContactForm }) => {
  return (
    <div className="mountify__contactForm">
      <h1>Contact</h1>
      <form method="POST" action="/submit-contact-form">
        <input type="text" name="name" placeholder="Name" required /> <br />
        <input type="email" name="email" placeholder="Email" required /> <br />
        <input type="text" name="timeframe" placeholder="TimeFrame" /> <br />
        <textarea name="comment" placeholder="Comment" rows="4"></textarea>{" "}
        <br />
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
