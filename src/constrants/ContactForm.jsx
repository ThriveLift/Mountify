import React from "react";
import { CgClose } from "react-icons/cg";
import "./ContactForm.css";
import contactFormImage from "../assets/contactImage.jpg";
const ContactForm = ({ toggleContactForm }) => {
  const sendMail = (event) => {
    event.preventDefault(); // Prevent form from reloading
    let parms = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    emailjs
      .send("service_x990m3r", "template_ouxrjvw", parms)
      .then(() => alert("Email Sent"))
      .catch((error) => console.error("Error sending email:", error));
  };

  return (
    <div className="mountify__contactForm">
      <img
        className="contactForm-image"
        src={contactFormImage}
        style={{ height: "500px" }}
        alt=""
      />

      <div className="mountify__contactForm--container custom__containerBox">
        <h1 className="mountify__contactForm-title">Contact Us</h1>
        <form method="POST">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required />
          </div>
          <button
            className="mountify__contactForm--button"
            type="submit"
            onClick={sendMail}
          >
            Send
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
    </div>
  );
};

export default ContactForm;
