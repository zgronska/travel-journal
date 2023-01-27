import React from "react";
import WorldIcon from "../assets/world-icon.svg";

const Navbar = () => {
  const PageTitle = "my travel journal.";

  return (
    <nav className="navbar">
      <img src={WorldIcon} alt="An icon of the Earth" />
      <h1 className="page-title">{PageTitle}</h1>
    </nav>
  );
};

export default Navbar;
