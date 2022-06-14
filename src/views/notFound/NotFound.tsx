import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = (): JSX.Element => (
  <main
    style={{
      padding: "1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>404</h1>
    <h3>Sorry but this page hasn't been created yet!</h3>
    <Link to="/">
      <button
        style={{
          backgroundColor: "#363c3c",
          color: "white",
          border: "none",
          padding: "1rem",
          borderRadius: "5px",
          fontSize: "1.2rem",
          cursor: "pointer",
        }}
      >
        Return to Home
      </button>
    </Link>
  </main>
);

export default NotFound;
