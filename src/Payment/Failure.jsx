// PaymentFailure.jsx
import React from "react";
import "./Failure.scss";
import { useNavigate } from "react-router-dom";

const Failure = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-failure">
      <div className="payment-failure-content">
        <div className="payment-failure-message">
          <h2>Payment Failed</h2>
          <p>Sorry, your payment could not be processed.</p>
          <p>-------------------</p>
          <p>
            pls try again, if your money has been deducted it will be refunded
            within 5-7 working days.
          </p>
          <p>-------------------</p>
          <p>for any queries, Email us on: care@looplove.in</p>
          <p>-------------------</p>
        </div>
        <div className="back-link" onClick={() => navigate("/")}>
          Back to Home
        </div>
      </div>
    </div>
  );
};

export default Failure;
