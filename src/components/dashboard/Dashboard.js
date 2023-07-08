import React, { Component } from "react";

import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";
import { connect } from "react-redux";

class Dashboard extends Component {
  render() {
    console.log(this.props);
    const { projects } = this.props;
    //destructuring
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
  return {
    projects: state.project.projects,
  };
};

export default connect(mapStateToProps)(Dashboard);

// we are gettting the property of project.projects in the state and attaching it to this component props
// so that we can use it inside this component

// Materialize css notes
// div.col.s12.m6
// 12 columns on large screen and 6 columns for smaller screens
