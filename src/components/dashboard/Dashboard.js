import React, { Component } from "react";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
// import { Redirect } from "react-router-dom/cjs/react-router-dom.min";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { projects, auth } = this.props;
    //destructuring
    // redirect if auth.uid is not in the destructured props
    if (!auth.uid) return <Redirect to="/signin" />;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <ProjectList projects={projects} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Notifications />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    // projects: state.project.projects, // dummy data
    projects: state.firestore.ordered.projects,
    auth: state.firebase.auth,
  };
};
// using compose to use multiple hire order functions
// export default connect(mapStateToProps)(Dashboard);
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "projects" }])
)(Dashboard);

// we are gettting the property of project.projects in the state and attaching it to this component props
// so that we can use it inside this component

// Materialize css notes
// div.col.s12.m6
// 12 columns on large screen and 6 columns for smaller screens
