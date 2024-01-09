import React from "react";
import { useNavigate } from "react-router-dom";

import {
//   FaFacebookF,
//   FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
  const navigate= useNavigate();

  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="small-text">Newsletter</span>
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <div className="text" onClick={()=>navigate(`/Privacy-Policy`)}>
          Will be used in accordance with our Privace Policy
        </div>
        {/* <div className="social-icons">
          <div className="icon">
            <FaInstagram size={14} />
          </div>
          <div className="icon">
            <FaLinkedinIn size={14} />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Newsletter;
