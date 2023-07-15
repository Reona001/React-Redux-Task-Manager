import React from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { signOut } from "../../store/actions/authActions";
// We can use a functional component not a class component because we won't be using a state
// We want to use conditionals to show logout and signin links

const SignedInLinks = (props) => {
  return (
    <ul className="right">
      <li>
        <NavLink to="/create">New Project</NavLink>
      </li>
      <li>
        <a onClick={props.signOut}>Logout</a>
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

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
  };
};

// export default SignedInLinks;
export default connect(null, mapDispatchToProps)(SignedInLinks);
