import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

// We can use a functional component not a class component because we won't be using a state
// We want to use conditionals to show logout and signin links

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to="/" className="brand-logo">
          MarioPlan
        </Link>
        <SignedInLinks />
        <SignedOutLinks />
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  console.log(state);
  return {};
};
// export default Navbar;
export default connect(mapStateToProps)(Navbar);
