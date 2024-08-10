import React from "react";
import "./Terms.scss"; // Import SCSS file

const Terms = () => {
  return (
    <div className="terms-container">
      <h1 className="terms-title">LoopLove - Terms & Conditions</h1>

      <section className="terms-section">
        <h2 className="terms-section-title">Welcome to LoopLove</h2>
        <p>
          We're dedicated to bringing you unique, handcrafted crochet creations
          made with love in India. By accessing or using our website
          looplove.in, you agree to be bound by these Terms & Conditions. Please
          read them carefully before using our services.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">1. Privacy Policy</h2>
        <p>
          Please review our Privacy Policy, which explains how we handle your
          personal information when you visit or shop on our website.
        </p>
      </section>

      <section className="terms-section">
        <h2 className="terms-section-title">2. Electronic Communications</h2>
        <p>
          When you visit LoopLove or send us emails, you're communicating
          electronically. You consent to receiving communications from us
          electronically, via email or website notices. We agree to communicate
          with you in the same manner.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">3. Copyright</h2>
        <p>
          All content on looplove.in, including text, graphics, logos, images,
          and descriptions, is protected by Indian and international copyright
          laws. You may not copy, modify, distribute, or exploit any website
          content without our express written permission.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">4. Trademarks</h2>
        <p>
          The LoopLove name and logo are our trademarks and may not be used
          without our permission. Other trademarks appearing on our website are
          the property of their respective owners.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">5. User License</h2>
        <p>
          We grant you a limited license to access and use our website for
          personal, non-commercial purposes. You may not download or modify any
          content without our permission.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">6. User Accounts</h2>
        <p>
          If you create an account on our website, you're responsible for
          maintaining its confidentiality and password. You agree to accept
          responsibility for all activities that occur under your account.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">7. Product Descriptions</h2>
        <p>
          We strive to be accurate in our product descriptions. However, slight
          variations in color and size may occur due to the handmade nature of
          our products.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">
          8. Disclaimer of Warranties and Limited Liability
        </h2>
        <p>
          LoopLove and its associates provide our website and its content "as
          is" and "as available." We make no representations or warranties of
          any kind, express or implied, regarding the operation or content of
          this website. You agree to use our website at your own risk. We will
          not be liable for any damages arising from your use of our website.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">9. Applicable Law</h2>
        <p>
          These Terms & Conditions are governed by the laws of India. Any
          disputes will be subject to the exclusive jurisdiction of the courts
          of Delhi, India.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">10. Changes to Terms</h2>
        <p>
          We reserve the right to modify these Terms & Conditions at any time.
          Your continued use of our website after changes are made constitutes
          your acceptance of the new terms.
        </p>
      </section>
      <section className="terms-section">
        <h2 className="terms-section-title">Additional Notes:</h2>
        <p>
          You can personalize this document by replacing the placeholder
          information with your own details.
        </p>
        <p>
          Consider adding additional sections specific to your business, such as
          shipping and return policies, payment methods, and intellectual
          property rights.
        </p>
        <p>
          Ensure your website has a prominent link to your Terms & Conditions
          and Privacy Policy.
        </p>
        <p>
          Disclaimer: This is a general template and may not be suitable for all
          businesses. It's recommended to consult with a lawyer to ensure your
          Terms & Conditions are tailored to your specific needs and comply with
          applicable laws.
        </p>
      </section>

      {/* ...Add remaining sections and content here... */}

      <section className="contact-section">
        <h2 className="contact-section-title">11. Contact Us</h2>
        <p>
          If you have any questions about these Terms & Conditions, please
          contact us at <a href="mailto:care@looplove.in">care@looplove.in</a>.
        </p>
      </section>
    </div>
  );
};

export default Terms;
