import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Nav: React.FC = () => {
  return (
    <nav className="nav">
      <section className="logo-container">
        <Link to="/" className="logo-link">
          {" "}
          <img
            src="https://www.realtor.com/realtor-com.png"
            alt="logo"
            className="nav-logo"
          />
        </Link>
      </section>
      <title className="title">Earthquake Zen Garden</title>
      <section className="profile-link">
        <Link to="/profile">Profile</Link>
      </section>
    </nav>
  );
};

export default Nav;