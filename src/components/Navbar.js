import React from "react";
import { GiWorld } from "react-icons/gi";

const Navbar = () => {
  const PageTitle = "my travel journal.";

  return (
    <nav className="navbar">
      <GiWorld />
      <h1 className="page-title">{PageTitle}</h1>
    </nav>
  );
};

export default Navbar;
