import React from "react";
import { Link } from "react-router-dom";
//We can use a functional component not a class component because we won't be using a state
const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
