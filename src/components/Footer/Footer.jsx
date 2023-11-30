import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate= useNavigate();
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">Pages</div>
          <span className="text" onClick={()=>navigate(`/`)}>Home</span>
          <span className="text" onClick={()=>navigate(`/about`)}>About</span>
          <span className="text">Privacy Policy</span>
          <span className="text">Terms & Conditions</span>
          <span className="text">Contact Us</span>
        </div>
        
        <div className="col">
          <div className="title">Categories</div>
          <span className="text">Flowers</span>
          <span className="text">Bouquet</span>
          <span className="text">Keychains</span>
          <span className="text">Charms</span>
          <span className="text">Head Accessories</span>
        </div>

        <div className="col">
          <div className="title">Contact</div>
          {/* <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              
            </div>
          </div> */}
          
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: care@looplove.in</div>
          </div>
        </div>
        <div className="col">
          <div className="title">About</div>
          <div className="text read-more"  onClick={()=>navigate(`/about`)}>
            LoopLove is a homegrown business by Sneha Bist, features her
            handcrafted crochet items. Our secure website supports women's
            empowerment and entrepreneurship.
            <div >Read more.....</div>
          </div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <span className="text">© 2023 LoopLove. All rights reserved.</span>
          <img src={Payment} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
