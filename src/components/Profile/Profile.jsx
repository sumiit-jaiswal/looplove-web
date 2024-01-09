// Profile.js
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./Profile.scss";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const navigate = useNavigate();
  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div className="profile">
        <div className="profile-container">
          <img src={user.picture} alt={user.name} className="profile-picture" />
          <div className="profile-details">
            <h2>{user.name}</h2>
            <p>{user.email}</p>
            {/* Additional user details */}
            {/* Add more details as needed, such as user address, phone number, etc. */}
          </div>
          <button onClick={() => logout()} className="logout-button">
            Logout
          </button>
        </div>

        <div className="buttons">
          {/* <span>Edit Profile</span> */}
          <span onClick={()=> navigate("/order")}>Track Order</span>
          <span
            onClick={() => (window.location.href = "mailto:Care@looplove.in")}
          >
            Support
            <div>Email: Care@looplove.in</div>
          </span>
        </div>
      </div>
    )
  );
};

export default Profile;
