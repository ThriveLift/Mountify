import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="mountify__whyUs">
      <h1 className="mountify__whyUs-title suse">Why Mountify</h1>
      <div className="mountify__whyUs-articles">
        <article className="mountify__whyUs-article_content">
          <h2 className="mountify__whyUs-box1_title">100% Satisfaction</h2>
          <p className="mountify__whyUs-box1_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos
            quisquam commodi!
          </p>
        </article>
        <article className="mountify__whyUs-article_content">
          <h2 className="mountify__whyUs-box1_title">Life-Time Guarantee</h2>
          <p className="mountify__whyUs-box1_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto eos
            quisquam commodi!
          </p>
        </article>
      </div>
      <div className="mountify__whyUs--cta">
        <p className="mountify__whyUs--cta-urgency_text">
          Dont Wait - Transform Your Space Today!
        </p>
        <a className="mountify__whyUs--cta-button custom_button" href="">
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default WhyUs;
