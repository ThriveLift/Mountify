import React from "react";
import "./WhyUs.css";

const WhyUs = () => {
  return (
    <section className="section__padding section__marginTop">
      <h2>Why Mountify?</h2>
      <p className="mountify__whyUs-text">
        Your home deserves more than just a functional TV mount—it deserves an
        elegant transformation. Imagine your living room with a beautifully
        mounted TV or soundbar, perfectly aligned and seamlessly integrated into
        your space. Our experts bring not only skill but an eye for detail,
        ensuring that every installation is sleek, clean, and tailored to your
        home's aesthetic.
      </p>
      <div className="mountify__whyUs-articles">
        <article className="mountify__whyUs-article_content">
          <h3 className="mountify__whyUs-box1_title">100% Satisfied</h3>
          <p className="mountify__whyUs-box1_text">
            Mounting your TV or soundbar can be daunting—whether it's the fear
            of drilling holes, aligning everything perfectly, or ensuring the
            mount is truly secure. At Mountify, we take away the stress. With
            expert hands, the right tools, and a focus on precision, we
            guarantee smooth, worry-free results. Your satisfaction is our top
            priority, and we don't leave until you're 100% happy with the
            installation.
          </p>
        </article>

        <article className="mountify__whyUs-article_content">
          <h3 className="mountify__whyUs-box1_title">Life-Time Guarantee</h3>
          <p className="mountify__whyUs-box1_text">
            Mounting your TV isn't just about convenience; it's about safety. We
            understand how important it is to keep your young loved ones and
            pets safe from potential hazards. Our installations are built to
            last, and we confidently back our work with a lifetime guarantee.
            With Mountify, you can trust that your TV or soundbar is securely
            and professionally mounted, providing peace of mind for years to
            come.
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
