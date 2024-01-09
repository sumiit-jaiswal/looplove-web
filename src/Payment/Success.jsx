// PaymentSuccess.jsx
import { useNavigate } from "react-router-dom";
import React from "react";
import "./Success.scss";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-success">
      <div className="payment-success-content">
        <div className="payment-success-message">
          <h2>Payment Successful!</h2>
          <p>Thank you for your purchase.</p>
        </div>

        <div className="back-link" onClick={() => navigate("/")}>
          Back to Home
        </div>
        <div className="back-link" onClick={() => navigate("/orders")}>
          check status
        </div>
      </div>
    </div>
  );
};

export default Success;
