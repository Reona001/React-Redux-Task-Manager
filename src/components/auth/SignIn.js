// We need to store what the user types so we use class based component
// rce

import React, { Component } from "react";

class SignIn extends Component {
  state = {};

  handleChange = (event) => {
    console.log(event);
  };

  handleSubmit = (event) => {
    console.log(event);
  };

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white"></form>
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
        </div>
      </div>
    );
  }
}

export default SignIn;
