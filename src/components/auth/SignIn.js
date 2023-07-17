// We need to store what the user types so we use class based component
// rce

import React, { Component } from "react";
import { connect } from "react-redux";
import { signIn } from "../../store/actions/authActions";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class SignIn extends Component {
  state = {
    email: "",
    password: "",
  };

  handleChange = (event) => {
    console.log(event);
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
    // here we are using the this.props.signIn passed down from
    // the parent using connect and mapDispatchToProps to pass in
    // the state which holds the form submit object
    this.props.signIn(this.state);
  };

  render() {
    // destructuring this.props
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to="/" />;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1 z-depth-0">Login</button>
            <div className="red-text center">
              {authError ? <p>{authError}</p> : null}
            </div>
          </div>
        </form>
      </div>
    );
  }
}

//⭐️⭐️ we are taking properties which are in held by the state
// and mapping them to objects we can use in the local component,
// here we are mapping state.firebase.auth object held by the global state to auth props
// and inside render we destructure it as const { auth } = this.props
// which is same as saying const auth = this.props.auth
// this mapping to props allows you to access state.firebase.auth in the component

const mapStateToProps = (state) => {
  //authError refers to the authError in the authReducer.js
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds)),
    // creds are the credentials we are passing in
  };
};

// export default SignIn;
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
// mapStateToProps would be the normal first argument so
// we are passing a null in stead
