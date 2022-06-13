import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

// site: {
//   title: "Earthquake Zen Garden",
//   heroImage:
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Arenal_Volcano_07_2015_CRI_3828.jpg/1920px-Arenal_Volcano_07_2015_CRI_3828.jpg",
//   logoImage: "https://www.realtor.com/realtor-com.png",
// },

const Nav: React.FC = () => {
  return (
    <div className="nav">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          {" "}
          <img
            src="https://www.realtor.com/realtor-com.png"
            alt="logo"
            className="nav-logo"
          />
        </Link>
      </div>
      <h1 className="title">Earthquake Zen Garden</h1>
      <div className="profile-link">
        <Link to="/profile">Profile</Link>
      </div>
    </div>
  );
};

export default Nav;
