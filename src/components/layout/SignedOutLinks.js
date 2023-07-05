import React from "react";
import { NavLink } from "react-router-dom";
// We can use a functional component not a class component because we won't be using a state
// We want to use conditionals to show logout and signin links

const SignedOutLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/">Sign Up</NavLink>
      </li>
      <li>
        <NavLink to="/">Login</NavLink>
      </li>
    </ul>
  );
};

export default SignedOutLinks;
