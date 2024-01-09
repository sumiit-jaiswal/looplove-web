import React from 'react';
import './PrivacyPolicy.scss';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy-container">
      <header className="privacy-policy-header">
        <h1>Privacy Policy</h1>
        <p>Last updated: 31 Dec 2023</p>
      </header>

      <main className="privacy-policy-content">
        <section className="introduction">
          <p>Your privacy is important to us. It is LoopLove's policy to respect your privacy regarding any information we may collect from you across our website, https://looplove.in, and other sites we own and operate.</p>
        </section>

        <section className="information-collection">
          <h2>Information Collection and Use</h2>
          <p>We collect several different types of information for various purposes to provide and improve our Service to you.</p>

          <subsection className="types-of-data">
            <h3>Types of Data Collected</h3>
            <ul>
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Address, State, Province, ZIP/Postal code, City</li>
              <li>Cookies and Usage Data</li>
            </ul>
          </subsection>

          <subsection className="use-of-data">
            <h3>Use of Data</h3>
            <ul>
              <li>To provide and maintain our Service</li>
              <li>To notify you about changes to our Service</li>
              <li>To allow you to participate in interactive features of our Service</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our Service</li>
            </ul>
          </subsection>
        </section>

        {/* Add more sections as needed */}

        <section className="contact-us">
          <h2>Contact Us</h2>
          <ul>
            <li>Email: care@looplove.in</li>
            {/* <li>By visiting this page on our website: [ContactPageURL]</li> */}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
