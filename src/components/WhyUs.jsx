import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="mountify__whyUs">
      <h2>Why Mountify?</h2>

      <p>
        Your home deserves more than just a TV mount — it deserves a
        transformation. We don't just install; we supply and expertly mount TVs
        and soundbars, elevating your space with sleek, seamless designs that
        blend perfectly with your décor.
      </p>

      <div className="mountify__whyUs-articles">
        <article className="mountify__whyUs-article_content">
          <h3 className="mountify__whyUs-box1_title">
            100% Satisfaction Guaranteed
          </h3>
          <p className="mountify__whyUs-box1_text">
            We take the stress out of mounting. No guesswork, no hassle—just
            expert precision and flawless results. We don't leave until you're
            completely satisfied.
          </p>
        </article>

        <article className="mountify__whyUs-article_content">
          <h3 className="mountify__whyUs-box1_title">Lifetime Guarantee</h3>
          <p className="mountify__whyUs-box1_text">
            Our work stands the test of time. Built for safety and durability,
            we offer a lifetime guarantee, so you can enjoy your space without
            worry. Your family's safety, especially for kids and pets, is our
            priority.
          </p>
        </article>
      </div>

      <div className="mountify__whyUs--cta">
        <h3>
          Dont Wait - <br /> Transform Today
        </h3>
        <p>
          Experience the Mountify difference — secure, stylish, and built to
          last. From Wall to WoW!
        </p>
        <h4 className="custom_button" href="" style={{ marginTop: "1rem" }}>
          Contact Us
        </h4>
      </div>
    </section>
  );
};

export default WhyUs;
