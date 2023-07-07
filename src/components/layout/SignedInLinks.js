import React from "react";
import { NavLink } from "react-router-dom";
// We can use a functional component not a class component because we won't be using a state
// We want to use conditionals to show logout and signin links

const SignedInLinks = () => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <NavLink to="/">Log Out</NavLink>
      </li>
      <li>
        <NavLink to="/" className="btn btn-floating pink lighten-1">
          RK
        </NavLink>
      </li>
      {/* <li>
        <NavLink to="/"></NavLink>
      </li> */}
    </ul>
  );
};

export default SignedInLinks;
