import React from "react";
import { GiWorld } from "react-icons/gi";

const Navbar = () => {
  const PageTitle = "my travel journal.";

  return (
    <nav className="navbar">
      <GiWorld style={{ fontSize: "1.5rem" }} />
      <h1
        className="page-title"
        onClick={() =>
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          })
        }>
        {PageTitle}
      </h1>
    </nav>
  );
};

export default Navbar;
